const calculateAverage = require('./calculateAverage');
const addLetterGrade = require('./addLetterGrade');
const filterFailed = require('./filterFailed');
const findTopStudent = require('./findTopStudent');

const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 }
];

console.log("Средний балл группы:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Должники:", filterFailed(grades, 60));
console.log("Итоговый массив с буквенными оценками:", addLetterGrade(grades));