<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserDetail>
 */
class UserDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'username' => $this->faker->word().'_'.rand(1,99),
            'date_of_birth' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'address' => $this->faker->city(),
            'bio' => $this->faker->text($maxNbChars = 100),
            'created_at' => now()
        ];
    }
}
