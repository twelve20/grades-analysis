function filterFailed(data, passScore) {
  const result = [];
    for (const student of data) {
        if (student.score < passScore) {
          result.push(student.name);
        } 
    }
    return result; 
}


module.exports = filterFailed;