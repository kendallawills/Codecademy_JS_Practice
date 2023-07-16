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

// Reporting for Duty

const reportingForDuty = (rank, lastName) => {
    return `${rank} ${lastName} reporting for duty!`;
}

console.log(reportingForDuty('Private', 'Fido'));

// Roll the Dice

const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}

console.log(rollTheDice());

// Calculate Weight

const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * 0.378;
        case 'Venus':
            return earthWeight * 0.907;
        case 'Mars':
            return earthWeight * 0.377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * 0.916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
}

console.log(calculateWeight(100, 'Jupiter'));

// Truthy or Falsy

const truthyOrFalsy = (value) => {
    if (value) {
        return true;
    } else {
        return false;
    }
}

console.log(truthyOrFalsy(0));

// Imaginary Friends

const numImaginaryFriends = totalFriends => Math.ceil(totalFriends * 0.25);

console.log(numImaginaryFriends(20));
console.log(`You had ${numImaginaryFriends(10)} imaginary friends.`);

// Silly Sentence

const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;

console.log(sillySentence('excited', 'love', 'functions'));