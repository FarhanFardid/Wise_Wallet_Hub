//  Javascript makes the webpage functional and Interactive

const incomeValueStr = document.getElementById("income").value;
let incomeValue = parseFloat(incomeValueStr);

// setting initial values for maintaining serial calculation
let totalExpense=0;
let balance = -1;

// Total Expense Calculation
const expenseCalculateBtn = document.getElementById("calculate-btn");
 expenseCalculateBtn.addEventListener('click', function(){

    const foodExpenseStr = document.getElementById("food").value;
    const foodExpense = parseFloat(foodExpenseStr);
    const billsExpenseStr = document.getElementById("bills").value;
    const billsExpense = parseFloat(billsExpenseStr);
    const transportExpenseStr = document.getElementById("transport").value;
    const transportExpense = parseFloat(transportExpenseStr);
    const incomeValueStr = document.getElementById("income").value;
    let incomeValue = parseFloat(incomeValueStr);
 
  if(typeof(incomeValue) === 'number' && ! isNaN(incomeValue)){

      if( (typeof(foodExpense) === 'number' && ! isNaN(foodExpense) ) && (typeof(billsExpense) === 'number' && ! isNaN(billsExpense)) && (typeof(transportExpense) === 'number' && ! isNaN(transportExpense) )) {  
        totalExpense=  foodExpense + billsExpense + transportExpense;
        document.getElementById("total-expense").innerText = totalExpense;
        // console.log(totalExpense);
      }
     else {
        alert("Please Enter the Expenses Value Properly ");
        return;
      }
   }

  else{
    alert("Please Provide Income Value Properly");
    return;
  }
 
 });


// Total Savings Calculation
 const savingsBtn = document.getElementById('savings-btn');
 savingsBtn.addEventListener('click', function(){
    const incomeValueStr = document.getElementById("income").value;
    let incomeValue = parseFloat(incomeValueStr);
    const savingsPercentStr = document.getElementById("savings").value;
    const savingsPercent = parseFloat(savingsPercentStr);
    console.log(savingsPercent);

    let spareMoney = incomeValue - totalExpense;
    console.log(spareMoney);

    if(totalExpense == 0){
        alert("Please Calculate Total Expenses Before Savings");
    }
    else if(typeof(savingsPercent) === 'number' && ! isNaN(savingsPercent) && savingsPercent <=100){
        const savings = spareMoney * (savingsPercent / 100);
        document.getElementById("total-savings").innerText = savings;
        // console.log(savings);
         balance = spareMoney - savings;
    
    }
    else{
        alert("Please Provide Savings percent value Properly ");
    }


 });

// Showing Total remaining Balance

 const balanceBtn = document.getElementById("balance-btn");
 balanceBtn.addEventListener('click', function(){
if(balance < 0){
    alert("Please Calculate Savings Amount before Checking Balance")
}
else{
    document.getElementById("total-balance").innerText = balance;
}


 });