<template>
  <LayoutCurtains>
    <template slot="hero">
      <hero-curtains :bg="heroBG"></hero-curtains>
    </template>

    <!-- intro section -->
    <div id="unconference" class="my-40">
      <h1>{{page.sectionIntro.title}}</h1>
      <span class="subtitle">{{page.sectionIntro.subtitle}}</span>
      <p>{{page.sectionIntro.content}}</p>
    </div>

    <!-- intro cards -->
    <div id="teach" class="card-grid-3">
      <card v-for="card in page.cards.intro" v-bind="card" :key="card.title"></card>
    </div>

    <!-- agenda -->
    <div id="learn" class="flex flex-wrap my-40">
      <event-container />
    </div>

    <!-- example cards -->
    <div class="card-grid-3 bg-black-900 p-3">
      <card v-for="card in page.cards.example" v-bind="card" :key="card.title"></card>
    </div>

    <div id="share" class="my-40">
      <!-- share section -->
      <div>
        <h2>{{page.sectionShare.title}}</h2>
        <span class="subtitle">{{page.sectionShare.subtitle}}</span>
        <p>{{page.sectionShare.content}}</p>
      </div>

      <!-- Emoji cards -->
      <div class="card-grid-2 mt-10">
        <card v-for="card in page.cards.emoji" v-bind="card" :key="card.title"></card>
      </div>
    </div>
  </LayoutCurtains>
</template>

<script>
export default {
  metaInfo: {
    title: "Equinox",
  },

  data() {
    return {
      heroBG: "bg.png",
      page: {
        sectionIntro: {
          title: "Equinox Unconference",
          subtitle: "22nd September 2020",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sequi, id architecto est obcaecati ipsum accusantium quod aliquam ratione illum, excepturi modi suscipit a eos esse alias ad! Commodi, voluptatem. ",
        },
        sectionShare: {
          title: "Hats",
          subtitle: "about the roles",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sequi, id architecto est obcaecati ipsum accusantium quod aliquam ratione illum, excepturi modi suscipit a eos esse alias ad! Commodi, voluptatem. ",
        },
        cards: {
          intro: [
            {
              title: "Teach",
              img: "bg.png",
              link: "/teach/",
              content:
                "blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
            },
            {
              title: "Learn",
              img: "mooshed.jpg",
              extraClassImg: "h-96",
              extraClassHeader: "h-96",
              link: "#learn",
            },

            {
              title: "Share",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis neque, mollitia a magni ducimus aliquam blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
            },
          ],
          example: [
            {
              title: "this one has a link",
              img: "https://picsum.photos/600/300",
              link: "https://vuejs.org/v2/guide/components-props.html",
              content:
                "blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
            },
            {
              title: "hello world",
              img: "bg.png",
              extraClassImg: "h-64",
              extraClassHeader: "h-64",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis neque, mollitia a magni ducimus aliquam blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
            },

            {
              title: "No image here",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis neque, mollitia a magni ducimus aliquam blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
            },
          ],
          emoji: [
            {
              title: "Space Keeper",
              emoji: "🧙🧙🏼‍♀️",
              extraClassHeader: "bg-primary-900",
              content:
                "blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
            },
            {
              title: "Tech Hero",
              emoji: "⚙️🍄",
              extraClassHeader: "",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis neque, mollitia a magni ducimus aliquam blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
            },
          ],
        },
      },
    };
  },
};
</script>



<style lang="scss">
</style>
