<?php
namespace Tests\Feature;

use App\Models\Tarefa;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TarefaControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_lista_tarefas()
    {
        Tarefa::factory()->create(['title' => 'Teste']);

        $response = $this->get('/api/tarefas');

        $response->assertStatus(200);
        $response->assertJsonFragment(['title' => 'Teste']);
    }

    public function test_cria_tarefa()
    {
        $response = $this->post('/api/tarefas', ['title' => 'Nova tarefa']);

        $response->assertStatus(201);
        $this->assertDatabaseHas('tarefas', ['title' => 'Nova tarefa']);
    }
    public function test_atualiza_tarefa()
    {
        $tarefa = Tarefa::factory()->create([
            'title'     => 'Original',
            'completed' => false,
        ]);

        $response = $this->put('/api/tarefas/' . $tarefa->id, [
            'completed' => true,
            'title'     => 'Atualizada',
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'id'        => $tarefa->id,
                'title'     => 'Atualizada',
                'completed' => true,
            ]);

        $this->assertDatabaseHas('tarefas', [
            'id'        => $tarefa->id,
            'title'     => 'Atualizada',
            'completed' => true,
        ]);
    }
    public function test_remove_tarefa()
    {
        $tarefa = Tarefa::factory()->create();

        $response = $this->delete('/api/tarefas/' . $tarefa->id);

        $response->assertStatus(204);
        $this->assertDatabaseMissing('tarefas', ['id' => $tarefa->id]);
    }
}
