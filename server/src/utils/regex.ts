/** @format */

/*
    8-20 characters long
    no _ or . at the beginning
    no __ or _. or ._ or .. inside
    no _ or . at the end
*/
export const usernameRegex =
	/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

/* 
    two uppercase letters
    one special case letter
    two digits
    three lowercase letters
    minimum 8 characters long
*/
export const passwordRegex =
	/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
