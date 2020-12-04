<?php

namespace App\Repositories;

use App\Repositories\BaseRepository;
use App\Traits\UserTrait;

class UserRepository extends BaseRepository
{
    use UserTrait;

    public function storeUser(array $data)
    {
        $data['password'] = bcrypt($data['password']);
        return $this->create($data);
    }

    public function updateUser(int $id, array $data)
    {
        $item = $this->findOne($id);

        $this->checkUserPermissions($item->id);
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }
        return $this->update($item, $data);
    }

    public function destroyUser(int $id)
    {
        $item = $this->findOne($id);
        $this->checkUserPermissions($item->id);
        return $this->delete($id);
    }

    public function showUser(int $id)
    {
        return $this->findOne($id);
    }
}
