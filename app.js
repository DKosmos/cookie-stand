'use strict';

function CookieStore(location,minCust,maxCust,avgPerSale,tableName) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.tableName = tableName;
  this.projectedSales = [['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'],[],[],[]];
}

CookieStore.prototype.dailyProjection = function() {
  var numCust;
  // random number between minCust and maxCust and place in level 1 of array, then multiply by average cookies per sale and place value in level 2 of array
  for (var i=0; i<(this.projectedSales[0].length - 1); i++){
    numCust = (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    this.projectedSales[1][i] = numCust;
    this.projectedSales[2][i] = (Math.floor((numCust * this.avgPerSale)));
  }
   // calculate total for day
  var total = 0;
  for (var j=0; j<this.projectedSales[1].length;j++){
    total += this.projectedSales[2][j];
  }
   //puts total in last spot of array level 2
  this.projectedSales[2][j] = total;
  // creates a tr for this store and gives it an id equal to the store's tableName attribute
  var container = document.createElement('tr');
  container.setAttribute('id', this.tableName);
  //creates title for row
  this.projectedSales[3][0] = this.location;
  //creates a td for each hour and puts it into array level 3
  var l = 1;
  for (var k=0;k<this.projectedSales[1].length;k++){
    this.projectedSales[3][l] = '<td>'+ this.projectedSales[2][k] + '</td>';
    l++;
  }
  //puts total in
  this.projectedSales[3][l] = '<td>' + this.projectedSales[2][k] + '</td>';
  //joins array level 3 as the html in store table element
  container.innerHTML = this.projectedSales[3].join('');
  var table = document.getElementById('shell');
  table.appendChild(container);
  console.log(this.projectedSales);
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

var storesArray = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];

function makeButtons() {
  var shell = document.getElementById('shell');
  for (var i=0; i<shell.children.length; i++){
    var rowName = storesArray[i].tableName + '.dailyProjection()';
    shell.children[i].setAttribute('onclick', rowName);
  }
}

function updateTable() {
  firstAndPike.updatehourlyheader();
  var table = document.getElementById('shell');
  table.innerHTML = '';
  for (var m in storesArray){
    storesArray[m].dailyProjection();
  }
}

function generateTotalsRow() {
  var totalsRow = ['<td>Totals</td>'];
  var shell = document.getElementById('shell');
  for (var i=0;i<shell.children[0].children.length;i++){
    var hourlyTotal = 0;
    for (var j=0; j<storesArray.length;j++){
      hourlyTotal += parseInt(shell.children[j].children[i].innerHTML);
    }
    hourlyTotal = '<td>' + hourlyTotal + '</td>';
    totalsRow.push(hourlyTotal);
    console.log(hourlyTotal);
  }
  var container = document.createElement('tr');
  container.innerHTML = totalsRow.join('');
  console.log(container);
  document.getElementById('shell').appendChild(container);
  return totalsRow;
}

updateTable();
generateTotalsRow();
