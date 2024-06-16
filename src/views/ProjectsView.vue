<script setup lang="ts">
 import ProjectItem from '../components/ProjectItem.vue';
 const projectList = [ //Add to projects here
   {
    name: "Sandman",
    url: "/path",
    imgURL: "/path",
    description: "A retro theme built with Nuxt.js",
    builtWith: ["devicon-nuxtjs-plain-wordmark", "devicon-tailwindcss-plain-wordmark",
    "devicon-typescript-plain"
    ]
   },
   {
    name: "Serious Business",
    url: "/path",
    imgURL: "/path",
    description: "An example Drupal site for a business, demonstarting the use of paragraphs.",
    builtWith: ["devicon-drupal-plain-wordmark", "devicon-tailwindcss-plain-wordmark"]
   },
   {
    name: "You (auto)complete me",
    url: "/path",
    imgURL: "src/assets/img/yacm-screen.png",
    description: "A Machine Learning project built with React that allows users to write poetry alongside famous authors from history.",
    builtWith: ["devicon-react-plain-wordmark", "devicon-tailwindcss-plain-wordmark"]
   },
   {
    name: "Curriculum Tool",
    url: "/path",
    imgURL: "/path",
    description: "A Ruby on Rails project that maps the Australian National Curriculum",
    builtWith: ["devicon-ruby-plain-wordmark", "devicon-javascript-plain"]
   },

 ]
 
</script>

<template>
    <main>
        <section class="flex flex-col gap-2 border-l-[1px] border-grey p-12">
            <div class="contact-title animate__animated animate__fadeInDown">
                <h2 class="text-6xl mb-4">
                Recent Projects
                </h2>
            </div>
            <div class="projects-content animate__animated animate__fadeInUp">
                <div class="projects-intro-text">
                    <p>Here are some of my personal projects. Get in touch or have a look at my resume if you would like to see the projects I've done for work.</p>
                </div>
               
                <div class="project-cards-wrapper grid sm:grid-cols-2 grid-cols-1 gap-4">
                    <ProjectItem 
                    v-for="project in projectList"
                    :key="project.name"
                    :name="project.name"
                    :url="project.url"
                    :imgURL="project.imgURL"
                    :description="project.description"
                    :builtWith="project.builtWith">
                    </ProjectItem>
                </div>

            </div>
        </section>    
    </main>
</template>
