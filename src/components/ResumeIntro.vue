<script setup>
import { resumeFiles, documentLabels } from '../config/documents.js'
defineProps({ profile: { type: Object, required: true } })
</script>

<template>
  <section class="resume-intro" aria-labelledby="summary-title">
    <h2 id="summary-title">{{ documentLabels.summary }}</h2>
    <p>{{ profile.summary }}</p>
    <ul>
      <li v-for="highlight in profile.highlights" :key="highlight">{{ highlight }}</li>
    </ul>
    <nav class="resume-intro__actions" aria-label="Документы резюме">
      <a
        class="resume-intro__primary"
        :href="resumeFiles.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ documentLabels.openPdf }}
      </a>
      <a :href="resumeFiles.html" target="_blank" rel="noopener noreferrer">
        {{ documentLabels.printVersion }}
      </a>
      <a :href="resumeFiles.text" download>{{ documentLabels.downloadText }}</a>
    </nav>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as vars;

.resume-intro {
  margin: 0 0 3rem 4rem;
  color: vars.$color-text;

  h2 {
    margin-bottom: 1rem;
    color: vars.$color-title;
    font-size: 1.45rem;
    font-weight: 500;
  }

  p,
  li {
    font-size: 0.95rem;
    line-height: 1.65;
  }

  ul {
    padding-left: 1.1rem;
    margin-top: 1rem;
  }

  li + li {
    margin-top: 0.45rem;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1.1rem;
    margin-top: 1.5rem;

    a {
      color: vars.$color-point;
      font-size: 0.85rem;
      padding: 0.65rem 0;
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    .resume-intro__primary {
      padding: 0.7rem 1rem;
      border-radius: 8px;
      color: white;
      background: vars.$color-point;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    margin-left: 3rem;
  }
}
</style>
