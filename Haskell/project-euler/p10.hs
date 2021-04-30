import Data.Numbers.Primes

solve = sum $ takeWhile (\x -> x < 2000000) primes
        
main :: IO ()
main = putStrLn (show solve)
