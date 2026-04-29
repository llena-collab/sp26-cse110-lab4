# **ANSWERS:**

* 1\) The bug was caused by type coercion. The values retrieved from the HTML input fields (num1 and num2) were treated as strings instead of numbers. When using the + operator with strings, JavaScript performs concatenation (joining the text) rather than mathematical addition. For example, entering "2" and "3" resulted in "23" instead of 5.
* 2\) To fix this, you need to explicitly convert the string values into numbers before performing the addition. This can be done using the Number() function, parseInt(), or the unary plus operator (+).