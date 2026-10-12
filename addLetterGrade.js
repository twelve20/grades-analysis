const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 }
];

function addLetterGrade(data) {
    for (const student of data) {
        if (student.score >= 90) {
            student.letter = "A";
        } 
        else if (student.score >= 75) {
            student.letter = "B";
        }    
        else {
            student.letter = "C";
        }
    }
    return data;
}

console.log(addLetterGrade(grades));

module.exports = addLetterGrade;