 module Main where
 import System.Environment
 
 main :: IO ()
 main = do
     args <- getArgs
     file <- readFile "input.txt"
     putStrLn file
     writeFile "output.txt" ((args !! 0) ++ "\n")
