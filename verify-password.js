const isNotNull = (password) => password !== null;

const hasRightLength = (password) => password.length <= 8;

const hasUpperCaseCharacter = (password) => password !== password.toLowerCase();

const hasLowerCaseCharacter = (password) => password !== password.toUpperCase();

const hasDigit = (password) => (/[0-9]/.test(password));

const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};

const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ];
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

    return result;
};

module.exports = {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
};