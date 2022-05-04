---
title: "Refonte globale de hermione.co"
slug: refonte-hermione
date: '01 mai 2022'
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

**Cette liste n'est qu'un extrait du travail d'amélioration ergonomique réalisé sur l'ensemble de cette année, j'ai regroupé ici seulement ce qui me semblait être le plus intéressant et le plus pertinent.**

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

J'ai également souhaité mettre l'accent sur la simplification des données que nous récoltons sur l'ensemble du site. Pour que l'utilisateur gagne du temps, j'ai réduit le plus possible le nombre d'information à fournir en se limitant à l'adresse e-mail quand cela était possible.

![newsletter hermione.co](https://ucarecdn.com/4d703f03-4267-46c8-bdf3-ba6fcb70d996/-/preview/-/quality/smart/)
>Le lead magnet du blog de hermione.co : on ne récupère que l'adresse e-mail

Enfin, j'ai travaillé avec Gabriel Dobricean à l'élaboration d'un meilleur tunnel de vente (le parcours utilisateur amenant à l'achat de notre formation). Pour amener à cette réflexion, nous avons mis en place différent test AB (afficher la même page à un utilisateur mais avec des légères différences).

La plupart des utilisateurs avaient tendance à cliquer sur des liens les redirigeants vers du contenu gratuit (quiz, modèle de lettre de motivation, fiche de révision, ...) plutôt que vers des liens mettant en avant la formation de Hermione Médecine.

