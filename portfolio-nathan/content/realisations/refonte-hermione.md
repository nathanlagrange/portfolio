---
title: "Refonte globale de hermione.co"
slug: refonte-hermione
date: '07 février 2022'
description: "Pendant une grande partie de mon alternance, j'ai eu la possibilité de proposer une refonte graphique, web et une amélioration du SEO de l'ensemble du site de Hermione Médecine."
extrait: "Optimisation SEO des contenus, cohérence graphique et amélioration de l'expérience d'utilisation sur mobile."
id: '0032'
img: https://ucarecdn.com/e01fc074-4383-4ab8-b2ca-666c1e9c34ba/-/preview/-/quality/smart/
alt: refonte hermione.co
categorie: 'alternance'
année: 2022
---
## 📜 Contexte et enjeux

Dès que j'ai démarré mon contrat chez Hermione Médecine, j'ai remarqué qu'il y avait un manque de cohérence graphique et ergonomique. D'une page à l'autre, les éléments (couleurs, boutons, taille de police, organisation du thème, ... ) étaient radicalements différents et difficilement lisibles/visibles.

![hermione.co ancien manifeste](https://ucarecdn.com/64f4ff4e-7662-4064-ad97-bc02185d8ade/-/preview/-/quality/smart/)
>Une ancienne version de la page à propos du site
![hermione.co ancien avis](https://ucarecdn.com/416deeb7-362d-4a1d-8729-08e1a9a4d9ef/-/preview/-/quality/smart/)
>La page avis ne reprend pas les codes de la charte graphique

**Les articles du blog avaient également beaucoup de faiblesses.** Chaque page était héritée d'un article précédent et si l'on voulait appliquer une modification de la template, il fallait modifier chaque contenu, un par un. De ce fait certaines pages n'avaient (visuellement) aucun rapport entre elles.

![hermione.co article ancien](https://ucarecdn.com/02f05f9d-ea59-4b01-9ed2-433b78ddb04e/-/preview/-/quality/smart/)
>Un modèle d'article...
![hermione.co article ancien](https://ucarecdn.com/01f0fff2-e4fb-44d9-ba9d-654a8409f42c/-/preview/-/quality/smart/)
>complètement différent.

Ensuite, **du point de vue du SEO**, il y avait énormement de travail à fournir car le site n'attirait pas assez de traffic par rapport à son plein potentiel.

- Une bonne partie des requêtes (mot clé) des articles n'étaient pas des requêtes très consultées.
- Certains contenus étaient mal rédigés (syntaxe et orthographe).
- Les articles (et les autres pages) n'étaient pas adaptés à une utilisation mobile (temps de chargement trop conséquent, images hors de l'écran, titres trop grands, ...).
- Encore plus important : la moitié des articles ne s'indexait pas automatiquement par Google pour diverses raisons (le contenu était souvent dupliqué ou pas pertinent selon Google).

<br>

**Concernant l'ergonomie du site**, j'ai réalisé un audit progressif pour évaluer les principales faiblesses du site. En voici une partie que j'ai repertorié ici :

- Un temps de chargement dépassant les 10 secondes sur certaines pages pénalisant le référencement et l'expérience utilisateur (dû à la taille des images, un grand nombre d'extensions Wordpress installées et des scripts au chargement de la page).
- La police d'écriture était trop fine et rendait la lecture difficile.
- Les formulaires présents dans les fenêtres modales n'affichaient pas de message de confirmation/d'erreur.
- Les liens présents dans le pied de page ne fonctionnaient pas
- Quelques pages ne présentaient pas d'en-tête et favorisait l'utilisateur à quitter le site sans poursuivre la navigation.
- Pas de page contact
- Pas de système d'accessibilité
- Titres mal hiérarchisés
- ...

## 👷🏻 Actions réalisées

### Refonte web et graphique

Dans un premier temps j'ai procédé à la réinstallation du CMS Wordpress pour repartir de zéro et réintégrer chaque page. Pour cela, j'ai limité le nombre d'extension que j'allais installer et changé le page builder du site (j'ai choisi oxygen builder car il est optimisé pour le SEO et il permet de créer des pages rapides à afficher).

Ensuite, à partir de la nouvelle [charte graphique](https://nathanlagrange.dev/realisations/charte-hermione/), j'ai modifié la maquette des pages sur Figma en les adaptant petit à petit.

![manifeste hermione médecine](https://ucarecdn.com/d49d697b-5bc5-443d-913b-45c556d4472d/-/preview/-/quality/smart/)

![landing hermione médecine](https://ucarecdn.com/af534679-c2e1-4cc9-aab7-9c7374cdac37/-/preview/-/quality/smart/)

En parallèle de ça, j'ai défini un design system avec des composants que j'allais réutiliser à travers le site dans le but suivant : créer une redondance et une cohérence graphique dans le site.
<br />
<br />
Cette étape fut assez frustrante et longue car mes supérieurs hiérarchiques souhaitent fréquemment opérer à des changements dans le choix des couleurs, des composants et l'organisation des pages.

![design system hermione médecine](https://ucarecdn.com/6b4aaacc-979f-4c4b-bdc1-32c5cd1f5f26/-/preview/-/quality/smart/)
>le design system de Hermione Médecine

Progressivement le site est devenu plus cohérent dans sa présentation graphique et nos choix devenaient moins hasardeux.

J'ai également construit le thème parent du site à la main, à l'aide de mes compétences en développement web afin de pouvoir changer la présentation des articles et des pages plus rapidement, de façon héritée.

![template hermione médecine](https://ucarecdn.com/581822c6-512a-4306-9535-5848540953d8/-/preview/-/quality/smart/)
>Evolution du thème des articles du site

Par exemple, j'ai utilisé le langage PHP pour récupérer de façon dynamique le contenu de l'article, le titre, le fil d'ariane, la date, etc. J'ai également intégré un compteur de temps de lecture que j'ai développé à l'aide de Javascript (voir ci-dessous).

```
function readingTime() {
	const text = document.getElementById("inner_content-6-809").innerText; /* on récupère le contenu de l'article */
	const wpm = 300; /* on défini le nombre de mot lu par minute*/
	const words = text.trim().split(/\s+/).length; /* trim supprime les espaces et split découpe les phrases en mot*/ 
	const time = Math.ceil(words / wpm); /* nombre de mots divisé par le nombre de mot lu par minute = temps*/
	const valueTime = document.getElementById("readingTime").innerText = time;
	const unite = document.createTextNode(" minutes");
}

readingTime();
```

### Amélioration de l'ergonomie du site

En parallèle de la refonte graphique de [hermione.co](https://hermione.co), j'ai proposé de nombreuses améliorations du côté de l'ergonomie et de l'expérience utilisateur.

Par exemple, il n'était pas évident de cerner le secteur d'activité de l'entreprise. C'est pour cela que j'ai ajouté un slogan et une typographie au logo existant pour que tout cela soit plus transparent pour l'utilisateur.
L'objectif était également de permettre aux visiteurs du site de mieux mémoriser le nom de l'agence et ses objectifs.
<br />

![logotype hermione médecine](https://ucarecdn.com/bade3d2b-48c6-4728-9e6d-ff2b5f308d5b/-/preview/350x350/)
>Logotype Hermione Médecine

J'ai remarqué qu'il y avait un surplus d'informations sur certaines pages qui rendait la lecture et la compréhension beaucoup trop difficile. J'ai opéré un tri et gardé les informations les plus importantes.

Par exemple, il y avait des pages secondaires (blog) affichées dans le menu qui n'étaient pas pertinentes à cet endroit.

![avis ergonomie hermione médecine](https://ucarecdn.com/d622ca5a-c8ed-44db-b0e7-98a3ac45e3cd/-/preview/-/quality/smart/)
>Simplification du nombre de page dans le menu (4) et affichage de 3 avis maximum sur la landing page

Ensuite, j'ai évalué que les CTA (boutons call to action) avaient tendance à ne pas se différencier dans l'ensemble des pages. Sur certains fonds unis, on ne les remarquait pas. A partir de ce constat, j'ai défini la règle suivante pour obtenir un meilleur contraste dans les couleurs :

- Sur des fonds complexes : CTA blanc
- Sur des fonds simples : CTA dégradé (clair ou sombre)

![CTA hermione.co](https://ucarecdn.com/e52f35d7-965c-4e36-9399-28ac3520a2fd/-/preview/300x300/)

### Audit SEO


## 🎁 Résultats

### Aspect quantitatif

### Aspect qualitatif

## ☑️ Preuves et témoignages