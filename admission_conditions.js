//liste des entreprises et conditions d'admissions

//tableau ou liste des jobs
let Compagnies = [
    {
        name:'A',
        requirements: [
           "Apartment or House",
        ]
    },
    {
        name:'B',
        requirements: [
           "4 or 5 door car",
           "driver's licence",
           'car insurance'
        ]
    },
    {
        name:'C',
        requirements: [
           'social security number',
           'work permit',
        ]
    },
    {
        name:'D',
        requirements: [
           'apartment or flat or house'
        ]
    },
    {
        name:'E',
        requirements: [
           "driver's licence",
           '2 or 3 or 4 door car',
        ]
    },
    {
        name:'F',
        requirements: [
           "scooter or bike pr motorcycle",
           "driver's licence",
           "motocycle insurance"
        ]
    },
    {
        name:'G',
        requirements: [
            "don't have many experience",
            "like to develop",
            "like to learn",
            "like to innovate"
        ]
    }
]

//mes conditions
let myCondition = [
    "don't have a car",
    "don't have many experience",
    "like to develop",
    "like to learn",
    "like to innovate",
    "looking to have experience",
    "haven't a car",
    "frontend developer junior with Angular framework",
    "backend developer junior with node js"
]

//verification de correspondance
// Je doit avoir au moins la moitié de des exigences requises
let normalReq = 0;
let possibleCompagny = new Array();

Compagnies.forEach(compagny => {
    myCondition.forEach(cond =>{
        if(compagny.requirements.includes(cond)){
            normalReq ++;
        }
    })
    if(normalReq > 0 && normalReq >= parseInt(compagny.requirements.length / 2, 10)){
        possibleCompagny.push({
            ...compagny,
            cond: `${ normalReq } condition(s) respectée(s)`
        })
    }
    normalReq = 0;
})
console.log(possibleCompagny);
// notitifier dans quel entreprises je peut y aller