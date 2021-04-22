-- n = 1  2  3  4  5  6    7   8   9   10
--    [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

calcFibs :: Int -> [Int]
calcFibs 0  = [1]
calcFibs 1  = [1]
calcFibs n 
  | n > 1 = (sumLastTwo n) : xs 
  | otherwise = (last $ calcFibs 1) : xs
 where xs = []

lastTwoElems :: Int -> [Int]
lastTwoElems n = (calcFibs (n - 2)) ++ (calcFibs ((n - 1)))

sumLastTwo n = sum $ lastTwoElems n

calcFibsList :: Int -> [Int]
calcFibsList 0 = [1]
calcFibsList 1 = [1]
calcFibsList n = calcFibsList(n - 1) ++ calcFibs(n)
