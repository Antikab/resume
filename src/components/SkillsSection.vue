<script>
export default {
  name: 'SkillsSection',
  props: {
    mainTitle: {
      type: Object,
      required: true
    },
    toolsSkills: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <section class="tools-skills">
    <div class="tools-skills__step-wrapper">
      <div class="tools-skills__step-point-wrapper">
        <span class="tools-skills__step-point"></span>
      </div>

      <div class="tools-skills__step-divider"></div>
    </div>

    <div class="tools-skills__wrapper">
      <h2 class="tools-skills__title">{{ mainTitle.titleToolsSkills }}</h2>

      <div v-for="group in toolsSkills" :key="group.group" class="tools-skills__group">
        <h3 class="tools-skills__group-title">{{ group.group }}</h3>
        <p class="tools-skills__items">{{ group.items.join(' · ') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as vars;

.tools-skills {
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  &__step-wrapper {
    width: 2rem;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    position: relative;
  }

  &__step-point-wrapper {
    position: absolute;
    width: 2rem;
    height: 2rem;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    box-shadow:
      inset 0 2px 2px 0 rgba(0, 0, 0, 0.04),
      0 12px 48px 0 rgba(0, 0, 0, 0.04),
      0 2px 8px 0 rgba(0, 0, 0, 0.05);
    z-index: 2;
  }

  &__step-point {
    width: 0.5625rem;
    height: 0.5625rem;
    flex: 0 0 auto;
    background-color: vars.$color-point;
    border-radius: 50%;
  }

  &__step-divider {
    position: absolute;
    display: flex;
    flex: 0 0 auto;
    width: 1px;
    height: 100%;
    background-color: vars.$color-icon-bg;
    z-index: 1;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 3rem;
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 1.45rem;
    line-height: 1.33;
    color: vars.$color-title;
  }

  &__group {
    margin: 1rem 0 0;
    padding: 0.85rem 1rem;
    border-radius: 8px;
    background: vars.$color-card-bg;
  }

  &__group-title {
    font-family: var(--second-family);
    font-size: 0.9rem;
    color: vars.$color-title;
    margin-bottom: 0.35rem;
  }

  &__items {
    font-size: 0.875rem;
    line-height: 1.65;
    color: vars.$color-text;
  }
}
</style>
