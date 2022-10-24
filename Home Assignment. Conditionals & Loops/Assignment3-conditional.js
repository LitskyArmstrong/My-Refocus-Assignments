
//Task 1
function checkSPO2(value){
    if (value >= 96) {
        console.log('Normal reading.');
    } else if(value === 95){
        console.log('Acceptable to continue home monitoring.');
    }else if(value <= 94 && value >= 93){
        console.log('Seek advice from medical professionals.');
    }else{
        console.log('Seek urgent medical advice.');
    }
}

checkSPO2(80);

//Task 2
function checkPulseRate(value){
    if(value <=100 && value >= 40){
        console.log('Normal reading.');
    }else if(value <=109 && value >= 101){
        console.log('Acceptable home care monitoring.');
    } else if(value <=130 && value >= 110){
        console.log('Seek advice from medical professionals.');
    }else{
        console.log('Seek urgent medical advice.');
    }
}

checkPulseRate(40);