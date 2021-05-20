// Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(arg1, arg2, arg3) {
    if (arguments.length === 0) return true;
    let lookup = {};
    for (let i = 0; i < arguments.length; i++) {
      let arg = arguments[i];
      if (!lookup[arg]) {
          lookup[arg] = 1;
      } else return true;
  }
  return false;
}