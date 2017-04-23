<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version()."Test";
});

/*$app->get('/api/v2', function () use ($app) {
    return "HOLA";'namespace' => 'App/Http/Controllers'
});*/

$app->group(['prefix' => 'api/v1'], function($app)
{
    $app->post('test','DirController@test');
	$app->post('show','DirController@show');
	$app->post('add','DirController@add');
	$app->get('play','RemoteController@play');
	$app->get('stop','RemoteController@stop');
	$app->get('forward','RemoteController@forward');
	$app->get('rewind','RemoteController@rewind');
});
