/*function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
};
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
*/
/*
function openOrSenior(data){
    if (age>=55 && handicap >7);
    return 'Senior'
}*/
function openOrSenior(data){
    let member = [];
    for (i=0; i<data.length; i++){
      member[i]=(data[i][0]>=55 && data[i][1]>7) ? 'Senior':'Open' 
    };
    return member;
    };
    console.log(openOrSenior([[55, 12],[55,21],[19, -2],[104, 20]]))