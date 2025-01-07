var calculateTotal = function (numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
};