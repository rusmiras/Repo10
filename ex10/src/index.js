function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Safet Isovic",
            title: "Bosno moja poharana",
            release_year: 1995,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true// Add a record here
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;
