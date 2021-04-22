nums :: [Int]
nums = [1..999] -- we want numbers below (and not equal to) 1000

solve :: [Int] -> Int
solve numbers = foldr (+) 0 $ filter (\x -> x `mod` 3 == 0 || x `mod` 5 == 0) numbers

ans :: Int
ans = solve nums

