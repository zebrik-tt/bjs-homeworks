// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  // Считает и возвращает минимально, максимальное и среднее значение элементов одного массива
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    min = (min < element) ? min : element;
    max = (max > element) ? max : element;
    sum = sum + element;
  }
  avg = +((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  // Ваш код
  // Считает и возвращает сумму элементов одного массива
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    sum = sum + element;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  // Ваш код
  // Получает сумму элементов вложенных массивов, вычисляет и возвращает максимальную из них
  for (let index = 0; index < arrOfArr.length; index++) {
    const element = arrOfArr[index];
    const sum = func(element);
    max = (max > sum) ? max : sum;
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  // Получает макс. и мин. значения одного массива, расчитывает и возвращает разницу между ними
  let difference;
  let data = getArrayParams(arr);
  let min = data.min;
  let max = data.max;
  difference = Math.abs(max - min);

  return difference;
}
