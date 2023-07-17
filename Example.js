const BTree = require('./BinaryTree').BTree;
const Graph = require('./Graph').Graph;
const Queue = require('./Queue').Queue;
const PQueue = require('./Queue').PQueue;
const Linkedlist = require('./Linkedlist').Linkedlist;
const doublyLinkedlist = require('./Linkedlist').doublyLinkedlist;
const CircularLinkedList = require('./Linkedlist').CircularLinkedList;
const Stack = require('./Stack').Stack;
const Tree = require('./Tree').Tree;

console.log('----------------------------Linked List--------------------------');

const list = new Linkedlist;
console.log(list._addNode(1))
console.log(list._addNode(2))
console.log(list._addNode(3))
console.log(list._addNode(4))
console.log(list._addNode(5))
console.log(list._addNode(6))
list._deletion();
list._delete(4);
console.log(list._search(5));
list._traversal((node)=>{process.stdout.write(node.value + ' ')})
console.log();

console.log('----------------------------doubly linked list--------------------------');
const dlist = new doublyLinkedlist;
console.log(dlist._addNode(1))
console.log(dlist._addNode(2))
console.log(dlist._addNode(3))
console.log(dlist._addNode(4))
console.log(dlist._addNode(5))
console.log(dlist._addNode(6))
dlist._deletion();
dlist._delete(4);
console.log(dlist._search(5));
dlist._traversalS((node)=>{
    process.stdout.write(node.value + ' ');
})
console.log();
dlist._traversalB((node)=>{
    process.stdout.write(node.value + ' ');
})
console.log();

console.log('----------------------------Circular linked list--------------------------');
const clist = new CircularLinkedList;
console.log(clist._addNode(1))
console.log(clist._addNode(2))
console.log(clist._addNode(3))
console.log(clist._addNode(4))
console.log(clist._addNode(5))
console.log(clist._addNode(6))
clist._deletion();
clist._delete(4);
console.log(clist._search(5));
clist._traversal((node)=>{process.stdout.write(node.value + ' ')})
console.log();

console.log('-----------------------------------Stack----------------------------------');

const stack = new Stack(5);

stack._push(1);
stack._push(2);
stack._push(3);
stack._push(4);
stack._push(5);
stack._push(6);

stack._peak();
console.log(stack._pop());
console.log(stack._empty());

console.log('-----------------------------------Queue----------------------------------');

const queue = new Queue(5);

queue._enqueue(1);
queue._enqueue(2);
queue._enqueue(3);
queue._enqueue(4);
queue._enqueue(5);
queue._enqueue(6);

console.log(queue._dequeue());
console.log(queue._peek());
console.log(queue._empty());

console.log('-----------------------------------Priority Queue----------------------------------');

const pqueue = new PQueue(5);

pqueue._enqueue(1,5);
pqueue._enqueue(2,4);
pqueue._enqueue(3,3);
pqueue._enqueue(4,2);
pqueue._enqueue(5,1);
pqueue._enqueue(6,6);

console.log(pqueue._dequeue());
console.log(pqueue._peek());
console.log(pqueue._empty());

console.log('-----------------------------------Tree----------------------------------');

const tree = new Tree();

tree._addnode('Computers & Electronics');
tree._addnode('Notebooks', 'Computers & Electronics');
tree._addnode('Routers', 'Computers & Electronics');
tree._addnode('Desktop Computers', 'Computers & Electronics');

tree._addnode('Macbooks', 'Notebooks');
tree._addnode('Asus', 'Notebooks');

tree._addnode('Macbook Pro', 'Macbooks');
tree._addnode('Macbook Air', 'Macbooks');


tree._traverse((node) => {
    console.log(node.value);
});

tree._removenode('Macbooks');

tree._traverse((node) => {
    console.log(node.value);
});

console.log(tree._leafs('Notebooks'));
console.log(tree._search('Notebooks'));

console.log('-----------------------------------Binary Search Tree----------------------------------');

const btree = new BTree();

btree._addNode(5);
btree._addNode(4);
btree._addNode(6);
btree._addNode(2);
btree._addNode(3);
btree._addNode(8);

console.log('in')
btree._inorder((node)=>{console.log(node.value)});
console.log('pre')
btree._preorder((node)=>{console.log(node.value)});
console.log('post');
btree._postorder((node)=>{console.log(node.value)});
console.log();

console.log('-----------------------------------Graph----------------------------------');

const graph = new Graph();

graph._addNode('S');
graph._addNode('A');
graph._addNode('B');
graph._addNode('C');
graph._addNode('D');
graph._addNode('E');
graph._addNode('F');
graph._addNode('G');

graph._addEdge('S','A',10);
graph._addEdge('S','B',5);
graph._addEdge('S','C',8);
graph._addEdge('D','A',2);
graph._addEdge('B','E',9);
graph._addEdge('F','C',3);
graph._addEdge('D','G',1);
graph._addEdge('G','E',3);
graph._addEdge('F','G',6);

console.log('NORMAL');
console.log('Display');
graph._display();
console.log('BFS');
console.log(graph._BFS('S').join(' -> '));
console.log('DFS');
console.log(graph._DFS('S').join(' -> '));

console.log('\nPRIMS');
let prims = graph._Prims('S');
console.log('Display');
prims._display();

console.log('KRUSHKAL');
let krush = graph._krushkal('S');
console.log('Display');
krush._display();

console.log('DIJIKASTRA');
let dist = graph._dijikastra('S');
console.log(dist);
console.log();

console.log('ALL PAIR SHORTEST PATH');
let distmat = graph._fw();
console.log(distmat);

console.log('--------------------------------------------------------------------------');