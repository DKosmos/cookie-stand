'use strict';

function CookieStore(location,minCust,maxCust,avgPerSale,tableName) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.tableName = tableName;
  this.projectedSales = [['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],[],[],[]];
}

CookieStore.prototype.dailyProjection = function() {
  var numCust;
  // random number between minCust and maxCust
  for (var i=0; i<(this.projectedSales[0].length); i++){
    numCust = (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    this.projectedSales[1][i] = numCust;
    this.projectedSales[2][i] = (Math.floor((numCust * this.avgPerSale)));
  } // calculate total for day
  var total = 0;
  for (var j in this.projectedSales[1]){
    total += this.projectedSales[2][j];
  }
  j++;
  this.projectedSales[2][j] = total; //puts total in last spot of array level 2
  var container = document.getElementById(this.tableName);
  //creates a li for each hour and puts it into array level 3
  for (var k in this.projectedSales[0]){
    this.projectedSales[3][k] = '<li>'+ this.projectedSales[0][k] + this.projectedSales[2][k] + ' cookies</li>';
  }
  k++;
  //puts total in store table element
  this.projectedSales[3][k] = '<li> Total: ' + this.projectedSales[2][k] + ' cookies</li>';
  //joins array level 3 as the html in store table element
  container.innerHTML = this.projectedSales[3].join('');
  return this.projectedSales;
};

var firstAndPike = new CookieStore('1st and Pike',23,65,6.3,'firstAndPike');
var seaTacAirport = new CookieStore('SeaTac Airport',3,24,1.2,'seaTacAirport');
var seattleCenter = new CookieStore('Seattle Center',11,38,2.3,'seattleCenter');
var capitolHill = new CookieStore('Capitol Hill',20,38,2.3,'capitolHill');
var alki = new CookieStore('Alki',2,16,4.6,'alki');

firstAndPike.dailyProjection();
seaTacAirport.dailyProjection();
seattleCenter.dailyProjection();
capitolHill.dailyProjection();
alki.dailyProjection();
