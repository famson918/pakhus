<?php

namespace App\Http\Resources;

use Exception;
use Illuminate\Http\Resources\Json\JsonResource;

class ProposalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //if no resize image
        try {
            $resized_image = $this->getMedia('*')[0]->getUrl('resized-image');
        } catch (Exception $e) {
            $resized_image="";
        }
        return [
            'id' => $this->id,
            'productName' => $this->productName,
            'itemName' => $this->itemName,
            'contactInformation' => $this->contactInformation,
            'email' => $this->email,
            'others' => $this->others,
            'delegatedId' => $this->delegatedId,
            'productDevelopment' => $this->productDevelopment,
            'developmentProgram' => $this->developmentProgram,
            'productionQuotationSurvey' => $this->productionQuotationSurvey,
            'connectingChineseFactories' => $this->connectingChineseFactories,
            'prototypeProduction' => $this->prototypeProduction,
            'massProduction' => $this->massProduction,
            'importCustomsClearance' => $this->importCustomsClearance,
            'KC_certification' => $this->KC_certification,
            'postEventManagement' => $this->postEventManagement,
            'status' => $this ->status,
            'photos' =>  count($this->getMedia('photos')) > 0 ? $this->getMedia('photos')[0]->getUrl() : null,
            'productManual' =>  count($this->getMedia('productManual')) > 0 ? $this->getMedia('productManual')[0]->getUrl() : null,
            'productDrawings' =>  count($this->getMedia('productDrawings')) > 0 ? $this->getMedia('productDrawings')[0]->getUrl() : null,
            'resized_image' =>  $resized_image,
            'created_at' =>  $this->created_at->toDateString()
        ];
    }
}
