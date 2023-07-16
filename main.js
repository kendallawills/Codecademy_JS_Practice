// Intro

const greetWorld = () => {
    return 'Hello, World!';
}

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