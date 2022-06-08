<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class BirthdayAppResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        
        // return [
        //     'id'            => $this->id,
        //     'name'          => $this->user->name,
        //     'username'      => $this->username,
        //     'image'         => url('').'/storage/images/user/'.$this->image,
        //     'bio'           => $this->bio,
        //     'date_of_birth' => $this->date_of_birth,
        //     'age'           => Carbon::parse($this->date_of_birth)->diff(Carbon::now())->y,
        //     'is_online'     => ( $this->is_online == 1 ) ? true : false
        // ];

        return [
            'id'            => $this->id,
            'name'          => $this->name,
            'username'      => $this->detail->username,
            'image'         => url('').'/storage/images/user/'.$this->detail->image,
            'bio'           => $this->detail->bio,
            'date_of_birth' => $this->detail->date_of_birth,
            'age'           => Carbon::parse($this->detail->date_of_birth)->diff(Carbon::now())->y,
            'is_online'     => ( $this->detail->is_online == 1 ) ? true : false
        ];
    }
}
