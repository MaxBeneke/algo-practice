def count_unique_values(arr)
    i = 0
    j = 1

    if arr.length === 0 
        puts 0
    end

    while j <= arr.length - 1
        if arr[i] == arr[j] 
            j += 1
        elsif arr[i] != arr[j]
            i++
            arr[i] = arr[j]
            j++
        end
    end

    puts i+1
end

