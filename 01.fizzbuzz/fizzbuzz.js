for (let i = 1; i < 21; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    // データ型を文字列に変換することで、色付き出力の問題を解消した
    console.log(i.toString());
  }
}