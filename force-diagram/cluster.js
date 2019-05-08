// help from http://natureofcode.com

function Cluster(n,d,center) {

  // A cluster is a grouping of nodes
  this.nodes = [];
  // Set the diameter
  this.diameter = d;

  // Create the nodes
  for (var i = 0; i < n; i++) {
    // We can't put them right on top of each other
    // this.nodes.push(new Node(center.add(Vec2D.randomVector())));
    this.nodes.push(new Node(center.add(Vec2D.randomVector())));
  }

  // Connect all the nodes with a Spring
  for (var i = 0; i < this.nodes.length-1; i++) {
    for (var j = i+1; j < this.nodes.length; j++) {
      // A Spring needs two particles, a resting length, and a strength

      var str = genes.get(i+1, j+5);

      // physics.addSpring(new VerletSpring2D(this.nodes[i], this.nodes[j], this.diameter, random(0.01, 0.05)));
      physics.addSpring(new VerletSpring2D(this.nodes[i], this.nodes[j], this.diameter, str/5));
    }
    }

  this.display = function() {
    // Show all the nodes
    for (var i = 0; i < this.nodes.length; i++) {
      this.nodes[i].display();
    }
  }


  // Draw all the internal connections
  this.showConnections = function() {



    stroke(209, 39, 101, 10);
    strokeWeight(5/frameCount);
    for (var i = 0; i < (this.nodes.length-1)/4; i++) {
      for (var j = i+1; j < (this.nodes.length)/4; j++) {
        line(this.nodes[i].x, this.nodes[i].y, this.nodes[j].x, this.nodes[j].y);
      }
    }
  }
}

