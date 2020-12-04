<?php

namespace App\Providers;

use App\Models\ShoppingList;
use App\Models\ShoppingListItem;
use App\Models\User;
use App\Repositories\ShoppingListItemRepository;
use App\Repositories\ShoppingListRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\ServiceProvider;


class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserRepository::class, function () {
            return new UserRepository(new User());
        });

        $this->app->bind(ShoppingListRepository::class, function () {
            return new ShoppingListRepository(new ShoppingList());
        });

        $this->app->bind(ShoppingListItemRepository::class, function () {
            return new ShoppingListItemRepository(new ShoppingListItem(), new ShoppingListRepository(new ShoppingList()));
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
