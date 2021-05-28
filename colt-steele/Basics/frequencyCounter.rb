# Attempt 1

def same_frequency(num1, num2)
    arr1 = num1.to_s
    arr2 = num2.to_s
    lookup = {}

    arr1.each_char { |i|
        num = arr1[i]
        lookup[num] ? lookup[num] += 1 : lookup[num] = 1
    }

    arr2.each_char { |j|
        num = arr2[j]
        if !lookup[num] || lookup[num] === 0
            return false
        else
            lookup[num] -= 1;
        end
}
true
end

puts same_frequency(22, 222)