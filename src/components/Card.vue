<template>
  <div class="card" :class="extraClass">
    <div class="bg-primary-600 w-full" :class="{'h-48' : !img}">
      <g-image
        v-if="img"
        alt="Example image"
        :src="setImage"
        class="object-cover h-48 w-full"
        :class="extraClassImg"
      />
    </div>
    <div class="card-body">
      <h3 class="mb-4 text-2xl">{{title}}</h3>

      <div class="mb-4 text-grey-darker text-sm flex-1">
        <p>{{content}}</p>
      </div>

      <a v-if="link" :href="link" class="uppercase text-primary self-end stretched-link">learn more</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: false,
    },
    content: { required: false },
    img: {
      required: false,
    },
    link: {
      required: false,
    },
    tags: {
      required: false,
    },
    extraClass: {
      required: false,
    },
    extraClassImg: {
      required: false,
    },
  },
  computed: {
    setImage: function () {
      if (
        this.img.indexOf("http://") === 0 ||
        this.img.indexOf("https://") === 0
      ) {
        return this.img;
      } else {
        return require("@/assets/img/" + this.img);
      }
    },
  },
};
</script>