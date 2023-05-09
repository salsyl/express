/*
GÉRER LES POSTS
*/

/*
Lorsqu'une requête post est utilisée, les données envoyées ne sont pas présentes dans l'url. Le traitement de ces données dans les requêtes en post se fait d'une façon un peu différente des requêtes avec la méthode get.
Il faut utiliser le module body-parser. Après avoir fait un require de ce dernier, on utilise la fonction middleware :
app.use(bodyParser.urlencoded({
  extended: false
}));
Vous trouverez l'ensemble des options sur la page suivante : https://github.com/expressjs/body-parser

À partir de là, on peut utiliser dans la fonction de retour de la gestion du post (app.post) la propriété body de l'objet req qui contient autant de propriétés que de nombres d'éléments envoyés par la soumission du formulaire.

*/

/*
Exercice

------ 1 ------
Reprenez le code de l'exercice 10 ou de l'exercice 11.
------ 2 ------
Créez une nouvelle page correspondant à un nouveau template comprenant un formulaire avec deux champs (nom et prénom).
------ 3 ------
Traitez l'envoi du formulaire pour afficher dans une autre page le prénom et le nom saisis.
*/
const express = require("express");
const app = express();
const fs = require("fs"); // module fs pour manipuler des fichiers
const path = require("path"); // module path pour travailler avec des chemins de fichiers

const port = 3000;

app.set("view engine", "ejs"); // moteur de template EJS
app.set("views", "./views"); // dossier contenant les fichiers de vue
app.use(express.static("public")); // dossier contenant les fichiers statiques (CSS, JS, images, etc.)

// Route pour la page d'accueil
app.get("/", (req, res) => {
  res.render("index_ejs");
});

// Route dynamique pour toutes les autres pages
app.get("/:page", (req, res) => {
  console.log(req.query);
  const page = req.params.page;
  const cheminVue = path.join(__dirname, "views", `${page}_ejs.ejs`); // construction du chemin du fichier de vue correspondant
  if (fs.existsSync(cheminVue)) {
    // si le fichier de vue existe
    res.render(`${page}_ejs`);
  } else {
    // sinon afficher la page d'erreur 404
    res.status(404).render("404_ejs");
  }
});
// app.get("/:page", (req, res) => {
//   const page = req.params.page;
//   res.render(`${page}_ejs`);
// });

// Middleware pour la gestion des erreurs 404
app.use((req, res) => {
  res.status(404).render("404_ejs");
});

app.listen(port, () => {
  console.log(`Serveur 13 en écoute sur http://127.0.0.1:${port}/`);
});
