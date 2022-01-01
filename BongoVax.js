function vaxTrail(data) {
  const vaccineBooth = {
    A: [],
    B: [],
    C: [],
    D: [],
  };
  data.map((value) => {
    if (value.age >= 20 && value.age < 30 && value.temperature < 100) {
      vaccineBooth.A.push(value);
      vaccineBooth.A.sort((a, b) => a.age%2 - b.age%2 || a.age - b.age);
    } 
    else if (value.age >= 31 && value.age < 40 && value.temperature < 100) {
      vaccineBooth.B.push(value);
      vaccineBooth.B.sort((a, b) => a.age%2 - b.age%2 || a.age - b.age);
    } else if (value.age >= 41 && value.age < 50 && value.temperature < 100) {
      vaccineBooth.C.push(value);
      vaccineBooth.C.sort((a, b) => a.age%2 - b.age%2 || a.age - b.age);
    } else if (value.temperature >= 100) {
      vaccineBooth.D.push(value);
      vaccineBooth.D.sort((a, b) => a.age%2 - b.age%2 || a.age - b.age);
    }
  });
  return vaccineBooth;
}

console.log(
  vaxTrail([
    { name: "SunilA", age: 21, temperature: 98 },
    { name: "SunilA", age: 22, temperature: 98 },
    { name: "BiplapB", age: 36, temperature: 98 },
    { name: "BiplapB", age: 37, temperature: 98 },
    { name: "BiplapC", age: 42, temperature: 98 },
    { name: "BiplapC", age: 41, temperature: 98 },
    { name: "BiplapD", age: 50, temperature: 100 },
    { name: "BiplapD", age: 51, temperature: 100 },
  ])
);
