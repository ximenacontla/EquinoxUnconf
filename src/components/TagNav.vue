<template>
  <div>
    <span v-if="!notitle">Tags:</span>
    <div class="flex pb-4 flex-wrap">
      <div class="badge mb-2" v-for="tag in $static.tags.edges" :key="tag.id">
        <g-link
          class="badge-link"
          :to="tag.node.path"
        >{{tag.node.id}} ({{tag.node.belongsTo.totalCount}})</g-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    notitle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<static-query>
query Tag {
  tags: allTag (sort:[ {by: "id", order:ASC}, {by:"belongsTo.totalCount", order:ASC}] ) {
    totalCount
  	edges {
      node {
        id
        path
        title
        belongsTo {
          totalCount
        }
      }
    }
  }
}
  </static-query>