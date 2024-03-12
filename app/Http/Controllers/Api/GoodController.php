<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\GoodResource;
use App\Models\Good;

class GoodController extends Controller
{
    //
    public function index()
    {
        $goods = Good::with('media')->get();

        return GoodResource::collection($goods);
    }

    public function store(Request $request)
    {
        var_dump($request->all());
        $good = Good::create([
            'productName' => $request['productName'],
            'startPrice' => $request['startPrice'],
            'endPrice' => $request['endPrice'],
            'minimumOrderQuantity' => $request['minimumOrderQuantity'],
            'maximumNumberOfSampleOrders' => $request['maximumNumberOfSampleOrders'],
            'sampleOrderDeliveryTime' => $request['sampleOrderDeliveryTime'],
            'sampleOrderPrice' => $request['sampleOrderPrice'],
            'productDescription' => $request['productDescription'],
            'time1' => $request['time1'],
            'time2' => $request['time2'],
            'time3' => $request['time3'],
            'time4' => $request['time4'],
            'option1' => $request['option1'],
            'option2' => $request['option2'],
            'option3' => $request['option3'],
        ]);
        try {
            for ($i = 1; $i <= 6; $i++) {
                $fieldName = "picture{$i}";
                
                if ($request->hasFile($fieldName)) {
                    if ($good->hasMedia($fieldName)) {
                        $media = $good->getFirstMedia($fieldName);
                        $media->delete();
                    }
                    
                    $good->addMediaFromRequest($fieldName)
                        ->preservingOriginal()
                        ->toMediaCollection($fieldName);
                }
            }
        } catch (Exception $e) {
            error_log($e->getMessage());
        }
        return response()->json($good);
    }

    public function updateGood(Request $request)
    {
        $good = Good::find($request['id']);
        $good-> productName = $request['productName'];
        $good-> startPrice = $request['startPrice'];
        $good-> endPrice = $request['endPrice'];
        $good-> minimumOrderQuantity = $request['minimumOrderQuantity'];
        $good-> maximumNumberOfSampleOrders = $request['maximumNumberOfSampleOrders'];
        $good-> sampleOrderDeliveryTime = $request['sampleOrderDeliveryTime'];
        $good-> sampleOrderPrice = $request['sampleOrderPrice'];
        $good-> productDescription = $request['productDescription'];
        $good-> time1 = $request['time1'];
        $good-> time2 = $request['time2'];
        $good-> time3 = $request['time3'];
        $good-> option1 = $request['option1'];
        $good-> option2 = $request['option2'];
        $good-> option2 = $request['option3'];

        try {
            for ($i = 1; $i <= 6; $i++) {
                $fieldName = "picture{$i}";
                if ($request->hasFile($fieldName)) {
                    $media = $good->getMedia($fieldName)->first();
                    if ($media) {
                        $media->delete(); 
                    }
                    $good->addMediaFromRequest($fieldName)->preservingOriginal()->toMediaCollection($fieldName);
                }
            }
        } catch (Exception $e) {
            error_log($e->getMessage());
        }

        $good-> save();
        return response()->json($good);
    }

    public function destroy($id)
    {
        $good = Good::find($id);
    
        if (!$good) {
            return response()->json(['message' => 'Item not found'], 404);
        }
    
        $good->delete();
    
        return response()->json($good);
    }

    public function getGood($id)
    {
        $good = Good::with('media')->findOrFail($id);
        return response()->json($good);
    }
}
