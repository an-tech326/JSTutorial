//変数
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

//テンプレート文字列

const name = "山田太郎";
const age = 31;

const message1 = "私の名前は" + name + "です。" + age + "歳です。";
console.log(message1);

const message2 = `私の名前は${name}です。${age}歳です。`;
console.log(message2);

//従来の関数
function func1(str){
    return str;
}
console.log(func1("従来の関数"));

//アロー関数
const func2 = (str) => {
    return str;
}
console.log(func2("アロー関数"));

const func3 = str => str;
console.log(func3("アロー関数の省略記法"));

const func4 = (str1,str2) => str1 + str2;
console.log(func4("アロー関数の","省略記法2"));

const func5 = (str1,str2) => ({
    name: str1,
    age: str2,
});
console.log(func5("プロパティ"));

//分割代入
const myProfile = {
    pname:"山田太郎",
    page:31
};
const message3 = `名前は${myProfile.pname},年齢は${myProfile.page}`;
console.log(message3);

const {pname, page}=myProfile;
const message4 = `名前は${pname},年齢は${page}`;
console.log(message4);

const myProfile2 = ["山田太郎","31"];
const message5 = `名前は${myProfile2[0]},年齢は${myProfile2[1]}`;
console.log(message5);
//デフォルト値
const defaultVal = (name ="guest") => console.log(`hello ${name}`);
defaultVal();

const myProfile3={
    age3:31
};
const {age3,name3="guest"} = myProfile3;
console.log(age3);
console.log(name3);
//オブジェクトの省略記法
const name4 = "山田太郎";
const age4 = 31;
const myProfile4={
    name4,
    age4
};
console.log(myProfile4);

//スプレッド構文
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1,num2) => console.log(num1+num2);
sumFunc(arr1[0],arr1[1]);
sumFunc(...arr1);

const arr2 = [1,2,3,4,5]
const [arrnum1,arrnum2,...arr3]=arr2
console.log(arrnum1);
console.log(arrnum2);
console.log(arr3);

const arr4 = [10,20];
const arr5 = [30,40];
const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4,...arr5];
console.log(arr7);

//map
const nameArr = ["田中","山田"]
for (let index = 0;index < nameArr.length;index++)
{
    console.log(nameArr[index]);
}
nameArr.map((name)=>{console.log(name);});
const nameArr2 = nameArr.map((name)=>{return name;});
console.log(nameArr2);
//filter
const numArr1 = [1,2,3,4,5];
const numArr2 = numArr1.filter((num)=>{return num %2===1;});
console.log(numArr2);

nameArr.map((name,index)=>{console.log(`${index+1}:${name}`);});
//3項
numArr1.map((num)=>{num%2===1?console.log("odd"):console.log("evem");})
