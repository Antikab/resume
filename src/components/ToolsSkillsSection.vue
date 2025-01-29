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
      <div class="tools-skills__card-wrapper">
        <div v-for="(toolSkill, index) in toolsSkills" class="tools-skills__card" :key="index">
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
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as vars;

// --------- Общие плейсхолдеры --------- //

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

// -------------------------------------- //

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

    @media (max-width: 768px) {
      width: 1.75rem;
      height: 1.75rem;
    }
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
  }

  &__title {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 1.45rem;
    line-height: 1.33;
    letter-spacing: 0.01em;
    color: vars.$color-title;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  &__card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    margin: 2rem 0 3rem 0;

    border-radius: 8px;
    overflow: hidden;
  }

  &__card {
    display: flex;
    flex: 1 1 calc(33% - 0.5rem);
    flex-direction: column;
    justify-content: space-between;
    padding: 0.4375rem;
    gap: 0.5rem;
    background: vars.$color-card-bg;
    box-shadow: inset 0px -10px 20px 0px rgba(0, 0, 0, 0.03);

    @media (max-width: 344px) {
      flex: 1 1 calc(100% - 0.5rem);
    }

    @media (min-width: 345px) and (max-width: 550px) {
      flex: 1 1 calc(50% - 0.5rem);
    }

    @media (min-width: 695px) and (max-width: 864px) {
      flex: 1 1 calc(50% - 0.5rem);
    }

    @media (min-width: 1130px) {
      &:nth-child(-n + 3) {
        flex: 1 1 calc(33% - 0.5rem);
      }

      flex: 1 1 calc(20% - 0.5rem);
    }
  }

  &__logo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  &__logo-icon-wrapper {
    @extend %icon-wrapper;
    @extend %icon-base;

    @media (min-width: 1440px) {
      height: 4rem;
      width: 4rem;
    }
  }

  &__logo-icon {
    @extend %icon-wrapper;
    @extend %icon-base;

    @media (min-width: 1440px) {
      height: 4rem;
      width: 4rem;
    }
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  &__text {
    @extend %text;
    text-align: center;
    color: vars.$color-title;

    @media (max-width: 1129px) {
      font-size: 0.75rem;
    }

    @media (min-width: 1440px) {
      font-size: 1rem;
    }
  }

  &__label {
    @extend %text-sm;
    text-align: center;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.75rem;
    }
  }
}
</style>
