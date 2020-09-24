### 100 Firebase Tips

[YouTube Video by Fireship](https://www.youtube.com/watch?v=iWEgpdVSZyg)

install firebase tool
google cloud sdk

RealtTimeDB vs Firestore
[Pricing](https://firebase.google.com/docs/firestore/rtdb-vs-firestore#pricing)

> Cloud Firestore supports daily spending limits for Google App Engine projects, to make sure you don't go over the costs you're comfortable with.

Firestore = do you have more data, and more database reads?, then choose this
RealTime = do you have less data, and more writes to the database? choose this one

Stop worrying about pricing
FB is expensive if:
a) Your app is successful
b) You made a mistake

Make a backup yo

reactfire

get good at async await, check out his video

code this not that RxJS

one-to-one relations are posible
ref.set({ someData}, { merge: true})

one-to-many via sub collections
Group Collection; db.collectionGroup

many-to-many using an embedded map

.get() = single read
.onSnapShot = realtime or UI changes
query.onSnapShot(q => q.docChanges().map(change =

db.enablePersistence({sync tabs})

    Auto-index your copound queries by click on the link in the console

    Access lesser known features with REST

    Use global variables
    Write idempotent code

Avoid infinite loops

always return a fnuciton

checkout pubsub functions

batch delete: 21:40
