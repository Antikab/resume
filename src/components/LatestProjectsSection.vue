<script>
export default {
  name: 'ToolsSkillsSection',
  props: {
    mainTitle: {
      type: Object,
      required: true
    },
    latestProjects: {
      type: Array,
      required: true
    }
  },
  computed: {
    formatLink() {
      return (url) => {
        return url.replace(/^https?:\/\//, '')
      }
    }
  }
}
</script>

<template>
  <section class="latest-projects">
    <div class="latest-projects__step-wrapper">
      <div class="latest-projects__step-point-wrapper">
        <span class="latest-projects__step-point"></span>
      </div>
      <div class="latest-projects__step-divider"></div>
    </div>

    <div class="latest-projects__wrapper">
      <h2 class="latest-projects__title">{{ mainTitle.titleLatestProjects }}</h2>
      <div class="latest-projects__card-wrapper">
        <div
          v-for="(latestProject, index) in latestProjects"
          class="latest-projects__card"
          :key="index"
        >
          <div class="latest-projects__logo-wrapper">
            <div class="latest-projects__logo-icon-wrapper">
              <inline-svg
                class="latest-projects__logo-icon"
                :src="latestProject.icon"
                :aria-label="`Иконка ${latestProject.jobTitle}`"
                role="img"
              />
            </div>
            <div class="latest-projects__text-wrapper">
              <h3 class="latest-projects__text">{{ latestProject.jobTitle }}</h3>
              <span class="latest-projects__label">{{ latestProject.label }}</span>
            </div>
          </div>
          <a
            :href="latestProject.link"
            target="_blank"
            rel="noopener noreferrer"
            class="latest-projects__link"
          >
            <div class="latest-projects__link-icon-wrapper">
              <inline-svg class="latest-projects__link-icon" :src="latestProject.iconLink" />
            </div>
            {{ formatLink(latestProject.link) }}
          </a>
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
  width: 3rem;
  height: 3rem;
}

%text {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.29;
}

%text-second {
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.29;
  letter-spacing: 0.01em;
}

%text-m-second {
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25;
}

%text-m {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25;
}

// -------------------------------------- //

.latest-projects {
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
    // background-color: rgb(158, 154, 162);
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
    gap: 0.75rem;
    margin: 2rem 0 3rem 0;

    border-radius: 8px;
    overflow: hidden;
  }

  &__card {
    display: flex;
    flex: 1 1 calc(50% - 0.75rem);
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
    background: vars.$color-card-bg;
    box-shadow: inset 0px -10px 20px 0px rgba(0, 0, 0, 0.03);

    @media (max-width: 468px) {
      flex: 1 1 100%;
    }
    @media (min-width: 695px) and (max-width: 864px) {
      flex: 1 1 calc(50% - 0.75rem);
    }

    @media (min-width: 865px) and (max-width: 965px) {
      flex: 1 1 100%;
    }
  }

  &__logo-wrapper {
    display: flex;
    gap: 1rem;

    @media (max-width: 468px) {
      flex: 1 1 100%;
    }

    @media (min-width: 1440px) {
      gap: 1.5rem;
    }
  }

  &__logo-icon-wrapper {
    @extend %icon-wrapper;
    @extend %icon-base;

    @media (min-width: 768px) {
      width: 3rem;
      height: 3rem;
    }

    @media (min-width: 1440px) {
      width: 4rem;
      height: 4rem;
    }
  }

  &__logo-icon {
    @extend %icon-wrapper;
    @extend %icon-base;

    @media (min-width: 1440px) {
      width: 4rem;
      height: 4rem;
    }
  }

  &__text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  &__text {
    @extend %text-m;
    color: vars.$color-title;

    @media (max-width: 1129px) {
      font-size: 0.875rem;
    }
  }

  &__label {
    @extend %text-second;
    color: vars.$color-label;

    @media (max-width: 1129px) {
      font-size: 0.75rem;
    }
  }

  &__link {
    @extend %text-m-second;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: vars.$color-icon-link;

    &:hover {
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    }

    @media (max-width: 1129px) {
      font-size: 0.75rem;
    }

    @media (min-width: 1440px) {
      font-size: 1rem;
    }
  }

  &__link-icon-wrapper {
    @extend %icon-wrapper;
    background-color: vars.$color-icon-bg-highlight;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }

  &__link-icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
