<template>
    <main>
     <section class="flex flex-col gap-2 border-l-[1px] border-grey p-12">
         <div class="contact-title animate__animated animate__fadeInDown">
             <h2 class="text-6xl mb-4">
            My skills
             </h2>
         </div>
         <div class="contact-content animate__animated animate__fadeInUp grid grid-cols-3 overflow-hidden max-h-screen">
            <div class="skills-icons flex flex-col gap-4">
                <i class="devicon-drupal-plain-wordmark"></i>
                <i class="devicon-html5-plain-wordmark"></i>
                <i class="devicon-css3-plain-wordmark"></i>

            </div>
            <div class="skills-text col-span-2 flex flex-col gap-4">
                <p> Skills description 1</p>
                <p>Skills description 2 </p>

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