var palindromicNumberGenerator = function( inputNumber ) {
  var result = {};
  var counter = 0;
  var palindromicNumber = 0;

  this.value = palindromicNumber;
  this.steps = counter;
  this.checkSymmetry = function ( number ){
    var stringNumber = number.toString();
    if (stringNumber.length % 2 === 0){

    } else {

    }
  };

  var reverse = function( input ) {
    var rev = input.split('').reverse().join('');
    return rev;
  };

  var checkSymmetry = function ( number ){
      var revNumber = reverse(number);
      if ( stringNumber === revNumer){
        return true;
      } else {
        return false;
      }
  };

  this.generatePalindromicNumber = function ( inputNumber ){
    var startNumber = inputNumber;
    var reversedStartNumber =  reverse(inputNumber);
      if ( checkSymmetry(inputNumber) ){
        palindromicNumber = inputNumber;
      } else {
          while (startNumber !== reversedStartNumber){
          startNumber += reversedStartNumber;
          counter++;
          }
      }
  };
  return result;
  };

