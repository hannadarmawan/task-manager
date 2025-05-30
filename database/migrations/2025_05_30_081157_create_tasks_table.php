<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id'); // kolom user_id
            $table->string('title');                // kolom title
            $table->text('description')->nullable(); // kolom description, nullable jika tidak wajib
            $table->boolean('is_completed')->default(false);
            $table->timestamps();

            // Jika kamu ingin menambahkan foreign key ke users
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};

