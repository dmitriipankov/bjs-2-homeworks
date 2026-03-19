function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  avg = Number((sum / arr.length).toFixed(2));

  return {
    min: min,
    max: max,
    avg: avg
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce(function(currentSum, currentNumber) {
    return currentSum + currentNumber
  }, 0)

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const difference = max - min;

  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference;

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  difference = sumEvenElement - sumOddElement;

  return difference;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2)) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return Number((sumEvenElement / countEvenElement).toFixed(2));
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let arr = arrOfArr[i];
    let functionResult = func(...arr);

    if (functionResult > maxWorkerResult) {
      maxWorkerResult = functionResult;
    }
  }

  return maxWorkerResult;
}