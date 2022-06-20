---
title: "FriendsTrip : approche graphique et ergonomique"
slug: friendstrip
date: '20 juin 2022'
description: "Dans le cadre de mon bachelor 3 web design, j'ai réalisé la création de l'univers graphique et ergonomique de l'application de voyage FriendStrip. Je vais vous présenter le processus de réflexion et de création du projet."
extrait: "Réalisation de l'univers graphique et ergonomique pour l'application friendstrip (projet étudiant)"
id: '0034'
img: https://ucarecdn.com/23dad0e7-1f35-48c5-868f-6a26448031af/-/preview/-/quality/smart/
alt: friendstrip
categorie: webdesign
année: 2022
---

## 📜 Contexte et enjeux

Le contexte du projet a lieu dans le cadre du bachelor de l'école My Digital School. Par groupe de 5 élèves, nous devons réaliser la création et le développement d'une application dont le concept est de permettre aux personnes les moins aisées de voyager autour du monde à des prix accessibles tout en rencontrant d'autres personnes.

<br>

Je me suis chargé personnellement de la création de l'identité graphique du projet et des différentes maquettes des écrans de l'application. Je vais vous présenter ici les différentes étapes du projet et les justifications associées.

<br>

- 1. La veille concurrentielle
- 2. Fonctions principales et secondaires
- 3. Charte graphique
- 4. Wireframe/maquette
- 5. Design system

<br>

## 📑 Actions réalisées

### 1. Réalisation de la veille concurrentielle

Afin d’établir un arbre complet de fonctions principales et secondaires, nous avons sélectionné des applications similaires à notre projet : réserver un ensemble de services (hébergement et transport) via un catalogue généré par les utilisateurs de l’application.

Ces 2 applications sont Airbnb et Booking. Elles avaient chacune des aspects complémentaires que nous voulions intégrer dans notre projet. Airbnb pour son système de réservation d’hébergement et plus particulièrement pour son ergonomie très optimale et son interface claire. Booking reprenait plus largement notre concept avec la possibilité de voyager et de choisir un hébergement partout dans le monde.

Pour simplifier, nous nous sommes inspirés de la forme et de l’ergonomie de Airbnb ainsi que du principe de Booking.com. Pouvoir s’appuyer sur ces applications, nous a permis de nous reposer sur une base solide et de pouvoir innover en y intégrant des fonctions propres à nos ambitions : 

Voyager et/ou être hébergé à bas prix en y faisant des rencontres avec un système de création de voyage personnalisable.

La possibilité de pouvoir créer et rejoindre un voyage sur Airbnb est une fonction que nous avons bien entendu retenue à la différence qu’il n’est pas possible de sélectionner un hébergement sans moyen de transport. À l’inverse, l’utilisateur possède le choix de voyager en avion (ou en train) sans choisir d’hébergement. Il est également possible de contacter le responsable de l’hébergement, afficher le plan, gérer son profil, afficher ses réservations (actuelles et anciennes).

<br>

