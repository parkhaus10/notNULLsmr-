pm.test("Check if diameter is 10465", function () {
    // Получаем тело ответа и парсим его как JSON
    var jsonData = pm.response.json();
    
    // Проверяем, что значение поля diameter равно 10465
    pm.expect(jsonData.diameter).to.eql("10465");
});