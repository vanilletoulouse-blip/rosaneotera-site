// FICHIER DE DONNÉES PRODUITS
// Pour ajouter un produit : copie un bloc et modifie les infos

const produits = [
  {
    id: 1,
    nom: "Collier Océan Mystique",
    collection: "bleue",
    categorie: "rosa_neotera", // ou "contre_culture"
    prix: 28.00,
    stock: 5,
    description: "Magnifique collier en bois avec pendentif bleu turquoise. Gravure laser détaillée représentant des vagues océaniques. Chaîne en acier inoxydable.",
    caracteristiques: [
      "Longueur : 50cm",
      "Pendentif : 5cm x 3cm",
      "Matériaux : Bois, peinture acrylique, chaîne acier",
      "Fait main à Toulouse"
    ],
    photos: [
      "images/produits/collier-ocean-1.jpg",
      "images/produits/collier-ocean-2.jpg",
      "images/produits/collier-ocean-3.jpg"
    ],
    video: "", // Laisser vide si pas de vidéo
    nouveaute: true,
    promotion: false
  },
  {
    id: 2,
    nom: "Boucles d'oreilles Soleil Doré",
    collection: "jaune",
    categorie: "rosa_neotera",
    prix: 18.00,
    stock: 8,
    description: "Boucles d'oreilles légères en bois gravé au laser. Motif soleil avec rayons délicats. Finition dorée brillante.",
    caracteristiques: [
      "Diamètre : 4cm",
      "Poids : Très léger (3g/paire)",
      "Crochets anti-allergiques",
      "Peinture écologique"
    ],
    photos: [
      "images/produits/boucles-soleil-1.jpg",
      "images/produits/boucles-soleil-2.jpg"
    ],
    video: "",
    nouveaute: false,
    promotion: true
  },
  {
    id: 3,
    nom: "Bracelet Rock Crâne",
    collection: "gothique",
    categorie: "contre_culture",
    prix: 22.00,
    stock: 3,
    description: "Bracelet ajustable style gothique avec pendentif tête de mort gravé. Finition noir mat et détails argentés.",
    caracteristiques: [
      "Taille ajustable",
      "Pendentif : 3cm x 2.5cm",
      "Cordon noir résistant",
      "Style alternatif"
    ],
    photos: [
      "images/produits/bracelet-rock-1.jpg"
    ],
    video: "videos/demo-bracelet-rock.mp4",
    nouveaute: true,
    promotion: false
  }
  
  // Produit réel de la boutique
  ,{
    id: 4,
    nom: "Boucles d'Oreilles Pistolet Revolver & Fleurs",
    collection: "rock",
    categorie: "contre_culture",
    prix: 39.90,
    stock: 5,
    description: "Boucles d'oreilles audacieuses mêlant force et douceur : pistolets revolver noirs ornés de fleurs roses. Découpe laser précise et peinture artisanale à la main sur bois. Design original inspiré de l'univers rock et alternatif, avec une touche féminine inattendue. Légères et confortables, parfaites pour affirmer ton style rebelle tout en gardant une touche poétique. Chaque paire est unique grâce au travail manuel.",
    caracteristiques: [
      "Hauteur : 8cm environ (avec dormeuse)",
      "Matériau : Bois naturel découpé au laser",
      "Peinture acrylique artisanale",
      "Dormeuses noires anti-allergiques",
      "Très léger malgré la taille",
      "Fait main à Toulouse",
      "Design unique : pistolet + fleurs roses"
    ],
    photos: [
      "images/produits/boucles-pistolet-1.jpg"
    ],
    video: "videos/boucles-pistolet-demo.mp4",
    nouveaute: true,
    promotion: false
  }
  
  // Collier Chicana Madone Armée
  ,{
    id: 5,
    nom: "Pendentif Chicana Madone Armée - Femme Guerrière",
    collection: "comics",
    categorie: "contre_culture",
    prix: 39.90,
    stock: 2,
            etsyLink: "https://etsy.me/4oObjZS",
    description: "Pendentif spectaculaire inspiré de l'art chicano et de la culture pop mexicaine. Madone guerrière au style street art avec pistolets, auréole dorée et look badass. Découpe laser ultra-détaillée sur bois avec peinture artisanale éclatante : bleu ciel, turquoise, rouge passion et touches dorées. Fusion parfaite entre sacré et street, douceur et puissance. Pour celles et ceux qui osent affirmer leur double nature : foi et rébellion. Pièce unique et audacieuse qui ne passe jamais inaperçue.",
    caracteristiques: [
      "Hauteur : 9cm environ (grand pendentif statement)",
      "Matériau : Bois naturel découpé au laser",
      "Peinture acrylique artisanale multiples couches",
      "Chaîne noire métallique incluse",
      "Style : Chicano, Street Art, Pop Art latino",
      "Détails ultra-précis (auréole, armes, vêtements)",
      "Fait main à Toulouse",
      "Chaque pièce est unique"
    ],
    photos: [
      "images/produits/collier-chicana-1.jpg",
      "images/produits/collier-chicana-2.jpg",
      "images/produits/collier-chicana-3.jpg",
      "images/produits/collier-chicana-4.jpg"
    ],
    video: "",
    nouveaute: true,
    promotion: false
  }
  
  // POUR AJOUTER UN NOUVEAU PRODUIT :
  // 1. Copie un bloc complet (de { à })
  // 2. Change l'id (nombre suivant)
  // 3. Modifie toutes les infos
  // 4. Ajoute tes photos dans images/produits/
  // 5. Sauvegarde ce fichier
  // 6. Le site génère automatiquement la page !
];
