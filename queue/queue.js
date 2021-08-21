const LinkedList= require("../linked-list/LinkedList");

class Queue {
	constructor(){
		// Implement Queue using linkedlist
		this.linkedList= new LinkedList();
	}

	// @param {*}
	enqueue(value){
		// add new value to the end on the line
		this.linkedList.append(value)
	}
	
	// @param {none}
	// @return {*}
	dequeue(){
		const removedHead= this.linkedList.deleteHead();

		return removedHead ? removedHead.value : null;
	}

	// @return {*}
	peek(){
		// The Queue is empty
		if(this.isEmpty) return null;

		// Just read the next value without deleting it
		return this.linkedList.head.value;
	}
	
	// @return {Boolean}
	isEmpty(){
		// Check if Queue is empty
		return !this.linkedList.head
	}
	
	// @param {Function}
	// @return {String}
	toString(callback){
		// Return a string representation of the queue's
			return this.linkedList.toString(callback);
	}

}

module.exports= Queue;
