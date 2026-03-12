// 重写全局解构逻辑，兼容对象的数组解构（核心修复）
  // global.Object.prototype[Symbol.iterator] = function* () {
  //   for (const key of Object.keys(this)) {
  //     yield this[key];
  //   }
  // };
  globalThis.Object.prototype[Symbol.iterator] = function* () {
    for (const key of Object.keys(this)) {
      yield this[key];
    }
  };
//让下面的代码成立
var [a,b]={
    a:3,
    b:4,
};
console.log(a,b) //3 4