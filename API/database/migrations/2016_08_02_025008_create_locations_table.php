<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //table locations
 
        Schema::create('locations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->string('categoria');
            $table->string(' descrição');
            $table->decimal('valor', 10,2);
            $table->longText('imagem');
            $table->string('endereco');
            $table->string('cidade');
            $table->string('uf');
            $table->string('pais');
            $table->float('longitude', 10,6);
            $table->float('latitude', 10,6);
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
