def product_of_array(arr)
    if arr.length === 0
        return 1
    end

    return arr[0] * product_of_array(arr[1..arr.length-1])
end

puts product_of_array([1,5,3])