![cta méthode pass](https://ucarecdn.com/efc6e1e0-f604-47af-abbe-bb5920a11352/-/preview/-/quality/smart/)
>Un "Call To Action" menant vers la page de vente de la formation "La Méthode PASS"

![quiz hermione médecine](https://ucarecdn.com/55081090-2f7d-4cd9-a213-7cb2206d71fe/-/preview/-/quality/smart/)
>Le lead magnet redirigeant vers le quiz pour estimer ses chances de réussir en PASS

J'ai proposé de placer des lead magnet (une section présentant du contenu gratuit) et des pop up exit (des fenêtes modales s'affichant lorsque l'utilisateur essaye de quitter le site) permettant l'accès à nos contenus gratuits en échange d'un e-mail.

![pop up exit](https://ucarecdn.com/e90fc0b3-a7df-4779-81b3-07884712124d/-/preview/-/quality/smart/)

Une fois l'e-mail récupéré, le prospect reçoit chaque semaine la newsletter. C'est à partir de là que nous essayons de le fidéliser et de l'amener vers l'achat de la formation.


### Audit SEO

Pour terminer cette partie, je vais évoquer le 3e axe de la refonte du site de Hermione Médecine en décrivant le changement de stratégie de référencement SEO que j'ai mis en place. Comme je l'ai évoqué, l'année 2021 a été très mauvaise pour le site car il ramenait très peu de trafic et les contenus les plus consultés n'avaient que très peu de rapport avec la formation en vente.

A partir du mois de novembre 2021, j'ai proposé de changer de stratégie et d'attirer une clientèle plus qualifié et nombreuse à l'aide de quelques outils dont ubersuggest (un générateur de mot clé) et keywordtool. Ces outils m'ont permis d'analyser ce que notre cible recherchait et en quelle quantité.

Grâce à ces données, nous avons commencé par trier les articles les moins pertinents puis à réécrire ceux qui étaient améliorables. Dans un second temps, nous (moi et la rédactrice en chef) avons établi un calendrier sur plusieurs mois afin d'anticiper les prochains évènements lié aux études de médecine en y associant des thèmes d'article. Les rédacteurs ont rédigés alors de nouveaux contenus selon cet emploi du temps.

Pour les 6 premiers mois de 2022 :

- Janvier 2022 : Début du 2ème semestre -> [Réussir son 2e semestre](https://hermione.co/reussir-deuxieme-semestre-pass/)
- Mars-avril 2022 : Période Parcoursup -> [Lettre de motivation PASS](https://hermione.co/lettre-de-motivation-en-pass/)
- Juin-juillet 2022 : Oraux de PASS -> [Oraux PASS médecine](https://hermione.co/oraux-pass-medecine/)

<br>

Cette nouvelle stratégie a été payante car nous avons acquis beaucoup plus de trafic (25 000 pour le mois de mars) et obtenu plusieurs milliers d'abonnement à la newsletter pour le même mois.

![hermione.co analytics](https://ucarecdn.com/b68e2d82-d0eb-4e93-a746-0e7eec8277da/-/preview/-/quality/smart/)
>Evolution du trafic global entre novembre et avril 2022
## 🎁 Résultats

### Aspect quantitatif

En ce qui concerne la réinitialisation du site, il y a plusieurs conséquences positives, notamment l'augmentation de la rapidité de chargement des pages et des gains de performances sur l'ensemble du site.
Pour donner un exemple concret, la page d'accueil mettait à l'origine environ 12 secondes à se charger entièrement. La plupart des données visibles ci-dessous étaient dans le rouge.

![speed page landing hermione.co](https://ucarecdn.com/a684f3ad-6274-4058-8068-21d8056e2e78/-/preview/-/quality/smart/)
>Données pour le 1er mai 2022 (page d'accueil hermione.co)

J'ai également réussi à supprimer totalement les pages à erreur 404 en utilisant l'extension redirection de l'outil SEO rankMath et en désindexant les pages supprimées définitivement.

![erreur 404](https://ucarecdn.com/0172abbd-131c-4569-a90b-28a1a87975a3/-/preview/-/quality/smart/)
>Evolution du nombre page "erreur 404"

En ce qui concerne le SEO, j'ai constaté une augmentation du trafic organique progressive puis très rapide. Le fait d'avoir rédigé du contenu plus qualitatif (qui répond à ce que recherche notre cible) à provoqué l'indexation de pages qui ne l'étaient pas depuis plusieurs mois et une diminution progressive de la variation  de positionnement de nos pages dans le SERP de Google (voir la capture d'écran ci-dessous).

![evolution trafic hermione](https://ucarecdn.com/f419bbe4-2f08-4b17-be2e-c54ea373ad3a/-/preview/-/quality/smart/)
>En orange : positionnement, en violet : nombre d'impressions
Ce gain de trafic nous a fait gagner un nombre d'abonné à la newsletter très conséquent (+ de 4000 pour le mois de mars 2022).
### Aspect qualitatif

D'un point de vue qualitatif, le site est maintenant beaucoup plus sécurisé suite à l'ajout d'un système de double authentification (cette décision a été prise suite au hacking subi l'année dernière). Nous recevons chaque semaine des alertes de tentatives de connexion non fructueuses.

Concernant la réglementation générale sur la protection des données, l'ensemble du site est dorénavant conforme à la nouvelle réglementation (coche de consentement lors de l'envoi de données personnelles par l'utilsateur, déclaration des données récoltées, droit à la modification/suppression des données personnelles, etc.).

![RGPD hermione.co](https://ucarecdn.com/bc1721bd-7e40-40c8-8225-19e55807c638/-/preview/300x300/)
>"J'ai lu et accepte le RGPD"

Ensuite, l'image d'Hermione Médecine est bien mieux définie, plus compréhensible. Le travail autour du logo permettra aux futurs visiteurs du site de comprendre plus facilement l'objectif d'Hermione et ses formations. L'utilisation des nuances mauves tranche avec les couleurs beaucoup plus sombres utilisées auparavant. Cet apport ajoute plus de féminité, d'apaisement, une invitation au rêve, tout en se différenciant de la concurrence, utilisant des couleurs beaucoup plus claires et bleutées.

![couleurs hermione médecine](https://ucarecdn.com/f6d3580c-13ca-424e-b4c1-629e65976145/)

Enfin, après plusieurs mois de réécriture et d'évolution de stratégie, notre contenu s'est progressivement amélioré et est rentré en adéquation avec les attentes de notre cible. La conséquence a été l'augmentation du temps d'utilisation du site et de la diminution du taux de rebond (% d'utilisateurs quittant le site dès la première page). En parallèle de cela, j'ai remarqué une évolution maintenue des backlinks (liens redirigeant vers notre site) attestant de notre évolution de crédibilité dans le domaine des études de santé.

## ☑️ Preuves

La liste exhaustive de ce projet est disponible sur [hermione.co](https://hermione.co).
Voici quelques images du rendu du projet.

**Toutes les images et la représentation qu'elles en font présentent dans cette page appartiennent à Hermione Médecine.

### Refonte graphique

![](https://ucarecdn.com/b2bc2b83-4234-4e0f-a9eb-1b650c375da9/-/preview/-/quality/smart/)
>Blog, page de vente, page d'accueil et article

![](https://ucarecdn.com/28e9dadb-e0e0-4282-9f01-811d17af6a0a/-/preview/-/quality/smart/)
>Page d'avis, à propos et page de vente du Planner d'Hermione

![](https://ucarecdn.com/1d9d4aa5-7031-49a9-87ef-4b1d5ec1fe04/-/preview/-/quality/smart/)
>Affichage responsive

![logo slogan hermione médecine](https://ucarecdn.com/bade3d2b-48c6-4728-9e6d-ff2b5f308d5b/-/preview/350x350/)
>Ajout d'une typographie et d'un slogan sur le logo de Hermione Médecine

![couleurs charte graphique](https://ucarecdn.com/f6d3580c-13ca-424e-b4c1-629e65976145/)
>Les nouvelles couleurs de la charte graphique

![typographie hermione médecine](https://ucarecdn.com/29f1cbb8-56ea-4477-a7aa-d4f43c8086f8/-/preview/-/quality/smart/)
>Nouvelle typographie : Gilroy présentait des problèmes d'accents sur certaines graisses

![composants UI hermione médecine](https://ucarecdn.com/85832fcd-aaea-4ef3-9858-7fed00933a1d/-/preview/-/quality/smart/)
>Composants UI cohérents entre eux