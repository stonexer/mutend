"use strict"
const expect = require('chai').expect
const mutend = require('../index')

class Base {
  constructor() {
    this.baseValue = 'base'
  }
  get() {
    return this.baseValue
  }
}

  
describe('Mutend', function () {
  it('should has base property', function () {
    class Test extends mutend(Base) {}
    let test = new Test()
    
    expect(test).to.have.property('baseValue', 'base')
  })
  
  it('should has base method', function () {
    class Test extends mutend(Base) {}
    let test = new Test()
    
    expect(test.get()).to.equal('base')
  })
  
  it('should has mixin property', function () {
    let moduleA = {
      constructor() {
        this.aValue = "a"
      }
    }
    let moduleB = {
      constructor() {
        this.bValue = "b"
      }
    }
    class Test extends mutend(Base, moduleA, moduleB) {}
    let test = new Test()
    
    expect(test).to.have.property('aValue', 'a')
    expect(test).to.have.property('bValue', 'b')
  })
  
  it('should has mixin methods', function () {
    let moduleA = {
      constructor() {
        this.aValue = "a"
      },
      getB() {
        return this.bValue
      }
    }
    let moduleB = {
      constructor() {
        this.bValue = "b"
      },
      getA() {
        return this.aValue
      }
    }
    class Test extends mutend(Base, moduleA, moduleB) {}
    let test = new Test()
    
    expect(test.getA()).to.equal('a')
    expect(test.getB()).to.equal('b')
  })
  
  it('should replace base property', function () {
    let moduleA = {
      constructor() {
        this.baseValue = "a"
      }
    }
    class Test extends mutend(Base, moduleA) {}
    let test = new Test()
    
    expect(test).to.have.property('baseValue', 'a')
  })
  
  it('should replace base method', function () {
    let moduleA = {
      get() {
        return 'a'
      }
    }
    class Test extends mutend(Base, moduleA) {}
    let test = new Test()
    
    expect(test.get()).to.equal('a')
  })
})
  