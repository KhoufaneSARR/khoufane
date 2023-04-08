const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // récupérer les valeurs des champs du formulaire
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const ville = document.getElementById('ville').value;
  
  // validation des champs
  if (!nom || !email || !telephone || !ville) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }
  
  // envoyer les données du formulaire au serveur
  // code ici pour envoyer les données au serveur
  
  // afficher le message de confirmation
  alert('Merci nous allons vous aider a choisir un endroit agreable pour vos vancances !');
  
  // réinitialiser le formulaire
  form.reset();
});

//Animation Page d'accueil

//Un pays accueillant un pays magnifique un pays admirable

const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    //deleteSpeed:20
    loop:true,
})
.typeString('Bienvenu au Senegal')
//faire apparaitre le texte
.pauseFor(300)
//faire une pause
.deleteChars(19)
//supprimer le texte
.typeString(' Un Pays Admirable')
.pause(1000)
.deleteChars(9)
.typeString('<span style="color: #27ae60"> Magnifique</span>')
.deleteChars('10')
.typeString('<span style="color: yellow"> Acceuillant</span>')
.pause(1000)
.deleteChars('11')
.typeString('<span style="color: red"> Hospitalier</span>')
.start()
