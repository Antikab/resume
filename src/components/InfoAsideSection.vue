<script>
export default {
  name: 'InfoAsideSection',
  props: {
    profile: {
      type: Object,
      required: true
    },
    asideTitle: {
      type: Object,
      required: true
    },
    contacts: {
      type: Array,
      required: true
    },
    socials: {
      type: Array,
      required: true
    },
    languages: {
      type: Array,
      required: true
    },
    hobbiesInterests: {
      type: Array,
      required: true
    }
  },
  computed: {
    getHref() {
      return (item) => {
        let value = item.value

        if (item.type === 'phone') {
          value = value.replace(/[^\d+]/g, '')
        }
        return item.hrefPrefix ? item.hrefPrefix + value : value
      }
    },
    formatLink() {
      return (url) => {
        return url.replace(/^https?:\/\//, '')
      }
    }
  }
}
</script>

<template>
  <aside class="info-aside">
    <div class="info-aside__profile">
      <img
        class="info-aside__profile-avatar"
        src="/images/myPhoto.png"
        :alt="`Фото ${profile.name}`"
      />
      <h1 class="info-aside__profile-name">{{ profile.name }}</h1>
      <p class="info-aside__profile-about">{{ profile.about }}</p>
    </div>
    <div class="info-aside__divider"></div>

    <h3 class="info-aside__contacts-label">{{ asideTitle.titleContacts }}</h3>
    <div class="info-aside__contacts">
      <div v-for="(contact, index) in contacts" :key="index" class="info-aside__contacts-item">
        <div class="info-aside__contacts-icon-wrapper">
          <inline-svg
            class="info-aside__contacts-icon"
            :src="contact.icon"
            :aria-label="`Иконка ${contact.label}`"
            role="img"
            fill="currentColor"
          />
        </div>
        <div class="info-aside__contacts-details">
          <span class="info-aside__contacts-label">{{ contact.label }}</span>
          <a
            class="info-aside__contacts-link"
            target="_blank"
            rel="noopener noreferrer"
            :href="getHref(contact)"
            :aria-label="`Перейти к ${contact.label}: ${contact.value}`"
          >
            {{ formatLink(contact.value) }}
          </a>
        </div>
      </div>
    </div>

    <div class="info-aside__divider"></div>

    <h3 class="info-aside__socials-label">{{ asideTitle.titleSocials }}</h3>
    <div class="info-aside__socials">
      <div v-for="(social, index) in socials" :key="index" class="info-aside__socials-item">
        <div class="info-aside__socials-icon-wrapper">
          <inline-svg
            class="info-aside__socials-icon"
            :src="social.icon"
            :aria-label="`Иконка ${social.label}`"
            role="img"
          />
        </div>
        <div class="info-aside__socials-details">
          <span class="info-aside__socials-label">{{ social.label }}</span>
          <a
            class="info-aside__socials-link"
            target="_blank"
            rel="noopener noreferrer"
            :href="getHref(social)"
            :aria-label="`Открыть профиль в ${social.label}`"
            >{{ formatLink(social.value) }}</a
          >
        </div>
      </div>
    </div>

    <div class="info-aside__divider"></div>

    <h3 class="info-aside__languages-label">{{ asideTitle.titleLangs }}</h3>
    <div class="info-aside__languages">
      <div
        v-for="(lang, index) in languages"
        class="info-aside__languages-item"
        :key="index"
        :aria-label="`Владение языком: ${lang.value}, уровень ${lang.label}`"
      >
        <div class="info-aside__languages-icon-wrapper">
          <inline-svg
            class="info-aside__languages-icon"
            :src="lang.icon"
            :aria-label="`Иконка ${lang.value}`"
            role="img"
          />
        </div>
        <div class="info-aside__languages-details">
          <span class="info-aside__languages-text">{{ lang.value }}</span>
          <span class="info-aside__languages-label">{{ lang.label }}</span>
        </div>
      </div>
    </div>

    <div class="info-aside__divider"></div>

    <h3 class="info-aside__hobbiesInterests-label">{{ asideTitle.titleHobbies }}</h3>
    <div class="info-aside__hobbiesInterests">
      <div
        v-for="(hobby, index) in hobbiesInterests"
        class="info-aside__hobbiesInterests-item"
        :style="{ color: hobby.color }"
        :key="index"
        :aria-label="`Увлечение: ${hobby.label}`"
      >
        <div class="info-aside__hobbiesInterests-icon-wrapper">
          <inline-svg
            class="info-aside__hobbiesInterests-icon"
            :src="hobby.icon"
            :aria-label="`Иконка ${hobby.label}`"
            role="img"
            fill="currentColor"
          />
        </div>
        <div class="info-aside__hobbiesInterests-details">
          <span class="info-aside__hobbiesInterests-text">
            {{ hobby.label }}
          </span>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as vars;

// --------- Общие плейсхолдеры --------- //
%column-2-item {
  @media (min-width: 550px) {
    flex: 0 1 calc(50% - 0.75rem);
  }

  @media (min-width: 768px) {
    flex: 0 0 100%;
  }
}

%item-center {
  display: flex;
  align-items: center;
  gap: 1rem;
}

%icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
}

