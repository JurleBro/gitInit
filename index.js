const operand1 = 12;
let operand2 = 45;

operand2 += operand1 ;
console.log("resultat de a + b = " + operand2);

let aPerson = {
    name: 'Jean',
    age: 35,
    gender: 'masculin',
    interest: ['musique', 'Jeux videos'],
};

// on peut également déclarer et initialiser un objet de la façon suivante :

let aPerson= new Object();
aPerson.name = 'Jean';
aPerson.age = 35;
aPerson.gender = 'masculin';
aPerson.interest = ['musique', 'badminton'];

aPerson.sayHello = function() {console.log('Bonjour ! Je suis ' + this.name + '.'); };

aPerson.sayHello();

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Dimanche";
        break;
    case 1:
        day = "Lundi";
        break;
    case 2:
        day = "Mardi";
        break;
    case 3:
        day = "Mercredi";
        break;
    case 4:
        day = "Jeudi";
        break;
    case 5:
        day = "Vendredi";
        break;
    case 6:
        day = "Samedi";
}
console.log("Aujourd'hui nous sommes " + day);
