function sumArray(values){
   var negatives = [];
   var sum = 0;
  
   for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
      negatives.push(numbers[i]);
    }else{
      sum += numbers[i];
    }
  }
  console.log(negatives);

  return sum;
 }
    let input1 = [3,11,7,2,9,10];
    let input2 = [-1,110,1,1,0];
      
     var input1 = sumArray([3,11,7,2,9,10]);
      
    console.log(input1);