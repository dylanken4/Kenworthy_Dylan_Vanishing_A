//Functions*******************************
function letterGrade(score) {
  if (score > 100) return "Invalid";
  else if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  return "F";
}

//Main**************************************
let Score = 59;
Grade = letterGrade(Score);
console.log(Grade)