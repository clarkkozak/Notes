import { compose, pipe } from "lodash/fp";
let input = "    JavaScript   "
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim()
const wrapInDiv = (str) => `<div>${str}</div>`
const toLowerCase = (str) => str.toLowerCase()
const log = (str) => console.log(str)

// functional compositation
log(wrapInDiv(toLowerCase(trim(input))))

// run all functions from right to left...still
const transform = compose(log, wrapInDiv, toLowerCase, trim)
transform(input)

// run all functions from left to right
const transformCorrectly = pipe(trim,toLowerCase, wrapInDiv, log)
transformCorrectly(input)