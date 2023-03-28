<?php

namespace App\Http\Controllers;

use App\Models\usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $usuario = Usuario::get();
       echo json_encode($usuario);
        
    }   
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $usuario = new Usuario();
        $usuario->name = $request->input('name');
        $usuario->email = $request->input('email');
        $usuario->phone= $request->input('phone');
        $usuario->save();
        echo json_encode($usuario);
        
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\usuario  $usuario_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $usuario_id)
    {
        $usuario = Usuario::find($usuario_id);
        $usuario->name = $request->input('name');
        $usuario->email = $request->input('email');
        $usuario->phone= $request->input('phone');
        $usuario->save();
        echo json_encode($usuario);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\usuario  $usuario_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($usuario_id)
    {
        $usuario = Usuario::find($usuario_id);
        $usuario->delete();

    }
}
