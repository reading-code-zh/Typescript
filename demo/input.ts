type Test<T> = T extends boolean ? "Y" : "N";
type Res = Test<number | boolean>;
const res = 1;
console.log(res);
