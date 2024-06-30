pm.test("Count population on planets with id 1, 3, 5", function () {
    // Получаем данные о планетах из ответа
    var planets = pm.response.json().results;

    // Создаём переменную для хранения суммы населения
    var totalPopulation = 0;

    // Функция для преобразования населения в числовое значение
    function parsePopulation(population) {
        if (population === "unknown" || population === "") {
            return 0;
        }
        return parseInt(population, 10);
    }

    // Проходимся по каждой планете и считаем население для планет с id 1, 3, 5
    planets.forEach(function (planet) {
        var planetId = parseInt(planet.url.split("/").slice(-2, -1)[0]); // Извлекаем id планеты из URL
        if ([1, 3, 5].includes(planetId)) {
            totalPopulation += parsePopulation(planet.population);
        }
    });

    // Логируем общее население для отладки
    console.log("Total population on planets with id 1, 3, 5: " + totalPopulation);
});