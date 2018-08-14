'use strict'

var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
    location: '1st and Pike',
    minHourlyCustomer: 23,
    maxHourlyCustomer: 65,
    avgCookiesPerSale: 6.3,
    custPerHour: [],
    cookiesPerHour: [],
    dailyCookieTotal: 0
};

var seaTac = {
    location: 'SeaTac Airport',
    minHourlyCustomer: 3,
    maxHourlyCustomer: 24,
    avgCookiesPerSale: 1.2,
    custPerHour: [],
    cookiesPerHour: [],
    dailyCookieTotal: 0
};

var seattleCenter = {
    location: 'Seattle Center',
    minHourlyCustomer: 11,
    maxHourlyCustomer: 38,
    avgCookiesPerSale: 3.7,
    custPerHour: [],
    cookiesPerHour: [],
    dailyCookieTotal: 0
};

var capitolHill = {
    location: 'Capitol Hill',
    minHourlyCustomer: 20,
    maxHourlyCustomer: 38,
    avgCookiesPerSale: 2.3,
    custPerHour: [],
    cookiesPerHour: [],
    dailyCookieTotal: 0
};

var alki = {
    location: 'Alki',
    minHourlyCustomer: 2,
    maxHourlyCustomer: 16,
    avgCookiesPerSale: 4.6,
    custPerHour: [],
    cookiesPerHour: [],
    dailyCookieTotal: 0
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;

};

// adding functions for calculating customers/cookies per hour, and daily cookie total

var calcCustomersPerHour = function(custPerHour, minHourlyCustomer, maxHourlyCustomer) {
    for (var i = 0; i < hoursOpen.length; i++){
        custPerHour.push(Math.ceil(randomNum(minHourlyCustomer, maxHourlyCustomer)));
    }
    console.log(randomCustomersPerHour);
    return randomCustomersPerHour;
};

var calcCookiesPerHour = function(cookiesPerHour, custPerHour, avgCookiesPerSale) {
    for (var i = 0; i < hoursOpen.length; i++) {
        cookiesPerHour.push(Math.ceil(custPerHour[i] * avgCookiesPerSale));
    };
    console.log(cookiesPerHour);
    return cookiesPerHour;
};

var calcDailyCookieTotal = function(dailyCookieTotal, cookiesPerHour) {
    for (var i = 0; i < hoursOpen.length; i++) {
        dailyCookieTotal += cookiesPerHour[i];
    }
    console.log(dailyCookieTotal);
    return dailyCookieTotal;
};

// adding renders to objects

pike.render = function () {
    this.custPerHour = calcCustomersPerHour(this.custPerHour, this.minHourlyCustomer, this.maxHourlyCustomer);
    this.cookiesPerHour = calcCookiesPerHour(this.cookiesPerHour, this.custPerHour, this.avgCookiesPerSale);
    this.dailyCookieTotal = calcDailyCookieTotal(this.dailyCookieTotal, this.cookiesPerHour);

    var pikeUlEl = document.getElementById('pike');
        for (var i = o; i < hoursOpen.length; i++) {
            var liEl = document.createElement('li');
                liEl.textContent = hoursOpen[i]; + ': ' + this.cookiesPerHour[i];
                pikeUlEl.appendChild(liEl);
        }
    liEl.textContent = 'Total' + ': ' + this.dailyCookieTotal; pikeUlEl.appendChild(liEl);
};

seaTac.render = function () {
    this.custPerHour = calcCustomersPerHour(this.custPerHour, this.minHourlyCustomer, this.maxHourlyCustomer);
    this.cookiesPerHour = calcCookiesPerHour(this.cookiesPerHour, this.custPerHour, this.avgCookiesPerSale);
    this.dailyCookieTotal = calcDailyCookieTotal(this.dailyCookieTotal, this.cookiesPerHour);

    var seaTacUlEl = document.getElementById('seaTac');
        for (var i = o; i < hoursOpen.length; i++) {
            var liEl = document.createElement('li');
                liEl.textContent = hoursOpen[i]; + ': ' + this.cookiesPerHour[i];
                seaTac.appendChild(liEl);
        };
    liEl.textContent = 'Total' + ': ' + this.dailyCookieTotal; seaTacUlEl.appendChild(liEl);
};

seattleCenter.render = function () {
    this.custPerHour = calcCustomersPerHour(this.custPerHour, this.minHourlyCustomer, this.maxHourlyCustomer);
    this.cookiesPerHour = calcCookiesPerHour(this.cookiesPerHour, this.custPerHour, this.avgCookiesPerSale);
    this.dailyCookieTotal = calcDailyCookieTotal(this.dailyCookieTotal, this.cookiesPerHour);

    var seattleCenterUlEl = document.getElementById('seattleCenter');
        for(var i = 0; i < hoursOpen.length; i++) {
            var liEl = document.createElement('li');
                lieEl.textContent = hoursOpen[i]; + ': ' + this.cookiesPerHour[i];
                seattleCenter.appendChild(liEl);
        };
    liEl.textContent = 'Total' + ': ' + this.dailyCookieTotal; seattleCenterUlEl.appendChild(liEl);
};

capitolHill.render = function () {
    this.custPerHour = calcCustomersPerHour(this.custPerHour, this.minHourlyCustomer, this.maxHourlyCustomer);
    this.cookiesPerHour = calcCookiesPerHour(this.cookiesPerHour, this.custPerHour, this.avgCookiesPerSale);
    this.dailyCookieTotal = calcDailyCookieTotal(this.dailyCookieTotal, this.cookiesPerHour);

    var capitolHillUlEl = document.getElementById('capitolHill');
        for(var i = 0; i < hoursOpen.length; i++) {
            var liEl = document.createElement('li');
                liEl.textContent = hoursOpen[i]; + ': ' + this.cookiesPerHour[i];
                capitolHill.appendChild(liEl);
        };
    liEl.textContent = 'Total' + ': ' + this.dailyCookieTotal; capitolHillUlEl.appendChild(liEl);
};

alki.render = function () {
    this.custPerHour = calcCustomersPerHour(this.custPerHour, this.minHourlyCustomer, this.maxHourlyCustomer);
    this.cookiesPerHour = calcCookiesPerHour(this.cookiesPerHour, this.custPerHour, this.avgCookiesPerSale);
    this.dailyCookieTotal = calcDailyCookieTotal(this.dailyCookieTotal, this.cookiesPerHour);

    var alki = document.getElementById('alki');
        for(var i = 0; i < hoursOpen.length; i++) {
            var liEl = document.createElement('li');
                liEl.textContent = hoursOpen[i]; + ': ' + this.cookiesPerHour[i];
                alki.appendChild(liEl);
        }
    liEl.textContent = 'Total' + ': ' + this.dailyCookieTotal; alkiUlEl.appendChild(liEl);
};

// display on HTML doc
var locations = [pike, seaTac, seattleCenter, capitolHill, alki];
    for (var i = 0; i < locations.length; i++){
        locations[i].render();
    };