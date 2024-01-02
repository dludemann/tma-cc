<template>
  <section
    class="w-100 max-w-[1000px] mx-auto font-display"
    :data-cms-bind="dataBinding"
  >
    <h1 class="text-center font-bold text-[39px] my-12">More Testimonials</h1>
    <div class="grid grid-cols-3" :style="{ gap: block.horizontal_gap + 'px' }">
      <div class="flex flex-col" :style="{ gap: block.vertical_gap + 'px' }">
        <div v-for="image in block.column_one">
          <nuxt-img :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <div class="flex flex-col" :style="{ gap: block.vertical_gap + 'px' }">
        <div v-for="image in block.column_two">
          <nuxt-img :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <div class="flex flex-col" :style="{ gap: block.vertical_gap + 'px' }">
        <div v-for="image in block.column_three">
          <nuxt-img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['block', 'dataBinding'],
};
</script>
