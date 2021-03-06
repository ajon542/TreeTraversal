﻿
// get parent of node 'i' in a binary tree
function parent(i) {
    return i >> 1;
}

// get left child of node 'i' in a binary tree
function left(i) {
    return i << 1;
}

// get right child of node 'i' in a binary tree
function right(i) {
    return (i << 1) + 1;
}

// peek at the item on top of the stack
function peek(stack) {
    var node = stack.pop();
    stack.push(node);
    return node;
}

// determines if a variable is undefined
function isUndefined(variable) {
    return typeof variable == 'undefined';
}

// in-order recursive method to visit nodes of a tree
function inOrder_recursive(tree, index) {
    
    if (isUndefined(tree[index])) {
        return;
    }
    
    inOrder_recursive(tree, left(index));
    console.log(tree[index]);
    inOrder_recursive(tree, right(index));
}

// in-order iterative method to visit nodes of a tree
function inOrder_iterative(tree, index) {
    
    var stack = [];
    
    while (stack.length > 0 || !isUndefined(tree[index])) {
        if (!isUndefined(tree[index])) {
            stack.push(index);
            index = left(index);
        } else {
            index = stack.pop();
            console.log(tree[index]);
            index = right(index);
        }
    }
}

// pre-order recursive method to visit nodes of a tree
function preOrder_recursive(tree, index) {
    
    if (isUndefined(tree[index])) {
        return;
    }
    
    console.log(tree[index]);
    preOrder_recursive(tree, left(index));
    preOrder_recursive(tree, right(index));
}

// pre-order iterative method to visit nodes of a tree
function preOrder_iterative(tree, index) {
    
    var stack = [];
    
    while (stack.length > 0 || !isUndefined(tree[index])) {
        if (!isUndefined(tree[index])) {
            console.log(tree[index]);
            
            var rightNode = right(index);
            
            if (!isUndefined(tree[rightNode])) {
                stack.push(rightNode);
            }
            
            index = left(index);
        } else {
            index = stack.pop();
        }
    }
}

// post-order recursive method to visit nodes of a tree
function postOrder_recursive(tree, index) {
    
    if (isUndefined(tree[index])) {
        return;
    }
    
    postOrder_recursive(tree, left(index));
    postOrder_recursive(tree, right(index));
    
    console.log(tree[index]);
}

// post-order iterative method to visit nodes of a tree
function postOrder_iterative(tree, index) {
    
    var stack = [];
    var lastNodeVisited = null;
    
    var node = tree[index];
    
    while (stack.length > 0 || !isUndefined(node)) {
        if (!isUndefined(node)) {
            
            stack.push(index);
            index = left(index);
            node = tree[index];

        } else {
            var peekNode = peek(stack);
            var peekNodeRight = right(peekNode);
            
            if (!isUndefined(tree[peekNodeRight]) && lastNodeVisited != peekNodeRight) {
                index = peekNodeRight;
                node = tree[index];
            } else {
                console.log(tree[peekNode]);
                lastNodeVisited = stack.pop();
                delete node;
            }
        }
    }
}

var tree = [-1, 1, 2, 3, 4, 5, 6, 7];

console.log("inOrder");
inOrder_recursive(tree, 1);
console.log("-----");
inOrder_iterative(tree, 1);
console.log("-----");
console.log("preOrder");
preOrder_recursive(tree, 1);
console.log("-----");
preOrder_iterative(tree, 1);
console.log("-----");
console.log("postOrder");
postOrder_recursive(tree, 1);
console.log("-----");
postOrder_iterative(tree, 1);
