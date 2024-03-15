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
            'time11' =>  $this->time11,
            'time12' =>  $this->time12,
            'time13' =>  $this->time13,
            'time14' =>  $this->time14,
            'time1' =>  $this->time1,
            'time2' =>  $this->time2,
            'time3' =>  $this->time3,
            'time4' =>  $this->time4,
            'option11' =>  $this->option11,
            'option12' =>  $this->option12,
            'option13' =>  $this->option13,
            'option1' =>  $this->option1,
            'option2' =>  $this->option2,
            'option3' =>  $this->option3,
            'picture1' =>  count($this->getMedia('picture1')) > 0? $this->getMedia('picture1')[0]->getUrl() : null,
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
