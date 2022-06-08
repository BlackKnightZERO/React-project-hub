<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\UserDetail;
use App\Http\Resources\BirthdayAppResource;

use Carbon\Carbon;

class BirthdayAppController extends Controller
{
    public function getBirthday(){
        $data = UserDetail::with('user')
                ->whereMonth('date_of_birth', '=', Carbon::now()->format('m'))
                ->whereDay('date_of_birth', '=', Carbon::now()->format('d'))
                ->get();       

        return BirthdayAppResource::collection($data);
    }
}
