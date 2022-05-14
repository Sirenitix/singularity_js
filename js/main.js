function invert(obj) {
  let invertObject = {}
  for (const [key, value] of Object.entries(obj)) {
    invertObject[value] = key
  }
  return invertObject
}

console.log(invert({ test: 1 }));
