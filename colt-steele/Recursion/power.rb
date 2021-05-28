def power(base, exp)
    if exp <= 0
        return 1
    end
    return base * power(base, exp - 1)
end

puts power(2, 3)