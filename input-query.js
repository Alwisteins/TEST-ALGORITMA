const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];

const howManyAppears = (arr) => {
  const frequency = {};
  query.forEach((word) => {
    arr.forEach((item) => {
      if (item == word) {
        frequency[item] = (frequency[item] || 0) + 1;
      }
    });
  });

  return query.map((word) => frequency[word] || 0);
};

console.log(howManyAppears(input));
