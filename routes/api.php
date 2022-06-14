<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\BirthdayAppController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/birthday-app/get-birthday', [BirthdayAppController::class, 'getBirthday']);
Route::post('/birthday-app/send-gift', [BirthdayAppController::class, 'sendGift']);
Route::post('/birthday-app/send-gift-to-all', [BirthdayAppController::class, 'sendGiftAll']);
Route::get('/birthday-app/random-birthday-generate', [BirthdayAppController::class, 'randomBirthdayGenerate']);
