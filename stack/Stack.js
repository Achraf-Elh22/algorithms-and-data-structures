const LinkedList= require("../single-linked-list/LinkedList");

class Stack {
	constructor(){
		// We are gonna implement Stack using Linkedlist since they are quite similar.
		this.linkedList= new LinkedList();
	}

	// @param {*}
	// @return {class LinkedList}
	push(value){
		this.linkedList.prepend(value);
	}

	// @param {none}
	// @return {class LinkedList}
	pop(){
			const removedHead= this.linkedList.deleteHead();

			return removedHead ? removedHead.value : null;
	}

	// @param {none}
	// @return {class LinkedList}
	peek(){
			// Check if the stack is empty
			if(this.isEmpty()){
					return null;
			}

			return this.linkedList.head.value;
	}

	// @param {none}
	// @return {Boolean}
	isEmpty(){
		// the Stack is empty only if there is no head
		return !this.linkedList.head; 
	}

	// @return {Array}
	toArray(){
		return this.linkedList.toArray().map(node=> node.value);
	}

	// @param {Function}
	// @return {String}
	toString(callback){
			return this.linkedList.toString(callback);
	}
	
}

module.exports= Stack;
