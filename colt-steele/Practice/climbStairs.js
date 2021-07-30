var climbStairs = function(n) {
    let memo = {};
    
    function helper(n) {
        let value;
        if (n in memo) {
            value = memo[n]
        } else {
            if (n === 0 || n === 1) {
                value = 1;
            } else {
                value = helper(n-1) + helper(n-2);
            }
            memo[n] = value;
        }
        return value;
    }
    return helper(n);
 };



