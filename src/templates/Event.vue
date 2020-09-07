<template>
  <Layout>
    <div class="my-12" v-if="$page.event.thumbnail">
      <g-image :src="$page.event.thumbnail" height="500" fit="contain" />
    </div>
    <h1>{{ $page.event.title }}</h1>
    <div class="py-4 grid grid-cols-1">
      <strong>{{ $page.event.date | formatDate('dddd, Do MMMM') }}</strong>
      <div class="text-xl">
        {{ $page.event.start_time | formatTime }}
        <span
          v-if="$page.event.end_time"
        >- {{ $page.event.end_time | formatTime }}</span>
      </div>
      <div class="flex pb-4 flex-wrap mt-4">
        <div class="badge" v-for="tag in $page.event.tags" :key="tag.id">
          <g-link class="badge-link" :to="tag.path">{{tag.id}}</g-link>
        </div>
      </div>
      <div>
        <a
          :href="editLink"
          target="_blank"
          class="my-4 inline-block py-2 px-4 border border-accent-600 hover:bg-accent-600 hover:text-white"
        >
          <span>Edit this page on GitHub</span>
        </a>
      </div>
    </div>

    <div class="prose prose-xl">
      <p>{{$page.event.excerpt}}</p>
    </div>
    <article class="prose">
      <VueRemarkContent />
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Equinox",
  },
  computed: {
    currentPath() {
      return this.$route.matched[0].path;
    },
    editLink() {
      let path = this.currentPath;
      if ((path.match(new RegExp("/", "g")) || []).length == 1)
        path = path + "/README";
      return `https://github.com/hack-along/EquinoxUnconf/tree/master/content${path}.md`;
    },
  },
};
</script>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Event ($id: ID!) {
  event(id: $id) {
    title
    excerpt
    thumbnail
    start_time
    end_time
    date
    tags {
      id
      title
      path
    }
  }
}
</page-query>