<template>
  <div class="window-content-wrapper">
    <div class="blog-content">
      <h2>{{ textDictionary.windows.blog.heading }}</h2>
      
      <div class="blog-posts">
        <div class="blog-post">
          <div class="post-header">
            <h3>{{ textDictionary.windows.blog.posts.vintage.title }}</h3>
            <span class="post-date">{{ textDictionary.windows.blog.posts.vintage.date }}</span>
          </div>
          <p class="post-excerpt">
            {{ textDictionary.windows.blog.posts.vintage.excerpt }}
          </p>
          <div class="post-tags">
            <span v-for="tag in textDictionary.windows.blog.posts.vintage.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <button class="button">{{ textDictionary.windows.blog.readMore }}</button>
        </div>

        <div class="blog-post">
          <div class="post-header">
            <h3>{{ textDictionary.windows.blog.posts.typescript.title }}</h3>
            <span class="post-date">{{ textDictionary.windows.blog.posts.typescript.date }}</span>
          </div>
          <p class="post-excerpt">
            {{ textDictionary.windows.blog.posts.typescript.excerpt }}
          </p>
          <div class="post-tags">
            <span v-for="tag in textDictionary.windows.blog.posts.typescript.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <button class="button">{{ textDictionary.windows.blog.readMore }}</button>
        </div>

        <div class="blog-post">
          <div class="post-header">
            <h3>{{ textDictionary.windows.blog.posts.responsive.title }}</h3>
            <span class="post-date">{{ textDictionary.windows.blog.posts.responsive.date }}</span>
          </div>
          <p class="post-excerpt">
            {{ textDictionary.windows.blog.posts.responsive.excerpt }}
          </p>
          <div class="post-tags">
            <span v-for="tag in textDictionary.windows.blog.posts.responsive.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <button class="button">{{ textDictionary.windows.blog.readMore }}</button>
        </div>

        <div class="blog-post">
          <div class="post-header">
            <h3>{{ textDictionary.windows.blog.posts.modern.title }}</h3>
            <span class="post-date">{{ textDictionary.windows.blog.posts.modern.date }}</span>
          </div>
          <p class="post-excerpt">
            {{ textDictionary.windows.blog.posts.modern.excerpt }}
          </p>
          <div class="post-tags">
            <span v-for="tag in textDictionary.windows.blog.posts.modern.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <button class="button">{{ textDictionary.windows.blog.readMore }}</button>
        </div>
      </div>

      <div class="blog-footer">
        <p>{{ textDictionary.windows.blog.placeholders.comingSoon }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTextDictionary } from '@/composables/useTextDictionary'

const { textDictionary } = useTextDictionary()
</script>

<style scoped>
.window-content-wrapper {
  padding: 16px;
  height: 100%;
  overflow-y: auto;
}

.blog-content h2 {
  color: #000080;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px 0;
  border-bottom: 2px solid #000080;
  padding-bottom: 4px;
}

.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.blog-post {
  background: white;
  border: 2px inset #c0c0c0;
  padding: 12px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 8px;
}

.post-header h3 {
  color: #333;
  font-size: 13px;
  font-weight: bold;
  margin: 0;
  flex: 1;
  min-width: 200px;
}

.post-date {
  font-size: 10px;
  color: #666;
  background: #f0f0f0;
  padding: 2px 6px;
  border: 1px inset #c0c0c0;
}

.post-excerpt {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
  margin: 8px 0 12px 0;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 12px;
}

.tag {
  background: linear-gradient(to bottom, #e0e0e0, #c0c0c0);
  border: 1px outset #c0c0c0;
  padding: 2px 6px;
  font-size: 9px;
  border-radius: 2px;
  color: black;
}

.button {
  background: linear-gradient(to bottom, #e0e0e0, #c0c0c0);
  border: 2px outset #c0c0c0;
  color: black;
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 10px;
  padding: 4px 8px;
  cursor: pointer;
  user-select: none;
}

.button:hover {
  background: linear-gradient(to bottom, #f0f0f0, #d0d0d0);
}

.button:active {
  border: 2px inset #c0c0c0;
}

.blog-footer {
  text-align: center;
  padding: 16px;
  background: #f0f0f0;
  border: 1px inset #c0c0c0;
}

.blog-footer p {
  font-size: 12px;
  color: #333;
  margin: 0 0 12px 0;
}

.button.primary {
  background: linear-gradient(to bottom, #4a90e2, #2171b5);
  border: 2px outset #4a90e2;
  color: white;
  font-weight: bold;
}
</style>
