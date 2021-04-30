nums :: [Int]
nums = [1..999] -- we want numbers below (and not equal to) 1000

naiveSolve :: [Int] -> Int
naiveSolve numbers = sum $ filter (\x -> x `mod` 3 == 0 || x `mod` 5 == 0) numbers


sumSeries :: Int -> Int
sumSeries n = (n * (n + 1)) `div` 2

sumSeriesInterval :: Int -> Int -> Int
sumSeriesInterval x y = x * (sumSeries (y `div` x))

solve = sumSeriesInterval 3 1000 + sumSeriesInterval 5 1000 - sumSeriesInterval 15 1000

ans :: Int
ans = solve 

