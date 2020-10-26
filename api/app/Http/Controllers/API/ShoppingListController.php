<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\ShoppingListFormRequest;
use App\Repositories\ShoppingListRepository;
use Illuminate\Http\Request;

class ShoppingListController extends BaseController
{
    private $repository;

    public function __construct(ShoppingListRepository $repository)
    {
        $this->repository = $repository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lists = $this->repository->getAllShoppingListsByUserId();
        return $this->successResponse($lists);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ShoppingListFormRequest $request)
    {
        $list = $this->repository->storeList($request->all());
        return $this->successResponse($list);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $list = $this->repository->findOne($id);
        return $this->successResponse($list);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ShoppingListFormRequest $request, $id)
    {
        $list = $this->repository->updateList($id, $request->all());
        return $this->successResponse($list);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->repository->destroyList($id);
        return $this->successResponse('Successfully');
    }
}
