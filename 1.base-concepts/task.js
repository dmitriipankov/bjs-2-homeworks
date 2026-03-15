"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d;
  let x1;
  let x2;

  d = Math.pow(b, 2) - 4 * a * c;

  if (d === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d) ) / (2 * a);
    x2 = (-b - Math.sqrt(d) ) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = (percent / 100) / 12;
  let creditBody = amount - contribution;
  let monthPay = creditBody * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent), countMonths) - 1)));
  let totalAmount = Number((monthPay * countMonths).toFixed(2));

  return totalAmount;
}