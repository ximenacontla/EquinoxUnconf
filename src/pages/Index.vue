<template>
  <LayoutCurtains>
    <template slot="hero">
      <hero-curtains :bg="heroBG"></hero-curtains>
    </template>
    <div class="my-40">
      <div id="unconference">
        <h1>Equinox Unconference</h1>
        <span class="text-grey-900 block mb-4">22nd September 2020</span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sequi, id architecto est obcaecati ipsum accusantium quod aliquam ratione illum, excepturi modi suscipit a eos esse alias ad! Commodi, voluptatem.</p>
      </div>
      <!-- card examples -->
      <div class="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-40">
        <card v-for="card in cards" v-bind="card" :key="card.title"></card>
      </div>

      <div class="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black-900 p-3">
        <card v-for="card in cards" v-bind="card" :key="card.title"></card>
      </div>

      <!-- agenda -->
      <div class="flex flex-wrap my-40">
        <event-container id="agenda" />
      </div>

      <div id="faq" class="my-40">
        <div>
          <h2>Hats</h2>
          <span class="block text-xs mb-4">about the roles</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aut quas recusandae maiores molestias eius. Debitis dolore modi eaque, veniam aliquam reiciendis suscipit ipsam vel quos deserunt sint dolor soluta.</p>
        </div>
        <div class="grid gap-5 grid-cols-1 md:grid-cols-2 grid-cols-md-4 mt-10">
          <div class="bg-white border border-primary-900 overflow-hidden flex-1 flex flex-col">
            <div
              class="bg-primary-900 w-full h-48 text-6xl flex justify-center items-center"
            >🧙🧙🏼‍♀️</div>
            <div class="p-4 flex-1 flex flex-col">
              <h3 class="mb-4 text-2xl">Space keeper</h3>
              <div class="mb-4 text-grey-darker text-sm flex-1">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae assumenda reiciendis in id magnam repellendus dolorum eligendi ducimus, dicta tenetur quam aliquid illo perspiciatis odit consequuntur eaque sapiente. Dolor, repellat!</p>
              </div>
            </div>
          </div>

          <div class="bg-white overflow-hidden flex-1 flex flex-col border border-primary-900">
            <div
              class="border-b border-primary-900 w-full h-48 text-6xl flex justify-center items-center"
            >⚙️🍄</div>
            <div class="p-4 flex-1 flex flex-col">
              <h3 class="mb-4 text-2xl">Tech Hero</h3>
              <div class="mb-4 text-grey-darker text-sm flex-1">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae assumenda reiciendis in id magnam repellendus dolorum eligendi ducimus, dicta tenetur quam aliquid illo perspiciatis odit consequuntur eaque sapiente. Dolor, repellat!</p>
              </div>
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