![mode hôte airbnb](https://ucarecdn.com/b828090b-86d1-439a-bd32-201c1d030ed5/-/preview/400x400/)
>la fonction « passer en mode hôte » de Airbnb

La fonction messagerie est également présente dans notre application à l’exception que chaque conversation n’est pas individuelle mais associé à un voyage avec tout ses participants.

Des fonctions moins essentielles n’ont pas été retenues comme le fait d’ajouter un voyage à ses favoris, la traduction ou bien le système de parrainage et crédits.

![mode hôte airbnb](https://ucarecdn.com/2677a314-1a61-4201-abe3-f7a849bccd09/-/preview/400x400/)
>la messagerie de Airbnb

Cette application présente un ensemble de fonction correspondant à ce que l’on souhaitait intégrer dans FriendsTrip. Pouvoir saisir rapidement une destination, une date de voyage et le nombre de voyageurs est avantageux. Nous avons repris ce concept et vous verrez plus tard de quelle manière nous l’avons arrangé en cohérence avec notre projet. 

Booking.com présente aussi une fonction associant la dimension transport et hébergement, un système de réduction dont nous nous sommes inspirés. Certaines fonctions qui auraient pu avoir leur place dans notre application n’ont pas été sélectionnées pour des questions techniques (réserver un taxi, communauté de voyageurs, location de voiture, ...).

![créer voyage booking.com](https://ucarecdn.com/eda4f33c-5cd9-431f-bb9a-5baf097ab43f/-/preview/400x400/)
>Création de séjours et réservations de vols avec Booking.com

Pour conceptualiser l’interface de FriendsTrip et créer notre charte graphique et design system, nous nous sommes inspirés de celle de Airbnb. Ses codes visuels se sont inscrits dans l’habitude de notre cible d’utilisateurs par sa grande popularité.

L’interface de Airbnb ne contient pas beaucoup de couleurs (ce qui est selon nous un de ses points faibles) : mettre l’accent sur des couleurs dans l’interface nous permettrait de nous différencier et de mettre en avant les informations importantes (Call To Action, liens, ...).

![inspirations graphique friendstrip](https://ucarecdn.com/6c77a418-7ef2-4db3-ae9a-27cf2d135580/-/preview/400x400/)
>Veille graphique

### 2. Fonctions principales et secondaires

**Inscription**

<br>

- Modifier nom, prénom, adresse e-mail, ville, mot de passe, ...
- Supprimer son compte
- Consulter nombre de voyage
- Obtenir code de réduction
- Réglages d'accessibilité
- Révoquer mon consentement
- Obtenir de l'aide

<br>

**Connexion**

<br>

**Gestion du profil**

<br>

- Voir les offres de voyage
- Sélectionner/changer la destination
- Envoyer des messages
- Payer le voyage
- Appliquer une réduction
- Choisir une date de séjour
- Choisir un mode de transport
- Afficher infos sur le train/vol
- Ne sélectionner que le transport
- Choisir un hébergement

<br>

**Réserver un voyage**

<br>

**Rejoindre un voyage**

<br>

- Exclure un voyageur
- Annuler le voyage
- Envoyer un avis à un voyageur
- Afficher hébergement
- Afficher e-billet
- Afficher reçu
- Afficher conversation

<br>

**Gestion du voyage**

### 3. Charte graphique

#### a) Logo

Afin de réaliser le logotype, nous avons réalisé une veille graphique en s’inspirant de symboles récurrents dans le domaine du voyage et du numérique.

Grâce à cette analyse, nous avons noté plusieurs mots-clés et représentations qui se rattachaient à notre secteur d’activité. Voici une liste non-exhaustive des logos nous ayant influencés dans notre travail :

![inspiration logo friendstrip](https://ucarecdn.com/3ba9d181-a051-4976-b889-d2e0f7d667cd/-/preview/-/quality/smart/)

**Evolution de la construction du logotype 🔽**

![évolution logo friendstrip](https://ucarecdn.com/5b581366-9f44-4191-bd44-e77c1d28cb2d/-/preview/-/quality/smart/)
>Evolution du logo de FriendsTrip

**L'avion en papier** symbolise la simplicité de l'utilisation du service, des prix accessibles et la possibilité d'accomplir des grandes choses avec peu.

**La boussole** symbolise l'étoile du Nord guidant les voyageurs, aider les utilisateurs à trouver leur destination.

**La Terre** donne une vue d'ensemble des possibilités de voyage. L'omniscience dans le choix des destinations. L'universalité.

![logo typo friendstrip](https://ucarecdn.com/42b00dde-c513-4a80-a998-20e0b2eb7621/-/preview/500x500/)
>Version typographique du logo de FriendsTrip

![mockup logo friendstrip](https://ucarecdn.com/6550e08e-6b5c-43d9-827c-379cd584730d/-/preview/-/quality/smart/)
>Utilisation du logo en situation réelle

#### b) Couleurs

Nous avons ensuite travaillé le choix et la signification des couleurs. Nous recherchions 2 couleurs opposées (complémentaires) et ayant chacun un rôle sémantique. Ces couleurs permettront à travers l’application (par contraste) de délimiter des zones associées à l’humain (ex : messagerie) pour l’orange et le voyage (ex : barre de navigation) pour le bleu.

![couleurs friendstrip](https://ucarecdn.com/25472af3-3037-473d-8ff7-b9f5470d0cb7/-/preview/500x500/)

Le **bleu** qui rappelle la **confiance** et la sécurité en communication, elle est fréquemment utilisée pour **évoquer le voyage**, l’évasion. Elle est aussi associée à la **couleur de notre planète**, en référence au logo. Cette couleur froide et moins lumineuse que son opposée évoque aussi l’inconnu, un lieu que l’on a **jamais exploré**.

L'orange évoque l'**échange**, le **partage**, **attire l'attention** sans rappeler la connotation du rouge (danger). Cette couleur représente globalement la **dimension sociale**, en opposition au bleu, plus froid et moins accueillant.

#### c) Typographie

Nous avons sélectionné 2 polices différentes. Une pour le texte (paragraphes, boutons, ...) et une pour les titres. Ce choix s’explique pour la raison qu’il est difficile d’obtenir des tailles de titres très différentes au vu de la largeur de l’application (sur mobile) et les titres ne peuvent pas être beaucoup plus grands que les paragraphes. 

En utilisant 2 polices d’écritures différentes, la confusion est moins probable. Ce sont des typographies sans serif, assez ronde et facile à lire sur un petit écran.

![typo friendstrip](https://ucarecdn.com/3ddade05-7aec-49df-8973-864d35c115f3/-/preview/600x600/)

#### d) Images

Dans le contexte de la communication de FriendsTrip, nous avons défini l’utilisation d’image avec un style particulier pour assurer une cohérence.

Ces images doivent être obligatoirement libres de droit. Elles doivent évoquer l’envie, la rencontre et l’exploration d’endroits uniques. Elles ne doivent pas évoquer le luxe et la richesse.

Ces images seront utilisées plus particulièrement sur les réseaux sociaux, mais peuvent être présentes dans l’application et le site vitrine de l’application également.

![image charte graphique](https://ucarecdn.com/2ae73f31-78c9-4efe-8411-08d8b9873b7c/-/preview/-/quality/smart/)

### 4. Wireframe/maquette

La **page d’accueil** a été pensée de manière à ce que l’utilisateur puisse très rapidement rechercher un voyage lorsqu’il a une destination en tête (champ de recherche situé en haut) mais également lorsqu’il ne sait pas réellement ce qu’il veut avec le Call To Action “Explorer les possibilités”. L’image de fond a été définie pour renforcer l’idée du texte “prêt à faire des rencontres inoubliables en voyageant sans se ruiner ?” et procurer l’envie de voyage.

![friends trip accueil](https://ucarecdn.com/c59163f9-b53b-40f5-9650-46d3a6bad640/-/preview/-/quality/smart/)

Le **processus de réservation** est constitué d’un grand nombre d’étapes et nous avons alors proposé une expérience d’utilisation la plus simple possible. Pour éviter une profondeur des pages importante, les étapes de renseignements des informations ont été représentées de façon progressive et verticale plutôt qu’horizontale. De cette façon la réservation de ce voyage est plus compréhensible et l’utilisateur peut à tout moment revenir sur ses choix.

L’ordre des champs est logique pour que l’utilisateur ne soit pas désorienté dans la composition du voyage.

Nous avons décidé de placer quelques annonces de voyages proches du départ pour donner l’impression que l’utilisateur risque de rater une occasion de partir voyager et l’inciter à la réservation. Les résultats s’affichent en fonction de la ville de l’utilisateur. Enfin, nous avons placé en dernier lieu un Call To Action proposant à nos utilisateurs de créer un voyage personnalisé. Il a été placé en dernier car cette situation est moins fréquente dans les habitudes d’utilisation.

![friends trip extraits voyages](https://ucarecdn.com/1beb5811-546e-467a-a679-9137570bd2fd/-/preview/-/quality/smart/)

![friends trip processus réservation](https://ucarecdn.com/2d11d1e7-70e5-4df8-92a7-cb00db548242/-/preview/-/quality/smart/)
>Première étape de la création d'un voyage

À cet endroit de l’application, le voyageur peut retrouver ses réservations, mais également revoir ses anciens voyages. Il est également possible pour lui de réserver une autre destination même si un voyage est déjà en cours de route. 

L’icône d’accès à cet écran a été située en haut à droite par opposition à la barre de navigation qui elle est réservée à la recherche/création de voyage, à la communication et la modification du profil. Il est situé dans une zone de stretching, car c’est une fonction de l’application qui est moins fréquemment utilisée. 

La zone de « stretching » n’est cependant pas une zone difficilement accessible et ne demande pas trop d’effort à l’utilisateur, ce qui est un bon compromis.

![friends trip réservations](https://ucarecdn.com/80875982-8b69-47d7-a581-588f7bf2d2b2/-/preview/-/quality/smart/)

Pour la conception de la messagerie, nous avons pensé qu’il serait pertinent de rassembler les conversations par groupe et non individuellement. Les voyageurs peuvent échanger, mais pas seulement. Chaque utilisateur peut consulter la liste des voyageurs et seul l’hôte peut décider d’exclure un voyageur.

![friends trip messagerie](https://ucarecdn.com/2ed2ac58-ec27-4d4a-b3a3-7f23fdd5e566/)
>Wireframe de la messagerie de l'application

Nous avons intégré un système de filtrage instantané, de façon à ce qu’il soit possible de préciser certaines informations pour rendre la recherche plus pertinente. Nous avons repris exactement les mêmes paramètres (nombre de nuits, langue de voyage, moyen de transport) et nous les rassemblés. Pour chaque paramètre, il est possible de régler le nombre, la valeur et l’état booléen (coche oui/coche non).

![friends trip filtre](https://ucarecdn.com/8faad059-1b97-464c-b25d-663d0321b965/-/preview/-/quality/smart/)

![voyage friendstrip](https://ucarecdn.com/b2429d39-03e1-4dbd-bdf7-28f6627ef3bc/-/preview/-/quality/smart/)
>Ecran de voyage réservé

### 5. Design System

Afin de réunir tous les composants de l’application au même endroit, nous avons créé un design system. L’objectif de cette bibliothèque est de garder une cohérence graphique tout le long de l’élaboration du projet et de pouvoir facilement partir d’une base pour créer d’autres composants UI.

![icons friendstrip](https://ucarecdn.com/3e10b269-5515-4849-9f0d-05716dd7b5f8/-/preview/-/quality/smart/)
>Les icons utilisés sur l'application

![CTA friendstrip](https://ucarecdn.com/fce6bbce-92fd-4c95-9361-a840eb463d42/-/preview/-/quality/smart/)
>Boutons

![typographie friendstrip](https://ucarecdn.com/544885e7-784c-49f4-85d9-129f5435d5f3/-/preview/-/quality/smart/)
>Règle d'utilisation des typographies

![fenêtres modales friendstrip](https://ucarecdn.com/df059743-b66e-4e88-ae5f-b89444bfee52/-/preview/-/quality/smart/)
>fenêtre modales

![cards friendstrip](https://ucarecdn.com/94328c26-9618-459b-a0e8-5b2deeef50ed/-/preview/-/quality/smart/)
>Cards et sliders

## Conclusion 💎

Ce projet a été pour moi une réussite du point de vue de l'amélioration de mes compétences en ergonomie. Grâce à mes échecs, je me suis rendu compte que créer une application mobile est beaucoup plus complexe qu'il n'y paraît. Proposer une expérience qualitative à l'utilisateur demande beaucoup de réflexion.

D'un point de vue quantitatif, je suis très satisfait du nombre de fonctions qui ont été intégrées dans l'application. Tout ce qui a été rédigé dans le cahier des charges a bien été représenté au sein de FriendsTrip. Il n'y a eu de mon côté aucune concession.

D'un point de vue qualitatif, le prototype de FriendsTrip est un de mes projets les plus aboutis. Je suis satisfait du travail réalisé par moi-même autant du point de vue de l'interface que de l'expérience utilisateur.

Je pense cependant qu'il existe beaucoup d'améliorations à apporter dans l'application :

- Les écrans manquent parfois d'images
- Certains CTA ne sont pas placés de façon stratégique (ex: les boutons placés dans la messagerie qui redirigent vers la création de voyage ne devraient pas être ici)
- Des fonctions supplémentaires pour se différencier davantage de la concurrence (ex: un aspect plus communautaire, réseau social)
- La fonction d'accessibilité est trop sommaire
- ...