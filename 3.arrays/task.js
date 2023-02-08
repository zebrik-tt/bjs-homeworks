// Задача 1
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length &&
    arr1.every((item, index) => item === arr2[index]);
}


// Задача 2
function getUsersNamesInAgeRange(users, gender) {

  let result = 0;
  // result = users.filter(...).map(...).reduce(...)
  if (users.length > 0 && (gender === "мужской" || gender === "женский")) {

    result = users.filter(
      (item) => item.gender === gender).map(
        (item) => item.age).reduce(
          function (acc, item, index, arr) {
            const amount = acc + item;
            if (index === arr.length - 1) {
              return amount / arr.length;
            }

            return amount;
          }, 0);
  }

  return result;
}