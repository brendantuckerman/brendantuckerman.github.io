<script setup lang="ts">
import ProjectItem from '../components/ProjectItem.vue'
const projectList = [
  //Add to projects here
  {
    name: 'Sandman Theme',
    url: 'https://github.com/brendantuckerman/Sandman',
    imgURL: 'assets/img/smn-screen.webp',
    description: 'A retro theme built with Nuxt.js with a beach vibe.',
    builtWith: ['devicon-nuxtjs-plain', 'devicon-tailwindcss-plain', 'devicon-typescript-plain'],
    builtText: ['#Nuxt', '#Tailwind', '#Typescript']
  },
  {
    name: 'Selling to Government',
    url: 'https://sellingtogov.finance.gov.au/',
    imgURL: 'assets/img/stg-screen.webp',
    description: 'A rebuild for the Australia Federal Government on the GovCMS platform.',
    builtWith: ['devicon-drupal-plain-wordmark', 'devicon-tailwindcss-plain'],
    builtText: ['#Drupal10', '#TailwindCSS']
  },
  {
    name: 'You (auto)complete me',
    url: 'https://brendantuckerman.github.io/you-autocomplete-me/',
    imgURL: 'assets/img/yacm-screen.webp',
    description:
      'A Machine Learning project built with React that allows users to write poetry alongside famous authors from history.',
    builtWith: ['devicon-react-plain-wordmark', 'devicon-tailwindcss-plain'],
    builtText: ['#React', '#TailwindCSS']
  },
  {
    name: 'Digital Identiity Rebuild',
    url: 'https://digitalidentitysystems.gov.au/',
    imgURL: 'assets/img/digid.webp',
    description: 'A rebuild of the D10 Digital Identity site',
    builtWith: ['devicon-drupal-plain-wordmark', 'devicon-tailwindcss-plain'],
    builtText: ['#Drupal10', '#TailwindCSS']
  }
]
</script>

<template>
  <main>
    <section
      class="flex flex-col gap-4 sm:p-12 sm:max-h-[80vh] overflow-scroll sm:border-l-[1px] border-grey p-4 h-[250px] sm:h-auto"
    >
      <div class="contact-title animate__animated animate__fadeInDown">
        <h2 class="text-6xl mb-4">Recent Projects</h2>
      </div>
      <div class="projects-content animate__animated animate__fadeInUp">
        <div class="projects-intro-text">
          <p>
            Below is a sample of my work and personal projects.
            <RouterLink to="/contact" class="underline text-white">Get in touch</RouterLink> or have
            check out my
            <a href="" rel="nofollow" target="_blank" class="text-white underline">resume</a> if you
            would like to know more.
          </p>
        </div>

        <div class="project-cards-wrapper grid sm:grid-cols-2 grid-cols-1 gap-4">
          <ProjectItem
            v-for="project in projectList"
            :key="project.name"
            :name="project.name"
            :url="project.url"
            :imgURL="project.imgURL"
            :description="project.description"
            :builtWith="project.builtWith"
            :builtText="project.builtText"
          >
          </ProjectItem>
        </div>
      </div>
    </section>
  </main>
</template>
