<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DirController extends Controller{

    private function process_path(&$path, &$error) {
        $error = false;
        $path2 = explode("/",$path);
        $stack = [];
        foreach ($path2 as $elem) {
            if ($elem == '..') {
                if (count($stack) == 0) $error = true;
                else array_pop($stack);
            } else if ($elem != '') array_push($stack, $elem);
        }
        $path = env('DEF_PATH');
        foreach ($stack as $elem) {
            $path .= '/'.$elem;
        }
    }

    public function test(Request $request){
        return "TEST";
    }

    public function show(Request $request){
        $path = $request->input('path');
        if ($path == null) return response()->json("error1");

        $this->process_path($path, $error);
        if ($error) return response()->json("error2");

        if (is_dir($path)) $dir = scandir($path);
        else return response()->json("error3");

        /*if ($gestor = opendir($dir)) {
            //echo "Gestor de directorio: $gestor\n";
            //echo "Entradas:\n";

            while (false !== ($entrada = readdir($gestor))) {
                var_dump($entrada);
                //echo "$entrada\n";
            }

            closedir($gestor);
        }*/

        return response()->json($dir);
    }

    public function add(Request $request){
        $path = $request->input('path');
        if ($path == null) return response()->json("error1");

        $this->process_path($path, $error);
        if ($error) return response()->json("error2");

        /*if (is_file("./DirController.php")) {
            response()->json("OK!!!");
        }
        var_dump($path);*/
        file_put_contents(env('OMXD_FILE'), "H $path\n");
        return response()->json("OK");
    }
}
?>
