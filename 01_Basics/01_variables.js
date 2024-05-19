const accountId = 122334
let accountEmail = "Mo@gamil.com"
var accountPassword = "2387" // var has problem in scope definition, should not use generally 
accountCity = "Varanasi"
let accountState;
// accountId = 8732419 // Not allowed due to const 
accountEmail = "dkj@gamil.com"
accountPassword = "3241223"
accountCity = "Delhi"


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity ,accountState])