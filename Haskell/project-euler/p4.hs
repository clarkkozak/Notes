isPalindrome :: Int -> Bool
isPalindrome n = reverse (show n) == show n

listOfThreeDigitNums :: [Int]
listOfThreeDigitNums = [100..999]

solve :: Int
solve = maximum [ a*b | a <- listOfThreeDigitNums, b <- listOfThreeDigitNums, isPalindrome (a*b)]   

listOfPalProducts :: [(Int, Int, Int)]
listOfPalProducts = [ let c = a * b in (c,a,b) | a <- listOfThreeDigitNums, b <- listOfThreeDigitNums, isPalindrome (a*b)]   

theProductsOfTheAnswer :: [(Int, Int, Int)]
theProductsOfTheAnswer = [ let x = y * z in (x,y,z) | y <- listOfThreeDigitNums, z <- listOfThreeDigitNums, isPalindrome (y*z) && y * z == solve]   
