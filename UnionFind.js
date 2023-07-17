class UnionFind{
    constructor(nodes){
        this._count = nodes.length
        this._parents = {}
        nodes.forEach(n => {
            this._parents[n] = n
        });
    }

    _union(a,b){
        let A = this._find(a);
        let B = this._find(b);
        if (A < B) {
            if (this._parents[b] != b){
                this._union(this._parents[b], a);
            }
            this._parents[b] = this._parents[a];
        } else {
            if (this._parents[a] != a){
                this._union(this._parents[a], b);
            }
            this._parents[a] = this._parents[b];
        }
    }

    _find(a){
        while(this._parents[a]!==a){
            a = this._parents[a]
        }
        return a;
    }

    _connected(a,b){
        return this._find(a)===this._find(b);
    }
}

module.exports.UnionFind = UnionFind;