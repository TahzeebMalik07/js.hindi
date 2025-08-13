const accountId = 144553;
let accountEmail = "tah345@gmai.com";
var accountPassword = "12345";
let accountCity = "mbd";
let accountState; // renamed for clarity

// accountId = 2 // not allowed

accountEmail = "tahzee2334@gmail.com";
accountPassword = "6675786";
accountCity = "kanpur";
/*
prefer not to use var
because of issue in block scope and functional scope*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);
