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
      vaccineBooth.A.sort((a, b) => (a.age % 2) - (b.age % 2) || a.age - b.age);
    } else if (value.age >= 31 && value.age < 40 && value.temperature < 100) {
      vaccineBooth.B.push(value);
      vaccineBooth.B.sort((a, b) => (a.age % 2) - (b.age % 2) || a.age - b.age);
    } else if (value.age >= 41 && value.age < 50 && value.temperature < 100) {
      vaccineBooth.C.push(value);
      vaccineBooth.C.sort((a, b) => (a.age % 2) - (b.age % 2) || a.age - b.age);
    } else if (value.temperature >= 100) {
      vaccineBooth.D.push(value);
      vaccineBooth.D.sort((a, b) => (a.age % 2) - (b.age % 2) || a.age - b.age);
    }
  });
  return vaccineBooth;
}

vaxTrail([
  { name: "Biplap", age: 21, temperature: 98 },
  { name: "Sunil", age: 22, temperature: 98 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Paul", age: 37, temperature: 99 },
  { name: "Nayeem", age: 42, temperature: 98 },
  { name: "Rahul", age: 41, temperature: 98 },
  { name: "Kat", age: 50, temperature: 100 },
  { name: "Sabnaj", age: 51, temperature: 101 },
]);
