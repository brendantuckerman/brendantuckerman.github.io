<template>
    <!-- A sidebar menu -->
    <div class="absolute flex flex-col items-center left-0 h-screen">
      <nav>
        <ul class="flex flex-col justify-evenly h-screen mb-16">
            <RouterLink to="/"><li class="flex gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'house']" />Home</li></RouterLink>
            <RouterLink to="/about"><li class="flex gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'house']" />About</li></RouterLink>
            <RouterLink to="/projects">Recent Projects</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/">Resume</RouterLink>
        </ul>
      </nav>

    </div>

</template>