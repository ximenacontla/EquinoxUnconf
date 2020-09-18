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
      <event-container :title="'Agenda'" :subtitle="'teach and learn'" />
    </div>

    <div id="share" class="my-40">
      <!-- share section -->
      <div>
        <h2>{{page.share.title}}</h2>
        <span class="subtitle">{{page.share.subtitle}}</span>
        <article class="prose max-w-full" v-html="page.share.content"></article>
      </div>

      <!-- Emoji cards -->
      <div v-if="page.card" id="teach" class="card-grid-1 mt-10 mb-5">
        <card v-if="page.card.role1" v-bind="page.card.role0"></card>
      </div>
      <div v-if="page.card" id="teach" class="card-grid-2 mb-10">
        <card v-if="page.card.role1" v-bind="page.card.role1"></card>
        <card v-if="page.card.role2" v-bind="page.card.role2"></card>
      </div>
    </div>
    <div id="FAQ" class="my-40">
      <!-- share section -->
      <div>
        <h2>{{page.faq.title}}</h2>
        <span class="subtitle">{{page.faq.subtitle}}</span>
        <article class="prose max-w-full" v-html="page.faq.content"></article>
      </div>
      <h2 class="mt-20">Signals</h2>
      <span class="subtitle">The non-verbal etiquette of the digital space</span>
      <!-- Animated sprites -->
      <div class="card-grid-3 my-10">
        <sprite v-if="page.signal.feel" v-bind="page.signal.feel"></sprite>
        <sprite v-if="page.signal.gotit" v-bind="page.signal.gotit"></sprite>
        <sprite v-if="page.signal.move" v-bind="page.signal.move"></sprite>
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
    siteDescription
  }
}
</static-query>


<script>
export default {
  metaInfo() {
    return {
      meta: [
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:title", content: this.$static.metadata.siteName },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:description",
          content: this.$static.metadata.siteDescription,
        },
        { name: "twitter:image", content: this.getCoverImage },
        { property: "og:title", content: this.$static.metadata.siteName },
        { property: "og:url", content: this.getUrl },
        { property: "og:image", content: this.getCoverImage },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription,
        },
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


