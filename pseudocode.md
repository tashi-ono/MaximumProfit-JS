#### My pseudocode

O(n^2) time complexity

create maxProfit variable and set to -1
loop over array of numbers
for current number (index i)
loop over remaining numbers (index j)
set maxProfit variable to current outer number minus current inner number
if current maxProfit value is less than the profit of current number and next indexed number
reset maxProfit to the higher profit value
return maxProfit value

#### Pseudocode from class

set lowest number to first number
compare to next number
if next number is higher than lowest number
set next number to highest
if next number is higher than highest then reassign highest
if next number is lower
