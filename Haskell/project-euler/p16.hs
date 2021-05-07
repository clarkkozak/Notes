import Data.List (unfoldr)
import Data.Tuple (swap)

magicNum = 2 ^ 1000

digits n = unfoldr step n
  where step 0 = Nothing
        step k = Just (swap $ quotRem k 10)

solve = sum $ digits magicNum
