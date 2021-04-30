import Data.List
import Data.Maybe


fibs :: [Int]
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)

fibsLessThan10000 = takeWhile (\x -> x < 1000000000) fibs

first4Digit :: Int
first4Digit = head $ filter (\x -> x > 999) $ fibsLessThan10000

solve = fromMaybe 0 $ elemIndex first4Digit fibsLessThan10000
