# Coding Dojo Kata
---
## Description
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits.

For example:
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
nextBigger(num: 2117) // returns 2171

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
nextBigger(num: 9)   // returns -1
nextBigger(num: 111) // returns -1
nextBigger(num: 531) // returns -1