// help from http://natureofcode.com

// Force directed graph

function Node(pos) {
VerletParticle2D.call(this,pos);

	// Override the display method
	this.display = function(){
		fill(209, 39, 101);
		stroke(209, 39, 101);
		strokeWeight(1.5);
		ellipse(this.x, this.y, 8, 8);
	}
} 

// Inherit from the parent class
Node.prototype = Object.create(VerletParticle2D.prototype);
Node.prototype.constructor = Node;


