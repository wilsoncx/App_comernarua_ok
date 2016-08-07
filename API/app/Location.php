<?php

namespace ComerNaRua;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    //




    protected $fillable = [
        'nome',
        'endereco',
        'cidade',
        'uf',
        'pais',
        'longitude',
        'latitude'
    ];
}
