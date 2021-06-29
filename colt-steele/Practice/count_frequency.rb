def count_frequency(arr, num)
    count = 0
    arr.each do |i|
        if i === num
            count += 1
        end
    end
    count
end

puts count_frequency([1,1,1,2,2,2,2], 2)