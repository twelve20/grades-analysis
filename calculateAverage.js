const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
  let sum = 0;
    for (const student of data) {
        sum += student.score;
    }
    return sum / data.length; 
}

console.log(calculateAverage(grades));

module.exports = calculateAverage;