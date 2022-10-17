# Coding Dojo Kata
---
## Description
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds,
in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". 
Otherwise, the duration is expressed as a combination of years, days, hours, minutes, seconds.

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

It is much easier to understand with an example:
* For seconds = 62, your function should return
  "1 minute, 2 seconds"
* For seconds = 3662, your function should return
  "1 hour, 1 minute, 2 seconds"

Detailed rules
- The unit of time is used in plural if the integer is greater than 1.

- The components are separated by a comma and a space (", "). 

- A component will not appear at all if its value happens to be zero. 
Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

- The function should not return 61 seconds, but 1 minute and 1 second instead. 