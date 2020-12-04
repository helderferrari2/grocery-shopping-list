<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\LoginFormRequest;
use App\Repositories\AuthRepository;

class AuthController extends BaseController
{
    protected $repository;

    public function __construct(AuthRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginFormRequest $request)
    {
        $response = $this->repository->login($request->all());
        return $this->responseWithToken($response['token'], $response['user']);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        $user = $this->repository->getUserAuth();
        return $this->successResponse($user);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        $response = $this->repository->refreshToken();
        return $this->responseWithToken($response['token'], $response['user']);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $this->repository->logout();
        return $this->successResponse('Logout');
    }
}
