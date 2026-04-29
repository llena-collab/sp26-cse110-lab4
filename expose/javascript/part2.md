# **ANSWERS:**

* 1\) The value of i gets printed: *3*
* 2\) It gets printed: *150*
* 3\) It gets printed: *150*
* 4\) The function will return the array: [50, 100, 150]
* 5\) The code returns an error: unlike the previous examples that used var, this version of the code uses let, which fundamentally changes how the variable i is handled by JavaScript.
* 6\) The code returns an error: just like the variable i in the previous question, discountedPrice is declared using the let keyword inside the for loop.
* 7\) The code will successfully log 150 to the console.
* 8\) The function will return the array [50, 100, 150].
* 9\) The code returns an error: even though this version of the function uses const for many variables, the variable i is still declared with let inside the for loop header.
* 10\) The code will successfully log 3 to the console.
* 11\) The function will return the array [50, 100, 150].
* 12\) 
    - A\) student.name
    - B\) student['Grad Year']
    - C\) student.greeting()
    - D\) student['Favorite Teacher'].name
    - E\) student.courseLoad[0]
* 13\) 
    - A\) '32' -> The + operator triggers string concatenation if one operand is a string. The number 2 is converted to '2'.
    - B\) 1 -> The - operator only works with numbers, so JS converts the string '3' to the number 3.
    - C\) 0 -> When used in math, null is coerced to 0.
    - D\) '3null' -> The + with a string causes concatenation. null becomes the string 'null'.
    - E\) 4 -> Booleans are coerced to numbers in math: true becomes 1.
    - F\) 0 -> Both are coerced to numbers: false is 0 and null is 0.
    - G\) '3undefined' -> Concatenation rules apply. undefined becomes a string.
    - H\) NaN -> The - operator tries to convert undefined to a number, which results in NaN (Not a Number). Any math with NaN results in NaN.
* 14\) 
    - A\) true -> The string '2' is coerced to the number 2.
    - B\) false -> When comparing two strings, JS compares them alphabetically (lexicographically). Since '2' comes after '1', the statement is false.
    - C\) true -> Loose equality (==) performs type coercion, converting the string '2' to the number 2.
    - D\) false -> Strict equality (===) checks both the value and the type. Since one is a Number and the other is a String, they are not equal.
    - E\) false -> True is coerced to 1.
    - F\) true -> Boolean(2) converts the number 2 to its truthy value, which is true. Since both sides are now the boolean true, strict equality passes.
* 15\) 
    - == (Loose Equality): Compares two values for equality after converting both values to a common type.
    - === (Strict Equality): Compares both the value and the data type. It does not perform type coercion. If the types are different, it immediately     returns false.

