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

    reduce: function(collection, callback, acc) {
      if (acc) {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i])
        }
        return acc
      } else {
        acc = collection[0]
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i])
        }
      }
      return acc
    },

    find: function(collection, predicate) {
      const specificCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < specificCollection.length; i++) {
        if (predicate(specificCollection[i])) {
          return specificCollection[i]
        }
      }
      return undefined
    },
    
    filter: function(collection, predicate) {
      const specificCollection = (collection instanceof Array) ? collection : Object.values(collection)
      const filteredArr = []
      for (let i = 0; i < specificCollection.length; i++) {
        if (predicate(specificCollection[i])) {
          filteredArr.push(specificCollection[i])
        }
      }
      return filteredArr
    },
    
     size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },	   
    
    first: function(arr, num) {
      return num ? arr.slice(0, num) : arr[0]
    },

    last: function(arr, num) {
      return num ? arr.slice(arr.length - num, arr.length) : arr[arr.length - 1]
    },	    
    
    compact: function(arr) {
      const falsey = [false, null, 0, "", undefined, NaN]
      return arr.filter(value => !falsey.includes(value))
    },


    sortBy: function(arr, callback) {
      const newArr = [...arr]
      return newArr.sort((a, b) => callback(a) - callback(b))
    },	    


  }
})()

fi.libraryMethod()
