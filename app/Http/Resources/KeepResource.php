<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\KeepItemResource;
use App\Http\Resources\UserResource;

class KeepResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // $user = $this->whenLoaded('keeps');

        return [
            'id'    => $this->id,
            'title' => $this->title,
            'slug'  => $this->slug,
            'description' => $this->description,
            'keepItems' => KeepItemResource::collection($this->whenLoaded('keepItems')),
            'user'  => new UserResource($this->whenLoaded('user')),
            // 'user'  => UserResource::make($this->whenLoaded('user')),
        ];
    }
}
