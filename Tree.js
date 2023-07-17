/**
 * A class to create Nodes
 */
class Node{
    /**
     * Create a node
     * @constructor
     * @param {any} value Any value to store
     * @param {Array} children Array of children of this node
     */
    constructor(value,children){
        this.value=value;
        this.children=children
    }
}

/**
 * A class to create a simple tree
 */
class Tree{
    /**
     * Create a tree
     * @constructor
     * @param {Node} root A node or can be null
     */
    constructor(root){
        this._root=root || null;
    }

    /**
     * Traversal of tree
     * @method
     * @name _traverse
     * @param {function} callback A callback function
     */
    _traverse(callback){
        function gothrough(node){
            callback(node);
            node.children.forEach(child => {
                gothrough(child);
            });
        }
        gothrough(this._root);
    }

    /**
     * Function to add a node
     * @method
     * @name _addnode
     * @param {any} value Any value to store in tree
     * @param {any} parent Name of parent node
     */
    _addnode(value,parent){
        const newnode = new Node(value,[]);

        if(this._root===null){
            this._root=newnode;
        }

        this._traverse((node)=>{
            if(parent===node.value){
                node.children.push(newnode);
            }
        })
    }

    /**
     * Function to remove node and its children from tree
     * @method
     * @name _removenode
     * @param {any} value Value of node to remove
     */
    _removenode(value){
        this._traverse((node)=>{
            node.children.forEach((child,index)=>{
                if(child.value===value){
                    node.children.splice(index,1);
                }
            })
        })
    }

    /**
     * A function to search a node based on its value
     * @method
     * @name _search
     * @param {any} value Node value to search
     */
    _search(value){
        let res = 'Not found'
        this._traverse((node)=>{
            if(node.value===value){
                res = node
            }
        })
        return res;
    }

    /**
     * A function to get the leaf nodes connected to a parent node
     * @method
     * @name _leafs
     * @param {any} parent Value of parent node
     */
    _leafs(parent){
        const parentnode = typeof parent === 'string'? this._search(parent):parent
        let leafarr = [];
        
        if(parent.children && !parent.children.length){
            return parent
        }

        parentnode.children.forEach((child)=>{
            leafarr.push(this._leafs(child));
        })

        return [].concat(...leafarr);
    }
}

module.exports.Tree = Tree;