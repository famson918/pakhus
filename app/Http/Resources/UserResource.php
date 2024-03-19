<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'   => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'role_id' => $this->roles,
            'roles' => $this->roles,
            'cellPhone' => $this->cellPhone,
            'companyName' => $this->companyName,
            'position' => $this->position,
            'role' => $this->role,
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
