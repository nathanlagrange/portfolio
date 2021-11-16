---
title: "helpnfiesta.fr"
slug: helpnfiesta
date: '15 mars 2021'
description: "helpnfiesta.fr a été sûrement LE projet phare de mon année 2021 ! J'ai beaucoup appris et donner de mon temps sans compter. Ce projet est à l'initiative de Mr. Iscariot et Help'n Fiesta, une association liée à l'évenementiel et le ramassage de déchets sur le secteur des Pennes Mirabeau (13). Le site a été entièrement développé sur Wordpress avec le site builder Oxygen."
extrait: "helpnfiesta.fr est le résultat du projet tutoré de ma 2e année en IUT MMI, en tant qu'intégrateur web et web designer."
id: '0012'
img: https://ucarecdn.com/ff36ca0c-7118-4cd9-8f32-7aee33c0f44e/-/preview/-/quality/smart/
alt: Help'n Fiesta
categorie: "web"
année: 2021
---

## 🏄 Le site

<br><br>

Cliquer ici pour accéder au site de **[helpnfiesta.fr](https://helpnfiesta.fr)🔗**

<br><br>

## 📺 Vidéo de présentation

<br><br>

<iframe src="https://www.youtube.com/embed/nrcVLlnzq3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>

J'ai réalisé cette vidéo (et composé sa musique 🎹) pour présenter le projet d'une façon plus agréable.

<br>

**Bon visionnage !**

<br><br>

## 📜 Contexte et enjeux

<br><br>

En 2ème année d'IUT, tous les étudiants doivent former des groupes pour mener à bien un projet (tutoré) entre septembre et avril. Nous devions répondre à une demande précise d'un commanditaire (l'association Help'n Fiesta) et nous organiser selon nos connaissances et domaine de spécialisation (développeur, chef de projet, infographiste, ...). Pour développer ce site, j'ai travaillé en étroite collaboration avec [Lorenzo Tringali](https://lorenzotringali.fr), le chef de projet qui s'est occupé de la partie back-end du développement.

<br>

**Ce qui était demandé**

<br>

Notre commanditaire souhaitait développer (entre autre) **un site vitrine** pour son association de collecte de déchets comprenant différentes fonctions (voir partie "objectifs").

<br><br>

### Objectifs 🎯

<br>

En tant que développeur-intégrateur web, j'ai défini (avec Lorenzo Tringali) nos principaux objectifs et ce que j'allais faire sur l'ensemble du projet selon les attendus de notre commanditaire.

<br>

Voici les principales fonctions, constituant nos objectifs, que nous devions développer :

<br>

- **Un blog** pour informer des évènements (passés et futurs) de l'asso.
- Un formulaire de contact.
- La possibilité de **s'inscrire sur le site.**
- Envoyer des mails aux inscrits sous forme de **newsletter.**
- La possibilité de faire des dons sur Hello asso depuis le site.
- Mettre en avant les valeurs et actions de l'association.

<br><br>

Ça c'était la demande de Help'n Fiesta. Nous l'avons évidemment reformulée pour que le projet soit cohérent et faisable. De cette façon, nous avons suggérés différentes idées supplémentaires ou complémentaires :

<br>

- Développer le site sous Wordpress pour que notre client puisse le modifier à sa guise une fois le projet abouti.
- Un site conforme avec la nouvelle réglementation RGPD (la possibilité de modifier ses infos et les supprimer).
- L'intégration de l'**API** de "**Hello Asso**" pour permettre de réaliser une donation sur le site.
- Mettre en place un site le + sécurisé possible.
- Optimiser le site pour une utilisation mobile
- Référencer le site pour que ses visiteurs puissent le trouver sur Google.
- Développer nous-même une extension pour permettre d'envoyer des mails aux inscrits depuis l'interface de Wordpress

<br><br>

## 📑 Actions réalisées

<br><br>

### 📙 Cahier des charges

<br>

La première étape du projet était de rediger un document synthétisant l'ensemble des fonctions, besoins, spécifications, contraintes et résultats attendus du projet. C'est dans ce cahier des charges que j'ai évoqué les différentes étapes du projet (web design, développement, test, ...), le contexte, les pistes à exclure, les technologies et outils que nous allions utiliser pour développer le site.

<br><br>

![cahier des charges fonctionnel help'n fiesta](https://ucarecdn.com/168bd0b9-e70b-4621-adb9-9db1cc0aa318/-/preview/900x900/)
>Le cahier des charges du projet par FIVE X
<br><br>

### 🌳 Arborescence

<br>

J'ai conçu l'arborescence avec gloomaps pour **structurer les pages** du site et mieux **visualiser le besoin des utilisateurs** du site (parcours et expérience). Après quelques réunions et échanges avec les membres de l'association, une version aboutie de l'arborescence est finalement retenue :

![arborescence help'n fiesta](https://ucarecdn.com/3227c8a9-8ba1-4a5a-ba91-5007da2d7cfb/-/preview/1200x1200/)

<br>

- **La page d'_accueil_** présente les actions menées par l'association de façon synthétiques (CTA, réseaux sociaux, vidéo de présentation, actu récente, ...).
- **La page _Evènements_** met en avant le dernier évènement en date mené par Help'n Fiesta.
- **La page _Faire un don_** intègre un formulaire (l'API de helloasso) de donation.
- **La page _Informations_** complète la page d'accueil en donnant plus d'informations sur l'organisation (FAQ, équipe et valeurs).
- **La page _Actualités_** regroupe tous les articles du blog avec un système d'archive et de recherche.
- **La page _Mon compte_** permet de se connecter à son profil et de changer ses informations (conformément au RGPD), accessible après s'être inscrit depuis **la page _Adhérer_**.
- **Page _Mentions légales_**
- **Page _Politique de confidentialité_**

<br>

Cette étape a été très importante car elle m'a permis de repérer beaucoup d'erreur dans le parcours utilisateur qu'avait en vue notre commanditaire et de ne pas perdre de temps par la suite. Pour donner un exemple, nous avons supprimé la possibilité de devenir bénévole indépendamment d'être inscrit car cela créait de la confusion et était compliqué à mettre en place techniquement.

<br><br>

### 🎨 Web design (UX/UI)

<br>

Je vous recommande de consulter [cet article](/blog/21w16) pour consulter le projet Figma en parallèle de la lecture.

<br>

Bien avant de développer le site, vient l'étape du web design avec la réalisation d'un wireframe (ou zoning) afin de définir les sections de chaque page et leur emplacement dont voici un extrait :

<br><br>

![wireframe help'n fiesta](https://ucarecdn.com/be84e7bf-fb00-4963-b90c-e7e11456f9ff/-/preview/700x700/)
>Wireframe de la page d'accueil

<br><br>

Quand le wireframe était enfin achevé, je me suis concentré sur **la création de l'interface utilisateur** à partir de la charte graphique définie par mon équipe. Cela a consisté à définir à quoi ressemblerait les CTA (boutons), les images utilisées, la taille des titres, les bordures, etc. 

<br><br>

Finalement, J'ai procédé à la création d'une interface la plus simple possible en phase avec les valeurs visuelles de l'agence (la charte). En effet, une partie importante des utilisateurs du site sont des personnes plutôt agées, n'étant pas toujours habituées à l'utilisation d'un site avec une interface complexe dans sa structure.

<br><br>

![accueil interface design help'n fiesta](https://ucarecdn.com/2f3f2ecf-5dc6-46a2-8ab8-0dc93b7656aa/-/preview/-/quality/smart/)
>Version UI de la page d'accueil

<br><br>

Globalement, je suis assez satisfait de l'interface utilisateur car elle dégage une ambiance conviviale et festive avec de vives couleurs, ce que nous recherchions pour ce type d'association.

<br><br>

Dernière étape : celle du **prototypage.** Cette phase m'a permis de montrer rapidement à notre commanditaire la façon dont la navigation s'opère sur le site pour qu'il se rende compte à quoi il ressemblera concrètement et relever des potentielles incohérences dans l'expérience utilisateur avant de procéder au développement du site.

<br><br>

### 👨‍💻 Développement

<br>

La phase de développement a été relativement courte (environ 1 mois et demi) et a été entièrement faite sur le CMS Wordpress dans le but de favoriser la mise à jour des contenus du site par ses propriétaires. J'ai intégré et développé les fonctions liées à l'interface que je vais vous présenter dans cette partie.

<br>

#### 🧰 Outils de développement et de création

<br>

![outils de développement help'n fiesta](https://ucarecdn.com/25fee0b5-303a-45d6-83b6-721cb211dc1f/-/preview/-/quality/smart/)

<br>

#### 📄 Intégration des pages

<br>

Afin de créer les pages et les différentes templates/thèmes (résultat de recherche, mise en page article, ...), j'ai utilisé le site builder _Oxygen Builder_. J'ai fait ce choix car il me permettait d'aller beaucoup plus loin avec l'intégration de code PHP/JS personnalisé (contrairement à Elementor) et étant plus léger, il ne surcharge pas le site (très important pour le référencement ☝️).

<br>

#### 🔍 Quelques fonctions en détail

<br>

Avec Lorenzo Tringali, j'ai codé un système de réponse aux questions fréquentes sous forme d'accordeon [téléchargeable ici](https://github.com/nathanlagrange/hnf) 📥, avec les langages HTML, CSS et JS. Le principe est le suivant :

<br>

Quand on clique sur la question plusieurs éléments se déclenchent :

<br>

- La section du bas s'affiche (animation de la hauteur)
- Le trait vertical change d'orientation (horizontal)
- Au deuxième click, les évènements s'inversent.
- Javascript : utilisation de la méthode querySelector, toggle et classlist (inversion de class)

![outils de développement help'n fiesta](https://i.imgur.com/6EXVRZx.gif)
>L'accordéon FAQ de helpnfiesta.fr

<br><br>

En ce qui concerne l'espace de personnalisation du profil, j'ai développé un système d'onglets permettant d'accéder à ses identifiants, la possibilité de changer son mot de passe et de supprimer son compte très facilement.

<br><br>

![help'n fiesta tabs onglets profil](https://ucarecdn.com/8650f4f5-44b7-42b4-a9bc-ca32d14ec8b0/-/preview/-/quality/smart/)

#### 📲 Optimisation et affichage mobile

<br><br>

### Référencement SEO

## 📦 Résultats

<br><br>

### 💎 Aspect qualitatif

<br><br>

### 🔢 Aspect quantitatif

<br><br>

## ☑️ Preuves et témoignages