%details {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.25rem;
}

%label {
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.33;
  letter-spacing: 0.01em;
}

%text {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.29;
}

%icon-base {
  width: 2rem;
  height: 2rem;
}

// -------------------------------------- //

.info-aside {
  &__profile {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  &__profile-avatar {
    align-self: center;
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    object-fit: cover;

    @media (min-width: 768px) {
      width: 6rem;
      height: 6rem;
      align-self: flex-start;
    }
  }

  &__profile-name {
    align-self: center;
    margin: 1rem 0;
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.25;
    letter-spacing: -0.02em;
    color: vars.$color-title;

    @media (min-width: 768px) {
      align-self: flex-start;
      font-size: 1.7rem;
    }

    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  }

  &__profile-about {
    margin-bottom: 0.625rem;
    margin-right: -0.507rem;
    text-align: justify;
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.33;
    letter-spacing: 0.02em;
    color: vars.$color-text;

    @media (min-width: 768px) {
      margin-right: -2.3rem;
      font-size: 1.05rem;
    }

    @media (min-width: 1200px) {
      margin-right: -1.6rem;
      font-size: 1rem;
    }
  }

  &__divider {
    width: 100%;
    height: 1px;
    margin-bottom: 2rem;
    background-color: vars.$color-icon-bg;
  }

  &__contacts {
    margin-top: 1.25rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (min-width: 550px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &__contacts-item {
    @extend %item-center;

    @media (min-width: 550px) {
      flex: 0 1 calc(50% - 0.75rem);
    }

    @media (min-width: 768px) {
      flex: 0 0 100%;
    }
  }

  &__contacts-icon-wrapper {
    @extend %icon-wrapper;
    background-color: vars.$color-icon-bg;
    border-radius: 50%;
  }

  &__contacts-icon {
    width: 1.3125rem;
    height: 1.3125rem;
    color: vars.$color-label;
  }

  &__contacts-details {
    @extend %details;
  }

  &__contacts-label {
    @extend %label;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }

  &__contacts-link {
    @extend %text;
    color: vars.$color-text;

    &:hover {
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    }

    @media (min-width: 1440px) {
      font-size: 1rem;
    }
  }

  &__socials {
    margin-top: 1.25rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (min-width: 550px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &__socials-item {
    @extend %item-center;

    @media (min-width: 550px) {
      flex: 0 1 calc(50% - 0.75rem);
    }

    @media (min-width: 768px) {
      flex: 0 0 100%;
    }
  }

  &__socials-icon-wrapper {
    @extend %icon-wrapper;
  }

  &__socials-icon {
    @extend %icon-base;
  }

  &__socials-details {
    @extend %details;
  }

  &__socials-label {
    @extend %label;
    text-align: start;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }

  &__socials-link {
    @extend %text;
    color: vars.$color-text;

    &:hover {
      text-decoration: underline;
      text-decoration-skip-ink: auto;
    }

    @media (min-width: 1440px) {
      font-size: 1rem;
    }
  }

  &__languages {
    margin-top: 1.25rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (min-width: 550px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &__languages-item {
    @extend %item-center;

    @media (min-width: 550px) {
      flex: 0 1 calc(50% - 0.75rem);
    }

    @media (min-width: 768px) {
      flex: 0 0 100%;
    }
  }

  &__languages-icon-wrapper {
    @extend %icon-wrapper;
  }

  &__languages-icon {
    @extend %icon-base;
  }

  &__languages-details {
    @extend %details;
  }

  &__languages-text {
    @extend %text;
    color: vars.$color-text;

    @media (min-width: 1440px) {
      font-size: 1rem;
    }
  }

  &__languages-label {
    @extend %label;
    text-align: start;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }

  &__hobbiesInterests-label {
    @extend %label;
    text-align: start;
    color: vars.$color-label;

    @media (min-width: 1440px) {
      font-size: 0.9rem;
    }
  }

  &__hobbiesInterests {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (min-width: 550px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &__hobbiesInterests-item {
    @extend %item-center;

    @media (min-width: 550px) {
      flex: 0 1 calc(50% - 0.75rem);
    }

    @media (min-width: 768px) {
      flex: 0 0 100%;
    }
  }

  &__hobbiesInterests-icon-wrapper {
    @extend %icon-wrapper;
  }

  &__hobbiesInterests-icon {
    @extend %icon-base;
  }

  &__hobbiesInterests-details {
    @extend %details;
  }

  &__hobbiesInterests-text {
    @extend %text;
    color: vars.$color-text;

    @media (min-width: 1440px) {
      font-size: 1rem;
    }
  }
}
</style>
