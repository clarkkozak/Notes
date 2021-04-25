-- n = 1  2  3  4  5  6    7   8   9   10
--    [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

fibs :: [Int]
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)

isLessThan4Mil :: Int -> Bool
isLessThan4Mil x = x < 4000000

fibsLessThan4MilAndEven :: [Int]
fibsLessThan4MilAndEven = filter even $ takeWhile isLessThan4Mil fibs

solve :: Int
solve = sum $ fibsLessThan4MilAndEven 
