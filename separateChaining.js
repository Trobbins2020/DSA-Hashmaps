// 7. Separate Chaining
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class HashMap {
  constructor(initialCapacity = 8) {
    this.size = 0;
    this._hashTable = new Array(initialCapacity);
    this._capacity = initialCapacity;
    this._deleted = 0;
  }
  set(item) {
    let key = this._hashString(item);
    let node = new Node(item);
    if (this._hashTable[key]) {
      node.next = this._hashTable[key];
    }
    this._hashTable[key] = node;
  }
  get(key) {
    let hash = this._hashString(key);
    if (!this._hashTable[hash]) return null;
    let chain = this._hashTable[hash];
    if (chain.hasOwnProperty(key)) {
      return chain[key];
    }
    return null;
  }
  remove(item) {
    let key = this._hashString(item);
    if (this._hashTable[key]) {
      if (this._hashTable[key].data === item) {
        this._hashTable[key] = this._hashTable[key].next;
      } else {
        let current = this._hashTable[key].next;
        let prev = this._hashTable[key];
        while (current) {
          if (current.data === item) {
            prev.next = current.next;
          }
          prev = current;
          current = current.next;
        }
      }
    }
  }
  _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
}

const lotr = new HashMap();
lotr.set("Hobbit");
lotr.set("Hobbit");
lotr.set("Wizard");
lotr.set("Human");
lotr.set("Elf");
lotr.set("Maiar");
lotr.set("Maiar");
lotr.set("RingBearer");
lotr.set("LadyOfLight");
console.log(lotr);
