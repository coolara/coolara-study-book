// 快速查找
class quickFind{
  constructor(n){
    this.fa = []
    for(let i = 0;i<=n;i++){
      this.fa[i] = i
    }
  }
  union(p, q){
    if(this.fa[p] == this.fa[q])return 
    var fq = this.fa[q]
    for(let i = 0; i<=n; i++){
      if(this.fa[i] == fq) this.fa[i] = this.fa[p]
    }
  }
  find(p){
    return this.fa[p]
  }
} 
// 快速合并
class WeightedUnionFind{
  constructor(n){
    this.fa = []
    for(let i = 0;i<=n;i++){
      this.fa[i] = i
    }
  }
  find(p){
    if(this.fa[p] == p) return p
    return this.find(this.fa[p])
  }
  union(p,q){
    let pr = this.find(p)
    let qr = this.find(q)
    if(pr == qr) return 
    this.fa[p] = qr
  }
  
}
