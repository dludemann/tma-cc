<template>
  <div>
    <section class="blog-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <article class="blog-single">
              <div class="inner-blog-details">
                <h2 class="w-xxl-70 w-xl-80 w-100">{{ pageData.title }}</h2>
                <div class="inner-blog-details-meta">
                  <ul class="list-unstyled">
                    <li class="list-inline-item">
                      <p>{{ blogDate }}</p>
                    </li>
                    <li class="list-inline-item">
                      <p>
                        <span> Written by: &nbsp;</span>{{ pageData.author }}
                      </p>
                    </li>
                    <!--
                    <li class="list-inline-item">
                      <p>{{ Math.floor((pageData.text.split(" ").length) / 183) }} minute read</p>
                    </li>
                    <li class="list-inline-item" v-if="pageData.content != ''">
                      <p>{{ pageData.text.split(" ").length }}<span> words</span></p>
                    </li>
                    -->
                  </ul>
                </div>
              </div>
              <img
                v-if="pageData.featuredImg"
                :src="pageData.featuredImg.image"
                class="w-100 mb-xxl-11 mb-8"
                :alt="pageData.featuredImg.image_alt" />
              <div style="max-width: 900px; margin: 0 auto">
                <ContentDoc />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { DateTime } from 'luxon';
const route = useRoute();

const { page } = useContent();

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true,
  });
}

const pageData = page.value;

const numRecentPosts = 3;
const recommendedBlogPosts = await queryContent('blog')
  .where({
    _path: { $ne: '/blog' },
  })
  .sort({ createdAt: 'asc' })
  .limit(numRecentPosts)
  .find();

const blogDate = DateTime.fromISO(pageData.date, 'string').toLocaleString(
  DateTime.DATE_FULL
);

const head = generateHead(pageData, route);
useHead(head);
</script>
