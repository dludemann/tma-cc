<template>
  <section class="font-display">
    <div v-for="post in posts" :key="post.id">
      <article class="grid lg:grid-cols-2 mx-auto">
        <div class="blog-post-thumb">
          <a :href="post._path">
            <img
              class="h-full object-cover max-h-[550px]"
              :src="post.featured_image"
              loading="eager"
            />
          </a>
        </div>
        <div class="p-[70px]">
          <h2
            class="mb-[50px] font-bold text-[31px] tracking-[0.252px] leading-[40px]"
          >
            {{ post.title }}
          </h2>
          <a class="text-[#BF9441] text-[18px]" :href="post._path"
            >Read full post</a
          >
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const posts = await queryContent("dil-mil")
  .where({
    _path: { $ne: "/dil-mil" },
  })
  .find();
</script>
