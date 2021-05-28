def is_subsequence(str1, str2)
    i = 0
    j = 0
    if (!str1) 
        return true
    end
    while (j < str2.length) do
        if str2[j] === str1[i]
            i += 1
        end
        if i === str1.length
            return true
        end
        j += 1
    end
    false
end

puts is_subsequence('abc', 'acadabra')