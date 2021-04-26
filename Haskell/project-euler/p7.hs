
primes :: [Int]
primes = sieve [2..]
  where sieve (p:xs) =
          p : sieve [x | x <- xs, x `mod` p /= 0]

bruteSolve :: Int
bruteSolve = last $ take 10001 primes

main :: IO ()
main = putStrLn (show bruteSolve)