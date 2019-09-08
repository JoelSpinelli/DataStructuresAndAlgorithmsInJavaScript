class MySet {
  constructor() {
    this.collection = [];
  }

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add(element) {
    if(!this.has(element)) {
      this.collection.push(element);
      return true;
    }

    return false;
  }

  remove(element) {
    if(this.has(element)) {
      index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }

    return false;
  }

  size() {
    return this.collection.length;
  }

  union(otherSet) {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach( e => unionSet.add(e));
    secondSet.forEach( e => unionSet.add(e));
    return unionSet;
  }

  insersection() {
    let intersectionSet = MySet();
    let firstSet = this.values();
    firstSet.forEach( e => {
      if(otherSet.has(e)){
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    let differenceSet = new MySet();
    let firstSet = this.values();
    firstSet.forEach( e => {
      if(!otherSet.has(e)){
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  subset(otherSet) {
    let firstSet = this.values();
    return firstSet.every( value => otherSet.has(value));
  }
}