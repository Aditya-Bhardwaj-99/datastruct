const { PQueue } = require('./Queue');
const { UnionFind } = require('./UnionFind');

const Queue = require('./Queue').Queue;
const Stack = require('./Stack').Stack;

/**
 * A class to create a Gaph
 */
class Graph{
    constructor(){
        this._edges={}
        this._nodes=[]
    }

    /**
     * A function to add a new node in graph
     * @param {string} node Node to be added
     */
    _addNode(node){
        this._nodes.push(node);
        this._edges[node]=[];
    }

    /**
     * A function to add bidirectional edge
     * @param {string} n1 Node 1
     * @param {string} n2 Node 2
     * @param {number} w Weight of edge
     */
    _addEdge(n1,n2,w){
        if(this._nodes.find(n=>n===n1) && this._nodes.find(n=>n===n2)){
            this._edges[n1].push({node:n2,weight:w});
            this._edges[n2].push({node:n1,weight:w});
        }
    }
    /**
     * A function to add directional edge in the graph
     * @param {string} n1 from node 
     * @param {string} n2 to node
     * @param {number} w weight of edge
     */
    _addDirectional(n1,n2,w){
        if(this._nodes.find(n=>n===n1) && this._nodes.find(n=>n===n2)){
            this._edges[n1].push({node:n2,weight:w});
        }
    }

    /**
     * A function to display a graph
     * @method
     * @name _display
     */
    _display(){
        let graph = "";
        this._nodes.forEach(node => {
           graph += node + ' -> ' + this._edges[node].map(n => n.node).join(', ') + '\n';
        });
        console.log(graph);
    }

    /**
     * A function for BFS traversal of graph
     * @method
     * @name _BFS
     * @param {string} node Starting node
     */
    _BFS(node){
        let queue = new Queue(this._nodes.length);
        let visited = {}
        let res = []
        queue._enqueue(node);
        visited[node] = 1;
        while(!queue._empty()){
            let vis = queue._dequeue();
            res.push(vis);
            this._edges[vis].filter(addnode=>!visited[addnode.node]).forEach(addnode => {
                visited[addnode.node] = 1;
                queue._enqueue(addnode.node);
            });
        }
        return res
    }

    /**
     * A function for DFS traversal of graph
     * @method
     * @name _DFS
     * @param {string} node Starting node
     */
    _DFS(node){
        let stack = new Stack(this._nodes.length);
        let visited = {}
        let res = []
        stack._push(node);
        visited[node] = 1;
        while(!stack._empty()){
            let vis = stack._pop();
            res.push(vis);
            this._edges[vis].filter(addnode=>!visited[addnode.node]).forEach(addnode => {
                visited[addnode.node] = 1;
                stack._push(addnode.node);
            });
        }
        return res;
    }

    /**
     * A function for prims MST
     * @method
     * @name _Prims
     * @param {any} startnode A node of graph
     */
    _Prims(startnode){
        let prims = new Graph();

        if(this._nodes.length===0){
            return prims
        }

        let start = startnode;

        let pqueue = new PQueue(this._nodes.length*this._nodes.length);
        let visited = {};

        prims._addNode(start);
        visited[start] = 1;

        this._edges[start].forEach(edge=>{
            pqueue._enqueue([start,edge.node,edge.weight],edge.weight);
        })

        let currshort = pqueue._dequeue();

        while(!pqueue._empty()){
            while(!pqueue._empty() && visited[currshort[1]]){
                currshort = pqueue._dequeue();
            }

            let next = currshort[1];

            if(!visited[next]){
                prims._addNode(next);
                prims._addEdge(currshort[0],next,currshort[2]);

                this._edges[next].forEach((edge)=>{
                    pqueue._enqueue([next,edge.node,edge.weight],edge.weight);
                });

                visited[next] = 1;
                start = next;
            }
        }
        return prims;
    }

    /**
     * A function for krushkal MST
     * @method
     * @name _krushkal
     * @param {any} startnode A node of graph
     */
    _krushkal(startnode){
        const krush = new Graph();
        this._nodes.forEach(node=>{krush._addNode(node)});
        if(this._nodes.length===0){
            return krush;
        }

        let pqueue = new PQueue(this._nodes.length*this._nodes.length);

        for(var node of Object.keys(this._edges)){
            this._edges[node].forEach(edge=>{
                pqueue._enqueue([node,edge.node,edge.weight],edge.weight);
            })
        }

        let unionfind = new UnionFind(this._nodes);

        while(!pqueue._empty()){
            let next = pqueue._dequeue();
            let edges = [next[0],next[1]];
            let weight = next[2];

            if(!unionfind._connected(edges[0],edges[1])){
                krush._addEdge(edges[0],edges[1],weight);
                unionfind._union(edges[0],edges[1]);
            }
        }
        return krush;
    }

    /**
     * A function for dijikastra shortest path
     * @method
     * @name _dijikastra
     * @param {any} startnode A node of graph
     */
    _dijikastra(startnode){
        let distance = {};
        let prev = {};
        let pqueue = new PQueue(this._nodes.length*this._nodes.length);

        distance[startnode] = 0;
        pqueue._enqueue(startnode,0);
        this._nodes.forEach(node=>{
            if(node!==startnode){
                distance[node] = Infinity
            }
            prev[node] = null;
        })

        while(!pqueue._empty()){
            let minnode = pqueue._dequeue();
            let currnode = minnode;

            this._edges[currnode].forEach(edge=>{
                let alt = distance[currnode] + edge.weight;
                if(alt<distance[edge.node]){
                    distance[edge.node] = alt;
                    prev[edge.node] = currnode;
                    pqueue._enqueue(edge.node,distance[edge.node]);
                }
            })
        }
        return distance;
    }

    /**
     * A function for all pair shortest path algorithm
     * @method
     * @name _fw
     */
    _fw(){
        let distmat = {};

        this._nodes.forEach(node => {
            distmat[node] ={}

            this._edges[node].forEach(edge => {
                distmat[node][edge.node] = edge.weight;
            })

            this._nodes.forEach(n => {
                if(distmat[node][n] === undefined){
                    distmat[node][n] = Infinity;
                }
                if(node === n){
                    distmat[node][n] = 0;
                }
            })
        })

        this._nodes.forEach(i => {
            this._nodes.forEach(j => {
                this._nodes.forEach(k => {
                    if(distmat[i][k] + distmat[k][j] < distmat[i][j]){
                        distmat[i][j] = distmat[i][k] + distmat[k][j]
                    }
                })
            })
        })

        return distmat;
    }
}

module.exports.Graph = Graph;