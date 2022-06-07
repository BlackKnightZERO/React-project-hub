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
        return BirthdayAppResource::collection(UserDetail::whereMonth('date_of_birth', '=', Carbon::now()->format('m'))
                                                ->whereDay('date_of_birth', '=', Carbon::now()->format('d'))
                                                ->get());
    }
}
