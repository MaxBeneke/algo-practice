def count_zeroes(arr)
    slice = 0
    count = true
    i = 0
    while count do 
        if arr[i] === 0 do
            count = false
        else 
        slice++
        i++
        end
    end
    return arr.length - slice
end

puts count_zeroes([1,1,1,1,1,0,0,0])
