<template>
  <!-- A sidebar menu -->
  <div class="absolute flex flex-col items-center p-2 left-4 h-screen">
    <nav>
      <ul class="flex flex-col justify-evenly h-screen mb-16 w-12 justify-center items-center">
        <li
          v-for="link in navLinks"
          :key="link.path"
          class="relative flex flex-col text-xs gap-2 h-8 w-8"
        >
          <RouterLink
            v-if="!link.external"
            :to="link.path"
            class="flex flex-col justify-center items-center"
            custom
            v-slot="{ isActive, href, navigate }"
          >
            <a
              :href="href"
              @click="navigate"
              :class="{ 'selected-icon': isActive }"
              class="flex flex-col justify-center items-center gap-2 icon-link"
            >
              <font-awesome-icon :icon="link.icon" class="icon" />
              {{ link.name }}
            </a>
          </RouterLink>
          <!-- External links -->
          <a
            v-else
            :href="link.path"
            class="icon-link flex flex-col justify-center items-center gap-2"
            target="_blank"
            ref="nofollow noopener"
          >
            <font-awesome-icon :icon="link.icon" class="icon" />
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const navLinks = ref([
  { name: 'home', path: '/', icon: ['fas', 'house'], external: false },
  { name: 'projects', path: '/projects', icon: ['fas', 'wrench'], external: false },
  { name: 'contact', path: '/contact', icon: ['fas', 'address-book'], external: false },
  { name: 'skills', path: '/skills', icon: ['fas', 'book'], external: false },
  {
    name: 'resume',
    path: 'https://www.canva.com/design/DAFL43CkwGc/MEZeGrUguCvW0eMkwx4xZw/view?utm_content=DAFL43CkwGc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink',
    icon: ['fas', 'paperclip'],
    external: true
  }
])
</script>

<style scoped>
.icon {
  @apply h-6;
}

.icon-link:hover,
.icon-link:hover a {
  @apply text-white;
  transform: scale(1.1);
  transition: all 0.7s ease;
}

.icon-link:hover::before,
.selected-icon::before {
  @apply text-white border-l-2 border-white;
  content: ' ';
  position: absolute;
  left: -15px;
  height: 100%;
}

.icon-link:hover .icon,
.icon-link:hover a {
  @apply text-white;
}

.selected-icon {
  .icon {
    @apply text-white;
  }

  color: white !important;
}
</style>
