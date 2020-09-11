<template>
  <div class="card" :class="extraClass">
    <div class="w-full text-6xl flex justify-center items-center" :class="headerClass">
      <g-image
        v-if="img"
        alt="Example image"
        :src="setImage"
        class="object-cover h-48 w-full"
        :class="extraClassImg"
      />
      <span>{{emoji}}</span>
    </div>
    <div class="card-body">
      <h3 class="mb-4 text-2xl">{{title}}</h3>

      <div class="mb-4 text-grey-darker text-sm flex-1" v-html="content"></div>

      <a v-if="link" :href="link" class="uppercase text-primary self-end">learn more</a>
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
    emoji: {
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
    extraClassHeader: {
      required: false,
    },
  },
  computed: {
    headerClass() {
      let darkBG =
        !this.img && !this.emoji
          ? "h-48  bg-primary-900"
          : " h-48 border-b border-black-900";
      return this.extraClassHeader ? this.extraClassHeader + darkBG : darkBG;
    },
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