/**
 * A class to create Nodes
 */
class Node {
    /**
     * Create a node
     * @constructor
     * @param {any} value Value to store in Node
     */
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

/**
 * A class to create stack
 */
class Stack {
    /**
     * Create a stack
     * @constructor
     * @param {number} max Maximum space for your stack
     */
    constructor(max) {
        this._root = null;
        this._max = max-1;
        this._size = -1
    }

    /**
     * Push value into stack
     * @method
     * @name _push
     * @param {any} value Any value to store in stack
     */
    _push(value) {

        if(this._root === null){
            this._root = new Node(value);
            this._size++;
            return;
        }

        const helper = (value) => {
            const newNode = new Node(value);
            let temp = this._root;
            newNode.next = temp;
            this._root = newNode;
        }

        if (this._size + 1 < this._max) {
            helper(value);
            this._size++;
        } else if (this._size + 1 === this._max) {
            helper(value)
            this._size++;
        } else {
            console.log('Stack Overflow')
        }
    }

    /**
     * Pop values out
     * @method
     * @name _pop
     */
    _pop() {
        const pophelper = () => {
            let res = this._root.value;
            this._root = this._root.next;
            this._size--;
            return res;
        }

        if (this._size - 1 > -1) {
            return pophelper();
        } else if (this._size - 1 === -1) {
            return pophelper();
        } else {
            console.log('Stack underflow')
        }
    }

    /**
     * Peek values
     * @method
     * @name _peak
     */
    _peak() {
        console.log(this._root.value);
    }

    /**
     * Check if stack is empty
     * @method
     * @name _empty
     */
    _empty() {
        if(this._size===-1){
            return 1
        } else {
            return 0
        }
    }
}

module.exports.Stack = Stack;