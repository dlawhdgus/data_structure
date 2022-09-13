const stack =[];  //Last In First Out

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(5)  //push(value) value값을 넣는다
console.log(stack)

//1,2,3,5의 값이 차례대로 쌓인다.

//pop() 위에 있는 값을 가져 온다.
stack.pop()  //5가 빠진다
console.log(stack)
stack.pop()  //3가 빠진다
console.log(stack)
stack.pop()  //2가 빠진다
console.log(stack)
stack.pop()  //1가 빠진다
console.log(stack) //빈 배열이 된다.