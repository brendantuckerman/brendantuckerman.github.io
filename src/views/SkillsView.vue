<template>
    <main>
     <section class="flex flex-col gap-2 sm:border-l-[1px] border-grey sm:p-12 p-4 overflow-scroll h-[250px] sm:h-auto">
         <div class="contact-title animate__animated animate__fadeInDown">
             <h2 class="text-6xl mb-4 text-center">
            Key skills
             </h2>
         </div>
         <div class="contact-content animate__animated animate__fadeInUp flex flex-col sm:overflow-hidden max-h-screen">
            <div class="skill-introduction">
                <p>Below are some of the key technologies and skills developed in my career.</p>
                <p>Be sure to see my  <a href="" rel="nofollow" target="_blank" class="text-white underline">resume</a> for more.</p>
            </div>
            <div class="skills-icons grid  grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                
                <div class="skill-item flex flex-col gap-2 justify-center items-center ">
                    <i class="devicon-drupal-plain-wordmark"></i>
                    <p>Drupal 8, 9, and 10</p>
                </div>
                    

                <div class="skill-item flex flex-col gap-2 justify-center items-center">
                    <i class="devicon-html5-plain-wordmark"></i>
                    <p>HTML5 with a focus on accessbility</p>
                </div>

                <div class="skill-item flex flex-col gap-2 justify-center items-center">
                    <i class="devicon-css3-plain-wordmark"></i>
                    <p>CSS, including my favourite--Tailwind</p>
                </div>
                <div class="skill-item flex flex-col gap-2 justify-center items-center">       
                    <i class="devicon-vuejs-plain-wordmark"></i>
                    <p>Vue.js for the frontend (this site is built with it!)</p>
                </div>
                <div class="skill-item flex flex-col gap-2 justify-center items-center">
                    <i class="devicon-nuxtjs-plain"></i>
                    <p>Nuxt.js for a complete frontend app.</p>
                </div>
                <div class="skill-item flex flex-col gap-2 justify-center items-center">
                    <i class="devicon-php-plain"></i>
                    <p>PHP to support the backend.</p>
                </div>
                <div class="skill-item flex flex-col gap-2 justify-center items-center">
                    <i class="devicon-javascript-plain"></i>
                    <p>JS and Jquery to make things move!</p>
                </div>
                <div class="skill-item flex flex-col gap-2 justify-center items-center">
                    <i class="devicon-gitlab-plain-wordmark"></i>
                    <p>Git and Gitlab for managing the project.</p>
                </div>
                <div class="skill-item flex flex-col gap-2 justify-center items-center">
                    <i class="devicon-mysql-original"></i>
                    <p>MySQL to store everything behind the scenes.</p>
                </div>

            </div>

         </div>
 
     </section>
 
    </main>
</template>


<style scoped>

    i{
        @apply text-6xl;    
    }

</style>