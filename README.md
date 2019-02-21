<b># hw4 </b> <br>
<b>1. How many lines are drawn each frame? In other words, how often does the for loop run?</b> <br>
38 lines are drawn each frame. <br>
<b>2. What do the first, second, and third appearances of the number 10 do in the code?</b><br>
The first 10 is the initial value of the x; The sencond 10 is the margin set for the where line could be drawn (x can only be increased to width - 10, which means it has to be 10 pxs away from the canvas horizontal side). The third 10 is the value that x increase each loop.<br>
<br>
<br>
<br>
<br>


<b>How many times does the loop body run each frame, once the x and y arrays are full?</b><br>
5 times. <br>
<b>What are two ways of increasing the spacing between rings?</b><br>
a. By increasing the increment of the variable, for instance: from 'i = i + 10' to 'i = i + 50'.<br>
b. By increase the diameter of the ellipses. For instance: from '1 + (x.length - i)' to '1 + (x.length - i*10)'<br>)
<b>How can you make the ellipse trail longer?</b><br>
Yes, by decreasing the value of the x.slice and y.sclie.(Like change the (- 50) to (- 100).
