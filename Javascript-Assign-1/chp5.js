document.write('<br>--------SIMPLE CALCULATION-------');
var a1 = 2, b1 = 3;
sum = a1+b1;
document.write('<br><br>Sum of ' + a1 + ' and ' + b1 +' is : ' ,sum + '<br>');

var a2 = 10, b2 = 7;
sub = a2-b2;
document.write('Sub of ' + a2 + ' and ' + b2 +' is : ' ,sub + '<br>');

var a3 = 2, b3 = 3;
multiply = a3*b3;
document.write('Product of ' + a3 + ' and ' + b3 +' is : ' ,multiply + '<br>');

var a4 = 100, b4 = 10;
div = a4/b4;
document.write('Division of ' + a4 + ' and ' + b4 +' is : ' ,div + '<br>');

var a6 = 6, b6 = 2;
mod = a6%b6;
document.write('Remainder of ' + a6 + ' and ' + b6 +' is : ' ,mod + '<br>');

//------------------------------------------------------------------------------
document.write('<br>--------INCREAMENT DECREAMENT-------<br>');
var t = 10;
document.write('<br>Value after variable declaration is undefined.' + '<br>Initial value after declaration is '+ t);
t = t +1;
document.write('<br>Value after increament is ' + t);
t = t+7;
document.write('<br>Value after addition is ' + t);
t = t-1;
document.write('<br>Value after decreament is ' + t);
t = 10/3;
document.write('<br>The remainder is ' + t);

//------------------------------------------------------------------------------

var price = 600*5;
document.write('<br><br>Total cost to buy 5 tickets to a movie is : <b>', price + 'PKR </b> <br><br>');

//------------------------------------------------------------------------------
document.write('--------TABLE OF 5--------<br><br>')
let n = 5;
    for (let i = 1; i <= 10; ++i)
        document.write(n + " * " + i +  " = " + n * i + '<br>');

//------------------------------------------------------------------------------
document.write('<br>--------TEMPERATURE CONVERTER-------')
var c = 80;
var celcius = ((c*9/5)+32);
document.write('<br><br> 80°C is ' ,celcius+'°F')

var f = 50;
var farenheit = ((f-32)*5/9);
document.write('<br> 50°F is ' ,farenheit+'°C <br>')

//------------------------------------------------------------------------------
document.write('<br>--------SHOPPING CART-------<br>')
var price = 500; quan = 5; 
document.write('<br>Price of item 1 is '+ price);
document.write('<br>Quantity of item 1 is '+ quan) 
var ab = price*quan;
var price = 900; quan = 8; 
document.write('<br>Price of item 2 is '+ price);
document.write('<br>Quantity of item 2 is '+ quan) 
var ba = price*quan;
var TC = ab +ba;
document.write('<br><br>Total cost of your order is ', TC);
 
//------------------------------------------------------------------------------
document.write('<br><br>--------MARKS SHEET-------<br>');

var TM = 500, OM = 430;
document.write('<br>Total marks : ',TM);
document.write('<br>Marks obtained : ', OM);
var per = ((OM/TM)*100)
document.write('<br>Percentage: ',per + '%')
//------------------------------------------------------------------------------
document.write('<br><br>------------Currency in PKR--------------<br><br>');
document.write('Total currency in PKR : 1748')
//------------------------------------------------------------------------------
var num = 20;
var output = num + 5 * 10/2;
document.write('Ans is ',output )

//------------------------------------------------------------------------------
document.write('<br><br>------------Age Calculator--------------<br><br>');
var currentYear = 2023;
var birthYear = 2003;
var age = currentYear-birthYear;
document.write('<br>Current Year : ',currentYear);
document.write('<br>Birth Year : ', birthYear);
document.write('<br>Your age is : ',age);

//------------------------------------------------------------------------------
document.write('<br><br>------------The Geometrizer--------------<br><br>');
var radius = 20;
document.write('<br>Radius of a circle: ',radius);
var circum = 2*3.142*radius;
document.write('<br>The circumference is : ',circum);
var area = (3.142*(radius*radius));
document.write('<br>The area is : ',area);

//------------------------------------------------------------------------------
document.write('<br><br>------------The Lifetime Supply Calculator--------------<br><br>');
var favsnack = "Biscuits";
var age = 19;
var maxage = 65;
var perday = 3;

document.write('Favourite snack : ',favsnack);
document.write('<br>Current age is ',age);
document.write('<br>Estimated Maximum Age: ',maxage);
document.write('<br>Amount of snacks per day :',perday);

var need = ((maxage-age)*perday);
document.write('<br>You will need ' + need + ' biscuits to last you until the ripe old age of 65');

