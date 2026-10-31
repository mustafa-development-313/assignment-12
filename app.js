         // Alert, Prompt, Console, and Concatenation //   
                 //  ANSWERES OF LINK ONE  //  


                /* ========================================
                          ASSIGNMENT 01
                         WELCOME MESSAGE
                 ========================================
/*🔸 Assignment 1: Welcome Message
Objective:
Use prompt() to ask for the user's name.
Use alert() to display:
"Welcome, [name]!"
Concepts used: prompt, alert, var, concatenation*/

// ANSWERE NO 1;

/*let name = prompt("what is your name?");

alert("Welcome, " + name + "!");


                ========================================*/


                /* ========================================
                          ASSIGNMENT 02
                           AGE MESSAGE
                 ======================================== 
/*🔸 Assignment 2: Age Message
Objective:
Ask the user for their name and age using prompt().
Log this message in the console:
"[name] is [age] years old."
Concepts used: prompt, console.log, var, concatenation*/

// ANSWERE NO 2;
/* let name = prompt("what is your name?");
 let age = prompt("what is your age?")

 console.log(name + " is " + age + " years old.");

                   ========================================*/



                /* ========================================
                         ASSIGNMENT 03
                          FAVORITE COLOR
                 ======================================== 
/*🔸 Assignment 3: Favorite Color
Objective:
Ask the user for their favorite color.
Show an alert like:
"Wow! [color] is a nice color!"
Concepts used: prompt, alert, var, concatenation*/

// ANSWERE NO 3;

/*let color =prompt("what is your favorite color?");
alert("Wow! " + color + " is a nice color!");


                  ========================================*/


                /* ========================================
                         ASSIGNMENT 04
                      Simple Math Sentence
                   ======================================== 

/*🔸 Assignment 4: Simple Math Sentence
Objective:
Ask the user for two numbers using prompt().
Show a sentence in the console like:
"The result of 4 + 5 is 9."
(You can just add the numbers directly — no need to convert types yet.)
Concepts used: prompt, console.log, var, concatenation*/

// ANSWERE NO 4;

/*let num1 =prompt("Enter first number");
let num2 =prompt("Enter second number");
console.log("The result of " + num1 + " + " + num2 + " is " + (Number(num1) + Number(num2)) + ".");

                 ========================================*/


                 /* ========================================
                            ASSIGNMENT 05
                           About Me Summary
                   ======================================== 

/*🔸 Assignment 5: About Me Summary
Objective:
Ask the user for their name, hobby, and country using prompt().
Show an alert like:
"Hi, I'm [name] from [country], and I love [hobby]!"
Concepts used: prompt, alert, var, concatenation*/

// ANSWERE NO 5;

