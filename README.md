# AEMFS - Prog Web Back Front

## Idées de base

### Structure:

Multipage avec plusieurs onglets: accueil, photos, contact

### Détails pages

Accueil: présentation des 3 créateurs & photos arrondies sur une ligne horizontale

Photos: affichage de photos en grille max 2 voir 3 par ligne 

Contact: page avec formulaire de contact + email + adresse

## Mise en prod

Copiez le .env.example à .env et ajoutez-y le lien de votre API.

Si vous le souhaitez, vous pouvez utiliser le lien de mon API qui est en
production et qui contient déjà des données :

```
https://api.l2.schawnndev.fr
```

### Installez les dépendances

```
npm install
```

### Démarrez le serveur dev
```
npm run serve
```

### Compilez et minifiez pour la production
```
npm run build
```

### Testez votre code avec lint
```
npm run lint
```
