<?php

namespace App\Http\Controllers;

use App\Models\Tarefa;
use Illuminate\Http\Request;

class TarefaController extends Controller
{
    public function index()
    {
        return response()->json(Tarefa::all());
    }

    public function store(Request $request)
    {
        $tarefa = Tarefa::create([
            'title' => $request->input('title'),
            'completed' => false,
        ]);

        return response()->json($tarefa, 201);
    }

    public function update(Request $request, $id)
    {
        $tarefa = Tarefa::findOrFail($id);
        $tarefa->update($request->only(['title', 'completed']));

        return response()->json($tarefa);
    }
    public function destroy($id)
    {
        $tarefa = Tarefa::findOrFail($id);
        $tarefa->delete();

        return response()->json(null, 204);
    }
}
