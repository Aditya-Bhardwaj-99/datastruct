/**
 * A class to create nodes
 */
class Node{
    /**
     * Create a node
     * @constructor
     * @param {any} value any value  to store in nodes
     */
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

/**
 * A class to create a linkedlist
 */
class Linkedlist{

    /**
     * Create a Linked list
     * @constructor
     * @param {Node} root A Node or null value 
     */
    constructor(root){
        this._root = root || null;
    }

    /**
     * A function to add a node into the linked list
     * @method
     * @name _addNode
     * @param {any} value A value for a node to add in linked list
     */
    _addNode(value){
        const newNode = new Node(value);

        if(this._root===null){
            this._root=newNode;
            return 'Root added'
        } else {
            let node = this._root
            while(node.next!==null){
                node = node.next
            }
            node.next = newNode
            return 'Node added'
        }
    }

    /**
     * A function to traverse through the linked list
     * @method
     * @name _traversal
     * @param {function} callback A callback function
     */
    _traversal(callback){
        const move=(node)=>{
            callback(node)
            if(node.next!==null){
                move(node.next);
            }
        }
        move(this._root);
    }

    /**
     * A function to delete the root of the linked list
     * @method
     * @name _deletion
     */
    _deletion(){
        console.log(this._root);
        this._root = this._root.next;
        console.log('Deleted root');
        console.log(this._root);
    }

    /**
     * A function to delete a value from linked list
     * @method
     * @name _delete
     * @param {any} value A value to delete from the linked list
     */
    _delete(value){
        const dmove=(pnode,node)=>{
            if(pnode.value===value){
                this._deletion()
            } else if(node.value===value){
                pnode.next = node.next;
                node = null;
            } else {
                dmove(pnode.next,node.next);
            }
        }
        dmove(this._root,this._root.next);
    }

    /**
     * A function to search a value inside the linked lsit
     * @method
     * @name _search
     * @param {any} value A valur to search in the linked list
     */
    _search(value){
        const smove=(node)=>{
            let key;
            if(node.value===value){
                return node
            } else {
                key = smove(node.next);
            }
            return key
        }
        return smove(this._root);
    }
}

/**
 * A class to create a doubly linked list
 */
class doublyLinkedlist{
    /**
     * Create a doubly linked list
     * @constructor
     * @param {Node} root A Node or a null value
     */
    constructor(root){
        this._root = root || null;
        this._end = null;
    }

    /**
     * A function to add value in the doubly linked list
     * @method
     * @name _addNode
     * @param {any} value A value to aadd inside the doubly linked list
     */
    _addNode(value){
        const newNode = new Node(value);

        if(this._root===null){
            this._root=newNode;
            this._end=newNode;
            return 'Root added'
        } else {
            let node = this._root
            while(node.next!==null){
                node = node.next
            }
            node.next = newNode;
            this._end = newNode;
            node.next.prev = node;
            return 'Node added'
        }
    }

    /**
     * A function to traverse in the doubly linked list from the starting node
     * @method
     * @name _traversalS
     * @param {function} callback A callback function
     */
    _traversalS(callback){
        const move=(node)=>{
            callback(node)
            if(node.next!==null){
                move(node.next);
            }
        }

        move(this._root);
    }

    /**
     * A function to traverse in the inked list from the ending node
     * @method
     * @name _traversalB
     * @param {function} callback A callback function
     */
    _traversalB(callback){
        const move=(node)=>{
            callback(node)
            if(node.prev!==null){
                move(node.prev);
            }
        }

        move(this._end);
    }

    /**
     * A function to delete the starting node of the doubly linked list
     * @method
     * @name _deletion
     */
    _deletion(){
        console.log(this._root);
        this._root = this._root.next;
        this._root.prev=null;
        console.log('Deleted root');
        console.log(this._root);
    }

    /**
     * A function to delete a value from the doubly linked list
     * @method
     * @name _delete
     * @param {any} value Value to delete from doubly linked list
     */
    _delete(value){
        const dmove=(node)=>{
            if(node.value===value){
                if(node.prev){
                    node.prev.next=node.next;
                    node.next.prev=node.prev;
                    node=null;
                } else {
                    this._deletion()
                }
            } else {
                dmove(node.next);
            }
        }
        dmove(this._root);
    }

    /**
     * A function to search a value insdie doubly linked list
     * @method
     * @name _search
     * @param {any} value Valur to search inside the doubly linked list
     */
    _search(value){
        const smove=(node)=>{
            let key;
            if(node.value===value){
                return node
            } else {
                key = smove(node.next);
            }
            return key
        }
        return smove(this._root);
    }
}

/**
 * A class to create a circular linked list
 */
class CircularLinkedList{
    /**
     * Create a circular linked list
     * @constructor
     * @param {Node} root A Node or null value
     */
    constructor(root){
        this._root = root || null;
        this._size = 0;
    }

    /**
     * A function to add value insdie the circular linked list
     * @method
     * @name _addNode
     * @param {any} value A value to add in the circular linked list
     */
    _addNode(value){
        const newNode = new Node(value);

        if(this._root===null){
            this._root = newNode;
            this._root.next = this._root;
            this._size++;
            return 'Root added';
        }
        var node = this._root
        var counter = 1;
        while( counter!== this._size){
            node = node.next;
            counter++;
        }

        node.next = newNode;
        node.next.next = this._root;
        this._size++;
        return 'Node added';
    }

    /**
     * A function to traverse inside the circular linked list
     * @method
     * @name _traversal
     * @param {function} callback A callback function
     */
    _traversal(callback){
        var counter = 1;
        const move = (node)=>{
            if(counter!==this._size){
                callback(node);
                counter++;
                move(node.next);
            }
        }
        move(this._root);
    }

    /**
     * A function to delete the first node of the circular linked list
     * @method
     * @name _deletion
     */
    _deletion(){
        console.log(this._root);
        var counter = 1
        let node = this._root;
        while(counter!=this._size){
            node = node.next;
            counter++;
        }
        this._root = this._root.next;
        node.next = this._root;
        console.log('Root deleted');
        console.log(this._root);
    }

    /**
     * A function to delete the value from circular linked list
     * @method
     * @name _delete
     * @param {any} value A value to delete from the circular linked list
     */
    _delete(value){
        const dmove=(pnode,node)=>{
            if(pnode.value === value){
                this._deletion()
            } else if(node.value===value){
                pnode.next=node.next;
                node = null;
            } else {
                dmove(pnode.next,node.next);
            }
        }
        dmove(this._root,this._root.next);
    }

    /**
     * A function to search a value insdie the circular linked list
     * @method
     * @name _search
     * @param {any} value A valur to search in the circular linked list
     */
    _search(value){
        let counter=1;
        const smove=(node)=>{
            let key;
            if(node.value===value){
                return node
            } else if(counter!==this._size) {
                key = smove(node.next);
            }
            return key
        }
        return smove(this._root);
    }
}

module.exports.Linkedlist = Linkedlist;
module.exports.doublyLinkedlist = doublyLinkedlist;
module.exports.CircularLinkedList = CircularLinkedList;