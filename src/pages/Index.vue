<template>
  <LayoutCurtains>
    <template slot="hero">
      <hero-curtains :bg="heroBG"></hero-curtains>
    </template>

    <!-- intro section using grapQL -->
    <div id="unconference" class="my-40">
      <h1>{{page.intro.title}}</h1>
      <span class="subtitle">{{page.intro.subtitle}}</span>
      <article class="prose prose-lg max-w-full" v-html="page.intro.content"></article>
    </div>

    <!-- intro cards -->
    <div v-if="page.card" id="teach" class="card-grid-3 my-40">
      <card v-if="page.card.teach" v-bind="page.card.teach"></card>
      <card v-if="page.card.learn" v-bind="page.card.learn"></card>
      <card v-if="page.card.share" v-bind="page.card.share"></card>
    </div>

    <!-- agenda -->
    <div id="learn" class="flex flex-wrap my-40">
      <!-- the events are dynamically added from the /content/events files -->
      <event-container />
    </div>

    <div id="share" class="my-40">
      <!-- share section -->
      <div>
        <h2>{{page.share.title}}</h2>
        <span class="subtitle">{{page.share.subtitle}}</span>
        <article class="prose max-w-full" v-html="page.share.content"></article>
      </div>

      <!-- Emoji cards -->
      <div v-if="page.card" id="teach" class="card-grid-1 mt-10">
        <card v-if="page.card.role1" v-bind="page.card.role0"></card>
      </div>
      <div v-if="page.card" id="teach" class="card-grid-2 mt-10">
        <card v-if="page.card.role1" v-bind="page.card.role1"></card>
        <card v-if="page.card.role2" v-bind="page.card.role2"></card>
      </div>
      <h2 class="mt-20">Signals</h2>
      <span class="subtitle">some experiments</span>
      <div class="card-grid-3 my-10">
        <!-- @TODO: fix netlify path issues -->
        <sprite :title="'Feel'" :img="'feel.jpg'"></sprite>
        <sprite :img="'gotit.jpg'"></sprite>
        <sprite :img="'move.jpg'"></sprite>
      </div>
    </div>
  </LayoutCurtains>
</template>

<static-query>
query Blocks {
  data: allBlocks {
    edges {
      node {
          title
          subtitle
          img
          content
          link
          emoji
          extraClass
          tags
          extraClassImg
          extraClassHeader
          fileName
      }
    }
  },
    metadata {
    siteName
    siteUrl
  }
}
</static-query>


<script>
export default {
  metaInfo() {
    return {
      title: "Equinox",
      meta: [
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:title", content: "Equinox Unconference" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "og:title", content: "Equinox Unconference" },
        { name: "og:url", content: this.getUrl },
        { name: "og:image", content: this.getCoverImage },
      ],
    };
  },
  data() {
    return {
      heroBG: "bg.png",
    };
  },
  methods: {
    splitString(string, node) {
      let name = string.split("_");
      let resultString = {};
      let count = name.length;
      if (count > 1) {
        resultString = {};
        for (var i = 1; i < count; i++) {
          resultString[name[i]] = node;
        }
      } else {
        resultString = node;
      }
      return [name[0], resultString];
    },
  },
  computed: {
    getCoverImage() {
      // @TODO: ADD A CARD FALLBACK IMG
      return this.$static.metadata.siteUrl + "card.jpg";
    },
    getUrl() {
      return this.$static.metadata.siteUrl;
    },
    page() {
      let cleanData = {};
      this.$static.data.edges.map((elem) => {
        let prop = elem.node.fileName;
        let object = this.splitString(prop, elem.node);
        if (cleanData.hasOwnProperty(object[0])) {
          Object.assign(cleanData[object[0]], object[1]);
        } else {
          cleanData[object[0]] = object[1];
        }
      });
      return cleanData;
    },
  },
};
</script>


