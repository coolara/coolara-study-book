class Heap {
  constructor() {
    this.data = [];
    this.cnt = 0;
  }
  size() {
    return this.cnt;
  }
  top() {
    return this.data[0];
  }
  //[1,2,3，4] 3
  push(val) {
    this.data[this.cnt++] = val;
    this.liftUp(this.cnt - 1);
  }
  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
  liftUp(ind) {
    while (ind) {
      if (this.data[ind] > this.data[(ind - 1) >> 1]) {
        this.swap(ind, (ind - 1) >> 1);
        ind = (ind - 1) >> 1;
      }
    }
  }
  pop() {
    if (this.size() == 0) return;
    // this.data[0] = this.data.pop();
    this.swap(0, this.cnt - 1);
    this.cnt -= 1;
    this.liftDown(0);
  }
  liftDown(ind) {
    let n = this.cnt - 1; // ind 父节点 怎么求子  ind * 2 +1
    while (ind * 2 + 1 <= n) {
      let temp = ind;
      // 和左子节点 调整
      if (this.data[temp] < this.data[ind * 2 + 1]) {
        temp = ind * 2 + 1;
      }
      // 和右子节点 调整
      if (ind * 2 + 2 <= n && this.data[temp] < this.data[ind * 2 + 2]) {
        temp = ind * 2 + 2;
      }
      if (temp == ind) break;
      this.swap(temp, ind);
      ind = temp;
    }
  }
  print() {
    console.log(this.data);
  }
}

let heap = new Heap();
heap.push(3);
heap.push(8);
heap.push(12);
heap.push(16);
let len = heap.size() - 1;
console.log(len);
while (len--) {
  heap.pop();
}
heap.print();
