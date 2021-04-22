-- n = 1  2  3  4  5  6    7   8   9   10
--    [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

calcFibs :: Int -> [Int]
calcFibs 0  = [1]
calcFibs 1  = [1]
calcFibs n = xs ++ [sum (takeLast2 xs)] 
  where xs = calcFibs (n - 1)

takeLast2 :: [Int] -> [Int]
takeLast2 = reverse . take 2 . reverse 

isLessThan4Mil :: Int -> Bool
isLessThan4Mil x = x < 4000000

fibsLessThan4MilAndEven :: [Int]
fibsLessThan4MilAndEven = filter even $ filter isLessThan4Mil $ calcFibs 50

solve :: Int
solve = sum $ filter even $ filter isLessThan4Mil $ calcFibs 50