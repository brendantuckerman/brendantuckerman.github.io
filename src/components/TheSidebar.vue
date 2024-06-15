<template>
    <!-- A sidebar menu -->
    <div class="absolute flex flex-col items-center left-0 h-screen">
      <nav>
        <ul class="flex flex-col justify-evenly h-screen mb-16 p-2 justify-center items-center">
            <RouterLink to="/"><li class="flex flex-col text-sm gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'house']" />Home</li></RouterLink>
            <RouterLink to="/about"><li class="flex flex-col text-sm gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'house']" />About</li></RouterLink>
            <RouterLink to="/projects"><li class="flex flex-col text-sm gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'house']" />Recent Projects</li></RouterLink>
            <RouterLink to="/contact"><li class="flex flex-col text-sm gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'house']" />Contact</li></RouterLink>
            <RouterLink to="/"><li class="flex flex-col text-sm gap-2 h-8 w-8"><font-awesome-icon :icon="['fas', 'house']" />Resume</li></RouterLink>
           
        </ul>
      </nav>

    </div>

</template>