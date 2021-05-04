const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
  };
  
Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    for (let item of this.dinosaurCollection){
        if (item.name === dinosaur.name){
            this.dinosaurCollection.splice([item.index], 1)
        }
    }
}

  module.exports = Park;
  