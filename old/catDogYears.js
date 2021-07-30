const years =(humanYears) => {
    let catYears = 0;
    let dogYears = 0;

    for (let i = 0; i < humanYears.length; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 15;
        }
        else if (i === 2) {
            catYears += 9;
            dogYears += 9;
        }
        else {
            catYears += 4;
            dogYears += 5;
        }
    } return [humanYears, catYears, dogYears];
    
};

console.log(years(2))