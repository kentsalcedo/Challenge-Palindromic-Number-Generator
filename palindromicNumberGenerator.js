var palindromicNumberGenerator = function( inputNumber ) {

  var result = {};
  var palindromicNumber = 0;

  result.value = palindromicNumber;
  result.steps = 0;

  result.getPalindromicNumber = function(){
    return palindromicNumber;
  };

  var reverse = function( input ) {
    var numberToString = input.toString();
    var stringNumber = numberToString.split('').reverse().join('');
    var output = parseInt(stringNumber);
    return output;
  };

  //console.log(reverse(543));

  var checkSymmetry = function ( input ){
      var revNumber = reverse( input );
      if ( input === revNumber){
        return true;
      } else {
        return false;
      }
  };

  //console.log(checkSymmetry(545));

  function generatePalindromicNumber ( input ){
    var startNumber = input;
    var reversedStartNumber =  reverse( input );
    if ( checkSymmetry(input) ){
      console.log('this pass through the test');
      console.log(startNumber);
      result.value = startNumber;
    } else {
        while ( checkSymmetry(startNumber) === false ) {
          console.log(checkSymmetry(input));
          console.log(startNumber, 'start number before');
          console.log(startNumber + ' ' + reversedStartNumber);
          startNumber += reversedStartNumber;
          reversedStartNumber = reverse(startNumber);
          console.log(startNumber, 'start number after');
          result.steps++;
        }
      } return startNumber;
  }

  result.value = generatePalindromicNumber(inputNumber);

  return result;

  };

// var inputBox = document.getElementById('box-input').value;


var generateButton = document.getElementById('generate-button');
  generateButton.addEventListener('click', function() {

    var numberHolder = document.getElementById('box-input').value;
    var numberHolderParseInt = parseInt(numberHolder);
    var generate = palindromicNumberGenerator( numberHolderParseInt );
    var display = document.getElementById('display');

    function generateMessage() {
      if (generate.steps === 1){
        display.innerHTML = 'The starting number was  ' + numberHolder + '. The palindromic number generated from that was ' + generate.value + ' and it took ' + generate.steps +' step to get to it.';
      }
      else {
        display.innerHTML = 'The starting number was    ' + numberHolder + '. The palindromic number generated from that was ' + generate.value + ' and it took ' + generate.steps +' steps to get to it.';
      }
    }
    generateMessage();
  });

// var generate = palindromicNumberGenerator( 87 );
// console.log(generate.value);
// console.log(generate.steps, 'number of steps');
// var x = palindromicNumberGenerator(87);
// console.log(x);
