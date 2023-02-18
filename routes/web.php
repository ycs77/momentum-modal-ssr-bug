<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/edit', function () {
    return Inertia::modal('Edit')
        ->with([
            'contact' => [
                'first_name' => 'Lucas',
                'last_name' => 'Yang',
            ],
        ])
        ->baseRoute('home');
})->name('edit');

Route::put('/update', function (Request $request) {
    $request->validate([
        'first_name' => ['min:2', 'max:10'],
        'last_name' => ['min:2', 'max:10'],
    ]);

    return to_route('home');
})->name('update');
