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

Park.prototype.checkHighestVisitorDinosaur = function(){
    let result = this.dinosaurCollection[0];
    for (let item of this.dinosaurCollection){
        if (item.guestsAttractedPerDay > result.guestsAttractedPerDay){
            result = item;
        }
    }
    return result;
}

Park.prototype.findDinosaursOfSpecies = function(species){
    let results = [];
    for (let item of this.dinosaurCollection){
        if (item.species === species){
            results.push(item)
        }
    }
    return results
}

Park.prototype.findTotalVisitorsPerDay = function(){
    let total = 0;
    for (let item of this.dinosaurCollection){
        total += item.guestsAttractedPerDay;
    }
    return total;
}

Park.prototype.findTotalVisitorsPerYear = function(){
    let total = 0;
    for (let item of this.dinosaurCollection){
        total += item.guestsAttractedPerDay;
    }
    total = total * 365
    return total;
}

Park.prototype.findTotalRevenuePerYear = function(){
    let guests = 0;
    for (let item of this.dinosaurCollection){
        guests += item.guestsAttractedPerDay;
    }
    total = guests * 365 * this.ticketPrice
    return total;
}

  module.exports = Park;
  