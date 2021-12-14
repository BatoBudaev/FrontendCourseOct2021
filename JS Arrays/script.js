(function () {
    var array = [10, 2, 0, 6, 3, 1, 1, 7, 15, 4, 6, 22, 11];

    array.sort(function (e1, e2) {
        return e2 - e1;
    });

    console.log("Отсортированный по убыванию массив: " + array);

    var firstFiveElements = array.slice(0, 5);
    var lastFiveElements = array.slice(-5);

    console.log("Первые 5 элементов: " + firstFiveElements);
    console.log("Последние 5 элементов: " + lastFiveElements);

    var evenNumbersSum = array.reduce(function (sum, current) {
        if (current % 2 === 0) {
            return sum + current;
        }

        return sum;
    })

    console.log("Сумма четных чисел: " + evenNumbersSum)
})();

(function () {
    var array = [];

    for (var i = 1; i <= 100; i++) {
        array.push(i);
    }

    var evenNumbersSquares = array.filter(function (e) {
        return e % 2 === 0;
    }).map(function (e) {
        return Math.pow(e, 2);
    });

    console.info("Список квадратов четных чисел: " + evenNumbersSquares);
})();