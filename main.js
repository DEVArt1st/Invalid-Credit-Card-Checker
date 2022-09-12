// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(arr){

    //Function Scope
    let returnTrueFalseVal = [];
    //

    //grab each card from batch1
    for(const cards of arr){
      //let nums and let x local variables here:
      let nums = [];
      let x = 0;
      //

      //Clear nums arr variable:
      nums = [];
      //

      //grab the numbers from each card from the batch
      for(let i = 0; i < cards.length; i++){
        //push card numers into nums arry:
        nums.push(cards[i]);
        //
      }

      //Using Luh Algorithm:
      let lastValue = nums.pop();
      nums.reverse();
      for(let e = 0; e < nums.length; e++){
        if(e % 2 === 0){
          nums[e] = nums[e] * 2;
          if(nums[e] > 9){
            nums[e] = nums[e] - 9;
          }
        }
      }
      nums.reverse();
      nums.push(lastValue);

      //Setting the sum of local variable (x) to the num.reduce():
      x = nums.reduce((prevVal, currVal) => prevVal + currVal);
      //

      //Checking if the sum of the cards numbers (= 0) when modulo(%) to 10
      if(x % 10 === 0){
        //push true to the return value arry if the number % 10 = 0 (Does equal 0)
        returnTrueFalseVal.push(true);
      }
      else{
        //push false to the return value arry if the number % 10 != 0 (Does NOT equal 0)
        returnTrueFalseVal.push(false);
      }
    }
    //return value to use as helper function
    return returnTrueFalseVal;
  }

  function findInvalidCards(arr){
    let invalidCards = [];
    //Getting all arrays inside of the batch;
    for(let i = 0; i < arr.length; i++){
      //We run the function inside the if statement that states(IF the return value from validateCred array from index element i is false, THEN push the array of the batch index that matched the condition into the invalidCards array):
      if(validateCred(arr)[i] === false){
        invalidCards.push(arr[i]);
      }
      //
    }
    return invalidCards;
  }

  function idInvalidCardCompanies(arr){
    let cardCompanyMailList = [];
    //We get all of the cards from the return value of findInvalidCards:
    for(const invalidCards of findInvalidCards(arr)){

      //Variable of first index element of each invalid card:
      let firstIndex = invalidCards[0];
      //

      //Company names as variables:
      const amex = 'Amex (American Express)';
      const visa = 'Visa';
      const master = 'Mastercard';
      const discover = 'Discover';
      //

      //Switch through first index element
      switch (firstIndex){
        case 3:
        if(!cardCompanyMailList.includes(amex)){
          cardCompanyMailList.push(amex);
        }
        break;
        case 4:
        if(!cardCompanyMailList.includes(visa)){
          cardCompanyMailList.push(visa);
        }
        break;
        case 5:
        if(!cardCompanyMailList.includes(master)){
          cardCompanyMailList.push(master);
        }
        break;
        case 6:
        if(!cardCompanyMailList.includes(discover)){
          cardCompanyMailList.push(discover);
        }
        break;
        default:
        console.log("Company not found!");
        break;
      }
    }
    return cardCompanyMailList;
  }

  // console.log(validateCred(batch));
  // console.log(findInvalidCards(batch));
  console.log(idInvalidCardCompanies(batch));