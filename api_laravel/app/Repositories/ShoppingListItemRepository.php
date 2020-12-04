<?php

namespace App\Repositories;

use App\Exceptions\BaseException;
use App\Models\ShoppingListItem;
use App\Repositories\BaseRepository;
use App\Traits\UserTrait;

class ShoppingListItemRepository extends BaseRepository
{
    use UserTrait;

    protected $model;

    public function __construct(ShoppingListItem $model, ShoppingListRepository $shoppingListRepository)
    {
        $this->model = $model;
        $this->shoppingListRepository = $shoppingListRepository;
    }


    public function storeItem(array $data)
    {
        $list = $this->shoppingListRepository->findOne($data['shopping_list_id']);
        $this->checkUserPermissions($list->user_id);
        return $this->create($data);
    }

    public function updateItem(int $id, array $data)
    {
        $item = $this->findOne($id);
        $list = $this->shoppingListRepository->findOne($item->shopping_list_id);
        $this->checkUserPermissions($list->user_id);
        return $this->update($item, $data);
    }

    public function destroyItem(int $id)
    {
        $item = $this->findOne($id);
        $list = $this->shoppingListRepository->findOne($item->shopping_list_id);
        $this->checkUserPermissions($list->user_id);
        return $this->delete($id);
    }

    public function getAllItemsByShoppingListId(int $id)
    {
        $items = $this->model->where('shopping_list_id', $id)->orderBy('name', 'ASC')->get();
        if (is_null($items)) {
            throw new BaseException('Shopping Lists Items not found', 404);
        }
        return $items;
    }
}
