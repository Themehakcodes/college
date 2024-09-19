<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/{any}', function () {
    return view('app');  // Or your main Vue blade template
})->where('any', '.*');
