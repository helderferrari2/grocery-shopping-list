<?php

namespace App\Repositories;

use App\Exceptions\BaseException;
use App\Traits\UserTrait;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;


class AuthRepository
{
    use UserTrait;

    public function login(array $data)
    {
        if (!$token = JWTAuth::attempt($data)) {
            throw new BaseException('User not found', 404);
        }
        return array('token' => $token, 'user' => Auth::user());
    }

    public function me()
    {
        return $this->getUserAuth();
    }

    public function refreshToken()
    {
        $token = JWTAuth::refresh();
        $user = Auth::user();
        if ($user && $token) {
            return array('token' => $token, 'user' => $user);
        }
        throw new BaseException('Unauthenticated', 401);
    }

    public function logout()
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
            return true;
        } catch (Exception $e) {
            throw new BaseException('Unauthenticated', 401);
        }
    }
}
