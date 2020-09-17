<template>
  <div class="card" :class="extraClass">
    <div class="w-full flex justify-center items-center" :class="headerClass">
      <g-image
        v-if="img"
        :alt="title"
        :src="setImage"
        class="object-cover h-48 w-full"
        :class="extraClassImg"
        width="600"
      />
      <span>{{emoji}}</span>
    </div>
    <div class="card-body">
      <h2 v-if="title" class="mb-4 text-2xl">{{title}}</h2>
      <div class="text-grey-darker text-sm flex-1" v-html="content"></div>
      <g-link v-if="link" :to="link" class="uppercase self-end mt-4">learn more</g-link>
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
        return require(`!!assets-loader!@images/${this.img}`);
      }
    },
  },
};
</script>