def average_pair(arr, int)
    if arr.length === 0 
        return false
    end
    i = 0
    j = arr.length - 1
    
    while i < j do
        avg = ((arr[i] + arr[j]) / 2)
        puts avg
        if avg > int 
            j -= 1
        avg = ((arr[i] + arr[j]) / 2)
        elsif avg < int
            i += 1
            avg = ((arr[i] + arr[j]) / 2)
        elsif avg === int
            return true
        end
    end
    false
end

puts average_pair([1,2,3], 2.5)