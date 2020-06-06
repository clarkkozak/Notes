axios
bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

App.js
state:
posts
loading
currentPage
postPerPage (10)
useEffect to get

// Chnage page
const paginate = (pagenubmer) => setCurrentPage(pageNumber)

// get current (limited) posts
const indexOfLastPost = currentPage \* postsPerage
indexOfFirstPots = indexOfLastPost - postsPerPage  
 currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost

don't put async on within useEffect
create a fnuction instead of useEffect

useEffect func
fetchPosts
setLoading
const res = axios.get(url)

did you get your posts?

h1.text-primary mb-3
Posts posts={currentPosts} loading

Posts.js
props:
posts,
loading
if loading
return
ul.list-group.mb-4
posts.map => post => li.list-group-item key={post.id

Pagination.js
props
postsPerPage
totalpostsPerPage (posts.length)
paginate={paginate}

const pageNumbers[]

for(let i = 1; i <= Math.ceil(totalPosts /postsPerPagae); i++) pageNumbers.push(i)

return
nav>ul.pagination -> pageNumbers.map(num => li key num => a.page-link href="!#" -> number
a=onClick= paginate(number)

https://github.com/bradtraversy/simple_react_pagination
https://www.youtube.com/watch?v=IYCa1F-OWmk
