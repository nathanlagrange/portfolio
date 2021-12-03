<template>
  <div>
    <titlepage title="Filmographie" />
    <div id="filmographie">
      <div class="sep-10" />
      <p>
        Cette page regroupe toute ma filmographie du début à la fin des années 2010.
      </p>
      <br>
      <p>
        J'ai cessé toute activité audiovisuelle depuis plusieurs années déjà mais je continue de
        publier certaines vidéos pour mettre mon travail de développeur et compositeur en avant
      </p>
      <br>
      <p>
        <i style="color: #3D87E0;">Fun fact : il m'arrive de les regarder par nostalgie </i>😔
      </p>
      <br>
      <p>
        🍿 <strong>Bon visionnage !</strong>
      </p>
      <div class="sep-50" />
      <div v-for="film in filmo" :key="film" class="loop-filmographie">
        <iframe :src="film.url" title="YouTube video player" frameborder="0" allow="fullscreen" />
        <div class="sep-10" />
        <div class="sep-5" />
        <span>{{ film.date }}</span>
        <div class="sep-10" />
        <h2>{{ film.title }}</h2>
        <div class="sep-10" />
        <p>
          {{ film.description }}
        </p>
        <div class="sep-50" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filmo: [
        { title: 'The Solace Comes & O\'low - Rêverb', url: 'https://www.youtube.com/embed/6jxo0qom5fw', date: '27.08.2021', description: 'Rêverb, mon 2e single avec le groupe de rap Montpelliérain O\'low' },
        { title: 'helpnfiesta.fr | vidéo de présentation', url: 'https://www.youtube.com/embed/nrcVLlnzq3E', date: '15.03.2021', description: 'helpnfiesta.fr est un site que j’ai développé avec Lorenzo Tringali à l’occasion de ma 2e année d’IUT MMI à l’Université de Toulon' },
        { title: 'Good Faith (french presentation)', url: 'https://www.youtube.com/embed/tAsMTSQ2lz0', date: '22.12.2020', description: 'Ma présentation personnelle de l’album de Madeon “Good Faith” réalisée pour un devoir d’animation vidéo.' },
        { title: 'The Solace Comes - Amorce', url: 'https://www.youtube.com/embed/jXc3xgeQN6w', date: '01.11.2019', description: 'La vidéo de Amorce, mon tout premier single avec la talentueuse Anaysa.' },
        { title: 'ORCHESTRE ULTIMA TEASER 2018', url: 'https://www.youtube.com/embed/MqSDsEKgfpk', date: '11.09.2018', description: 'Vidéo de promotion pour l’orchestre Ultima. Une production nextrek. En tant que cadreur/monteur.' },
        { title: 'PUB AUTO ECOLE O’PERMIS', url: 'https://www.youtube.com/embed/EtweXG-Byh8', date: '04.09.2018', description: 'Vidéo de promotion pour l’auto école O’PERMIS. Une production nextrek. En tant que cadreur/monteur.' },
        { title: 'Livraison dangereuse (48 HFP Montpellier)', url: 'https://www.youtube.com/embed/nG0vaw06N1c', date: '15.10.2017', description: 'Livraison Dangereuse a été réalisé pour le 48 HFP festival. J’ai participé en tant que chef opérateur.' },
        { title: 'BLÂKE - LES UNS CONTRE LES AUTRES', url: 'https://www.youtube.com/embed/ZXWrgX56zec', date: '30.04.2017', description: 'Les Uns Contre Les Autres est le dernier clip musical que j’ai réalisé. Une production nextrek.' },
        { title: 'Les Belles Paroles (court-métrage)', url: 'https://www.youtube.com/embed/1DCb7hwzitM', date: '18.09.2016', description: 'Les Belles paroles, un court-métrage de Chloé Mart et Alice Morin. Participation en tant que chef opérateur/monteur.' },
        { title: 'Maïcee - Follow Me', url: 'https://www.youtube.com/embed/dIGR3bnqm_E', date: '26.07.2015', description: 'Follow Me, le dernier clip réalisé pour l’artiste Maïcee durant l’été 2015, en tant que scénariste, réalisateur, cadreur et monteur. Une production Réalis\'Arthur.' },
        { title: 'COST\'ART - Tout ce qu\'on a', url: 'https://www.youtube.com/embed/hO9u5hQzZFU', date: '23.06.2015', description: 'Une coproduction Réalis’Arthur et OTOURDEVOUS. En tant que cadreur/monteur.' },
        { title: 'Maïcee - I Don\'t Care', url: 'https://www.youtube.com/embed/FSg4iTSMa-0', date: '27.05.2015', description: 'Premier clip réalisé pour Maïcee, aux couleurs de l’Occitanie et de l’arrière pays Montpelliérain. En tant que réalisateur et monteur.' },
        { title: 'Chepercha freestyle 2 - Wazazat', url: 'https://www.youtube.com/embed/i_Ft_wIy3mc', date: '24.04.2015', description: 'Clip pris en one-shot aux alentours de la gare de Montpellier. Défi : ne pas tomber en filmant 😏' },
        { title: 'Delta - Bang bang 3', url: 'https://www.youtube.com/embed/ZrYVKcNQ4xc', date: '25.02.2015', description: 'Clip musical pour Delta, en tant que cadreur/monteur.' },
        { title: 'Pakis - Cuck Norris', url: 'https://www.youtube.com/embed/sq0W3pJ13fE', date: '01.01.2015', description: 'Clip musical pour Pakis, ex-rappeur du MS CREW. En tant que cadreur. Produit par Réalis’Arthur.' },
        { title: 'Pakis - La Ride', url: 'https://www.youtube.com/embed/OrlTIQDyFNc', date: '24.11.2014', description: 'Projet audiovisuel expérimental réalisé à partir de différentes prises de vues. En tant que monteur.' },
        { title: 'Pakis - Prince de la Ville', url: 'https://www.youtube.com/embed/DYYjY_UgrNE', date: '17.11.2014', description: 'Clip de rap tourné dans la ville de Sète, en tant que cadreur/monteur.' },
        { title: 'LA Q8 - CONNEXION BILNAFRICANOTEAM', url: 'https://www.youtube.com/embed/3h24oSDWuKA', date: '07.11.2014', description: 'Première réalisation vidéo-musicale avec une trame scénaristique, sans doute l’un des clips les plus aboutis que j’ai pu réaliser.' },
        { title: 'LA Q8 - DANS LA PLACE', url: 'https://www.youtube.com/embed/-XzRQaA9_fI', date: '26.09.2014', description: 'En tant que cadreur/monteur.' },
        { title: 'MS CREW - Plus l\'temps', url: 'https://www.youtube.com/embed/DPx43dtwr6o', date: '19.12.2013', description: 'Mon dernier clip réalisé pour le MS CREW.' },
        { title: 'Récidive (scène d\'ouverture)', url: 'https://www.youtube.com/embed/_kWmu8bcqNQ', date: '13.09.2013', description: 'Récidive, un court-métrage d’Hayatt Carrier. Participation en tant que cadreur.' },
        { title: 'MS CREW - Montpell’Horizon', url: 'https://www.youtube.com/embed/ze3koqp9AIc', date: '01.06.2012', description: 'Mon tout premier clip réalisé dans les belles rues de Montpellier. Participation en tant que réalisateur, cadreur et monteur.' },
        { title: 'Le chemin de l’ermitage (bande annonce)', url: 'https://www.youtube.com/embed/WJEPIZMYO8Q', date: '03.12.2011', description: 'Deuxième court-métrage tourné dans le village de St Guilhem Le Désert. En tant que réalisateur. Produit par SO films ind.' },
        { title: 'Solo (court-métrage)', url: 'https://www.youtube.com/embed/MGv67g9uoGA', date: '20.06.2011', description: 'Premier court-métrage amateur. Produit par QDA et SO films ind.' }
      ],
      title: 'Filmographie | Nathan Lagrange - Développeur front-end',
      description: 'Voici différentes créations audiovisuelles réalisées par moi-même entre 2011 et 2018 pour différentes personnes (artistes, associations, entreprises,...).'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        { property: 'og:site_name', content: 'Nathan Lagrange - Développeur front-end' },
        { hid: 'og:type', property: 'og:type', content: 'page' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://nathanlagrange.dev'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://ucarecdn.com/8f1d6f69-d3e4-41d1-b1d1-8f9e64322e49/ogimageindex.webp'
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:site', content: '@nathanlagrange' },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://nathanlagrange.dev'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://ucarecdn.com/8f1d6f69-d3e4-41d1-b1d1-8f9e64322e49/ogimageindex.webp'
        }
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://nathanlagrange.dev'
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped>
  @import "~/assets/css/_mixins.scss";
  @import "~/assets/css/_colors.scss";
  #filmographie{
    @include padding-section;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    p{
      color: white;
      font-weight: 300;
    }
    .loop-filmographie{
      display: flex;
      flex-direction: column;
      justify-content: center;
      iframe{
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        min-height: 280px;
        height: auto;
        @include border-radius;
      }
      h2{
        font-size: 20px;
        color: white;
      }
      span{
        color: white;
        font-size: 14px;
        font-weight: 300;
      }
      p{
        color: rgba(200, 200, 200, 1);
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 850px) {
  #filmographie{
    @include padding-section-mobile;
  }
}
</style>
