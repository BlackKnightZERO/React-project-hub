<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\UserDetail;
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
                ->with('detail')
                ->get();         

        return BirthdayAppResource::collection($data);
    }
}
