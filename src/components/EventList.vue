<template>
  <dl class="grid grid-cols-1 md:grid-cols-4 m gap-8 mt-4">
    <template v-for="(event, index) in events.edges">
      <dt class="bg-black-900 text-white col-span-2 lg:col-span-1" :key="`time${index}`">
        <strong class="text-xs block">{{ event.node.date | formatDate('dddd, Do MMMM') }}</strong>
        <span class="text-4xl">{{ event.node.start_time | formatTime(false,true) }}</span>
      </dt>
      <dd class="col-span-2 lg:col-span-3" :key="index">
        <div class="flex justify-between flex-col">
          <g-link v-if="event.node.hasContent" :to="event.node.path">
            <h3 class="mb-1 text-2xl">{{ event.node.title }}</h3>
          </g-link>
          <h3 v-else class="mb-1 text-2xl">{{ event.node.title }}</h3>
          <div v-if="event.node.tags" class="flex mb-3">
            <div class="badge badge-light" v-for="tag in event.node.tags" :key="tag.id">
              <g-link class="badge-link" :to="tag.path">{{tag.id}}</g-link>
            </div>
          </div>
        </div>

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

