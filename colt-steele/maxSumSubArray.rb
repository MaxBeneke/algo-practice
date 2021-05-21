def max_sub_array_sum(arr, num)
    if num > arr.length
        return null
    end
    maxSum = 0
    currentSum = 0

    i = 0

    while i < arr.length do
        currentSum += arr[i]

        if i >= num - 1
            maxSum = [maxSum, currentSum].max
            currentSum -= arr[i - (num - 1)]
        end
        i += 1
    end
    return maxSum
end

puts max_sub_array_sum([100,200,300,400], 2)