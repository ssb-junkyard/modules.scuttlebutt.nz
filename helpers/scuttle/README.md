# scuttle helpers

these are a collection of helpers modules which make reading and writing from the database easier.

most of them follow a similar pattern:
- are a function which takes a `server` and returns a collection of functions
- functions are described in `./methods.js`
- uses the module `scuttle-inject` to prepare the raw methods into that `server` accepting function 
- use schemas/ validators (defined in other modules) for safer reading / writing
