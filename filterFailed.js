const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 }
];

function filterFailed(data, passScore) {
  const result = [];
    for (const student of data) {
        if (student.score < passScore) {
          result.push(student.name);
        } 
    }
    return result; 
}

console.log(filterFailed(grades, 60));
console.log(filterFailed(grades, 80));

module.exports = filterFailed;