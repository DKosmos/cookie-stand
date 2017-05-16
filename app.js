'use strict';

var firstAndPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerSale: 6.3,
  tableName: 'firstAndPike',
  projectedSales: [['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],[],[],[]],
  dailyProjection: function(){
    var numCust;
    // random number between minCust and maxCust
    for (var i=0; i<(firstAndPike.projectedSales[0].length); i++){
      numCust = (Math.floor(Math.random() * (firstAndPike.maxCust - firstAndPike.minCust)) + firstAndPike.minCust);
      firstAndPike.projectedSales[1][i] = numCust;
      firstAndPike.projectedSales[2][i] = (Math.floor((numCust * firstAndPike.avgPerSale)));
    } // calculate total for day
    var total = 0;
    for (var j in firstAndPike.projectedSales[1]){
      total += firstAndPike.projectedSales[2][j];
    }
    j++;
    firstAndPike.projectedSales[2][j] = total; //puts total in last spot of array level 2
    var container = document.getElementById(firstAndPike.tableName);
    //creates a li for each hour and puts it into array level 3
    for (var k in firstAndPike.projectedSales[0]){
      firstAndPike.projectedSales[3][k] = '<li>'+ firstAndPike.projectedSales[0][k] + firstAndPike.projectedSales[2][k] + ' cookies</li>';
    }
    k++;
    //puts total in store table element
    firstAndPike.projectedSales[3][k] = '<li> Total: ' + firstAndPike.projectedSales[2][k] + ' cookies</li>';
    //joins array level 3 as the html in store table element
    container.innerHTML = firstAndPike.projectedSales[3].join('');
    return firstAndPike.projectedSales;
  }


};
