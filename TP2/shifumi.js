// Sélection des éléments HTML
const pierreBtn = document.getElementById('pierre');
const feuilleBtn = document.getElementById('feuille');
const ciseauxBtn = document.getElementById('ciseaux');
const manchesSpan = document.getElementById('manches');
const victoiresJoueurSpan = document.getElementById('victoiresJoueur');
const victoiresOrdinateurSpan = document.getElementById('victoiresOrdinateur');
const egalitesSpan = document.getElementById('egalites');
const messageResultat = document.getElementById('messageResultat');

// Initialisation des variables de score
let manches = 0;
let victoiresJoueur = 0;
let victoiresOrdinateur = 0;
let egalites = 0;

// Fonction pour choisir aléatoirement une option (pierre, feuille ou ciseaux) pour l'ordinateur
function ordinateurJoue() {
    const options = ['pierre', 'feuille', 'ciseaux'];
    const indexAleatoire = Math.floor(Math.random() * options.length);
    return options[indexAleatoire];
}

// Fonction pour déterminer le résultat de la manche
function jouerManche(choixJoueur, choixOrdinateur) {
    manches++;
    manchesSpan.textContent = manches;

    let resultat;
    if (
        (choixJoueur === 'pierre' && choixOrdinateur === 'ciseaux') ||
        (choixJoueur === 'feuille' && choixOrdinateur === 'pierre') ||
        (choixJoueur === 'ciseaux' && choixOrdinateur === 'feuille')
    ) {
        victoiresJoueur++;
        resultat = 'Victoire !';
    } else if (
        (choixJoueur === 'pierre' && choixOrdinateur === 'feuille') ||
        (choixJoueur === 'feuille' && choixOrdinateur === 'ciseaux') ||
        (choixJoueur === 'ciseaux' && choixOrdinateur === 'pierre')
    ) {
        victoiresOrdinateur++;
        resultat = 'Défaite !';
    } else {
        egalites++;
        resultat = 'Égalité !';
    }

    victoiresJoueurSpan.textContent = victoiresJoueur;
    victoiresOrdinateurSpan.textContent = victoiresOrdinateur;
    egalitesSpan.textContent = egalites;
}

// Écouteurs d'événements pour chaque bouton
pierreBtn.addEventListener('click', () => jouerManche('pierre', ordinateurJoue()));
feuilleBtn.addEventListener('click', () => jouerManche('feuille', ordinateurJoue()));
ciseauxBtn.addEventListener('click', () => jouerManche('ciseaux', ordinateurJoue()));
