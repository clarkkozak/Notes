# Notes

Firestore Pagination

Query.limitToLast(n)

pagination
divide a large collection into small pages

next page ->
prev page...not so easy

NOW we have limitToLast(n)

Svelte? SveletFire?

General Logic

const query = Query.orderBy(field).limit(pageSize)

func nextPage(last)
return
Query
.orderBy(last[field])
.startAfter(last[field])
.limit(pageSize)

func prevPage(first) {
return
Query
.orderBy(field)
.endBefore(first[field])
.limitToLast(pageSize)

App

query needs to be a set to a function

let query = ref => ref.orderBy(field).limit(pageSize)
