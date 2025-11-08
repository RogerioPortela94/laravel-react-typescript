<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/sobre', function () {
    return inertia('Sobre');
});

Route::get('/contato', function () {
    return inertia('Contato');
});
