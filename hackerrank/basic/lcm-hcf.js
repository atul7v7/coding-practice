// WAP to calculate LCM and HCF 
// use reduce to clear reduce concept 
var lcm = function (a, b) {
    return (a * b) / calculateHCF(a, b);
};
var calculateHCF = function (a, b) {
    return b === 0 ? a : calculateHCF(b, a % b);
};
console.log('lcm of 7,8', lcm(7, 8));
console.log('lcm of 7,70', lcm(7, 70));
