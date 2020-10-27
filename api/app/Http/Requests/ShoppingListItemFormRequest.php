<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class ShoppingListItemFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $default = ['shopping_list_id' => 'required|integer'];

        $base = [
            'name' => 'required|string|max:255|unique:shopping_list_items',
            'quantity' => 'nullable|integer|between:1,99',
            'completed' => 'nullable|boolean',
            'value' => 'nullable|numeric|between:0,9999.99'
        ];

        $update = [
            'name' => 'nullable|string|max:255',
        ];


        switch ($this->method()) {
            case 'GET':
                return $default;
                break;

            case 'POST':
                return array_merge($default, $base);
                break;

            case 'PUT':
                return array_merge($default, $base, $update);
                break;

            default:
                throw new \InvalidArgumentException('Parameters not found');
                break;
        }
    }

    /**
     * Show errors message
     *
     * @return json
     */
    protected function failedValidation(Validator $validator)
    {
        throw new \InvalidArgumentException($validator->errors());
    }
}
