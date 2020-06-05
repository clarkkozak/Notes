import { compose, pipe } from "lodash/fp";
let input = "    JavaScript   "
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim()
// const wrapUndefinied = (type, str) => `<${type}>${str}</${type}>`
const wrap = type => str => `<${type}>${str}</${type}>`
const toLowerCase = (str) => str.toLowerCase()
const log = (str) => console.log(str)

// functional compositation
// log(wrapInDiv(toLowerCase(trim(input))))

// run all functions from right to left...still

// const transform = compose(log, wrapInDiv, toLowerCase, trim)
// transform(input)

// run all functions from left to right
// const transformCorrectly = pipe(trim, toLowerCase, wrapUndefinied, log)  // output: <javascript>undefined</javascript>
// WHY?!
// In pipe, the output of the current function, is the input passed to the next function
// can't passed `wrapUndefinied("div")` because each argument of `pipe` needs to be a function

const transformCorrectly = pipe(trim, toLowerCase, wrap('div'), log)  // output: <div>javascript</div>
transformCorrectly(input)