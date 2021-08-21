const Node= require("./LinkedListNode");

class LinkedList{
	constructor(){
		// @var Node
		this.head= null;

		// @var Node
		this.tail= null;
	}

	// @value {*}
	// @return Node
	prepend(value){
		// Create a new Node
		const newNode= new Node(value, this.head)
	
		// Add the Node in head
		this.head= newNode;

		// if there is no tail, make the newNode the tail
		if(!this.tail) this.tail= newNode;

		return this;
	}
	
	//@value {*}
	//@return Node
	append(value){
		//Make a new Node
		const newNode= new Node(value);

		// if there is no head, let's make the new Node in the head also
		if(!this.head){
			this.head= newNode;
			this.tail= newNode;

			return this;
		}

	//Attach the new Node to tail
	const currentTail= this.tail;
	currentTail.next= newNode;
	
	this.tail= newNode;
	return this;
	}
	
	// @value {*}
	// @return Node 	
	delete(value){
		// check if there is a head
			if(!this.head) return null;

			// Placeholder for the deleted Node
			const deletedNode=null;
			
			// Check if the head must deleted
			if(this.head && this.head.value === value){
				deletedNode= this.head;

				this.head= this.head.next;
				return deletedNode;
			}

			// Placeholder for the current Node
			let currentNode= this.head;

			if(currentNode !== null){
				while(currentNode.next){
						if(currentNode.next.value == value){
							deletedNode= currentNode.next;
							currentNode.next= deletedNode.next
						} else{
							currentNode= currentNode.next;
						}
				} 
			}
		return deletedNode;
	}

	deleteHead(){
		if(!this.head) return null;

		const deletedNode= this.head;

		if(!this.head.next) {
				this.head= null;
				this.tail=null;
				
				return deletedNode;		
		}
		
		this.head= deletedNode.next;

		return deletedNode;
	}

	toArray(){
		const nodes= [];

		let currentNode= this.head;

		while (currentNode){
				nodes.push(currentNode);
				currentNode= currentNode.next;
		};

				return nodes;
	}

	toString(callback){
		return this.toArray().map(node => node.toString()).toString();
	}
}

module.exports= LinkedList;
