function handlerProductCount(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount+1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount-1;
    }
    productInput.value = productNewCount;
    // const caseTotal = productNewCount * 59;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = "$ " + productTotal;
 }


// third Pre JS to start: 

// function handlerPhoneCount(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount+1;
//     }
//     if(isIncrease == false && phoneCount > 0){
//         phoneNewCount = phoneCount-1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = "$ " + phoneTotal;
//  }


// function handlerProductCount(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//        caseNewCount = caseCount+1;
//     }
//     if(isIncrease == false && caseCount > 0){
//        caseNewCount = caseCount-1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$ " + caseTotal;
//  }

//////////////////////////////////////////////////////




// Second Pre JS to start: 

// document.getElementById('case-increase').addEventListener('click', function () {
//     handlerProductCount(true);
//  })

//  document.getElementById('case-decrease').addEventListener('click', function () {
//     handlerProductCount(false);
//  })

//  function handlerProductCount(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//        caseNewCount = caseCount+1;
//     }
//     if(isIncrease == false && caseCount > 0){
//        caseNewCount = caseCount-1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = "$ " + caseTotal;
//  }


//////////////////////////////////////////////////////


 // First Pre JS to start: 

 // document.getElementById('case-increase').addEventListener('click', function () {
 //    const caseInput = document.getElementById('case-count');
 //    const caseCount = parseInt (caseInput.value);
 //    const caseNewCount = caseCount+1;
 //    caseInput.value = caseNewCount;
 //    const caseTotal = caseNewCount * 59;
 //    document.getElementById('case-total').innerText = "$ " + caseTotal;
 // })

 // document.getElementById('case-decrease').addEventListener('click', function () {
 //    const caseInput = document.getElementById('case-count');
 //    const caseCount = parseInt(caseInput.value);
 //    const caseNewCount = caseCount-1;
 //    caseInput.value = caseNewCount;
 //    const caseTotal = caseNewCount * 59;
 //    document.getElementById('case-total').innerText = "$ " + caseTotal;
 // })

 //////////////////////////////////////////////////////