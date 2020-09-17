<template>
  <div>
    <div class="flex align-top pb-4">
      <div class="mb-2">
        <h2>{{title}}</h2>
        <span class="subtitle">{{subtitle}}</span>
      </div>
      <g-link
        href="/admin/"
        target="_blank"
        class="ml-auto py-2 px-4 border border-accent-600 hover:bg-accent-600 hover:text-white self-center"
      >
        <span>+ Add your own event</span>
      </g-link>
    </div>
    <event-list v-if="$static.events.edges.length > 0" :events="$static.events" />
    <div v-else class="p-4 mt-4">
      <p>sorry, nothing to show at the moment!</p>
    </div>
    <tag-nav class="pt-10" />
  </div>
</template>

<static-query>
query Event {
  events: allEvent(sort:[ {by: "date", order:ASC}, {by:"start_time", order:ASC}] ) {
    edges {
      node {
        title
        path
        excerpt
        start_time
        end_time
        date
      }
    }
  }
}
</static-query>

<script>
export default {
  props: {
    title: {
      required: false,
      default: "Agenda",
    },
    subtitle: {
      required: false,
      default: "learn and explore",
    },
  },
};
</script>

