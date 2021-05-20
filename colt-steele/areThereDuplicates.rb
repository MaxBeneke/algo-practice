def are_there_duplicates(arg1, arg2, arg3)
    args = method(__method__).parameters.map { |arg| arg[1].to_s }
    lookup = {}
    
    for i in args do 
        if !lookup[i]
            lookup[i] = 1
            puts i
        else 
            return true
        end
    end
    return false
end

puts are_there_duplicates('a', 'c', 'c')