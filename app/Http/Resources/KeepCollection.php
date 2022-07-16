<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\UserResource;

class KeepCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'    => $this->id,
            'title' => $this->title,
            'slug'  => $this->slug,
            'description' => $this->description,
            'keeps' => $this->keeps,
            // 'user' => UserResource::collection($this->user),
            'user' => $this->user,
        ];
    }
}
