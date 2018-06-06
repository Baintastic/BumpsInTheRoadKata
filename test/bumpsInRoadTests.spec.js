describe("BumpsInTheRoad", function () {
		
			describe("Given road is flat", function () {
				it("should return Whoohoo", function() {
					// arrange
					var bumpyRoad = new bumpsInRoad();
					// act
					var actual = bumpyRoad.getHomeSafe("_____");
					// assert
					expect(actual).toBe("Whoohoo");
					});
			})

			describe("Given road is flat with one bump", function () {
				it("should return Whoohoo", function() {
					// arrange
					var bumpyRoad = new bumpsInRoad();
					// act
					var actual = bumpyRoad.getHomeSafe("___n_");
					// assert
					expect(actual).toBe("Whoohoo");
					});
			})

			describe("Given road has 15 bumps", function () {
				it("should return Whoohoo", function() {
					// arrange
					var bumpyRoad = new bumpsInRoad();
					// act
					var actual = bumpyRoad.getHomeSafe("nn__n_n_n_n__n_n_nn__n___n_n_____n_n__");
					// assert
					expect(actual).toBe("Whoohoo");
					});
			})

			describe("Given road has 16 bumps", function () {
				it("should return Car Dead", function() {
					// arrange
					var bumpyRoad = new bumpsInRoad();
					// act
					var actual = bumpyRoad.getHomeSafe("nn__n_n_n_n__n_n_nn__n___n_n_____n_n_n");
					// assert
					expect(actual).toBe("Car Dead");
					});
			})

			describe("Given road has 23 bumps", function () {
				it("should return Car Dead", function() {
					// arrange
					var bumpyRoad = new bumpsInRoad();
					// act
					var actual = bumpyRoad.getHomeSafe("nn__n_n_nnnnnnnn_n__n_n_nn__n___n_n_____n_n_n");
					// assert
					expect(actual).toBe("Car Dead");
					});
			})



		
  
});
