alert (' Please Enter 3 Numbers To Check The Maximum Number Between Them');
var x = Number (prompt('Enter the first number '));
var y = Number (prompt('Enter the second number '));
var z = Number (prompt('Enter the third number '));

if (x>y && x>z)
{
  console.log(x+  ' Is the max number');
    document.write(x+ " Is the max number ");

}

else if ( y>x && y>z)
{
  console.log(y+  ' Is the max number');
    document.write(y+ " Is the max number ");
}

else if (z>x && z>y)
{
  console.log(z+  ' Is the max number');
    document.write(z+ " Is the max number ");
}



