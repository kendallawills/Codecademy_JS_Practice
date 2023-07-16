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