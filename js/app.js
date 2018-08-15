'use strict'

var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var allLocations = [];

var patTable = document.getElementById('patTable');

function Locations(allLocations, minHourlyCustomer, maxHourlyCustomer, avgCookiesPerSale) {
        this.allLocations = allLocations;
        this.minHourlyCustomer = minHourlyCustomer;
        this.maxHourlyCustomer = maxHourlyCustomer;
        this.avgCookiesPerSale = avgCookiesPerSale;
        this.cookiesPerHour = [];
        this.dailyCookieTotal = [];
        Locations.push(this);

        this.calcCustomersPerHour = function() {
            return Math.floor( Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
        };

        this.calcCookiesPerHour = function(){
            for(let i = 0; i < 15; i++) {
                this.cookiesPerHour.push((Math.floor(this.calcCustomersPerHour() * this.cookiesPerHour)))
            }
        };

        this.calcDailyCookieTotal = function(){
            var x = 0;
            for(let i = 0; i < this.cookiesPerHour.length; i++)
                x = x + this.cookiesPerHour[i];
        };
            this.dailyCookieTotal.push(x);
};

    var pike = new Location('First and Pike', 23, 65, 6.3);
    var seaTac = new Location('SeaTac Airport', 3, 24, 3.7);
    var seattleCenter = new Location('Seattle Center', 11, 38, 2.3);
    var capitolHill = new Location('Capitol Hill', 20, 38, 2.3);
    var alki = new Location('Alki', 2, 16, 4.6);

    pike.calcCookiesPerHour();
    seaTac.calcCookiesPerHour();
    seattleCenter.calcCookiesPerHour();
    capitolHill.calcCookiesPerHour();
    alki.calcCookiesPerHour();

    pike.calcDailyCookieTotal();
    seaTac.calcDailyCookieTotal();
    seattleCenter.calcDailyCookieTotal();
    capitolHill.calcDailyCookieTotal();
    alki.calcDailyCookieTotal();
    
    console.log(pike);
    console.log(seaTac);
    console.log(seattleCenter);
    console.log(capitolHill);
    console.log(alki);

    Location.prototype.render = function() {
        var trEl = document.createElement('tr');
        var tdEl = document.createElement('td');
        tdEl.textContent = this.allLocations;
        trEl.appendChild(tdEl);

        for(let i = 0; i < this.cookiesPerHour.length; i++) {
            tdEl = document.createElement('td');
            tdEl.textContent = this.cookiesPerHour[i];
            trEl.appendChild(tdEl);
        }

        tdEl = document.createElement('td');
        tdEl.textContent = this.totalCookies;
        trEl.appendChild(tdEl);

        patTable.appendChild(trEl);
    };

    function makeHeaderRow() {
        var trEl = document.createElement('tr');

        var thEl = document.createElement('th');
        thEl.textContent = 'Location';
        trEl.appendChild(thEl);

        for(let i = 0; i < hoursOpen.length; i++) {
            thEl = document.createElement('th');
            thEl.textContent = hoursOpen[i];
            trEl.appendChild(thEl);
        }

        thEl = document.createElement('th');
        thEl.textContent = 'Total';
        trEl.appendChild(thEl);

        patTable.appendChild(trEl);

        function renderAllSales() {
            for(var i = 0; i < allLocations.length; i++)
                allLocations[i].render();
        }
    };

    makeHeaderRow();
    renderAllSales();
