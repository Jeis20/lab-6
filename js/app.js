'use strict';

var hoursOpen = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var storeLocations = [];

var patTable = document.getElementById('patTable');

function Bakery(name, minHourlyCustomer, maxHourlyCustomer, avgCookiesPerSale) {
  this.name = name;
  this.minHourlyCustomer = minHourlyCustomer;
  this.maxHourlyCustomer = maxHourlyCustomer;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesPerHour = [];
  this.dailyCookieTotal = 0;
  storeLocations.push(this);

}

Bakery.prototype.calcCustomersPerHour = function() {
  return Math.floor( Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer) + this.minHourlyCustomer);
};

Bakery.prototype.calcCookiesPerHour = function(){
  for(let i = 0; i < 14; i++) {
    this.cookiesPerHour.push((Math.floor(this.calcCustomersPerHour() * this.avgCookiesPerSale)));
  }
};

Bakery.prototype.calcDailyCookieTotal = function(){
  this.calcCookiesPerHour();
  var x = 0;
  for(let i = 0; i < this.cookiesPerHour.length; i++)
    x = x + this.cookiesPerHour[i];
  this.dailyCookieTotal = x;
};

var pike = new Bakery('First and Pike', 23, 65, 6.3);
var seaTac = new Bakery('SeaTac Airport', 3, 24, 3.7);
var seattleCenter = new Bakery('Seattle Center', 11, 38, 2.3);
var capitolHill = new Bakery('Capitol Hill', 20, 38, 2.3);
var alki = new Bakery('Alki', 2, 16, 4.6);

pike.calcDailyCookieTotal();
seaTac.calcDailyCookieTotal();
seattleCenter.calcDailyCookieTotal();
capitolHill.calcDailyCookieTotal();
alki.calcDailyCookieTotal();

// console.table(storeLocations);
// console.log(pike);
// console.log(seaTac);
// console.log(seattleCenter);
// console.log(capitolHill);
// console.log(alki);

Bakery.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(let i = 0; i < this.cookiesPerHour.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.dailyCookieTotal;
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
}

function displaySales() {
  for(var i = 0; i < storeLocations.length; i++){
    storeLocations[i].render();
  }
}

makeHeaderRow();
displaySales();