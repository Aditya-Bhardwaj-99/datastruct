/**
 * A class to create nodes for data structures
 */
class Node {
    /**
     * Create a node
     * @constructor
     * @param {any} value Value to store in Node
     */
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * A class to create a Binary Search Tree
 */
class BTree {
    /**
     * Create a root node for BST
     * @constructor
     * @param {any} root Can be a Node or just null
     */
    constructor(root) {
        this._root = root || null;
    }

    /**
     * Add node to tree
     * @method
     * @name _addNode
     * @param {any} value Value to store in Node
     */
    _addNode(value) {
        const newNode = new Node(value);

        if (this._root === null) {
            this._root = newNode;
        }

        let currNode = this._root;

        while (1) {
            if (currNode.value === value) {
                return 'Node already exists'
            } else if (currNode.value > value && currNode.left !== null) {
                currNode = currNode.left
            } else if (currNode.value < value && currNode.right !== null) {
                currNode = currNode.right
            } else {
                break;
            }
        }

        if (currNode.value > value) {
            currNode.left = newNode
        } else if (currNode.value < value) {
            currNode.right = newNode
        }
        return 'new node added'
    }

    /**
     * Inorder traversal
     * @method
     * @name _inorder
     * @param {function} callback A callback function
     */
    _inorder(callback) {
        function inorder(node) {
            if (node) {
                inorder(node.left);
                callback(node);
                inorder(node.right)
            }
        }
        inorder(this._root);
    }

    /**
     * Preorder traversal
     * @method
     * @name _preorder
     * @param {function} callback A callback function
     */
    _preorder(callback) {
        function preorder(node) {
            if (node) {
                callback(node);
                preorder(node.left);
                preorder(node.right)
            }
        }
        preorder(this._root);
    }

    /**
     * Postorder traversal
     * @method
     * @name _postorder
     * @param {function} callback A callback function
     */
    _postorder(callback) {
        function postorder(node) {
            if (node) {
                postorder(node.left);
                postorder(node.right);
                callback(node);
            }
        }
        postorder(this._root);
    }
}

module.exports.BTree = BTree;