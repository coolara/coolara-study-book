var reverse = function (arr, n, ind) {
  for (let i = 0, j = n - 1; i <= j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    ind[arr[i]] = i;
    ind[arr[j]] = j;
  }
};
var pancakeSort = function (arr) {
  var res = [],
    ind = [],
    n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    ind[arr[i]] = i;
  }
  for (let i = n; i >= 1; i--) {
    if (ind[i] + 1 == i) continue;
    if (ind[i] + 1 !== 1) {
      res.push(ind[i] + 1);
      reverse(arr, ind[i] + 1, ind);
    }
    if (i !== 1) {
      res.push(i);
      reverse(arr, i, ind);
    }
  }
  return res;
};

pancakeSort([3, 2, 4, 1]);
