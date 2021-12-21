(function () {
    var countries = [
        {
            name: "Japan",
            cities: [
                {
                    name: "Tokyo",
                    population: 8637098
                },
                {
                    name: "Osaka",
                    population: 2668586
                },
                {
                    englishName: "Nagoya",
                    population: 2283289
                }
            ]
        },
        {
            name: "Canada",
            cities: [
                {
                    name: "Toronto",
                    population: 2503281
                },
                {
                    name: "Montreal",
                    population: 1620693
                }
            ]
        },
        {
            name: "USA",
            cities: [
                {
                    name: "New York",
                    population: 8336817
                },
                {
                    name: "Los Angeles",
                    population: 3979576
                },
                {
                    englishName: "Chicago",
                    population: 2693976
                }
            ]
        }
    ];

    console.log("Список стран: ")
    console.log(countries);

    function getCountriesWithMaxCityCount(countries) {
        var citiesMaxCount = countries.reduce(function (citiesMaxCount, country) {
            return Math.max(citiesMaxCount, country.cities.length);
        }, 0);

        return countries.filter(function (country) {
            return country.cities.length === citiesMaxCount;
        });
    }

    console.log("Страны с максимальным количеством городов: ")
    console.log(getCountriesWithMaxCityCount(countries));

    function getCountriesWithPopulation(countries) {
        var countriesWithPopulation = {};

        countries.map(function (country) {
            countriesWithPopulation[country.name] = country.cities.reduce(function (populationSum, city) {
                return populationSum + city.population;
            }, 0);
        });

        return countriesWithPopulation;
    }

    console.log("Количество жителей в странах: ")
    console.log(getCountriesWithPopulation(countries));
})();