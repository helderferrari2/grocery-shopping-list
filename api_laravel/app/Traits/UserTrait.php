<?php

namespace App\Traits;

use App\Exceptions\BaseException;
use Illuminate\Support\Facades\Auth;

trait UserTrait
{

    /**
     *  Get User Auth
     *
     *
     * @return object
     */
    public function getUserAuth()
    {
        $user = Auth::user();
        if (!$user) {
            throw new BaseException("Unauthenticated", 401);
        }
        return $user;
    }

    /**
     *  Check If Object belong to current user
     *
     *
     * @return void
     */
    public function checkUserPermissions(int $id)
    {
        $user = $this->getUserAuth();
        if ($user->id !== $id) {
            throw new BaseException("Forbidden", 403);
        }
    }
}
