function konversiMenit(menit) {
  // you can only write your code here!
  var jam = 0;
  while(menit>=60){
    menit-=60;
    jam += 1;
  }
  if (menit<10){
    menit = '0'+menit
  }
  return jam+':'+menit
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00