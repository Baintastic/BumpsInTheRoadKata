function bumpsInRoad() {

    function getHomeSafe(s) {
        let bumpCount = 0;
        let characters = s.split(new RegExp('', 'g'))
        characters.forEach(character => {
            if (roadHasBump(character)) {
                bumpCount++;
            }
        });

        if (bumpCount > 15) {
            return "Car Dead";
        }
        return "Whoohoo";

        function roadHasBump(character) {
            return character === "n";
        }
    }
    return {
        getHomeSafe: getHomeSafe
    }
}