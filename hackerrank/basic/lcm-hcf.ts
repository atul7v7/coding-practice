// WAP to calculate LCM and HCF 

// use reduce to clear reduce concept 
const lcm = (a: number, b: number): number => { 
    return (a*b)/calculateHCF(a,b)
}


const calculateHCF = (a: number, b: number): number => {
    return b === 0 ? a: calculateHCF(b, a % b)
}


console.log('lcm of 7,8', lcm(7,8))
console.log('lcm of 7,70', lcm(7,70))
console.log('lcm of 7,21', lcm(7,21))
console.log('lcm of 10, 25', lcm(10, 25))