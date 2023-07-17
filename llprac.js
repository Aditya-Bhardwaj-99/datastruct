//linked list
//[1] -> [2] -> null
//struct{struct *}
//class{var->}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(root){
        this._root=root || null;
        this._size = -1;
    }

    addNode(data){
        const newNode = new Node(data);

        if(this._root === null){
            this._root = newNode;
            this._size++;
            return 'Root added';
        }

        let currNode = this._root;
        while(currNode.next!==null){
            currNode = currNode.next;
        }

        currNode.next = newNode;
        this._size++;
        return 'New Node added';
    }

    traverse(){
        // [1] -> [2] -> [3] -> null
        let currNode = this._root;

        while(currNode!==null){
            console.log(currNode.data);
            currNode = currNode.next;
        }

        return 'End of linked list';
    }

    deleteNode(data){
        let currNode = this._root.next;
        let parentNode = this._root;

        if(this._root===data){
            this._root=this._root.next;
            this._size--;
            return 'Root removed'
        }
        // [1] -> [2] -> [3] -> null
        while(currNode!==null){
            if(currNode.data === data){
                parentNode.next = currNode.next;
                this._size--;
            }
            parentNode = parentNode.next;
            currNode = currNode.next;
        }

        return 'Node removed';
    }
}

const ll = new LinkedList();
console.log(ll.addNode(1));
console.log(ll.addNode(2));
console.log(ll.addNode(3));
console.log(ll.addNode(4));
console.log(ll.addNode(5));
console.log(ll.addNode(6));

console.log(ll.deleteNode(6));
console.log(ll.deleteNode(3));

console.log('Size:- '+ll._size);

console.log(ll.traverse());