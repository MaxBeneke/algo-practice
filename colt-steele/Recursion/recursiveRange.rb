def recursive_range(num)
    if num <= 0
        return 0
    end
    return num + recursive_range(num - 1)
end

puts recursive_range(10)