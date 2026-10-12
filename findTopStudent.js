function findTopStudent(data) {
    let best = data[0];
    for (const student of data) {
        if (student.score > best.score) {
            best = student;
        }
    }
    return best.name;

}


module.exports = findTopStudent;