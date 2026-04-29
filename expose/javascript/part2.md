# **ANSWERS:**

* 1) The output would be: *values added: 20*
* 2) The output would be: *final result: 20*
* 3) Var allows you to redeclare the same variable multiple times in the same scope without error, which can lead to confusing bugs.
* 4) The output would be: *values added: 20*
* 5) The code returns an error: unlike var, variables declared with let have block scope. This means result only exists within the curly braces of the if statement. When the code tries to access result at line 13 (which is outside that block), the computer no longer knows what result is, causing the program to crash.
* 6) The code returns an error: on line 5, result is declared as a const and initialized to 0, on line 7 the code attempts to reassign a new value to it (result = num1 + num2). In JavaScript, a const variable cannot be reassigned after its initial declaration. Therefore, the program crashes at line 7 and never reaches line 9.
* 7) The code returns an error: for the same reason of 5), and also because the program stops before for the error of 6).