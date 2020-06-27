// Answer found in Discussion; with descriptive variables
function birthday(chocolateBar, day, month) {
  let count = 0;
  
  for (let index = 0; index < chocolateBar.length; index++) {
    let chocolateSection = chocolateBar.slice(index, month + index)
    if (chocolateSection.reduce((total, chocolateValue) => total + chocolateValue) === day) {
      count++
    }
  }
  return count++
}

// How I first wrote it
function birthday(chocolateBar, day, month) {
  const res = []
  const sumReducer = (total, chocolateValue) => total + chocolateValue
  
  if (month === 1) return chocolateBar.filter(value => value === day).length
  
  if (month > chocolateBar.length) return 0 

  for (let index = 0; index < chocolateBar.length - month; index++) {
    const chocolateSection = chocolateBar.slice(index, month + index)
    const sum = chocolateSection.reduce(sumReducer)

    
    if (sum === day) res.push(sum)
  }

  return res.length
}

// How I could have wrote it
function birthday(chocolateBar, day, month) {
  const res = []
  const sumReducer = (total, chocolateValue) => total + chocolateValue

  for (let index = 0; index < chocolateBar.length; index++) {
    const chocolateSection = chocolateBar.slice(index, month + index)
    const sum = chocolateSection.reduce(sumReducer)
    
    if (sum === day) res.push(sum)
  }

  return res.length
}

/*
# What I learned
- I'm getting familiar with the Array methods
- I knew how to get the section; yet messed up the looping; thinking that I would go out of bounds.
  - The "out of bounds" worry comes from early Java experience when I was learning loops
- In my everyday programming I don't usually write loops like this and opt for forEach; yet there is more control with for loops
- I tried to store the sums so that I can debug easier as well; when count will do that trick just as well.
- What I don't know, and need to get used to asking myself are the following:
  - Can I refactor this?
  - Do I need to comment on this for later?
  - Does this need to be optimize?
*/