
sumSquareDifference :: [Int] -> Int

sumSquareDifference list = ((^2) $ sum list) - (sum $ map (^2) list)

solve :: Int

solve = sumSquareDifference [1..100]
