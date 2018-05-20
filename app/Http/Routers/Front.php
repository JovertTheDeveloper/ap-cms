<?php

Route::namespace('Front')->name('front.')->group(function () {
    Route::get('/', 'PagesController@home')->name('home');
    Route::get('/about', 'PagesController@about')->name('about');
    Route::get('/contact', 'PagesController@contact')->name('contact');
    Route::get('/faqs', 'PagesController@faqs')->name('faqs');
    Route::get('/newsletter', 'PagesController@newsletter')->name('newsletter');
    Route::get('/getstarted', 'PagesController@getstarted')->name('getstarted');
    Route::get('/system', 'PagesController@system')->name('system');
    Route::get('/deals', 'PagesController@deals')->name('deals');
    Route::get('/news', 'PagesController@news')->name('news');
    Route::get('/distributors', 'PagesController@distributors')->name('distributors');
    Route::get('/reviews', 'PagesController@reviews')->name('reviews');

    Route::prefix('products')->name('products.')->group(function() {
        Route::get('/', 'ProductsController@index')->name('index');
        Route::get('/{product}', 'ProductsController@show')->name('show');
    });

    Route::prefix('tutorials')->name('tutorials.')->group(function() {
        Route::get('/', 'TutorialsController@index')->name('index');
        Route::get('/{tutorial}', 'TutorialsController@show')->name('show');
    });

    Route::prefix('tutorials/{tutorial}/episodes')->name('episodes.')->group(function() {
        Route::get('/{number}', 'EpisodesController@show')->name('show');
    });
    
    Route::namespace('Auth')->group(function() {
        Route::post('subscribe', 'NewsletterController@subscribe')->name('subscribe');
        
        Route::get('register', 'RegisterController@showRegisterForm')->name('register');
        Route::post('register', 'RegisterController@register');
        Route::get('register/{token}', 'RegisterController@verify')->name('verify');

        Route::get('login', 'LoginController@showLoginForm')->name('login');
        Route::post('login', 'LoginController@login');
        Route::post('logout', 'LoginController@logout')->name('logout');

        Route::prefix('password')->name('password.')->group(function() {
            Route::get('reset', 'ForgotPasswordController@showLinkRequestForm')->name('request');
            Route::post('email', 'ForgotPasswordController@sendResetLinkEmail')->name('email');
            Route::get('reset/{token}', 'ResetPasswordController@showResetForm')->name('reset');
            Route::post('reset/{token}', 'ResetPasswordController@reset');
        });
    });

    Route::middleware('front.auth')->prefix('user')->group(function() {
        Route::get('/', 'DashboardController@index')->name('dashboard');
        Route::prefix('account')->name('account.')->group(function() {
            Route::get('profile', 'AccountController@profile')->name('profile');
            Route::patch('profile', 'AccountController@updateProfile');
            Route::get('password', 'AccountController@password')->name('password');
            Route::patch('password', 'AccountController@updatePassword');
        });
    });
});