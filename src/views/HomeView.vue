<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <section class="flex flex-col gap-2 border-l-[1px] border-grey p-12">
      <div class="hello-title animate__animated animate__fadeInDown">
        <h2 class="text-6xl">
          Hello World!
        </h2>
      </div>
      <div class="animate__animated animate__fadeInUp">
        <h3 class="text-2xl text-grey">
          I'm Brendan  <span class="animate-waving-hand">👋</span>
        </h3>
        <div class="hello-world-text">
          <p class="text-lg">
            I'm a web developer who aspires to make a difference through technology.  I'm energized by finding solutions to complex problems in creative ways and through an unceasing curiosity about learning new things. 
          </p>
          <p class="text-lg">
            I’ve applied this curiosity to create code for Drupal projects with GovCMS SaaS platforms, as well as standard Drupal projects to better support the work of my clients. 
          </p>
    
          <p class="text-lg">
            Working across both the front and back ends, I love solving problems and creating web solutions. 
          </p>
          <div class="flex flex-row my-2 justify-center">
            <a class="button p-4 mb-4 rounded-full text border-2 border-grey"
              href="https://www.canva.com/design/DAFL43CkwGc/MEZeGrUguCvW0eMkwx4xZw/view?utm_content=DAFL43CkwGc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
              rel="nofollow"
              target="_blank"
            >
            See my resume</a>
          </div>
          <p class="text-lg">
            Check out my  <a><RouterLink to="/projects">latest projects</RouterLink></a>, some of the  <RouterLink to="/skills">technologies I've worked with </RouterLink> or 
            feel free just to <RouterLink to="/contact"> get in touch!</RouterLink> 
          </p>
      </div>
    </div>
    </section>
  </main>
</template>


<style scoped>

.button{
  background: 
    linear-gradient(to top, #25040528, #340156);
}

.button:hover{
  @apply border border-2 border-purple text-grey cursor-pointer;
}

a{
 @apply underline text-[#fff];
}

a:hover{
  @apply text-primary-darkest;
}

</style>