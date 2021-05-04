const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
  };
  
Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
};

  module.exports = Park;
  