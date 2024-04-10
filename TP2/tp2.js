//Exercice 1

let température_Celsius = 23;
let température_Farenheit = température_Celsius * 9/5 + 32;

console.log("Température en degrés Celsius :", température_Celsius);
console.log("Température en degrés Fahrenheit :", température_Farenheit);

//Exercice 2

let longueur_Rectangle = 15;
let largeur_Rectangle = 7;
let aire_Rectangle = longueur_Rectangle * largeur_Rectangle;

console.log("Aire du rectangle :", aire_Rectangle);

//Exercice 3

let prenom = "Kevin";
let nom = "Lamar-Martin";
let nom_complet = prenom + " " + nom;

console.log("Nom complet :", nom_complet);

//Exercice 4

let montant_HT = 90;
const taux_TVA = 0.10;
let montant_TVA = montant_HT * taux_TVA;
let montant_TTC = montant_HT + montant_TVA;

console.log("Montant HT :", montant_HT);
console.log("Montant TVA :", montant_TVA);
console.log("Montant TTC :", montant_TTC);

//Exercice 5 

let resultat = ((4 >= 6) || ("herbe" != "verte")) && !(((12 * 2) == 144) && true);
console.log(resultat); 

//Exercice 6 

let poids = 60;
let taille = 1.60;
let IMC = poids / (taille*taille);

console.log("IMC :", IMC.toFixed(2));

//Exercice 7

const montant_min = 100;
let montant_total = 110;
let condition = montant_total > montant_min;

console.log(condition ? "Livraison gratuite !" : "Frais de livraison : 10€");

//Exercice 8

let n_binaire = '1000';

console.log(parseInt(n_binaire, 2));




