"use strict"

let mutend = function(Parent) {
  let mutends = Array.prototype.slice.call(arguments, 1)
  let mixConstructor = []
  
  mutends.forEach(mutend => {
      if (mutend['constructor']) {
        mixConstructor.push( mutend['constructor'] )
        delete(mutend['constructor'])
      }
    }
  )
  
  class Mixed extends Parent {
  	constructor() {
  		super()
  		mixConstructor.forEach(eachConstructor => eachConstructor.apply(this))
  	}
  }
  
  mutends.forEach(mutend => Object.assign(Mixed.prototype, mutend))
  
  return Mixed
}

module.exports = mutend