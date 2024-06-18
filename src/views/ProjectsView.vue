<script setup lang="ts">
 import ProjectItem from '../components/ProjectItem.vue';
 const projectList = [ //Add to projects here
   {
    name: "Sandman",
    url: "/path",
    imgURL: "/path",
    description: "A retro theme built with Nuxt.js",
    builtWith: ["devicon-nuxtjs-plain", "devicon-tailwindcss-plain",
    "devicon-typescript-plain"
    ],
    builtText: ["#Nuxt", "#vue", "#tailwind", "#typescript" ],
   },
   {
    name: "Selling to Government",
    url: "https://sellingtogov.finance.gov.au/",
    imgURL: "src/assets/img/stg-screen.webp",
    description: "A rebuild for the Australia Federal Government on the GovCMS platform.",
    builtWith: ["devicon-drupal-plain-wordmark", "devicon-tailwindcss-plain"],
    builtText: ["#Nuxt", "#vue", "#tailwind", "#typescript" ],
   
   },
   {
    name: "You (auto)complete me",
    url: "https://brendantuckerman.github.io/you-autocomplete-me/",
    imgURL: "src/assets/img/yacm-screen.webp",
    description: "A Machine Learning project built with React that allows users to write poetry alongside famous authors from history.",
    builtWith: ["devicon-react-plain-wordmark", "devicon-tailwindcss-plain"],
    builtText: ["#Nuxt", "#vue", "#tailwind", "#typescript" ],
    
   },
   {
    name: "Curriculum Tool",
    url: "https://github.com/brendantuckerman/curriculum-tool-db",
    imgURL: "src/assets/img/ct-screen.webp",
    description: "A Ruby on Rails project that models the Australian National Curriculum as a back end.",
    builtWith: ["devicon-ruby-plain-wordmark", "devicon-javascript-plain"],
    builtText: ["#Nuxt", "#vue", "#tailwind", "#typescript" ],
   
   }, 
 ]

</script>

<template>
    <main>
        <section class="flex flex-col gap-4 border-l-[1px] border-grey p-12 max-h-[80vh] overflow-scroll">
            <div class="contact-title animate__animated animate__fadeInDown">
                <h2 class="text-6xl mb-4">
                Recent Projects
                </h2>
            </div>
            <div class="projects-content animate__animated animate__fadeInUp">
                <div class="projects-intro-text">
                    <p>Here are some of my work and personal projects. <RouterLink to="/contact">Get in touch</RouterLink> or have check out my resume if you would like to know more.</p>
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
                    :builtText="project.builtText">
                    </ProjectItem>
                </div>

            </div>
        </section>    
    </main>
</template>
