# Déploiement GitHub Pages – Envol Graphisme

## Étapes pour mettre en ligne

### 1. Créer le repo GitHub
Va sur https://github.com/new et crée un repo nommé exactement : `Envol-Graphisme`
- Visibility: **Public** (requis pour GitHub Pages gratuit)
- N'initialise pas avec README

### 2. Connecter et pousser
Dans ton terminal (dans le dossier du projet) :

```bash
git remote add origin https://github.com/TON-USERNAME/Envol-Graphisme.git
git push -u origin main
```

Remplace `TON-USERNAME` par ton nom d'utilisateur GitHub.

### 3. Activer GitHub Pages
1. Va dans Settings de ton repo
2. Section **Pages** (menu gauche)
3. Source : **GitHub Actions**
4. Sauvegarde

### 4. Mise à jour URL SEO
Remplace `assiabillale` par ton vrai username GitHub dans ces fichiers :
- `robots.txt`
- `sitemap.xml`
- `index.html` (balises canonical + og:url + JSON-LD)
- `View/Contact.html`, `View/Offres.html`, `View/Projets.html`

### 5. URL finale
Ton site sera disponible à :
`https://TON-USERNAME.github.io/Envol-Graphisme/`

## Mises à jour futures
Chaque `git push origin main` déclenche automatiquement le déploiement via GitHub Actions.
