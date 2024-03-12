<?php

namespace App\Http\Resources;

use Exception;
use Illuminate\Http\Resources\Json\JsonResource;

class GoodResource extends JsonResource
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
            'startPrice' => $this->startPrice,
            'endPrice' => $this->endPrice,
            'minimumOrderQuantity' => $this->minimumOrderQuantity,
            'maximumNumberOfSampleOrders' => $this->maximumNumberOfSampleOrders,
            'sampleOrderDeliveryTime' => $this->sampleOrderDeliveryTime,
            'sampleOrderPrice' => $this->sampleOrderPrice,
            'productDescription' => $this->productDescription,
            'picture1' =>  count($this->getMedia('picture1')) > 0 ? $this->getMedia('picture1')[0]->getUrl() : null,
            'picture2' =>  count($this->getMedia('picture2')) > 0 ? $this->getMedia('picture2')[0]->getUrl() : null,
            'picture3' =>  count($this->getMedia('picture3')) > 0 ? $this->getMedia('picture3')[0]->getUrl() : null,
            'picture4' =>  count($this->getMedia('picture4')) > 0 ? $this->getMedia('picture4')[0]->getUrl() : null,
            'picture5' =>  count($this->getMedia('picture5')) > 0 ? $this->getMedia('picture5')[0]->getUrl() : null,
            'picture6' =>  count($this->getMedia('picture6')) > 0 ? $this->getMedia('picture6')[0]->getUrl() : null,
            'created_at' =>  $this->created_at->toDateString()
        ];
    }
}
