<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PermissionController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\ProposalController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\GoodController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Auth\ResetPasswordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\ForgotPasswordController;


Route::post('forget-password', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('forget.password.post');
// Route::post('reset-password', [ResetPasswordController::class, 'reset'])->name('password.reset');

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::apiResource('users', UserController::class);
    Route::apiResource('posts', PostController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('roles', RoleController::class);
    Route::apiResource('proposals', ProposalController::class);
    Route::apiResource('faqs', FaqController::class);
    Route::apiResource('goods', GoodController::class);
    Route::get('get-good/{id}', [GoodController::class, 'getGood']);
    Route::put('/proposals', [ProposalController::class, 'updateProposal']);
    Route::put('/faqs', [FaqController::class, 'updateFaq']);
    Route::post('/goods-update', [GoodController::class, 'updateGood']);
    Route::get('role-list', [RoleController::class, 'getList']);
    Route::get('role-permissions/{id}', [PermissionController::class, 'getRolePermissions']);
    Route::put('/role-permissions', [PermissionController::class, 'updateRolePermissions']);
    Route::apiResource('permissions', PermissionController::class);
    Route::get('category-list', [CategoryController::class, 'getList']);
    Route::get('/user', [ProfileController::class, 'user']);
    Route::put('/user', [ProfileController::class, 'update']);
    Route::post('reset-password', [ResetPasswordController::class, 'resetPassword']);

    Route::get('abilities', function(Request $request) {
        return $request->user()->roles()->with('permissions')
            ->get()
            ->pluck('permissions')
            ->flatten()
            ->pluck('name')
            ->unique()
            ->values()
            ->toArray();
    });
});

Route::get('category-list', [CategoryController::class, 'getList']);
Route::get('get-proposals', [ProposalController::class, 'index']);
Route::get('get-good/{id}', [GoodController::class, 'getGood']);
Route::get('get-goods', [GoodController::class, 'index']);
Route::get('get-posts', [PostController::class, 'getPosts']);
Route::get('get-faqs', [FaqController::class, 'index']);
Route::get('get-category-posts/{id}', [PostController::class, 'getCategoryByPosts']);
Route::get('get-post/{id}', [PostController::class, 'getPost']);
