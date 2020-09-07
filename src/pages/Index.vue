<template>
  <LayoutCurtains>
    <template slot="hero">
      <hero-curtains :bg="heroBG"></hero-curtains>
    </template>

    <div id="unconference" class="my-40">
      <h1>Equinox Unconference</h1>
      <span class="subtitle">22nd September 2020</span>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sequi, id architecto est obcaecati ipsum accusantium quod aliquam ratione illum, excepturi modi suscipit a eos esse alias ad! Commodi, voluptatem.</p>
    </div>

    <!-- intro card example -->
    <div id="teach" class="card-grid-3">
      <card v-for="card in cardsIntro" v-bind="card" :key="card.title"></card>
    </div>

    <!-- agenda -->
    <div id="learn" class="flex flex-wrap my-40">
      <event-container />
    </div>

    <!--  card example -->
    <div class="card-grid-3">
      <card v-for="card in cards" v-bind="card" :key="card.title"></card>
    </div>

    <div id="share" class="my-40">
      <div>
        <h2>Hats</h2>
        <span class="subtitle">about the roles</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut quas recusandae maiores molestias eius. Debitis dolore modi eaque, veniam aliquam reiciendis suscipit ipsam vel quos deserunt sint dolor soluta.</p>
      </div>

      <div class="card-grid-2 mt-10">
        <div class="card">
          <div
            class="bg-primary-900 w-full h-48 text-6xl flex justify-center items-center"
          >🧙🧙🏼‍♀️</div>
          <div class="card-body">
            <h3 class="mb-4 text-2xl">Space keeper</h3>
            <div class="mb-4 text-grey-darker text-sm flex-1">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae assumenda reiciendis in id magnam repellendus dolorum eligendi ducimus, dicta tenetur quam aliquid illo perspiciatis odit consequuntur eaque sapiente. Dolor, repellat!</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div
            class="border-b border-primary-900 w-full h-48 text-6xl flex justify-center items-center"
          >⚙️🍄</div>
          <div class="card-body">
            <h3 class="mb-4 text-2xl">Tech Hero</h3>
            <div class="mb-4 text-grey-darker text-sm flex-1">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae assumenda reiciendis in id magnam repellendus dolorum eligendi ducimus, dicta tenetur quam aliquid illo perspiciatis odit consequuntur eaque sapiente. Dolor, repellat!</p>
            </div>
          </div>
        </div>
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
      cardsIntro: [
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
          content:
            "blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",

          link: "#learn",
        },

        {
          title: "Share",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis neque, mollitia a magni ducimus aliquam blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
        },
      ],
      cards: [
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
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis neque, mollitia a magni ducimus aliquam blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
        },

        {
          title: "No image here",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis neque, mollitia a magni ducimus aliquam blanditiis animi sequi beatae nisi facilis maiores voluptate doloribus necessitatibus est laborum vel. Quasi, nisi. ",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>
