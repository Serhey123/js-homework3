const findBestEmployee = function (employees) {
  const keys = Object.keys(employees);
  let bestEmployeeValue = 0;
  let bestEmployeeName;
  for (const key of keys) {
    if (employees[key] > bestEmployeeValue) {
      bestEmployeeValue = employees[key];
      bestEmployeeName = key;
    }
  }
  return bestEmployeeName;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 15,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
