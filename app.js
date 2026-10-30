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








                        

