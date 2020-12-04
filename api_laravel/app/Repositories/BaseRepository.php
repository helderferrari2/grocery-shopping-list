<?php

namespace App\Repositories;

use App\Exceptions\BaseException;
use Illuminate\Database\Eloquent\Model;

class BaseRepository
{
    // model property on class instances
    protected $model;

    // Constructor to bind model to repo
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    // Get the associated model
    public function getModel()
    {
        return $this->model;
    }

    // Set the associated model
    public function setModel($model)
    {
        $this->model = $model;
        return $this;
    }

    //Get class name
    protected function getClassName()
    {
        $array = explode('\\', get_class($this->model));
        return strtolower(end($array));
    }

    // Eager load database relationships
    public function with($relations)
    {
        return $this->model->with($relations);
    }

    // Get all instances of model
    public function all()
    {
        $model =  $this->model->all();
        if (is_null($model)) {
            throw new BaseException($this->getClassName() . ' not found', 404);
        }
        return $model;
    }

    //Find a resource by id
    public function findOne($id)
    {
        $model =  $this->model->where('id', $id)->first();
        if (is_null($model)) {
            throw new BaseException($this->getClassName() . ' not found', 404);
        }
        return $model;
    }

    // create a new record in the database
    public function create(array $data)
    {
        $filledProperties = $this->model->getFillable();
        $keys = array_keys($data);
        foreach ($keys as $key) {
            if (!in_array($key, $filledProperties)) {
                unset($data[$key]);
            }
        }

        //Persist Data
        try {
            return $this->model->create($data);
        } catch (\Exception $e) {
            throw new BaseException('Internal Error', 500);
        }
    }

    // update record in the database
    public function update(model $model, array $data)
    {

        if (!is_null($model)) {
            $this->model = $model;
            $filledProperties = $this->model->getFillable();
            foreach (array_keys($data) as $key) {
                if (in_array($key, $filledProperties)) {
                    $this->model->$key = $data[$key];
                }
            }

            //Persist Data
            try {
                $this->model->save();
                return $this->model;
            } catch (\Exception $e) {
                throw new BaseException('Internal Error', 500);
            }
        }
    }

    // remove record from the database
    public function delete($id)
    {
        try {
            return $this->model->destroy($id);
        } catch (\Exception $e) {
            throw new BaseException('Internal Error', 500);
        }
    }
}
