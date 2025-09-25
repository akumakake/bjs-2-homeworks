"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    const root = -b / (2 * a);
    arr.push(root);
    return arr;
  }

  const sqrtD = Math.sqrt(d);
  const root1 = (-b - sqrtD) / (2 * a);
  const root2 = (-b + sqrtD) / (2 * a);
  arr.push(root1, root2);

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  const monthPercent = percent / 100 / 12;
  const loanBody = amount - contribution;
  const monthPayment = loanBody * (monthPercent + monthPercent / (((1 + monthPercent) ** countMonths) - 1));
  const totalAmount = monthPayment * countMonths;

  return number(totalAmount.toFixed(2));
}