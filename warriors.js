
var Lineup = function(pg, sg, sf, pf, c) {
  this.pg = pg;
  this.sg = sg;
  this.sf = sf;
  this.pf = pf;
  this.c = c;

  this.toString = function(){
      return "PG: " + this.pg + ", SG: " + this.sg + ", SG: " + this.sf + ", SF: " + this.pf + ", " + this.c + "."
  };
}

var starting = new Lineup("Stephen Curry", "Klay Thompson", "Andre Iguodala", "David Lee", "Andrew Bogut")
var bench = new Lineup("Jordan Crawford", "Kent Bazemore", "Harrison Barnes", "Draymond Green", "Jermaine O'Neal")


console.log( "Warriors starting lineup is " + starting.toString() );
console.log( "Warriors  bench  lineup  is " + bench.toString() );
