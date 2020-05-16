var p = 1;
var n = 5;
var d = 10;
var q = 25;
var h = 50;
var values = [1,5,10,25,50];
var coins = ['pennies', 'nickels', 'dimes', 'quarters', 'half-dollars'];

function countChange(x) {
  var change = [];

  for (i = 0; i <= x; i++) {
    for (j = 0; j <= x / 5; j++) {
      for (k = 0; k <= x / 10; k++) {
        for (l = 0; l <= x / 25; l++) {
          for (m = 0; m <= x / 50; m++) {
            change.push([i * p, j * n, k * d, l * q, m * h]);
          }
        }
      }
    }
  }

  change = change.filter(combo => combo.reduce(function(a, b) {
    return a + b
  }) == x)
  console.log(change);
  console.log(change.length);

  for (y = 0; y < change.length; y++) {
    for (z = 0; z < change[y].length; z++) {
      change[y][z] = change[y][z]/values[z];
      change[y][z] = change[y][z] + ' ' + coins[z];
    }
  }

  var ans = document.getElementById('ans');
  ans.textContent = change.length +' combinations';

  var combo = document.getElementById('combo');
  combo.textContent = '';
  for (i = 0; i < change.length; i++) {
    combo.textContent += change[i] +'\r\n'; // Also had to add CSS to make the new lines work.
  }





}

function getChange() {
  var x = document.getElementById("total").value;
  // x*=100;      // to use dollars instead of cents
  countChange(x);
}
