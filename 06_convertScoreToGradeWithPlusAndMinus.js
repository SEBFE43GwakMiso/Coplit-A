//점수를 입력받아 점수에 해당하는 등급을 리턴
//만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴
function plusOrMinus(score) {
    const extra = score % 10;
    if (extra <= 2) {
      return '-';
    } else if (extra >= 8) {
      return '+';
    } else {
      return '';
    }
  }
  
  function convertScoreToGradeWithPlusAndMinus(score) {
    let grade;
    if (score > 100 || score < 0) {
      return 'INVALID SCORE';
    }
    if (score === 100) {
      return 'A+';
    }
    if (score >= 90) {
      grade = 'A';
    } else if (score >= 80) {
      grade = 'B';
    } else if (score >= 70) {
      grade = 'C';
    } else if (score >= 60) {
      grade = 'D';
    } else if (score >= 0) {
      grade = 'F';
    }
  
    if (grade !== 'F') {
      grade = grade + plusOrMinus(score);
    }
    return grade;
  }