<?php

namespace App\Repositories;

use App\Exceptions\BaseException;
use App\Models\ShoppingList;
use App\Repositories\BaseRepository;
use App\Traits\UserTrait;

class ShoppingListRepository extends BaseRepository
{
    use UserTrait;

    protected $model;

    public function __construct(ShoppingList $model)
    {
        $this->model = $model;
        $this->user = $this->getUserAuth();
    }

    public function getAllShoppingListsByUserId()
    {
        $lists = $this->model->where('user_id', $this->user->id)->orderBy('id', 'DESC')->get();
        if (is_null($lists)) {
            throw new BaseException('Shopping Lists not found', 404);
        }
        return $lists;
    }

    public function storeList(array $data)
    {
        $data['user_id'] = $this->user->id;
        return $this->create($data);
    }

    public function updateList(int $id, array $data)
    {
        $item = $this->findOne($id);
        $this->checkUserPermissions($item->user_id);
        $data['user_id'] = $this->user->id;
        return $this->update($item, $data);
    }

    public function destroyList(int $id)
    {
        $item = $this->findOne($id);
        $this->checkUserPermissions($item->user_id);
        return $this->delete($id);
    }
}
