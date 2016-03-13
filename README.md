#Mutend

a stupid multi-extend-like mixin method for es6

## Just use like this

```javascript

class Base {
  constructor() {
    this.baseValue = 'base'
  }
}

let moduleA = {
  constructor() {
    this.a = 'a'
  }
}

let moduleB = {
  get(prop) {
    return this[prop]
  }
}

class Test extends mutend(Base, moduleA, moduleB) {}

let test = new Test()
test.get('a') // a
test.get('baseValue') // base
```

OK, I know no one will care this except me...