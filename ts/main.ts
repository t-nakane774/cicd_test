export const calculateTotal = (numbers: number[]) => {
  return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(calculateTotal([]));