export function slowCalculation(num) {
// Performance test hiihiin tuld 10000000 loop-iig hiilee
  console.time("Calculation Time");
// console.time gdg ni console deer duusah gej hdn ms hiihiig haruulna

  let result = 0;

  for (let i = 0; i < 100000000; i++) {
    result += num;
  }

  console.timeEnd("Calculation Time");
// duusah hugatsaa hiij baina
  return result;
}
