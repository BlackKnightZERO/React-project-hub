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
    public function getKeepsById($id) {
        return KeepResource::collection(Keep::with(['keepItems', 'user'])->latest()->where('user_id', $id)->get());

    }
}
