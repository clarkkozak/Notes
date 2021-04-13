-- file: ch01/WC.hs
-- lines beginning with "--" are comments.
--
--
getThings fn = interact $ show . length . fn
getLines = getThings lines
getWords = getThings words 

main = getLines 
