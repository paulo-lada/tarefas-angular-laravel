<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TarefaFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'completed' => $this->faker->boolean(),
        ];
    }
}
