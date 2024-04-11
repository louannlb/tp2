
const gameDiv = document.getElementById('game');
const resultsDiv = document.getElementById('results');

let manches = 0;
let victoiresJoueur = 0;
let victoiresOrdinateur = 0;
let egalites = 0;

function ordinateurJoue() {
    const options = ['pierre', 'feuille', 'ciseaux'];
    const indexAleatoire = Math.floor(Math.random() * options.length);
    return options[indexAleatoire];
}

function creerBouton(choix) {
    const bouton = document.createElement('button');
    bouton.textContent = choix.charAt(0).toUpperCase() + choix.slice(1); 
    bouton.addEventListener('click', () => jouerManche(choix, ordinateurJoue()));
    return bouton;
}

function afficherBoutons() {
    const pierreBtn = creerBouton('pierre');
    const feuilleBtn = creerBouton('feuille');
    const ciseauxBtn = creerBouton('ciseaux');

    gameDiv.appendChild(pierreBtn);
    gameDiv.appendChild(feuilleBtn);
    gameDiv.appendChild(ciseauxBtn);
}

function jouerManche(choixJoueur, choixOrdinateur) {
    manches++;

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

    afficherResultat(choixJoueur, choixOrdinateur, resultat);
}

function afficherResultat(choixJoueur, choixOrdinateur, resultat) {
    const message = `Vous avez choisi ${choixJoueur}, l'ordinateur a choisi ${choixOrdinateur}. ${resultat}`;
    const paragraphe = document.createElement('p');
    paragraphe.textContent = message;
    resultsDiv.appendChild(paragraphe);
}

afficherBoutons();
