<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;


class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::all(); // Retrieve all proposals from the database

        return response()->json($faqs);
    }

    public function store(Request $request)
    {
        var_dump($request->all());
        $faq = Faq::create([
            'question' => $request['question'],
            'answer' => $request['answer'],
        ]);
        return response()->json($faq);
    }

    public function updateFaq(Request $request)
    {
        var_dump($request->all());
        $faq = Faq::find($request['id']);
        $faq -> answer = $request['answer'];
        $faq -> question = $request['question'];
        $faq-> save();
        return response()->json($faq);
    }

    public function destroy($id)
    {
        $faq = Faq::find($id);
    
        if (!$faq) {
            return response()->json(['message' => 'Item not found'], 404);
        }
    
        $faq->delete();
    
        return response()->json($faq);
    }

    public function getPost($id)
    {
        return Post::with('categories', 'user', 'media')->findOrFail($id);
    }
}
