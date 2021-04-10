module Test 
  ( another 
  ) where


import Data.List ( (\\) )  -- (\\) is set-difference for unordered lists

primesTo :: (Eq a, Num a, Enum a) => a -> [a]
primesTo m = sieve [2..m]
             where 
             sieve (x:xs) = x : sieve (xs \\ [x,x+x..m])
             sieve [] = []

another :: IO ()
another = print (primesTo 10000)
