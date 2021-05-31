// Write a recursive function that does a factorial e.g. 4! == 24

function factorial(num){
    if (num <= 1){
        return 1;
    }
    return num * factorial(num - 1)
}
