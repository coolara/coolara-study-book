class MinHeap {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[0];
  }
  size() {
    return this.data.length;
  }
  push(x) {
    this.data.push(x);
    this.liftUp(this.data.length - 1);
  }
  compare(i, j) {
    return this.data[i] - this.data[j] < 0;
  }
  swap(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
  liftUp(ind) {
    let index = ind;
    while (index > 0) {
      let parentIndex = (index - 1) >> 1;
      if (this.compare(index, parentIndex)) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }
  pop() {
    const last = this.data.pop();
    if (this.size() != 0) {
      this.data[0] = last;
      this.liftDown(0);
    }
  }
  liftDown(ind) {
    // 先和左比
    let n = this.data.length;
    let halfLen = n >> 1;
    while (ind < halfLen) {
      let left = (ind + 1) * 2 - 1;
      let right = left + 1;
      if (left < halfLen && this.compare(left, ind)) {
        if (right < n && this.compare(right, left)) {
          this.swap(ind, right);
          ind = right;
        } else {
          this.swap(ind, left);
          ind = left;
        }
      } else if (right < n && this.compare(right, ind)) {
        this.swap(ind, right);
        ind = right;
      } else {
        break;
      }
    }
  }
  print() {
    console.log(this.data);
  }
}
var KthLargest = function (k, nums) {
  this.heap = new MinHeap();
  this.k = k;
  for (const num of nums) {
    this.add(num);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.push(val);
  if (this.heap.size() > this.k) {
    this.heap.pop();
  }
  this.heap.print();
  return this.heap.peek();
};
kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // return 4
kthLargest.add(5); // return 5
kthLargest.add(10); // return 5
kthLargest.add(9); // return 8
kthLargest.add(4); // return 8

// [ 4 ]
// [ 4, 5 ]
// [ 4, 5, 8 ]
// [ 4, 5, 8 ]
// [ 4, 5, 8 ]
// [ 5, 5, 8 ]
// [ 5, 10, 8 ]
// [ 8, 9, 10 ]
// [ 8, 9, 10 ]
