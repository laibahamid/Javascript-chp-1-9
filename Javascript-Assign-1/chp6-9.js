//------------------------------------------------------------------------------
document.write('<br><br>');
document.write("<b>Result</b><br>");
var num = 15;
document.write('<br>The value of a is ',num)
document.write('<br>.........................................<br>');
var num2 = ++num;
document.write('<br>The value of ++a is: ',num2)
document.write('<br>Now the value of a is: ',num2)
document.write('<br><br>');
document.write('<br>The value of ++a is: ',num2)
var num3 = ++num2;
document.write('<br>Now the value of a is: ',num3)
document.write('<br><br>');
var num4 = --num3;
document.write('The value of --a is : ',num4)
document.write('<br>Now the value of a is: ',num3)
document.write('<br><br>');
var num5 = num4--;
document.write('The value of a-- is : ',num5)
document.write('<br>Now the value of a is: ',num4)

//-------------------------------------------
document.write('<br><br>')

var az =2, bz=1;
document.write(' a is : ',az)
document.write(' b is ',bz)
//-------------------------------------------------
var cz = --az;
document.write('<br>now  a : ',cz)
var dz = --bz;
document.write('<br>now  b : ',dz)
var ez = cz-dz;
document.write('<br>now  e : ',ez)
//---------------------------------------------------
var fz = ++bz;
document.write('<br>now  f : ',bz+'<br>')
//--------------------------------------------------------
var name = prompt('What is your name?');
 var message = "Hello "+ name;
 alert(message);
//---------------------------------------------------------
var nz = prompt('Enter a number to generate multiplication table:');
for(i=1; i<=10; i++){
    document.write(nz + " * " + i +  " = " + nz * i+'<br>')
}
//-------------------------------------------------------------------
var sub1 = prompt('Enter Subject1')
var sub2 = prompt('Enter Subject2')
var sub3 = prompt('Enter Subject3')
document.write('<br>' + sub1,'<br>' + sub2,'<br>' + sub3)

var obtmarks1 = prompt('Enter marks of Subject 1: ')
var obtmarks2 = prompt('Enter marks of Subject 2: ')
var obtmarks3 = prompt('Enter marks of Subject 3: ') 
document.write('<br>  ' +obtmarks1, '<br>  ' +obtmarks2, '<br> ' +obtmarks3)
var total = obtmarks1 + obtmarks2 + obtmarks3;
document.write('<br>Marks of three subjects out of 300 is ', total)
var per = ((total/300)*100);
document.write('<br>Percentage is : ',per+'%');










