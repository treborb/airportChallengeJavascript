'use strict';

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy("plane", ["land"]);
  });

  it("has no planes by default", function() {
    expect(airport.planes()).toEqual([]);
  });

  it("can clear planes for landing", function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it("can clear planes for takeoff", function() {
     airport.clearForLanding(plane);
     airport.clearForTakeOff(plane);
     expect(airport.planes()).toEqual([]);
  });
  
  it("can check for stormy conditions", function() {
      expect(airport.isStormy()).toBeFalsy();
  });
  
  describe("Under stormy conditions", function(){
    
    it("does not clear planes for takeoff", function() {
        spyOn(airport, "isStormy").and.returnValue(true);
        expect(function() { airport.clearForTakeOff(plane); }).toThrowError("Can not takeoff during a storm")
    });
  });
});
