<template>
  <div>
    <div class="flex align-top pb-4">
      <h2>{{title}}</h2>
      <g-link
        href="/admin/"
        target="_blank"
        class="ml-12 py-2 px-4 border border-accent-600 hover:bg-accent-600 hover:text-white"
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
  events: allEvent {
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
  },
};
</script>

