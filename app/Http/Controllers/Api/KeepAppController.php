<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Keep;
use App\Models\KeepItem;

use App\Http\Resources\KeepResource;
use Illuminate\Support\Facades\DB;

class KeepAppController extends Controller
{

    public function getPlaceHolderData() {
        $myarray = array( 
                    array(
                        'id' => '-1',
                        'title' => 'Keep',
                        'keepItems' => array(
                                        array('id' => -11, 'title' => 'Eggs', 'status' =>  1),
                                        array('id' => -12, 'title' => 'Onions', 'status' =>  1),
                                        array('id' => -13, 'title' => 'Suger', 'status' =>  0),
                                        array('id' => -14, 'title' => 'Salt', 'status' =>  1),
                    )),
                    array(
                        'id' => '-2',
                        'title' => 'Notes',
                        'keepItems' => array(
                                        array('id' => -15, 'title' => 'Pencil', 'status' =>  1),
                                        array('id' => -16, 'title' => 'Pen', 'status' =>  0),
                                        array('id' => -17, 'title' => 'Paper', 'status' =>  1),
                    )),
                    array(
                        'id' => '-3',
                        'title' => 'Organized',
                        'keepItems' => array(
                                        array('id' => -18, 'title' => 'Learn French cooking', 'status' =>  0),
                                        array('id' => -19, 'title' => 'Meditation', 'status' =>  1),
                                        array('id' => -20, 'title' => 'Call a Friend', 'status' =>  1),
                    )),
        );
        return response()->json(['data' => $myarray]);
    }

    public function getKeepsById($id) {

        return KeepResource::collection(Keep::with(['keepItems', 'user'])->latest()->where('user_id', $id)->get());
    
    }

    public function store(Request $request) {
        $isNewKeep = false;
        $validated = $request->validate([
            'id'        => 'required',
            'user_id'   => 'required',
            'title'     => 'required|unique:keeps,title,'.$request->id,
            'slug'      => 'required|unique:keeps,slug,'.$request->id,
            'keeps.*.id'    => 'required',
            'keeps.*.title' => 'required',
            'keeps.*.slug'  => 'required',
        ]);
        DB::beginTransaction();
        try{
            if(is_string($request->id)) {
                $newKeep = Keep::create([
                    'title' => $request->title,
                    'slug' => $request->slug,
                    'user_id' => $request->user_id
                ]);
                $isNewKeep = true;
            } else {
                Keep::where('id', $request->id)
                    ->update([
                        'title' => $request->title,
                        'slug' => $request->slug,
                        'user_id' => $request->user_id
                    ]);
            }
            foreach($request->keeps as $item) {
                if(is_string($item['id'])){
                    $new = KeepItem::create([
                        'keep_id' => $isNewKeep ? $newKeep->id : $request->id,
                        'title' => $item['title'],
                        'slug' => $item['slug'],
                    ]);
                } else {
                    KeepItem::where('id', $item['id'])
                            ->update([
                                'keep_id'   => $request->id,
                                'title'     => $item['title'],
                                'slug'      => $item['slug'],
                                'status'    => $item['status'] == true ? 1 : 0
                            ]);
                }
            }
            if( sizeof($request->deleteIds) > 0 ) {
                KeepItem::destroy($request->deleteIds);
            }
            
            DB::commit();

            return response()->json([
                'status' => 200,
                'msg'  => 'success',
                'data' => KeepResource::collection(Keep::with(['keepItems'])->latest()->where('id', $isNewKeep ? $newKeep->id : $request->id)->get()),
            ]);

        } catch(\Exception $e){
            DB::rollBack();
            return response()->json([
                'status' => 400,
                'error'  => $e->getMessage()
            ]);
        }
    }

    public function destory(Request $request) {

        $validated = $request->validate([
            'id'    => 'required'
        ]);

        $keep = Keep::find($request->id);
        $keep->keepItems()->delete();
        $keep->delete();

        return response()->json([
            'status' => 200,
            'msg'    => 'success',
        ]); 

    }

}
