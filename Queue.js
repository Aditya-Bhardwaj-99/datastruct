class Node{
    constructor(value,prio){
        this.value = value;
        this.prio = prio;
        this.next = null;
        this.prev = null;
    }
}

class Queue{
    constructor(max){
        this._root = null;
        this._end = this._root;
        this._max = max-1;
        this._size = -1;
    }

    _enqueue(value){

        if(this._root===null){
            this._root = new Node(value);
            this._end = this._root;
            this._size++;
            return;
        }

        const helper=()=>{
            const newNode = new Node(value);
            this._end.next = newNode;
            newNode.prev = this._end;
            this._end = newNode;
            this._size++
        }
        if(this._size + 1 < this._max){
            helper();
        } else if(this._size + 1 === this._max){
            helper();
        } else {
            console.log('Queue Overflow');
        }
    }

    _dequeue(){
        const dhelper=()=>{
            let res = this._root.value;
            if(this._root.next){
                this._root = this._root.next;
                this._root.prev = null;
            } else {
                this._root = null
            }
            this._size--;
            return res;
        }

        if(this._size - 1 > -1){
            return dhelper();
        } else if(this._size - 1 === -1){
            return dhelper();
        } else {
            console.log('Queue Underflow');
        }
    }

    _empty(){
        if(this._size===-1){
            return 1
        } else {
            return 0
        }
    }

    _peek(){
        return this._end;
    }
}

class PQueue{
    constructor(max){
        this._root = null;
        this._end = this._root;
        this._max = max-1;
        this._size = -1;
    }

    _enqueue(value,prio){
        const newNode = new Node(value,prio);

        if(this._root===null){
            this._root = newNode;
            this._end = this._root;
            this._size++;
            return;
        }

        const helper=(node)=>{
            if(node === undefined || node === null){
                this._end.next = newNode;
                newNode.prev = this._end;
                this._end = newNode;
                this._size++;
            } else if(node.prio > newNode.prio){
                node.prev?node.prev.next = newNode:null;
                node.prev?newNode.prev = node.prev:null;
                newNode.next = node;
                if(node.prev){
                    node.prev = newNode;
                } else {
                    this._root = newNode;
                    this._root.next.prev = newNode;
                }
                this._size++;
            } else if(node.prio < newNode.prio){
                helper(node.next);
            }
        }
        
        if(this._size + 1 < this._max){
            helper(this._root);
        } else if(this._size + 1 === this._max){
            helper(this._root);
        } else {
            console.log('Queue Overflow');
        }
        
    }

    _dequeue(){
        const dhelper=()=>{
            let res = this._root.value;
            if(this._root.next){
                this._root = this._root.next;
                this._root.prev = null;
            } else {
                this._root = null
            }
            this._size--;
            return res;
        }

        if(this._size-1 > -1){
            return dhelper();
        } else if(this._size - 1 === -1){
            return dhelper();
        } else {
            console.log('Queue Underflow');
        }
    }

    _empty(){
        if(this._size===-1){
            return 1
        } else {
            return 0
        }
    }

    _peek(){
        return this._end;
    }
}

module.exports.PQueue = PQueue;
module.exports.Queue = Queue;