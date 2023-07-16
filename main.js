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