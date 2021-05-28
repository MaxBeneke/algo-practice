def valid_anagram(first, second)
    if first.length != second.length 
        return false
    end
    lookup = {}

    first.each_char { |c|
        lookup[c] ? lookup[c] += 1 : lookup[c] = 1
    }

    second.each_char { |c| 
        if !lookup[c] 
            return false
        else 
            lookup[c] -= 1
        end
    }
    true
end

# Console Test
if valid_anagram('baby', 'abby')
    puts true
else puts false
end

