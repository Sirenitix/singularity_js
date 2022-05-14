import "babel-polyfill"
const timeout = (delay, callback) =>
{

      let p1 = new Promise(function(resolve, reject) {
          resolve(callback)
      }).then((res) => res)


      let p2 = new Promise(function(resolve, reject) {
        setTimeout(reject, delay, new Error('timeout'));
      }).catch((res) => res.message)


  return function (a, b){
  //   return Promise.any([p1, p2]).then(function(value)
  //   {
  //     console.log(p1)
  //     console.log(p2)
  //     return new Promise(function(resolve, reject) {
  //       console.log(value)
  //       resolve(value(a,b))
  //   }).then((data) => data).catch(
  //       (value) => value
  //     )
  // })

    (async function() {
      const asyncFunctions = [p1, p2];

      for (const asyncFn of asyncFunctions) {
        const result = await (await asyncFn)();
        console.log(result)
      }
    })();



  }
}



const delayed =
  (delay) =>
    (...v) =>
      new Promise((res) => setTimeout(res, delay, v));

timeout(15, delayed(5))(2, 3)
  .then((res) => console.log(res)) // [2, 3]
  .catch((err) => console.log(err.message));

timeout(5, delayed(15))(2, 3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message)); //timeout

