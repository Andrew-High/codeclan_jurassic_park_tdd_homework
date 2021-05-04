const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

let park;
let dinosaur;

describe('Park', function() {

  beforeEach(function () {
    park = new Park("Jurassic Park", 10);
    dinosaur1 = new Dinosaur("Triceratops", "herbivore", 20);
    dinosaur2 = new Dinosaur("Tyrannosaurus Rex", "carnivore", 50);
    dinosaur3 = new Dinosaur("Stegosaurus", "herbivore", 10);

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.checkHighestVisitorDinosaur().species;
    assert.strictEqual(actual, "Tyrannosaurus Rex");
  });

  xit('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findDinosaursOfSpecies("Triceratops");
    assert.deepStrictEqual(actual, {"species": "Triceratops", "diet":"herbivore", "guestsAttractedPerDay": 20})
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findTotalVisitorsPerDay();
    assert.deepStrictEqual(actual, 80)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = 365 * park.findTotalVisitorsPerDay();
    assert.deepStrictEqual(actual, 29200)
  });

  it('should be able to calculate total revenue for one year');

});
