
//Name of the function I am making
function palindromicNumberGenerator (num){

  var originalNum = 0;  //Temporary Variable that stores orig number
  var stringedNum = 0; //Temporary Variable that stores stringified number
  var reversedNum = 0 ; //Temporary Variable that stores reversed number
  var palindromeNumber = 0;

  function reversing(num){
      originalNum = num;
      stringedNum = num.toString();
      stringedNum = stringedNum.split("").reverse().join("");
      reversedNum = Number(stringedNum);

        if(reversedNum===originalNum){
          palindromeNumber = reversedNum;
          return palindromeNumber;
        }// if
  }// reversing

reversing(num);
}// palindromicNumGen

console.log(palindromeNumber(345));