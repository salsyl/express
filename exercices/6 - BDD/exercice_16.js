/*********************************************************
**********UTILISATION D'UNE BASE DE DONNÉES - 1 **********
*********************************************************/

/*********************************
***********Présentation***********
*********************************/
/*
Il existe de plusieurs modules pour interfacer NodeJS avec MongoDB. Nous utiliserons le pilote officiel(https://www.npmjs.com/package/mongodb).

Pour se connecter à la base de donnée, il faut réaliser deux actions :
- Utilisez le module (écrire en haut de fichier) :
var MongoClient = require('mongodb').MongoClient;

- Se connecter à la base avant de l'interroger.

Voici le schéma type :
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';
const dbName = 'test';
MongoClient.connect(url,{ useNewUrlParser: true },function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('truc');
    // Ajout d’un utilisateur
    collection.find({}).toArray(function(err, docs) {
        console.log(docs);
        client.close();
        // suite des actions
    });
});

Vous trouverez des indications supplémentaires ici : http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/

*/


/*********************************
*************Exercice*************
*********************************/
/*

Créez une base de donnée avec une collection en console.
Stockez quelques enregistrements dans cette collection.
Affichez le contenu de la base de données dans votre page
*/
