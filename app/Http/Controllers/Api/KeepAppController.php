<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\Keep;
use App\Models\KeepItem;

use App\Http\Resources\KeepCollection;

class KeepAppController extends Controller
{
    public function getKeepsById($id) {
        return new KeepCollection(Keep::with('keepItems')->where('id', $id)->get());
    }
}
