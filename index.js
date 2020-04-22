const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const specificCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < specificCollection.length; i++) {
        callback(specificCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const specificCollection = (collection instanceof Array) ? collection : Object.values(collection)
      const newArr = []
      for (let i = 0; i < specificCollection.length; i++) {
        newArr.push(callback(specificCollection[i]))
      }
      return newArr
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
