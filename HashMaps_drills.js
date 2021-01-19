const HashMap = require("./hashMap");
function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandolf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");
  console.log(lotr);
  // No all items are not in the hashed table
  console.log("Maiar key:", lotr.get("Maiar"));
  console.log("Hobbit key:", lotr.get("Hobbit"));
  // Maiar key: Sauron - Maiar have two value
  // Hobbit key: Frodo - Hobbit also have two value
  // Capacity is 24 - The initial capacity of every hash table is 16 and after that depends on the values
  return lotr;
}

// main();

// 2. WhatDoesThisDo
const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap(); // Creating Hash Map
  map1.set(str1, 10); // key: 'Hello World.', value: 10
  map1.set(str2, 20); // (keys are the same) value: 20
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20); // key: 'Hello World.', value: 20
  map2.set(str4, 10); // (keys are the same) value: 10
  console.log(map1.get(str1)); // 20
  console.log(map2.get(str3)); // 10
};

// 4. Remove duplicates
const duplicates = () => {
  //   const str = "google all that you think can think of";
  const str = "google";
  const duplicate = new HashMap();
  for (let i = 0; i < str.length; i++) {
    duplicate.set(str[i], str[i]);
  }
  let newStr = "";
  duplicate._hashTable.forEach((letter) => {
    newStr += letter.value;
  });
  console.log(newStr);
};
// duplicates();

// 5. Any permutation a palindrome
const str = "acecarr";
// const str = "north";
const permutation = (str) => {
  const palindromeMap = new Map();
  let odd = 0;
  for (let i = 0; i < str.length; i++) {
    if (palindromeMap.get(str[i]) === undefined) {
      palindromeMap.set(str[i], 1);
    } else {
      let char = palindromeMap.get(str[i]);
      palindromeMap.set(str[i], (char += 1));
    }
  }
  for (let i = 0; i < palindromeMap.size; i++) {
    if (palindromeMap.get(str[i]) % 2 !== 0) {
      odd++;
    }
    if (odd > 1) {
      return false;
    }
  }
  return true;
};

// console.log(permutation(str));

// 6. Anagram grouping
const anagramGrouping = (strArr) => {
  const anagramMap = new Map();
  strArr.forEach((word) => {
    let sorted = word.split("").sort().join("");
    if (anagramMap.has(sorted)) {
      anagramMap.get(sorted).push(word);
    } else {
      anagramMap.set(sorted, [word]);
    }
  });
  return [...anagramMap.values()];
};

// console.log(
//   anagramGrouping(["east", "cars", "acre", "arcs", "teas", "eats", "race"])
// );
