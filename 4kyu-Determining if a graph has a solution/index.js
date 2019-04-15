// Implement a function solve_graph/solveGraph (or equivalent depending on your language) accepting 3 
// arguments in the given order:

// start - The initial node of the directed graph
// end - The destination node of the directed graph
// arcs - A directed graph represented by a list/array of directed edges
// and returns a boolean value depending on whether the destination node can be reached from the initial 
// node by traversing zero or more directed edges. That means that if the start and end nodes are identical 
// then the end node is trivially considered to be reachable - return true/True in this case. Also, if the 
// start and end nodes are distinct and either node does not appear in arcs then you should return false/False
// since there is no sequence of directed edges that you may traverse to reach the end node from the start 
// node.

// You may not assume any properties of the given directed graph (other than the fact that it is a directed 
//   graph) - for example, the given directed graph may contain multiple edges (in either direction) between 
//   two nodes or contain loops (directed edges starting and finishing on the same node).

// You may also wish to take a look at adjacency lists.

// Example:

// var arcs = [
// { start : "a", end : "b" },
// { start : "a", end : "a"}
// ];

// solve_graph("a", "b", arcs);
// // Should return true, because "b" can be reached from "a"

// solve_graph("a", "c", arcs);
// // Should return false, because "c" can never be reached from "a", using any combination of arcs

function solve_graph(start, end, arcs) {
  // change to graph
  var nodes = []
  var aEndNode
  var aNode
  arcs.map(item => {
    aEndNode = nodes.filter(i => i.name === item.end)[0]
    if(aEndNode === undefined) {
      aEndNode = new Node(item.end)
      nodes.push(aEndNode)
    }
    aNode = nodes.filter(i => i.name === item.start)[0]
    if(aNode === undefined) {
      aNode = new Node(item.start)
      nodes.push(aNode)
    }
    aNode.push(aEndNode)
  })
  // get result
  var aStart = nodes.filter(item => item.name === start)[0]
  if(aStart.name === end) return true
  var queue = [...aStart.childs]
  var isUse = []
  var node
  while(queue.length > 0) {
    node = queue.shift()
    isUse.push(node)
    if(node.name === end)
      return true
    queue.push(...node.childs.filter(item => isUse.indexOf(item) === -1))
  }
  return false
}

class Node {
  constructor(name) {
    this.name = name
    this.childs = []
  }
  push(child) {
    this.childs.push(child)
  }
}

// function solve_graph(start, end, arcs) {
//   var found = false;
//   var visited = [];
//   graph_helper(start, end, arcs);
//   function graph_helper(start, end, arcs) {
//     if (start === end) {
//       found = true;
//     }
//     arcs.map(function(a) {
//       if (a.start === start && visited.indexOf(a.end) === -1) {
//         visited.push(a.end);
//         graph_helper(a.end, end, arcs);
//       }
//     });
//   }
//   return found;
// }

// Sample Test:
const assert = require('assert')
describe("Simple graph with 1 arc", function() {
  var arcs = [
    { start: "a", end: "b" },
  ]
  it("Should reach b", function() {
    assert.strictEqual(solve_graph("a", "b", arcs), true);
  });
  it("Should never reach c", function() {
    assert.strictEqual(solve_graph("a", "c", arcs), false);
  });
  it("Should reach start state", function() {
    assert.strictEqual(solve_graph("a", "a", arcs), true);
  });
});

describe("Complex graph with loops and intermediary nodes", function() {
  var arcs = [
    { start: "a", end: "b"},
    { start: "b", end: "c"},
    { start: "c", end: "a"},
    { start: "c", end: "d"},
    { start: "e", end: "a"}
  ];
  it("Should reach d", function() {
    assert.strictEqual(solve_graph("a", "d", arcs), true);
  });
  it("Should never reach nodes with no arcs leading to it", function() {
    assert.strictEqual(solve_graph("a", "e", arcs), false);
  });
  it("Should reach all nodes in a loop", function() {
    assert.strictEqual(solve_graph("a", "a", arcs), true);
    assert.strictEqual(solve_graph("a", "b", arcs), true);
    assert.strictEqual(solve_graph("a", "c", arcs), true);
  });
});