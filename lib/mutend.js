"use strict"

let mutend = function(Parent) {
  let mutends = Array.prototype.slice.call(arguments, 1)
  
  class Mixed extends Parent {
  	constructor() {
  		super()
  		mutends.forEach(mutend => {
          mutend['constructor'].apply(this)
          delete(mutend['constructor'])
        })
  	}
  }
  
  mutends.forEach(mutend => {
      Object.assign(Mixed.prototype, mutend)
    })
  
  return Mixed
}

module.exports = mutend