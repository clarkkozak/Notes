triangleNumber :: Integer -> Integer
triangleNumber n = n * (n+1) `div` 2

triangleNumbers :: [Integer]
triangleNumbers = map triangleNumber [1..]

factorList :: Integer -> [Integer]
factorList value = factorsGreaterOrEqual 1
  where
    factorsGreaterOrEqual test
      | (test == value) = [value]
      | (value `mod` test == 0) = test : restOfFactors
      | otherwise = restOfFactors
      where restOfFactors = factorsGreaterOrEqual (test + 1)

factorListOver5divsors :: Integer -> Bool
factorListOver5divsors list = (length $ factorList list) < 500

-- optimization needed: map length $ map factorList triangleNumbers
