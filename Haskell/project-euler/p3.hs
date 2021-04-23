magicNum :: Int
magicNum = 600851475143

primeFactor :: Int -> [Int]
primeFactor n = filter (\x -> n `mod` x == 0) (take 1000 primes)

primes :: [Int]
primes = filterPrime [2..]
  where filterPrime (p:xs) =
          p : filterPrime [x | x <- xs, x `mod` p /= 0]
          
solve :: Int
solve = last $ primeFactor magicNum

factorList :: Int -> [Int]
factorList value = factorsGreaterOrEqual 1
  where
    factorsGreaterOrEqual test
      | (test == value) = [value]
      | (value `mod` test == 0) = test : restOfFactors
      | otherwise = restOfFactors
      where restOfFactors = factorsGreaterOrEqual (test + 1)
