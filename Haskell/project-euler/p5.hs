solve :: Int
solve = foldr lcm 1 [1..20]

lcmOfList list = foldr lcm 1 list
