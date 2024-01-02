<template>
  <section class="font-display">
    <div v-for="post in posts">
      <article class="grid lg:grid-cols-2 mx-auto">
        <div class="blog-post-thumb">
          <a :href="post._path">
            <nuxt-img
              class="h-full object-cover"
              :src="post.featured_image"
              :alt="post.featured_image_alt"
              loading="eager" />
          </a>
        </div>
        <div class="p-[70px]">
          <h2
            class="mb-[50px] font-bold text-[31px] tracking-[0.252px] leading-[40px]">
            {{ post.title }}
          </h2>
          <p
            class="border-t-2 border-black text-[18px] mb-[20px] inline-flex"
            v-html="formatDate(post.created)"></p>
          <p
            class="text-[18px] mb-[20px] leading-[30.6px] tracking-[0.252px] text-[#171717]">
            {{ post.summary }}
          </p>
          <a class="text-[#BF9441] text-[18px]" :href="post._path"
            >Read full post</a
          >
        </div>
      </article>
    </div>
  </section>
  <section id="next" v-if="hasPaginatinon">
    <PaginationControls
      :pageNumber="pageNumber"
      :numberOfPages="numberOfPages"
      :urlPrefix="urlPrefix" />
  </section>
</template>

<script setup>
import { DateTime } from 'luxon';

const { posts, pageNumber, numberOfPages, urlPrefix } = defineProps({
  posts: Array,
  pageNumber: {
    type: Number,
    default() {
      return 1;
    },
  },
  numberOfPages: {
    type: Number,
    default() {
      return 1;
    },
  },
  urlPrefix: {
    type: String,
    default() {
      return 'blog';
    },
  },
});

const hasPaginatinon = numberOfPages > 1;

const formatDate = (date) => {
  return DateTime.fromISO(date).toFormat('LLL dd');
};
</script>
