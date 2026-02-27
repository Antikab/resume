<script>
export default {
  name: 'ToolsSkillsSection',
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

      <div v-for="(group, groupIndex) in toolsSkills" :key="groupIndex" class="tools-skills__group">
        <h3 class="tools-skills__group-title">{{ group.group }}</h3>
        <div class="tools-skills__card-wrapper">
          <div v-for="(toolSkill, index) in group.items" class="tools-skills__card" :key="index">
            <div class="tools-skills__logo-wrapper">
              <div class="tools-skills__logo-icon-wrapper">
                <inline-svg
                  class="tools-skills__logo-icon"
                  :src="toolSkill.icon"
                  :aria-label="`Иконка ${toolSkill.value}`"
                  role="img"
                />
              </div>
              <div class="tools-skills__text-wrapper">
                <h3 class="tools-skills__text">{{ toolSkill.value }}</h3>
                <span class="tools-skills__label">{{ toolSkill.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as vars;

%icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

%icon-base {
  height: 3rem;
  width: 3rem;
}

%text {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.29;
}

%text-sm {
  font-weight: 400;
  font-size: 0.625rem;
  letter-spacing: 0.01em;
}

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
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 1.45rem;
    line-height: 1.33;
    color: vars.$color-title;
  }

  &__group {
    margin: 1.25rem 0 0;
  }

  &__group-title {
    font-family: var(--second-family);
    font-size: 1.1rem;
    color: vars.$color-title;
    margin-bottom: 0.75rem;
  }

  &__card-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  &__card {
    display: flex;
    flex: 1 1 calc(33% - 0.5rem);
    padding: 0.5rem;
    background: vars.$color-card-bg;
    box-shadow: inset 0px -10px 20px 0px rgba(0, 0, 0, 0.03);

    @media (max-width: 580px) {
      flex: 1 1 calc(50% - 0.5rem);
    }
  }

  &__logo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    text-align: center;
  }

  &__logo-icon-wrapper,
  &__logo-icon {
    @extend %icon-wrapper;
    @extend %icon-base;
  }

  &__text {
    @extend %text;
    text-align: center;
    color: vars.$color-title;
  }

  &__label {
    @extend %text-sm;
    text-align: center;
    color: vars.$color-label;
  }
}
</style>
