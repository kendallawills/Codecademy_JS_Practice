// Intro

const greetWorld = () => {
    return 'Hello, World!';
}
console.log(greetWorld());

// Can I Vote

const canIVote = age => {
    if (age > 17) {
        return true;
    } else {
        return false;
    }
}

console.log(canIVote(19));

// Agree or Disagree

const agreeOrDisagree = (first, second) => {
    if (first === second) {
        return 'You agree!';
    } else {
        return 'You disagree!';
    }
}

console.log(agreeOrDisagree('yep', 'yep'));

// Life Phase

const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age';
    } else if (age < 4) {
        return 'baby';
    } else if (age < 13) {
        return 'child';
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult';
    } else if (age < 141) {
        return 'senior citizen';
    }
}

console.log(lifePhase(5));

// Final Grade

const finalGrade = (homework, midterm, final) => {
    if ((homework < 0 || homework > 100) || (midterm < 0 || midterm > 100) || (final < 0 || final > 100)) {
        return 'You have entered an invalid grade.';
    }
    const average = (homework + midterm + final) / 3;
    if (average < 60) {
        return 'F';
    } else if (average < 70) {
        return 'D';
    } else if (average < 80) {
        return 'C';
    } else if (average < 90) {
        return 'B';
    } else if (average < 100) {
        return 'A';
    }
}

console.log(finalGrade(99, 92, 95));