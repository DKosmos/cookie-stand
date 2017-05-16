'use strict';

function CookieStore(location,minCust,maxCust,avgPerSale,tableName) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.tableName = tableName;
  this.projectedSales = [['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],[],[],[]];
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

CookieStore.prototype.updatehourlyheader = function(){
  var tableHeader = document.getElementById('tableHeader');
  var headerContent = ['<td></td>'];
  for (var i=0;i<this.projectedSales[0].length;i++){
    var j = i + 1;
    headerContent[j] = '<td>' + this.projectedSales[0][i] + '</td>';
  }
  tableHeader.innerHTML = headerContent.join('');
};

var firstAndPike = new CookieStore('1st and Pike',23,65,6.3,'firstAndPike');
var seaTacAirport = new CookieStore('SeaTac Airport',3,24,1.2,'seaTacAirport');
var seattleCenter = new CookieStore('Seattle Center',11,38,2.3,'seattleCenter');
var capitolHill = new CookieStore('Capitol Hill',20,38,2.3,'capitolHill');
var alki = new CookieStore('Alki',2,16,4.6,'alki');

firstAndPike.updatehourlyheader();

// firstAndPike.dailyProjection();
// seaTacAirport.dailyProjection();
// seattleCenter.dailyProjection();
// capitolHill.dailyProjection();
// alki.dailyProjection();
