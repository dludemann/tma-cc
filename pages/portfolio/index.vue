<template>
  <section class="flex font-display">
    <SideNavBars :links="portfolioMenu" />
    <div class="w-full">
      <!-- Hero -->
      <div
        class="h-[250px] lg:h-[500px] w-full overflow-hidden bg-cover relative flex justify-center items-center">
        <nuxt-img
          :src="pageData.hero_image"
          alt=""
          class="absolute bottom-0 left-0 right-0 w-full h-full object-cover"
          :style="{
            filter:
              'brightness(' + pageData.hero_image_filters.brightness + ')',
            'object-position':
              pageData.hero_image_filters.position.horizontal +
              '% ' +
              pageData.hero_image_filters.position.vertical +
              '%',
          }" />
        <h1
          class="text-center font-bold text-[2.5rem] lg:text-[6rem] my-12 relative z-10 text-white">
          {{ pageData.title.toUpperCase() }}
        </h1>
      </div>
      <!-- Photo Grid -->
      <div>
        <div class="mx-2 mb-8 mt-6">
          <h2 class="font-bold text-[1.25rem]">{{ pageData.title }}</h2>
          <p>The Match Artist</p>
        </div>
        <div
          class="grid grid-cols-3 pr-2 pb-12"
          :style="{ gap: pageData.horizontal_gap + 'px' }">
          <div
            class="flex flex-col"
            :style="{ gap: pageData.vertical_gap + 'px' }">
            <div v-for="image in pageData.images.column_one">
              <nuxt-img loading="lazy" :src="image" alt="" />
            </div>
          </div>
          <div
            class="flex flex-col"
            :style="{ gap: pageData.vertical_gap + 'px' }">
            <div v-for="image in pageData.images.column_two">
              <nuxt-img loading="lazy" :src="image" alt="" />
            </div>
          </div>
          <div
            class="flex flex-col"
            :style="{ gap: pageData.vertical_gap + 'px' }">
            <div v-for="image in pageData.images.column_three">
              <nuxt-img loading="lazy" :src="image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { page } = useContent();
const pageData = page.value;
const route = useRoute();
const head = generateHead(pageData, route);
useHead(head);

const allPortfolios = await queryContent('portfolio').find();

const portfolioMenu = allPortfolios.map((file) => {
  const filePath = file._path.split('.')[0];
  if (filePath === '/portfolio/index') {
    return {
      path: '/portfolio/',
      title: 'General',
      active: filePath === pageData._path ? true : false,
    };
  } else {
    return {
      path: `${filePath}/`,
      title: file.title,
      active: filePath === pageData._path ? true : false,
    };
  }
});
</script>
