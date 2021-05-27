def min_sub_array_len(arr, sum)
    total = 0
    start = 0
    finish = 0
    minLen = Float::INFINITY

    while start < arr.length do
        
        if total < sum && finish < arr.length
            total += arr[finish]
            finish += 1
        elsif total >= sum 
            minLen = [minLen, (finish - start)].min
            total -= arr[start]
            start += 1
        else
            break
        end
    end
    minLen === Float::INFINITY ? 0 : minLen
end 

puts min_sub_array_len([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)