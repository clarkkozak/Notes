import Data.Tuple (swap)
import Data.List (unfoldr)

fac :: Integer -> Integer
fac 1 = 1
fac n = n * fac (n-1) 

digits n = unfoldr step n
  where step 0 = Nothing
        step k = Just (swap $ quotRem k 10)

solve = sum $ digits $ fac 100
