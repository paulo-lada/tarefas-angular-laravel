<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TarefaController;

Route::get('/tarefas', [TarefaController::class, 'index']);
Route::post('/tarefas', [TarefaController::class, 'store']);
Route::put('/tarefas/{id}', [TarefaController::class, 'update']);
Route::delete('/tarefas/{id}', [TarefaController::class, 'destroy']);
