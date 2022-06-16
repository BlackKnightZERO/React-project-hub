<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KeepItem extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function keep() {
        return $this->belongsTo(Keep::class);
    }

}
