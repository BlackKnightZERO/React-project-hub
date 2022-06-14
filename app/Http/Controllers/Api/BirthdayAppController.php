<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\UserDetail;
use App\Models\BirthdayGift;
use App\Http\Resources\BirthdayAppResource;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class BirthdayAppController extends Controller
{
    public function getBirthday(){
        // $data = UserDetail::with('user')
        //         ->whereMonth('date_of_birth', '=', Carbon::now()->format('m'))
        //         ->whereDay('date_of_birth', '=', Carbon::now()->format('d'))
        //         ->get();     
        
        $data = User::whereHas('detail', function (Builder $query) {
                    $query->whereMonth('user_details.date_of_birth', '=', Carbon::now()->format('m'));
                    $query->whereDay('user_details.date_of_birth', '=', Carbon::now()->format('d'));
                })
                ->doesntHave('birthdayGift')
                ->with('detail')
                ->get();         

        return BirthdayAppResource::collection($data);

    }

    public function sendGift(Request $request) {
        $validated = $request->validate([
            'id' => 'required',
        ]);

        $data = BirthdayGift::create([
            'user_id' => $request->input('id'),
            'sent_at' => Carbon::now()->format('Y-m-d')
        ]);

        return response()->json([
            'data' => $data
        ]);

    }

    public function sendGiftAll(Request $request) {
        $validated = $request->validate([
            'id'    => 'array|required',
            'id.*' => 'required'
        ]);
        $emptyArr = [];
        foreach($request->get('id') as $id) {
            $data = BirthdayGift::create([
                'user_id' => $id,
                'sent_at' => Carbon::now()->format('Y-m-d')
            ]);
            array_push($emptyArr, $data);
        }
        return $emptyArr;
    }

}
