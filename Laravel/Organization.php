<?php

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;

class Organization extends Model

{
    use SoftDeletes;  
    protected $table='users';  
    protected $primaryKey='id';  
    protected $dates=['deleted_at']; 
    protected $fillable = ['active'];

}
?>