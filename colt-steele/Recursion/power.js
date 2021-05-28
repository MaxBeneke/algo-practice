// Take a base and an exponent and write a recursive function that returns it. E.G 2^3 = 8

function power(base, exp){
    if (exp <= 0){
        return 1;
    }
    return base * power(base, exp - 1);
}