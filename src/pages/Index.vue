<template>
  <LayoutCurtains>
    <template slot="hero">
      <hero-curtains :bg="heroBG"></hero-curtains>
    </template>

    <!-- intro section -->
    <div id="unconference" class="my-40">
      <h1>{{page.sectionIntro.title}}</h1>
      <span class="subtitle">{{page.sectionIntro.subtitle}}</span>
      <!-- <p>{{page.sectionIntro.content}}</p> -->
      <article class="prose prose-lg max-w-full" v-html="page.sectionIntro.content"></article>
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
          content: `Equinox is a special moment when day and night, sun and moon, shine and shade all fall into balance together across the world as yin meets yang. 
                    Paradoxically, in this synchronisation, the transition of solar to lunar energy is at its highest potential and most dynamic capacity - from Autumn Equinox onwards we accelerate towards night.
                    
                    <p></p>
                    What better time to gather around the bonfire together and hold an annual self-organising unconference?
                    
                    <p></p>
                    <h4> An invitation </h4>
                    
                    Get involved - join us in cocreating a self-hosted and participatory unconference this Autum Equinox, September 22nd.`,
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
              img: "mandelbrotted_color.jpg",
              link: "#teach",
              content: `Share an experience of open space with a diverse and interesting group that are cocreating and organising themselves around a shared collection of narratives. 
                        Feel free to interact during sessions and contribute to eachothers journey by sharing stories and ideas together, or simply jump in and organise your own session. 
                        We are open to all kinds of contribution. Please take a look at the [program](link) to get an idea of who other attendees are and the discussions they are contributing.`,
            },
            {
              title: "Learn",
              img: "bg.png",
              link: "#learn",
              content: `Want to experience what a [self-organising](https://handbook.hackalong.io/patterns/cocreation) participatory space feels like? 
                        Gather around the digital bonfire with us as an [attendee](page_about_open_space?), hopefully the discussion will warm you up enough participate. 
                        Sessions are available [here](link_to_program). 
                        You can also sign-up and get a free ticket [here](link_to_tickets)`
            },
            {
              title: "Share",
              img: "mooshed.jpg",
              content:
                `Grab a spade and come community gardening - your help is most welcome! 
                Volunteering to share your intentions and attention with us in any way is appreciated and we've thought of a variety of ways that people can contribute. 
                For instance we need spacekeepers (linkto) and tech hero's (linkto) but creativity to contribute in any way you like is encouraged and most appreciated.

                In that spirit, please drop in to the [Discord channel](https://discord.gg/CTPJTNu) if your up for digging a few holes with us - be they self determined or just something thats on a [list](things_to_do)!`
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
