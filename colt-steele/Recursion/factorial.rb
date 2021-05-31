def factorial(num)
    if num <=1
        return 1
    end
    return num * factorial(num - 1)
end

puts factorial(4)