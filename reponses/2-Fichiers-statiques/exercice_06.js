/*
ROUTES ET FICHIERS STATIQUES PERSONNALISÉS

En explorant la gestion des routes et l'intégration des fichiers statiques, vous allez créer un petit site web avec Express.js.
*/

/*
Exercice

Dans un dossier public, créez trois documents HTML (index, about et contact )  :
Chaque document doit contenir un titre  un menu de navigation, une balise image et un footer.
Utilisez le même fichier CSS pour les trois documents afin d'assurer une apparence cohérente,
Prévoyez une image d'en-tête à inclure dans chacun des documents.
Intégrez un menu de navigation dans chacune des trois pages, comprenant trois liens : index, about et contact  Page 1 et Page 2. Ces liens permettront de naviguer entre les différentes pages.
Utilisez un middleware app.use() pour servir les fichiers statiques et trois gestionnaires de routes app.get() pour chacune des pages.
*/

const express = require("express");
const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: "public" });
});
app.get("/contact", (req, res) => {
  res.sendFile("contact.html", { root: "public" });
});

app.listen(port, () => {
  console.log("server 5 en ecoute sur http://127.0.0.1:3000/");
});
