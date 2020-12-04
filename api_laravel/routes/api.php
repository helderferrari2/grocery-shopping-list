<?php

use Illuminate\Support\Facades\Route;

/*
* ----------------------------------------------------------------------------------------------
* ROUTES WITHOUT AUTHENTICATION
* ----------------------------------------------------------------------------------------------
*/

Route::post('/register', 'API\UserController@store');
Route::post('/auth/login', 'API\AuthController@login');


/*
* ----------------------------------------------------------------------------------------------
* ROUTES WITH AUTHENTICATION
* ----------------------------------------------------------------------------------------------
*/
Route::group(['middleware' => 'jwt.auth'], function () {

    //Auth
    Route::get('/auth/logout', 'API\AuthController@logout');
    Route::get('/auth/refresh-token', 'API\AuthController@refresh');
    Route::get('/auth/me', 'API\AuthController@me');

    //Profile
    Route::resource('/users', 'API\UserController');

    //Shopping List
    Route::resource('/shopping-lists', 'API\ShoppingListController');

    //Shopping List Items
    Route::resource('/shopping-lists-items', 'API\ShoppingListItemsController');
});
