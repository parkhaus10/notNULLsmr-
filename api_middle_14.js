// Pre-req
pm.sendRequest('https://swapi.dev/api/people/', function (err, res) {
    if (!err) {
        // Получает общее количество персонажей
        const count = res.json().count;
        
        // Генерирует случайный ID персонажа
        const randomId = Math.floor(Math.random() * count) + 1;

        // Сохраняет случайный ID в переменной среды
        pm.environment.set('randomCharacterId', randomId);
    }
});

// Post-res
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Проверка наличия имени персонажа в ответе
pm.test("Response contains name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('name');
});