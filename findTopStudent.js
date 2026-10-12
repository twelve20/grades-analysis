const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function findTopStudent(data) {
    let best = data[0];
    for (const student of data) {
        if (student.score > best.score) {
            best = student;
        }
    }
    return best.name;

}

console.log(findTopStudent(grades));

module.exports = findTopStudent;