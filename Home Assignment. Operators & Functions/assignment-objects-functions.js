
const bankAccount = {
    bankAccountId: 1,
    accountNumber: '1234123',
    credentials: [
       { 'userName': 'admin', 'password': 'password', 'pin':'12345'}
    ],
    balance: 1000,
    createdAt: '2022-09-08'
}

const userAccount ={
    bankAccount: bankAccount,
    debitCard: 12345,
    firstName: 'De Handsome',
    lastName: 'Dreymon',
    birthday: '1959-09-10',
    validId: [
        { idType: "Driver's License", idNumber: 'D2220213123' },
        { idType: "Passport", idNumber: 'PSAQED123' },
    ],
    address: 'Philippines'
}

function getBankAccountDetails(username, password){
    let exists = false;

    for(account of bankAccount.credentials){
        if(account.userName === username && account.password === 'password'){
            exists = true;
            break;
        }
    }

    if(exists){
        console.log(`Account Number:    ${userAccount.bankAccount.accountNumber}`);
        console.log(`Debt card Number:  ${userAccount.debitCard}`);
        console.log(`First Name:    ${userAccount.firstName}`);
        console.log(`Last Name :    ${userAccount.lastName}`);
        console.log(`Birthday:      ${userAccount.birthday}`);
        console.log(`Address:       ${userAccount.address}`);
        console.log(`Balance:       ${userAccount.bankAccount.balance}`);
        console.log(`Created:       ${userAccount.bankAccount.createdAt}`);
    }else{
        console.log('Username or password is incorrect');
    }
}

function withdrawMoney(username, password, amount, accountNo){
    let exists = false;
    let newBalance = 0;

    for(account of bankAccount.credentials){
        if(account.userName === username && account.password === 'password'){
            exists = true;
            break;
        }
    }

    if(exists){
        if(bankAccount.accountNumber === accountNo){
            console.log(`Withdrawing ${amount} in account number ${bankAccount.accountNumber}`);
            newBalance = userAccount.bankAccount.balance - amount;

            if(bankAccount.balance >= amount){
                console.log(`The balance is ${newBalance}`);
            }else{
                console.log(`Cannot withdraw higher than ${bankAccount.balance}`);
            }
        }else{
            console.log(`Account number not exists.`);
        }
    }else{
        console.log('Username or password is incorrect');
    }
}

function depositMoney(accountNumber, amount){
    if(bankAccount.accountNumber === accountNumber){
        bankAccount.balance += amount;
        console.log(`The balance is ${bankAccount.balance}`);
    }else{
        console.log(`Account number not exists.`);
    }
}

getBankAccountDetails('admin','password');
withdrawMoney('admin','password','300','1234123');
depositMoney('1234123', 350.50);