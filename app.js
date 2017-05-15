'use strict';

var firstAndPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerSale: 6.3,
  projectedSales: [['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],[],[]],
  dailyProjection: function(){
    var numCust;
    for (var i=0; i<(firstAndPike.projectedSales[0].length); i++){
      numCust = (Math.floor(Math.random() * (firstAndPike.maxCust - firstAndPike.minCust)) + firstAndPike.minCust);
      firstAndPike.projectedSales[1].push(numCust);
      firstAndPike.projectedSales[2].push(Math.floor((numCust * firstAndPike.avgPerSale)));
    }
    var total = 0;
    for (var j in firstAndPike.projectedSales[2]){
      total += firstAndPike.projectedSales[2][j];
    }
    firstAndPike.projectedSales[2].push(total);
    return firstAndPike.projectedSales;
  }


};
