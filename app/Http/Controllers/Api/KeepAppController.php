<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Keep;
use App\Models\KeepItem;

use App\Http\Resources\KeepCollection;
use App\Http\Resources\KeepResource;

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
                        'title' => 'Notes',
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
}
