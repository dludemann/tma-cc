<template>
  <NuxtLayout
    :portfolioMenu="portfolioMenu"
    :pageData="pageData"
    :route="route"
  />
</template>

<script setup>
definePageMeta({ layout: 'portfolio' });

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
