// Подключаем Ajv
const Ajv = require('ajv');
const ajv = new Ajv();

// JSON Schema для ресурса Vehicles
const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "cargo_capacity": { "type": "string" },
        "consumables": { "type": "string" },
        "cost_in_credits": { "type": "string" },
        "created": { "type": "string", "format": "date-time" },
        "crew": { "type": "string" },
        "edited": { "type": "string", "format": "date-time" },
        "length": { "type": "string" },
        "manufacturer": { "type": "string" },
        "max_atmosphering_speed": { "type": "string" },
        "model": { "type": "string" },
        "name": { "type": "string" },
        "passengers": { "type": "string" },
        "pilots": {
            "type": "array",
            "items": { "type": "string", "format": "uri" }
        },
        "films": {
            "type": "array",
            "items": { "type": "string", "format": "uri" }
        },
        "url": { "type": "string", "format": "uri" },
        "vehicle_class": { "type": "string" }
    },
    "required": [
        "cargo_capacity", "consumables", "cost_in_credits", "created",
        "crew", "edited", "length", "manufacturer", "max_atmosphering_speed",
        "model", "name", "passengers", "pilots", "films", "url", "vehicle_class"
    ]
};

// Получаем тело ответа в виде JSON
const responseJson = pm.response.json();

// Компилируем схему
const validate = ajv.compile(schema);

// Выполняем валидацию
const valid = validate(responseJson);

// Проверяем результат валидации
pm.test('Validate Vehicle schema', function () {
    pm.expect(valid).to.be.true;
    if (!valid) {
        console.log(validate.errors);
    }
});