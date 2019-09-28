// Problem 1
var rows1 = 5;

for (var i=0;i<rows1;i+=1){
  console.log('*')
}

// Problem 2
var rows2 = 5;
for (var i=0;i<rows2;i+=1){
  var star = '';
  for (var j=0;j<rows2;j+=1){
    star += '*'
  }
  console.log(star)
}

// Problem 3
var rows3 = 5;
for (var i=0;i<rows2;i+=1){
  var star = '';
  for (var j=0;j<=i;j+=1){
    star += '*'
  }
  console.log(star)
}