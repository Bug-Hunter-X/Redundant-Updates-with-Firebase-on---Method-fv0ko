```javascript
//Solution 1: Use once() for single data retrieval
db.ref('path/to/data').once('value', function(snapshot) {
  console.log(snapshot.val());
});

//Solution 2: Use off() to detach the listener when no longer needed
let listener = db.ref('path/to/data').on('value', function(snapshot) {
  console.log(snapshot.val());
});

// ... some time later...

db.ref('path/to/data').off('value', listener);
```