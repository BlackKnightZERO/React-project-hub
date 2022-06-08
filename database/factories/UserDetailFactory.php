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
        $index = rand(1,5);
        $online = rand(0,1);

        return [
            'user_id'       => User::factory(),
            'username'      => $this->faker->word().'_'.rand(1,999),
            'date_of_birth' => $this->faker->date($format = 'Y-m-d', $max = 'now'),
            'address'       => $this->faker->city(),
            'bio'           => $this->faker->text($maxNbChars = 100),
            'image'         => $index.'.jpg',
            'is_online'     => $online,
            'created_at'    => now()
        ];
    }
}
