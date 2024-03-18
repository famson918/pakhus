<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProposalResource;
use App\Models\Proposal;
use Illuminate\Http\Request;


class ProposalController extends Controller
{
    public function index()
    {
        $proposals = Proposal::with('media')->get(); // Retrieve all proposals from the database

        return ProposalResource::collection($proposals);
        // $proposals = Proposal::all();

        // return response()->json($proposals);
    }

    public function store(Request $request)
    {
        
   
        $lastProposal = Proposal::where('userId', $request['user_id'])->latest()->first();
        $data = 0;
        $numberString = '';
        
        if ($lastProposal) {
            $numberString = (string)$lastProposal->delegatedId;
            $desiredNumber = substr($numberString, 3);
            $number = (int)$desiredNumber;
            $data = ++$number; // Pre-increment the number and assign it to data
        } else {
            $data++;
        }
        $id = $request['user_id'] + $data;

        // Get the substring from the 0th to the 3rd position (excluding the 0th position)
        $desiredNumber = substr($numberString, 3);
        $proposal = Proposal::create([
            'delegatedId' => $id,
            'userId' => $request['user_id'],
            'productName' => $request['productName'],
            'itemName' => $request['itemName'],
            'email' => $request['email'],
            'contactInformation' => $request['contactInformation'],
            'others' => $request['others'],
            'productDevelopment' => $request['productDevelopment'] === "true" ? 1 : 0,
            'connectingChineseFactories' => $request['connectingChineseFactories'] === "true" ? 1 : 0,
            'developmentProgram' => $request['developmentProgram'] === "true" ? 1 : 0,
            'productionQuotationSurvey' => $request['productionQuotationSurvey'] === "true" ? 1 : 0,
            'prototypeProduction' =>$request['prototypeProduction'] === "true" ? 1 : 0,
            'massProduction' => $request['massProduction'] === "true" ? 1 : 0,
            'importCustomsClearance' => $request['importCustomsClearance'] === "true" ? 1 : 0,
            'KC_certification' => $request['KC_certification'] === "true" ? 1 : 0,
            'postEventManagement' => $request['postEventManagement'] === "true" ? 1 : 0,
            'status' => $request['status']
        ]);
        try {
         if ($request->hasFile('productManual')) {
             $proposal->addMediaFromRequest('productManual')->preservingOriginal()->toMediaCollection('productManual');
         }
         if ($request->hasFile('productDrawings')) {
             $proposal->addMediaFromRequest('productDrawings')->preservingOriginal()->toMediaCollection('productDrawings');
         }
         if ($request->hasFile('photos')) {
             $proposal->addMediaFromRequest('photos')->preservingOriginal()->toMediaCollection('photos');
         }
        } catch (Exception $e) {
            error_log($e->getMessage());
        }
        return response()->json($proposal);
    }

    public function show(Post $post)
    {
        $this->authorize('post-edit');
        if ($post->user_id !== auth()->user()->id && !auth()->user()->hasPermissionTo('post-all')) {
            return response()->json(['status' => 405, 'success' => false, 'message' => 'You can only edit your own posts']);
        } else {
            return new PostResource($post);
        }
    }

    public function updateProposal(Request $request)
    {
        $proposal = Proposal::find($request['id']);
        $proposal -> status = $request['status'];
        $proposal-> save();
        return response()->json($proposal);
    }

    public function destroy(Post $post)
    {
        $this->authorize('post-delete');
        if ($post->user_id !== auth()->id() && !auth()->user()->hasPermissionTo('post-all')) {
            return response()->json(['status' => 405, 'success' => false, 'message' => 'You can only delete your own posts']);
        } else {
            $post->delete();
            return response()->noContent();
        }
    }

    public function getPosts()
    {
        $posts = Post::with('categories')->with('media')->latest()->paginate();
        return PostResource::collection($posts);

    }

    public function getCategoryByPosts($id)
    {
        $posts = Post::whereRelation('categories', 'category_id', '=', $id)->paginate();

        return PostResource::collection($posts);
    }

    public function getPost($id)
    {
        return Post::with('categories', 'user', 'media')->findOrFail($id);
    }
}
