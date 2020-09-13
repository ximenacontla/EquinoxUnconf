<template>
  <Layout>
    <h1>{{ $page.mdPage.title }}</h1>
    <div>
      <a
        :href="editLink"
        target="_blank"
        class="my-4 inline-block py-2 px-4 border border-accent-600 hover:bg-accent-600 hover:text-white"
      >
        <span>Edit this page on GitHub</span>
      </a>
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
query MdPage ($id: ID!) {
  mdPage(id: $id) {
    title
    content
  }
}
</page-query>