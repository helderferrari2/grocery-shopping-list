<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\ShoppingListFormRequest;
use App\Http\Requests\ShoppingListItemFormRequest;
use App\Repositories\ShoppingListItemRepository;
use Illuminate\Http\Request;

class ShoppingListItemsController extends BaseController
{
    private $repository;

    public function __construct(ShoppingListItemRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ShoppingListItemFormRequest $request)
    {
        $items = $this->repository->getAllItemsByShoppingListId($request->input('shopping_list_id'));
        return $this->successResponse($items);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ShoppingListItemFormRequest $request)
    {
        $item = $this->repository->storeItem($request->all());
        return $this->successResponse($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ShoppingListItemFormRequest $request, $id)
    {
        $item = $this->repository->updateItem($id, $request->all());
        return $this->successResponse($item);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->repository->destroyItem($id);
        return $this->successResponse('Successfully');
    }
}
