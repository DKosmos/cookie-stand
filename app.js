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

var seaTacAirport = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerSale: 1.2,
  tableName: 'seaTacAirport',
  projectedSales: [['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],[],[],[]],
  dailyProjection: function(){
    var numCust;
    // random number between minCust and maxCust
    for (var i=0; i<(seaTacAirport.projectedSales[0].length); i++){
      numCust = (Math.floor(Math.random() * (seaTacAirport.maxCust - seaTacAirport.minCust)) + seaTacAirport.minCust);
      seaTacAirport.projectedSales[1][i] = numCust;
      seaTacAirport.projectedSales[2][i] = (Math.floor((numCust * seaTacAirport.avgPerSale)));
    } // calculate total for day
    var total = 0;
    for (var j in seaTacAirport.projectedSales[1]){
      total += seaTacAirport.projectedSales[2][j];
    }
    j++;
    seaTacAirport.projectedSales[2][j] = total; //puts total in last spot of array level 2
    var container = document.getElementById(seaTacAirport.tableName);
    //creates a li for each hour and puts it into array level 3
    for (var k in seaTacAirport.projectedSales[0]){
      seaTacAirport.projectedSales[3][k] = '<li>'+ seaTacAirport.projectedSales[0][k] + seaTacAirport.projectedSales[2][k] + ' cookies</li>';
    }
    k++;
    //puts total in store table element
    seaTacAirport.projectedSales[3][k] = '<li> Total: ' + seaTacAirport.projectedSales[2][k] + ' cookies</li>';
    //joins array level 3 as the html in store table element
    container.innerHTML = seaTacAirport.projectedSales[3].join('');
    return seaTacAirport.projectedSales;
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerSale: 3.7,
  tableName: 'seattleCenter',
  projectedSales: [['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],[],[],[]],
  dailyProjection: function(){
    var numCust;
    // random number between minCust and maxCust
    for (var i=0; i<(seattleCenter.projectedSales[0].length); i++){
      numCust = (Math.floor(Math.random() * (seattleCenter.maxCust - seattleCenter.minCust)) + seattleCenter.minCust);
      seattleCenter.projectedSales[1][i] = numCust;
      seattleCenter.projectedSales[2][i] = (Math.floor((numCust * seattleCenter.avgPerSale)));
    } // calculate total for day
    var total = 0;
    for (var j in seattleCenter.projectedSales[1]){
      total += seattleCenter.projectedSales[2][j];
    }
    j++;
    seattleCenter.projectedSales[2][j] = total; //puts total in last spot of array level 2
    var container = document.getElementById(seattleCenter.tableName);
    //creates a li for each hour and puts it into array level 3
    for (var k in seattleCenter.projectedSales[0]){
      seattleCenter.projectedSales[3][k] = '<li>'+ seattleCenter.projectedSales[0][k] + seattleCenter.projectedSales[2][k] + ' cookies</li>';
    }
    k++;
    //puts total in store table element
    seattleCenter.projectedSales[3][k] = '<li> Total: ' + seattleCenter.projectedSales[2][k] + ' cookies</li>';
    //joins array level 3 as the html in store table element
    container.innerHTML = seattleCenter.projectedSales[3].join('');
    return seattleCenter.projectedSales;
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerSale: 2.3,
  tableName: 'capitolHill',
  projectedSales: [['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],[],[],[]],
  dailyProjection: function(){
    var numCust;
    // random number between minCust and maxCust
    for (var i=0; i<(capitolHill.projectedSales[0].length); i++){
      numCust = (Math.floor(Math.random() * (capitolHill.maxCust - capitolHill.minCust)) + capitolHill.minCust);
      capitolHill.projectedSales[1][i] = numCust;
      capitolHill.projectedSales[2][i] = (Math.floor((numCust * capitolHill.avgPerSale)));
    } // calculate total for day
    var total = 0;
    for (var j in capitolHill.projectedSales[1]){
      total += capitolHill.projectedSales[2][j];
    }
    j++;
    capitolHill.projectedSales[2][j] = total; //puts total in last spot of array level 2
    var container = document.getElementById(capitolHill.tableName);
    //creates a li for each hour and puts it into array level 3
    for (var k in capitolHill.projectedSales[0]){
      capitolHill.projectedSales[3][k] = '<li>'+ capitolHill.projectedSales[0][k] + capitolHill.projectedSales[2][k] + ' cookies</li>';
    }
    k++;
    //puts total in store table element
    capitolHill.projectedSales[3][k] = '<li> Total: ' + capitolHill.projectedSales[2][k] + ' cookies</li>';
    //joins array level 3 as the html in store table element
    container.innerHTML = capitolHill.projectedSales[3].join('');
    return capitolHill.projectedSales;
  }
};

var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgPerSale: 4.6,
  tableName: 'alki',
  projectedSales: [['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],[],[],[]],
  dailyProjection: function(){
    var numCust;
    // random number between minCust and maxCust
    for (var i=0; i<(alki.projectedSales[0].length); i++){
      numCust = (Math.floor(Math.random() * (alki.maxCust - alki.minCust)) + alki.minCust);
      alki.projectedSales[1][i] = numCust;
      alki.projectedSales[2][i] = (Math.floor((numCust * alki.avgPerSale)));
    } // calculate total for day
    var total = 0;
    for (var j in alki.projectedSales[1]){
      total += alki.projectedSales[2][j];
    }
    j++;
    alki.projectedSales[2][j] = total; //puts total in last spot of array level 2
    var container = document.getElementById(alki.tableName);
    //creates a li for each hour and puts it into array level 3
    for (var k in alki.projectedSales[0]){
      alki.projectedSales[3][k] = '<li>'+ alki.projectedSales[0][k] + alki.projectedSales[2][k] + ' cookies</li>';
    }
    k++;
    //puts total in store table element
    alki.projectedSales[3][k] = '<li> Total: ' + alki.projectedSales[2][k] + ' cookies</li>';
    //joins array level 3 as the html in store table element
    container.innerHTML = alki.projectedSales[3].join('');
    return alki.projectedSales;
  }
};
