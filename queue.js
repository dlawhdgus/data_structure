const queue = []
//First In First Out 구조를 가졌다.
queue.push(1)
console.log(queue) //stack 과 같이 1 이 push된다.
queue.push(2)
queue.push(3)
queue.push(4)

console.log(queue)

queue.shift()
console.log(queue) //1이 빠져 나간다. FIFO 구조기에 1이 먼저 들어왔기 때문에 1이 먼저 나간다.
queue.shift()
console.log(queue)
queue.shift()
console.log(queue)
queue.shift()
console.log(queue)