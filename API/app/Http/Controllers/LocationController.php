<?php

namespace ComerNaRua\Http\Controllers;

use ComerNaRua\Location;
use Illuminate\Http\Request;

use ComerNaRua\Http\Requests;
use Illuminate\Support\Facades\DB;


class LocationController extends Controller
{

    public function index($id)
    {
        return \ComerNaRua\Location::find($id);

    }


    /**
     *
     */
    public function show($lat, $lng, $raio)
    {

        return $locations = DB::table('locations')
        ->select( DB::raw("*, ( 6371 * acos( cos( radians($lat) ) * cos( radians( latitude ) ) * 
        cos( radians( longitude ) - radians($lng) ) + sin( radians($lat) ) * sin( radians( latitude    ) ) ) ) 
        as distancia ") )
        ->havingRaw("distancia < $raio")
        ->get();


    }


    public function store(Request $request)

    {
       return Location::create($request->all());

    }

    public function delete()
    {

    }

    public function update(Request $request,$id)
    {
        return Location::where('id',$id)->update($request->all());

    }


    public function edit()
    {

    }

}
