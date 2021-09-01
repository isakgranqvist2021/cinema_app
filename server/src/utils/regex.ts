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
    Passwords will contain at least 1 upper case letter
    Passwords will contain at least 1 lower case letter
    Passwords will contain at least 1 number or special character
    Passwords will contain at least 8 characters in length
    Password maximum length should not be arbitrarily limited
*/
export const passwordRegex =
	/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
