import Data.Numbers.Primes (primeFactors)
import Control.Monad (filterM)
import Data.List
import Data.Maybe

triangleNumber :: Integer -> Integer
triangleNumber n = n * (n+1) `div` 2

triangleNumbers :: [Integer]
triangleNumbers = map triangleNumber [1..]

powerSet = filterM (const [True, False])

factors = map product . nub . powerSet . primeFactors

solve = head $ fromJust $ find (\x -> length x > 500) $ map factors triangleNumbers
