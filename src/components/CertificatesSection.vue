<script>
export default {
  name: 'certificatesSection',
  props: {
    mainTitle: {
      type: Object,
      required: true
    },
    certificates: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <section class="certificates">
    <div class="certificates__step-wrapper">
      <div class="certificates__step-point-wrapper">
        <span class="certificates__step-point"></span>
      </div>
      <div class="certificates__step-divider"></div>
    </div>

    <div class="certificates__wrapper">
      <h2 class="certificates__title">{{ mainTitle.titleCertificates }}</h2>
      <div class="certificates__card-wrapper">
        <div v-for="(item, index) in certificates" class="certificates__card" :key="index">
          <div class="certificates__date-wrapper">
            {{ item.date }}
          </div>
          <div class="certificates__logo-wrapper">
            <div class="certificates__logo-icon-wrapper">
              <inline-svg
                class="certificates__logo-icon"
                :src="item.icon"
                :aria-label="`Иконка ${item.value}`"
                role="img"
              />
            </div>
            <div class="certificates__text-wrapper">
              <p class="certificates__label">{{ item.label }}</p>
              <a
                :href="item.link"
                target="_blank"
                rel="noopener noreferrer"
                class="certificates__link"
              >
                <div class="certificates__link-icon-wrapper">
                  <inline-svg
                    class="certificates__link-icon"
                    :src="item.iconLink"
                    role="presentation"
                  />
                </div>
                {{ item.value }}
              </a>
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
  width: 3rem;
  height: 3rem;
}

%text-s {
  font-weight: 400;
  font-size: 0.6875rem;
  line-height: 1.33;
  letter-spacing: 0.01em;
}

%text {
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.29;
}
%text-label {
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1.29;
  letter-spacing: 0.01em;
}

// -------------------------------------- //

.certificates {
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
    margin: 2rem 1.875rem 4rem 1.5rem;

    border-radius: 8px;
    overflow: hidden;

    @media (max-width: 767px) {
      margin: 2rem 1.3rem 3rem 1rem;
    }
  }

  &__card {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.97rem 1.47rem 1.67rem;
    gap: 0.5rem;
    background: vars.$color-card-bg;
    box-shadow: inset 0px -10px 20px 0px rgba(0, 0, 0, 0.03);

    @media (max-width: 550px) {
      padding: 0.75rem 1rem 1.25rem;
    }

    @media (min-width: 695px) {
      flex-direction: row-reverse;
    }
    @media (min-width: 768px) and (max-width: 1129px) {
      flex-direction: row-reverse;
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__date-wrapper {
    @extend %text-s;
    color: vars.$color-text;
    display: flex;
    flex: 0 0 auto;

    @media (max-width: 1129px) {
      align-self: auto;
      font-size: 0.625rem;
    }

    @media (min-width: 1440px) {
      font-size: 0.875rem;
    }
  }

  &__logo-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (min-width: 540px) {
      align-items: start;
    }

    @media (min-width: 1440px) {
      gap: 2rem;
    }
  }

  &__logo-icon-wrapper {
    @extend %icon-wrapper;
    @extend %icon-base;

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
    gap: 0.25rem;
  }

  &__label {
    @extend %text-label;
    color: vars.$color-label;

    @media (max-width: 550px) {
      font-size: 0.65rem;
    }

    @media (min-width: 551px) and (max-width: 1129px) {
      font-size: 0.75rem;
    }

    @media (min-width: 1440px) {
      font-size: 1rem;
    }
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @extend %text;
    color: vars.$color-title;

    &:hover {
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    }

    @media (max-width: 550px) {
      font-size: 0.75rem;
    }

    @media (min-width: 551px) and (max-width: 1129px) {
      font-size: 0.875rem;
    }

    @media (min-width: 1440px) {
      font-size: 1.1rem;
    }
  }

  &__link-icon-wrapper {
    @extend %icon-wrapper;
    background-color: vars.$color-icon-bg;
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
