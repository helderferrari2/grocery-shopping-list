<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShoppingListItem extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'completed', 'value', 'quantity', 'shopping_list_id',
    ];
}
