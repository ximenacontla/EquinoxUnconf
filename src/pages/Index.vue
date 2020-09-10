<template>
  <LayoutCurtains>
    <template slot="hero">
      <hero-curtains :bg="heroBG"></hero-curtains>
    </template>

    <!-- intro section using markdown -->
    <div id="unconference" class="my-40">
      <h1>{{intro.attributes.title}}</h1>
      <span class="subtitle">{{intro.attributes.subtitle}}</span>
      <article class="prose prose-lg max-w-full" v-html="intro.html"></article>
    </div>

    <!-- example using JSON
    <div id="unconference" class="my-40">
      <h1>{{page.sectionIntro.title}}</h1>
      <span class="subtitle">{{page.sectionIntro.subtitle}}</span>
      <article class="prose prose-lg max-w-full" v-html="page.sectionIntro.content"></article>
    </div>
    -->

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
import intro from "../../content/page/index/intro.md";
export default {
  metaInfo: {
    title: "Equinox",
  },
  data() {
    return {
      intro: intro,
      heroBG: "bg.png",
      page: {
        sectionIntro: {
          title: "Equinox Unconference",
          subtitle: "22nd September 2020",
          content: `<blockquote>On a beautiful moon’s night we will join around the bonfire and share our stories</blockquote>
        <p>Equinox is that moment when day and night, sun and moon, shine and shade fall into balance together all over the world. Paradoxically, the transition of solar to lunar energy is also at its highest potential and most dynamic capacity - from Autumn Equinox onwards we accelerate towards night.</p>
        <p>Paradoxically the equinox also signifies the transition of solar to lunar energy at it’s most dynamic moment, full of potential.</p>
        <h3>When two tribes meet</h3>
        <p>
          On this autumn equinox, two tribes,
          <span>
            <g-link title="hackalong" to="http://hackalong.io/">the moon people</g-link>
          </span> and the fire people (link to bonfire?) will join to teach, learn and share their stories.
          Want to know what it feels like to be part of a self-organising participatory commons? Join us in cocreating a self-hosted unconference this autum equinox on September 22nd..
          Within this year’s tale we’ll explore nature’s power to self-organise (bio-mimicry) and look for social innovation to implement
          <span>
            <g-link
              title="hackalong"
              to="https://handbook.hackalong.io/patterns/cocreation"
            >new patterns of collaboration and co-creation</g-link>
          </span>.
        </p>`,
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
              content: `In an open space you’ll share with a diverse but interesting group. Feel free to interact during sessions, contribute to another one’s journey by sharing your stories, or simply jump in and organise your own session. We are open to all kind of contributions. Take a look at the program (linkto) to find out more.`,
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
              img: "mandelbrotted_color.jpg",
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