/*let name = prompt("what is your name?");
let hobby = prompt("what is your hobby?");
let country = prompt("what is your country?");
alert("Hi, I'm " + name + " from " + country + ", and I love " + hobby + "!");


                 ========================================*/



         /*==========================================================================
         
                                       section 2
                        Javascript String concatenation Practice:

          ===========================================================================*/


                         /* ========================================
                                         task 01
                                   Create a Full Address
                            ========================================

🔹 Task 1: Create a Full Address
Instruction:
Ask the user to enter their street, city, and country. Concatenate these values into one full
address string and display it like:
"Your full address is: 123 Main St, Springfield, USA"

// answer no 1;

let street = prompt("Enter your street:");
let city = prompt("Enter your city:");
let country = prompt("Enter your country:");

console.log("Your full address is: " + street + " Main ST, " + city + ", " + country);*/


                         /* ========================================
                                         task 02
                                   Make a Custom Username
                            ========================================

🔹 Task 2: Make a Custom Username
Instruction:
Ask the user to input their first name and a favorite number. Concatenate them to create a
simple username like:
"john42"
Display the result with a message: "Your new username is: john42"

// answer no 2;

let firstName = prompt("Enter your first name:");
let favoriteNumber = prompt("Enter your favorite number:");

alert("Your new username is: " + firstName + favoriteNumber);*/


                        /* ========================================
                                         task 03
                                      Email Generator
                            ========================================

🔹 Task 3: Email Generator
Instruction:
Ask the user for their first name and last name. Combine them into an email address format
like:
"firstname.lastname@example.com"
Show the result.

// answer no 3;

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

console.log(firstName+lastName+"@gmail.com");*/


                        /* ========================================
                                         task 04
                                   Combine Favorite Things
                            ========================================

🔹 Task 4: Combine Favorite Things
Instruction:
Ask the user for their favorite color, animal, and food. Create a sentence like:
"Your favorite things are: blue dogs and pizza!"

// answer no 4;

let favoriteColor = prompt("Enter your favorite color:");
let favoriteAnimal = prompt("Enter your favorite animal:");
let favoriteFood = prompt("Enter your favorite food:");

console.log("Your favorite things are: " + favoriteColor + " " + favoriteAnimal + " and " + favoriteFood + "!");*/

                        /* ========================================
                                         task 05
                                    Quote with Author
                            ========================================

🔹 Task 5: Quote with Author

Instruction:
Ask the user for a quote and the author’s name. Display it in the format:
"The only limit is your mind." - John Doe

// answer no 5;

let quote = prompt("Enter a quote:");
let author = prompt("Enter the author's name:");

console.log('"' + quote + '" - ' + author);*/




         /*==========================================================================
         
                                       section 3
                            🧠 JavaScript Beginner Practice:

          ===========================================================================*/


                 /*============================================================
         
                                       part 1
                             ✴️ Arithmetic Operator Tasks

                  ==============================================================*/


                         /* ========================================
                                         question 01
                1. Ask the user to enter two numbers. Show the result of adding them using alert().

                // answer no 1;

                let num1 = prompt("Enter the first number:");
                let num2 = prompt("Enter the second number:");
                let sum = Number(num1) + Number(num2);
                alert("The result of adding " + num1 + " and " + num2 + " is: " + sum);
                            ======================================== */



                            /* ========================================
                                         question 02
 2. Ask for two numbers. Subtract the second number from the first and log the result to the console.

                // answer no 2;

                let num1 = prompt("Enter the first number:");
                let num2 = prompt("Enter the second number:");
                let difference = Number(num1) - Number(num2);
                console.log("The result of subtracting " + num2 + " from " + num1 + " is: " + difference);
                            ========================================*/

                              /* ========================================
                                         question 03
                3. Ask for two numbers. Multiply them and display the answer in an alert.

                // answer no 3;

                let num1 =prompt("enter first number");
                let num2 =prompt("enter second number");
                let product = Number(num1) * Number(num2);
                alert("The result of multiplying " + num1 + " and " + num2 + " is: " + product);
                                ========================================*/


                                /* ========================================
                                          question 04
                 4. Ask the user for two numbers. Divide the first by the second and log the result.


                // answer no 4;

                let num1 = prompt("Enter the first number:");
                let num2 = prompt("Enter the second number:");
                let quotient = Number(num1) / Number(num2);
                console.log("The result of dividing " + num1 + " by " + num2 + " is: " + quotient);
                                  ========================================*/



                                  /* ========================================
                                                   question 05
 5. Ask the user for two numbers and show the remainder when the first is divided by the second (use %).

                // answer no 5;

                let num1 =prompt("Enter the first number:");
                let num2 =prompt("Enter the second number:");
                let remainder = Number(num1) % Number(num2);
                alert("The remainder when " + num1 + " is divided by " + num2 + " is: " + remainder);
                                     ========================================*/


                        
                /*============================================================
         
                                       part 2
                             ✴️ Assignment Operator Tasks

                  ==============================================================*/


                         /* ========================================
                                         question 06
         6. Create a variable with the value 10. Add 5 to it using += and log the new value.

                // answer no 6;

                let number = 10;
                number += 5;
                console.log("The new value after adding 5 is: " + number);
                            ========================================*/

                            /* ========================================
                                         question 07
        7. Create a variable with the value 20. Subtract 4 from it using -= and alert the result.

                // answer no 7;

                let number = 20;
                number -= 4;
                alert("The new value after subtracting 4 is: " + number);
                            ========================================*/


                            /* ========================================
                                         question 08
         8. Create a variable with the value 6. Multiply it by 3 using *= and display the result.

                // answer no 8;

                let number = 6;
                number *= 3;
                console.log("The new value after multiplying by 3 is: " + number);
                            ========================================*/


                            /* ========================================
                                         question 09
              9. Set a variable to 50. Divide it by 2 using /= and log the final value.

                // answer no 9;

                let number = 50;
                number /= 2;
                console.log("The new value after dividing by 2 is: " + number);
                            ========================================*/


                            /* ========================================
                                         question 10
    10. Create a variable, assign it a value from prompt(), then increase it by 10 and show the result.

                // answer no 10;

                let number = Number(prompt("Enter a number:"));
                number += 10;
                alert("The new value after increasing by 10 is: " + number);
                            ========================================*/



                /*============================================================
         
                                       part 3
                             ✴️ Comparison Operator Tasks

                  ==============================================================*/

                        /* ========================================
                                         question 11
11. Ask the user for two numbers. Use > to check if the first number is greater than the second, then log the result (true/false).

                // answer no 11;

                let num1 = Number(prompt("Enter the first number:"));
                let num2 = Number(prompt("Enter the second number:"));
                let isGreater = num1 > num2;
                console.log("Is the first number greater than the second? " + isGreater);
                            ========================================*/

                            /* ========================================
                                         question 12
12. Ask the user for two numbers. Use < to check if the first number is less than the second,then alert the result.

                // answer no 12;

                let num1 = Number(prompt("Enter the first number:"));   
                let num2 = Number(prompt("Enter the second number:"));
                let isLess = num1 < num2;
                alert("Is the first number less than the second? " + isLess);
                            ========================================

                            /* ========================================
                                        question 13
                13. Ask the user for a number. Use == to check if it equals 100 and log the result.

                // answer no 13;

                let number = Number(prompt("Enter a number:"));
                let isEqualTo100 = number == 100;
                console.log("Does the number equal 100? " + isEqualTo100);
                            ========================================*/

                            /* ========================================
                                          question 14
          14. Ask the user for a number. Use === to check if it strictly equals 100 and log the result.

                // answer no 14;

                let number = Number(prompt("Enter a number:"));
                let isStrictEqualTo100 = number === 100;
                console.log("Does the number strictly equal 100? " + isStrictEqualTo100);
                            ========================================

                            /* ========================================
                                        question 15 
        15. Ask the user for two numbers. Use != to check if they are not equal and alert the result.

                // answer no 15;

                let num1 = Number(prompt("Enter the first number:"));
                let num2 = Number(prompt("Enter the second number:"));
                let areNotEqual = num1 != num2;
                alert("Are the two numbers not equal? " + areNotEqual);
                            ========================================*/

                            /* ========================================
                                          question 16
 16. Ask the user for two numbers. Use !== to check if they are not strictly equal and log the result.

                // answer no 16;

                let num1 = Number(prompt("Enter the first number:"));
                let num2 = Number(prompt("Enter the second number:"));
                let areNotStrictlyEqual = num1 !== num2;
                console.log("Are the two numbers not strictly equal? " + areNotStrictlyEqual);
                            ========================================*/


                            /* ========================================
                                         question 17
17. Ask for two numbers and check if the first is greater than or equal to the second.Display result using alert.

                // answer no 17;

                let num1 = Number(prompt("Enter the first number:"));
                let num2 = Number(prompt("Enter the second number:"));
                let isFirstGreaterOrEqual = num1 >= num2;
                alert("Is the first number greater than or equal to the second? " + isFirstGreaterOrEqual);
                            ========================================*/


                            /* ========================================
                                        question 18
18. Ask for two numbers and check if the first is less than or equal to the second.Display result using alert.

                // answer no 18;

                let num1 = Number(prompt("Enter the first number:"));
                let num2 = Number(prompt("Enter the second number:"));
                let isFirstLessOrEqual = num1 <= num2;
                alert("Is the first number less than or equal to the second? " + isFirstLessOrEqual);
                            ========================================*/




                /*============================================================
         
                                       part 4
                             ✴️ Logical Operator Tasks

                  ==============================================================*/



                        /* ========================================
                                         question 19
19. Ask the user for age and country. Use && to check if age is over 18 and country is"USA". Log the result.

                // answer no 19;

                let age = Number(prompt("Enter your age:"));
                let country = prompt("Enter your country:");
                let isEligible = age > 18 && country === "USA";
                console.log("Is the user eligible? " + isEligible);
                            ========================================*/


                         /* ========================================
                                         question 20
20. Ask the user to enter a color and a shape. Use || to check if the color is "red" or the shape is "circle". Show the result in an alert.

                // answer no 20;

                let color = prompt("Enter a color:");
                let shape = prompt("Enter a shape:");
                let isMatch = color === "red" || shape === "circle";
                alert("Does the color match or the shape match? " + isMatch);
                            ========================================*/



       /*==========================================================================
         
                                       section 4
                     🔸 JavaScript Beginner Practice: If-Else Statements

          ===========================================================================*/


                      /* ========================================
                                         question 1
 1. Ask the user for their age. If the age is 18 or more, show an alert: "You are an adult.", else show: "You are a minor."

                     // answer no 1;

                     let age = prompt("Enter your age:");
                     if (age >= 18) {
                         alert("You are an adult.");
                     } else {
                         alert("You are a minor.");
                     }

                              ========================================*/


                             /* ========================================
                                         question 2
 2. Ask the user to enter a number. If it's positive, log: "Positive number"; else log:"Not positive".

                     // answer no 2;

                     let number = prompt("Enter a number:");
                     if (number > 0) {
                         console.log("Positive number");
                     } else {
                         console.log("Not positive");
                     }
                            ========================================*/

                             /* ========================================
                                         question 3
3. Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Oddnumber".

                     // answer no 3;

                     let number = prompt("Enter a number:");
                     if (number % 2 === 0) {
                         alert("Even number");
                     } else {
                         alert("Odd number");
                     }

                            ========================================*/

                             /* ========================================
                                         question 4
4. Ask for a username. If the username is "admin", display "Welcome, admin!"; elsedisplay "Access denied."

                     // answer no 4;

                     let username = prompt("Enter your username:");
                     if (username === "admin") {
                         alert("Welcome, admin!");
                     } else {
                         alert("Access denied.");
                     }
                            ========================================*/

                             /* ========================================
                                          question 5
5. Ask for two numbers. If they are equal, log "Both numbers are the same";otherwise, log "The numbers are different".
                     

                            // answer no 5;
                            
                            let num1 = prompt("Enter the first number:");
                            let num2 = prompt("Enter the second number:");

                            if (num1 === num2) {
                                console.log("Both numbers are the same");
                            } else {
                                console.log("The numbers are different");
                            }

                            ========================================*/

                             /* ========================================
                                         question 6
6. Ask the user to enter two numbers. Check which one is larger and alert: "First islarger" or "Second is larger".

                            // answer no 6;

                            let num1 = prompt("Enter the first number:");
                            let num2 = prompt("Enter the second number:");

                            if (num1 > num2) {
                                alert("First is larger");
                            } else if (num2 > num1) {
                                alert("Second is larger");
                            } else {
                                alert("Both numbers are equal");
                            }

                            ========================================*/

                             /* ========================================
                                         question 7
7. Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within range".

                            // answer no 7;

                            let number = prompt("Enter a number:");
                            if (number > 100) {
                                alert("Too big!");
                            } else {
                                alert("Within range");
                            }
                            ========================================*/
                             /* ========================================
                                         question 8
       8. Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."

                            // answer no 8;

                            let score = prompt("Enter your score:");
                            if (score >= 50) {
                                console.log("You passed!");
                            } else {
                                console.log("You failed.");
                            }
                            ========================================*/
                             /* ========================================
                                         question 9
9. Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's not hot."

                            // answer no 9;

                            let temperature = prompt("Enter the temperature:");
                            if (temperature > 30) {
                                alert("It's hot!");
                            } else {
                                alert("It's not hot.");
                            }
                            ========================================*/
                             /* ========================================
                                          question 10
       10. Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".

                            // answer no 10;

                            let number = prompt("Enter a number:");
                            if (number == 0) {
                                alert("Zero");
                            } else {
                                alert("Not zero");
                            }
                            ========================================*/
                             /* ========================================
                                         question 11
 11. Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",else log "You are not a senior."

                            // answer no 11;

                            let age = prompt("Enter your age:");
                            if (age >= 60) {
                                console.log("You are a senior citizen.");
                            } else {
                                console.log("You are not a senior.");
                            }
                            ========================================*/
                             /* ========================================
                                          question 12
12. Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert"You're not Alice!"

                            // answer no 12;

                            let name = prompt("Enter your name:");
                            if (name === "Alice") {
                                alert("Hi, Alice!");
                            } else {
                                alert("You're not Alice!");
                            }
                            ========================================*/
                             /* ========================================
                                          question 13
13. Ask the user for a password. If it matches "12345", log "Correct password"; else log "Wrong password".

                            // answer no 13;

                            let password = prompt("Enter your password:");
                            if (password === "12345") {
                                console.log("Correct password");
                            } else {
                                console.log("Wrong password");
                            }
                            ========================================*/
                             /* ========================================
                                         question 14
14. Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!";else alert "Good afternoon!"

                            // answer no 14;

                            let hour = prompt("Enter the current hour (0-23):");
                            if (hour < 12) {
                                alert("Good morning!");
                            } else {
                                alert("Good afternoon!");
                            }
                            ========================================*/
                             /* ========================================
                                         question 15
15. Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log "Not divisible by 5".

                            // answer no 15;

                            let number = prompt("Enter a number:");
                            if (number % 5 === 0) {
                                console.log("Divisible by 5");
                            } else {
                                console.log("Not divisible by 5");
                            }
                            ========================================*/
                             /* ========================================
                                          question 16
       16. Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's play!"; else alert "Maybe next time!"

                            // answer no 16;

                            let playGame = prompt("Do you want to play a game? (yes/no)");
                            if (playGame === "yes") {
                                alert("Let's play!");
                            } else {
                                alert("Maybe next time!");
                            }
                            ========================================*/
                             /* ========================================
                                         question 17
       17. Ask the user for a color. If the color is "blue", log "Cool choice!"; else log "Interesting color!"

                            // answer no 17;

                            let color = prompt("Enter a color:");
                            if (color === "blue") {
                                console.log("Cool choice!");
                            } else {
                                console.log("Interesting color!");
                            }
                            ========================================*/
                             /* ========================================
                                         question 18
       18. Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".

                            // answer no 18;

                            let day = prompt("Enter the day of the week:");
                            if (day === "Sunday") {
                                alert("Weekend!");
                            } else {
                                alert("Weekday.");
                            }
                            ========================================*/
                             /* ========================================
                                         question 19
19. Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";else alert "Sorry, out of stock."

                            // answer no 19;

                            let fruit = prompt("Enter a fruit:");
                            if (fruit === "banana" || fruit === "apple") {
                                alert("We have that!");
                            } else {
                                alert("Sorry, out of stock.");
                            }
                            ========================================*/
                             /* ========================================
                                         question 20
20. Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert"Waiting for input..."

                            // answer no 20;

                            let input = prompt("Type 'start' to begin:");
                            if (input === "start") {
                                alert("Game started!");
                            } else {
                                alert("Waiting for input...");
                            }
                            ========================================*/


                 /*============================================================
         
                                       part 2
                     Title: Advanced JavaScript Conditional Logic Practice

                  ==============================================================*/





                             /* ========================================
                                         question 21
                                    1. Age-Based Grade Check
Check a student's marks and display:
● "Distinction" if marks ≥ 80
● "Pass" if marks ≥ 50 and < 80
● "Fail" if marks < 50
● "Invalid Marks" if marks are not between 0 and 100

// answere no 21;

let mark = 82
if (mark > 80) {
       console.log("Distinction")
}else if(mark > 50 && mark < 80){
       console.log("Pass" );      
}else if(mark < 50){
       console.log("Fail");   
}else(mark < 0 && mark > 100);{
       console.log("Invalid Marks");   
}
                            ========================================*/
                             /* ========================================
                                         question 22
2. Discount Eligibility Based on Age and Membership Given a person's age and membership status, show:
● "Senior Premium Discount" if age ≥ 60 and is a premium member
● "Senior Discount" if age ≥ 60
● "Premium Discount" if a premium member
● "No Discount" otherwise

// answere no 22

let age = 66
let membership = "a premium member"


if (age > 60 && membership === "a premium member" ) {
     console.log("Senior Premium Discount");
       
}else if(age > 60){
       console.log("Senior Discount");
       
}else if(membership === "a premuim member"){
       console.log("Premium Discount");
       
}else{
       console.log("No Discount");
       
}

                            ========================================*/
                             /* ========================================
                                         question 23
3. Login and Email Verification
● If user is logged in and email is verified → "Access granted"
● If user is logged in but not verified → "Please verify your email"
● If not logged in → "Please log in"

// answere no 23

let user = "logged in"
let email = "verified"

if (user === "logged in" && email === "verified") {
       console.log("Access granted");
       
}else if(user === "logged in" && email ==="not verified"){
       console.log("Please verify your email");
       
}else(user === "not logged in" && email === "not verified");{
       console.log("Please log in");
       
}
                             ========================================*/
                             /* ========================================
                                         question 24
4. Contest Eligibility
Check if a person is eligible to enter a contest:

● Must be between ages 18–35
● Must be from Pakistan or India
● Must not be banned

Display appropriate messages for age, region, or ban issues.

// answere no 24



let age = Number(prompt("Enter your age:"));
let country = prompt("Enter your country:");
let isBanned = prompt("Are you banned? (yes/no)");

if (age < 18 || age > 35) {
    alert("Sorry! You are not eligible due to age.");
}
else if (country !== "Pakistan" && country !== "India") {
    alert("Sorry! You are not eligible due to region.");
}
else if (isBanned === "yes") {
    alert("Sorry! You are banned from the contest.");
}
else {
    alert("Congratulations! You are eligible for the contest.");
}

                            ========================================*/
                             /* ========================================
                                         question 25
5. Subscription Access Check
Given the subscription plan and login status:
● "Welcome Premium User" if plan is "premium" and logged in
● "Welcome Free User" if plan is "free" and logged in
● "Please log in to continue" if not logged in
● "Invalid subscription" otherwise

// answere no 25


let plan = prompt("Enter your subscription plan:");
let isLoggedIn = prompt("Are you logged in? (yes/no)");

if (isLoggedIn === "no") {
    alert("Please log in to continue");
}
else if (plan === "premium" && isLoggedIn === "yes") {
    alert("Welcome Premium User");
}
else if (plan === "free" && isLoggedIn === "yes") {
    alert("Welcome Free User");
}
else {
    alert("Invalid subscription");
}

                            ========================================*/
                             /* ========================================
                                         question 26
6. Product Purchase Validation
Check product conditions:
● "Buy now with discount" if price > 1000, in stock, and user is a member
● "Buy now" if in stock
● "Out of stock" if stock === 0
● "Invalid product" otherwise

// answere no 26


let price = Number(prompt("Enter product price:"));
let stock = Number(prompt("Enter available stock:"));
let isMember = prompt("Are you a member? (yes/no)");

if (price > 1000 && stock > 0 && isMember === "yes") {
    alert("Buy now with discount");
}
else if (stock > 0) {
    alert("Buy now");
}
else if (stock === 0) {
    alert("Out of stock");
}
else {
    alert("Invalid product");
}

                            ========================================*/
                             /* ========================================
                                         question 27
7. Work Hours Check
Check based on hoursWorked and isWeekend:
● "Overtime" if hours > 40 and not a weekend
● "Weekend work" if hours > 0 and is weekend
● "Regular hours" if ≤ 40
● "No work" if hours === 0

// answere no 27

// 7. Work Hours Check

let hoursWorked = 45;
let isWeekend = false;

// Checking working hours and weekend status

if (hoursWorked === 0) {
    console.log("No work");
}
else if (hoursWorked > 0 && isWeekend === true) {
    console.log("Weekend work");
}
else if (hoursWorked > 40 && !isWeekend) {
    console.log("Overtime");
}
else if (hoursWorked <= 40) {
    console.log("Regular hours");
}

                            ========================================*/
                             /* ========================================
                                         question 28
8. Age and Gender Classification
Given a user's age and gender:
● "Teen Male" if age 13–19 and gender is "male"
● "Teen Female" if age 13–19 and gender is "female"
● "Adult" if age ≥ 20
● "Child" if age < 13

// answere no 28

// 8. Age and Gender Classification

let age = 17;
let gender = "male";

// Checking age and gender

if (age < 13) {
    console.log("Child");
}
else if (age >= 13 && age <= 19 && gender === "male") {
    console.log("Teen Male");
}
else if (age >= 13 && age <= 19 && gender === "female") {
    console.log("Teen Female");
}
else if (age >= 20) {
    console.log("Adult");
}
                            ========================================*/
                             /* ========================================
                                   question 29

9. Weather Warning System
Based on temperature and humidity:
● "Heatwave Alert" if temp ≥ 40 and humidity ≥ 60
● "Hot and Dry" if temp ≥ 40 and humidity < 60
● "Cool Weather" if temp ≤ 20
● "Moderate" otherwise

// answere no 29

// 9. Weather Warning System

let temperature = 42;
let humidity = 70;

// Checking temperature and humidity

if (temperature >= 40 && humidity >= 60) {
    console.log("Heatwave Alert");
}
else if (temperature >= 40 && humidity < 60) {
    console.log("Hot and Dry");
}
else if (temperature <= 20) {
    console.log("Cool Weather");
}
else {
    console.log("Moderate");
}
                            ========================================*/
                             /* ========================================
                                         question 30

10. Score Grading System
Given a score between 0–100:

● "Excellent" for 90–100
● "Good" for 70–89
● "Average" for 50–69
● "Poor" for 30–49
● "Fail" below 30
● "Invalid Score" if out of range

// answere no 30

// 10. Score Grading System

let score = 85;

// Checking score and assigning grade

if (score < 0 || score > 100) {
    console.log("Invalid Score");
}
else if (score >= 90) {
    console.log("Excellent");
}
else if (score >= 70) {
    console.log("Good");
}
else if (score >= 50) {
    console.log("Average");
}
else if (score >= 30) {
    console.log("Poor");
}
else {
    console.log("Fail");
}
                            ========================================*/
                             /* ========================================
                                         question 31

11. Course Access Control
To access a course:
● Must be logged in
● Must be enrolled
● Must not be banned

Show: "Access granted", "Enroll in course first", "User is banned", or "Please log in"

// answere no 31

// 11. Course Access Control

let isLoggedIn = true;
let isEnrolled = true;
let isBanned = false;

// Checking course access permissions

if (isBanned) {
    console.log("User is banned");
}
else if (!isLoggedIn) {
    console.log("Please log in");
}
else if (!isEnrolled) {
    console.log("Enroll in course first");
}
else {
    console.log("Access granted");
}
                            ========================================*/
                             /* ========================================
                                         question 32

12. Driving Conditions
Given a user's speed and license status:
● "License suspended" if speed > 120
● "Warning" if speed between 100–120
● "Normal driving" if speed ≤ 100 and has license
● "Driving without license" otherwise

// answere no 32

// 12. Driving Conditions

let speed = 110;
let hasLicense = true;

// Checking speed and license status

if (speed > 120) {
    console.log("License suspended");
}
else if (speed >= 100 && speed <= 120) {
    console.log("Warning");
}
else if (speed <= 100 && hasLicense) {
    console.log("Normal driving");
}
else {
    console.log("Driving without license");
}
                            ========================================*/
                             /* ========================================
                                         question 33

13. Order Processing Status

For an online order:
● "Order on the way" if payment is complete and shipped
● "Preparing your order" if payment is complete and not shipped
● "Awaiting payment" if payment is pending
● "Payment failed" if transaction failed

// answere no 33

// 13. Order Processing Status

let paymentComplete = true;
let isShipped = false;
let transactionFailed = false;

// Checking payment and shipping status

if (transactionFailed) {
    console.log("Payment failed");
}
else if (!paymentComplete) {
    console.log("Awaiting payment");
}
else if (paymentComplete && isShipped) {
    console.log("Order on the way");
}
else {
    console.log("Preparing your order");
}
                            ========================================*/
                             /* ========================================
                                          question 34
                     
14. Battery Status Checker
Given battery level and charging state:
● "Fully Charged" if level === 100
● "Charging..." if level < 100 and charging
● "Low Battery" if level < 20 and not charging
● "Battery OK" otherwise

// answere no 34

// 14. Battery Status Checker

let batteryLevel = 15;
let isCharging = false;

// Checking battery level and charging status

if (batteryLevel === 100) {
    console.log("Fully Charged");
}
else if (batteryLevel < 100 && isCharging) {
    console.log("Charging...");
}
else if (batteryLevel < 20 && !isCharging) {
    console.log("Low Battery");
}
else {
    console.log("Battery OK");
}
                            ========================================*/

                            /* ========================================
                                          question 35

15. Browser and Device Compatibility Check
Based on user's browser and device:
● "Full features enabled" if browser is Chrome and device is Desktop
● "Limited mobile features" if browser is Chrome and device is Mobile
● "Please switch to Chrome" for all other browsers

// answere no 35

// 15. Browser and Device Compatibility Check

let browser = "Chrome";
let device = "Desktop";

// Checking browser and device compatibility

if (browser === "Chrome" && device === "Desktop") {
    console.log("Full features enabled");
}
else if (browser === "Chrome" && device === "Mobile") {
    console.log("Limited mobile features");
}
else {
    console.log("Please switch to Chrome");
}
                            ========================================*/









