<?php
 
namespace App\Http\Controllers;
 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
 
class RemoteController extends Controller{
    
    public function play(Request $request){
        file_put_contents(env('OMXD_FILE'), "p\n");
        return response()->json("OK");
    }

    public function stop(Request $request){
        file_put_contents(env('OMXD_FILE'), "P\n");
        return response()->json("OK");
    }

    public function forward(Request $request){
        file_put_contents(env('OMXD_FILE'), "f\n");
        return response()->json("OK");
    }

    public function rewind(Request $request){
        file_put_contents(env('OMXD_FILE'), "r\n");
        return response()->json("OK");
    }
    
}
?>