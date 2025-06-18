

var val1 = "var変数";
console.log(val1);

val1 = "var変数の再代入";
console.log(val1);

var val1 = "var変数の再宣言";
console.log(val1);


let val2 = "let変数";
console.log(val2);

val2 = "let変数の再代入";
console.log(val2);

// let val2 = "let変数の再宣言";
// console.log(val2);

const val3 = "const変数";
console.log(val3);

// val3 = "const変数の再代入";
// console.log(val3);

// const val3 = "const変数の再宣言";
// console.log(val3);


const val4 = {
    name: "山田太郎",
    age: 20,
    gender: "男",
}

console.log(val4);

val4.name = "constであってもプロパティは再代入可能";
val4.address = "東京都";
console.log(val4);

const val5 =["dog","cat","bird"];

console.log(val5);
val5.push("fish");
val5[0] = "fox";
console.log(val5);




