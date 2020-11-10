const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
} = require("./verify-password.js");

//test isNotNull, Null is een lege waarde  
test("Password is not Null", () => {
    const validPassword = !null
    const invalidPassword = null

    expect(isNotNull(validPassword)).toBeTruthy();
    expect(isNotNull(invalidPassword)).toBeFalsy();
});

test("Passwordlength has max 8 characters", () => {
    const validPassword = "12345678"
    const invalidPassword = "123456789"

    expect(hasRightLength(validPassword)).toBeTruthy();
    expect(hasRightLength(invalidPassword)).toBeFalsy();

});

test("Password has at least one UpperCase Character", () => {
    const validPassword = "passwordWithUpperCase"
    const invalidPassword = "passwordalllowercase"

    expect(hasUpperCaseCharacter(validPassword)).toBeTruthy();
    expect(hasUpperCaseCharacter(invalidPassword)).toBeFalsy();

});

test("Password has at least one LowerCase Character", () => {
    const validPassword = "passwordWithLowerCase"
    const invalidPassword = "PASSWORDINUPPERCASE"

    expect(hasLowerCaseCharacter(validPassword)).toBeTruthy();
    expect(hasLowerCaseCharacter(invalidPassword)).toBeFalsy();

});

test("Password has at least one digit", () => {
    const validPassword = "passwordWith1Digit"
    const invalidPassword = "passwordWithoutDigits"

    expect(hasDigit(validPassword)).toBeTruthy();
    expect(hasDigit(invalidPassword)).toBeFalsy();
})

test("verifyPassword", () => {
    expect(verifyPassword("henkie1")).toBeTruthy()
    expect(verifyPassword("1234a")).toBeTruthy()
    expect(verifyPassword("z")).toBeTruthy()
    expect(verifyPassword("henkie1234")).toBeTruthy()
    expect(verifyPassword("HENKhenk")).toBeTruthy()
    expect(verifyPassword("HENK33$")).toBeFalsy()
    expect(verifyPassword("1234")).toBeFalsy()
    expect(verifyPassword("")).toBeFalsy()
})