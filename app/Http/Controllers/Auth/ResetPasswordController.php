<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash; // Add this line for Hash facade



class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    // use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    // protected $redirectTo = RouteServiceProvider::HOME;

    public function resetPassword(Request $request)
    {
        var_dump($request->all());
        $user = auth()->user();

        if (!Hash::check($request->input('currentPassword'), $user->password)) {
            return response()->json(['error' => 'Current password is incorrect'], 400);
        }

        $user->password = bcrypt($request->input('password'));
        $user->save();

        return response()->json(['message' => 'Password updated successfully'], 200);
    }
}
