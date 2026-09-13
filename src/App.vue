<script setup>
import { resumeView } from './presentation/resumeView.js'
import { mainTitle } from './config/mainTitle.js'
import { asideTitle } from './config/asideTitle.js'
import MainLayout from './layouts/MainLayout.vue'
import ResumeIntro from './components/ResumeIntro.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
</script>

<template>
  <MainLayout
    :profile="resumeView.profile"
    :aside-title="asideTitle"
    :contacts="resumeView.contacts"
    :socials="resumeView.socials"
    :languages="resumeView.languages"
    :hobbies-interests="resumeView.interests"
  >
    <ResumeIntro :profile="resumeView.profile" />
    <ExperienceSection :main-title="mainTitle" :achievements="resumeView.experience" />
    <SkillsSection :main-title="mainTitle" :tools-skills="resumeView.skills" />
    <ProjectsSection :main-title="mainTitle" :latest-projects="resumeView.publicProjects" />
    <EducationSection :main-title="mainTitle" :education="resumeView.education" />
  </MainLayout>
</template>
