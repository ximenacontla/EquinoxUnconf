<template>
  <dl class="grid grid-cols-1 md:grid-cols-4 m gap-8 mt-4">
    <template v-for="(event, index) in events.edges">
      <dt class="bg-black-900 text-white col-span-2 lg:col-span-1" :key="`time${index}`">
        <strong class="text-xs block">{{ event.node.date | formatDate('dddd, Do MMMM') }}</strong>
        <span class="text-4xl">{{ event.node.start_time | formatTime(false,true) }}</span>
      </dt>
      <dd class="col-span-2 lg:col-span-3" :key="index">
        <g-link :to="event.node.path">
          <h3 class="mb-2 text-2xl">{{ event.node.title }}</h3>
        </g-link>
        <p class="mb-4 flex-1">{{ event.node.excerpt }}</p>
      </dd>
    </template>
  </dl>
</template>

<script>
export default {
  props: {
    events: {
      required: true,
    },
  },
};
</script>

