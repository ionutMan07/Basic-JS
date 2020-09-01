const Car1 = {
  brand: "Dacia",
  model: "Logan",
  year: 2010,
  color: "Blacks"
};

const Car2 = {
  brand: "Ford",
  model: "Focus",
  year: 2018,
  color: "White"
};

const Car3 = {
  brand: "Honda",
  model: "Civic",
  year: 2009,
  color: "White"
};

var carList = [Car1, Car2];

carList.push(Car3);
console.log(Car1.year);
console.log(Car2.brand);

Car1.year = 2012;

console.log(Car1.year);

Car1.mileage = 130000;

var myPropertyName = "price";

Car1[myPropertyName] = 5000;

Car1.myPropertyName = "something";

delete Car1.myPropertyName;

console.log(Car1);

console.log(Car1.year < Car2.year);

var keys = Object.keys(Car1);

console.log(keys);

// oldest model year

var result = carList[0].year;

for (var i = 0; i < carList.length; i++) {
  var car = carList[i];
  if (car.year < result) {
    result = car.year;
  }
  if (car.model === "Civic") {
    console.log("🚗");
  }
}

console.log("Oldest year is: ", result);
