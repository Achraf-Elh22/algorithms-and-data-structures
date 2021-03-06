class Node{
	constructor(value, next=""){
		this.value= value;
		this.next= next;
	}	

	toString(callback){
		return callback ? callback(this.value) : `${this.value}` ; 
	}
}

module.exports= Node;
