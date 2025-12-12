# 📝 GUIDE : Comment Ajouter des Produits

## 🎯 Système Simple - Un seul fichier à modifier !

Tous tes produits sont dans **produits-data.js**. Pas besoin de créer de nouvelles pages HTML !

---

## ✅ ÉTAPE 1 : Ajouter tes photos et vidéos

### Photos
1. Prépare tes photos de produits (format JPG ou PNG)
2. Nomme-les clairement : `collier-ocean-1.jpg`, `collier-ocean-2.jpg`, etc.
3. Mets-les dans le dossier : **images/produits/**

### Vidéos (optionnel)
1. Prépare ta vidéo (format MP4, max 50MB)
2. Nomme-la : `demo-collier-ocean.mp4`
3. Mets-la dans le dossier : **videos/**

---

## ✅ ÉTAPE 2 : Ajouter le produit dans produits-data.js

Ouvre le fichier **produits-data.js** et ajoute ton produit à la fin de la liste :

```javascript
const produits = [
  // ... produits existants ...
  
  {
    id: 4, // ⚠️ IMPORTANT : Prends le numéro suivant (1, 2, 3, 4...)
    nom: "Ton Nom de Produit",
    collection: "bleue", // jaune, bleue, rouge, vert, beige, orange, rose, noir-gris, classique, cabochons, boheme, gothique, rock, hippie, vintage
    categorie: "rosa_neotera", // ou "contre_culture"
    prix: 25.00,
    stock: 5,
    description: "Description complète de ton bijou. Parle des matériaux, du style, de ce qui le rend unique...",
    caracteristiques: [
      "Longueur : XXcm",
      "Matériaux : Bois, peinture...",
      "Fait main à Toulouse",
      "Anti-allergique"
    ],
    photos: [
      "images/produits/ton-image-1.jpg",
      "images/produits/ton-image-2.jpg",
      "images/produits/ton-image-3.jpg"
    ],
    video: "videos/ta-video.mp4", // Ou "" si pas de vidéo
    nouveaute: true, // true ou false
    promotion: false // true ou false
  }
];
```

### 📋 Explications des champs :

- **id** : Numéro unique (1, 2, 3, 4...). ATTENTION : Ne pas utiliser deux fois le même !
- **nom** : Le nom de ton bijou
- **collection** : La couleur ou le style
- **categorie** : `rosa_neotera` ou `contre_culture`
- **prix** : Le prix en euros (avec .00)
- **stock** : Combien tu en as en stock
- **description** : Texte de présentation (2-3 phrases)
- **caracteristiques** : Liste des détails techniques
- **photos** : Tableau avec les chemins de tes images (au moins 1, max 6)
- **video** : Chemin de ta vidéo ou "" si pas de vidéo
- **nouveaute** : `true` si c'est nouveau, `false` sinon
- **promotion** : `true` si en promo, `false` sinon

---

## ✅ ÉTAPE 3 : Mettre à jour ton site

1. Sauvegarde le fichier **produits-data.js**
2. Va sur https://app.netlify.com
3. Clique sur ton site
4. Onglet "Deploys"
5. Glisse-dépose tout le dossier **site-simple**
6. Attends 30 secondes...
7. ✨ Ton nouveau produit apparaît automatiquement !

---

## 🎨 Exemple Complet - Copie/Colle ça

```javascript
{
  id: 5,
  nom: "Boucles d'oreilles Fleur Rose",
  collection: "rose",
  categorie: "rosa_neotera",
  prix: 18.00,
  stock: 10,
  description: "Délicates boucles d'oreilles en bois avec motif floral gravé au laser. Finition rose poudré et détails dorés. Parfaites pour un look romantique et bohème.",
  caracteristiques: [
      "Diamètre : 4cm",
      "Poids : 2g la paire",
      "Crochets dorés anti-allergiques",
      "Peinture acrylique écologique"
  ],
  photos: [
      "images/produits/boucles-fleur-rose-1.jpg",
      "images/produits/boucles-fleur-rose-2.jpg"
  ],
  video: "",
  nouveaute: true,
  promotion: false
}
```

---

## 🔥 ASTUCES PRO

### Pour de belles photos :
- Fond neutre (blanc, bois clair)
- Lumière naturelle
- Plusieurs angles
- Photo portée + photo seule
- Taille recommandée : 1000x1000 pixels

### Pour les vidéos :
- Courte (10-30 secondes)
- Montre le bijou sous tous les angles
- Montre le porté
- Format MP4
- Poids max : 50MB

### Organisation :
- Nomme tes fichiers clairement : `collier-ocean-1.jpg` et pas `IMG_1234.jpg`
- Une vidéo par produit maximum
- 2-4 photos par produit idéalement

---

## ❓ Questions Fréquentes

**Q : Combien de produits je peux ajouter ?**
R : Illimité ! Le site s'adapte automatiquement.

**Q : Je n'ai pas de vidéo, c'est grave ?**
R : Non ! Mets juste `video: ""` et le site n'affichera pas de section vidéo.

**Q : Je veux modifier un produit existant ?**
R : Ouvre produits-data.js, trouve le produit par son id, modifie les infos, sauvegarde.

**Q : Je veux supprimer un produit ?**
R : Ouvre produits-data.js, supprime le bloc complet du produit (de { à },), sauvegarde.

**Q : Mes images ne s'affichent pas ?**
R : Vérifie que le chemin est correct : `images/produits/nom-exact-du-fichier.jpg`

---

## 🎉 C'est tout !

Chaque fois que tu modifies **produits-data.js**, le site se met à jour automatiquement sur toutes les pages :
- Page "Tous les produits"
- Filtres par catégorie
- Pages de détail
- Badges "Nouveau" et "Promo"

**Besoin d'aide ? Contacte-moi !** 😊
