<template>
  <v-app>
    <v-main>
      <v-app-bar :elevation="2">
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Application Bar</v-app-bar-title>

        <template v-slot:append>
          <v-btn 
            v-if="!isLoggedIn"
            class="ml-3 bg-indigo-darken-3"
            color="white"
            size="large"
            variant="tonal"
            rounded="lg">
            <RouterLink to="/login">Login</RouterLink>
          </v-btn>

          <v-btn 
            v-if="!isLoggedIn"
            class="ml-3 bg-purple-darken-3"
            color="white"
            size="large"
            variant="tonal"
            rounded="lg">
            <RouterLink to="/register">Register</RouterLink>
          </v-btn>

          <v-btn 
            v-if="isLoggedIn"
            class="ml-3 bg-pink-darken-3"
            color="white"
            size="large"
            variant="tonal"
            rounded="lg"
            @click="handleLogout">
            Sign out
          </v-btn>
        </template>
      </v-app-bar>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item>
            <v-btn icon="mdi-account-circle"></v-btn>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <RouterLink to="/">
            <v-list-item prepend-icon="mdi-home" title="Home" value="Home"></v-list-item>
          </RouterLink>
          <RouterLink to="/members">
            <v-list-item prepend-icon="mdi-account-multiple" title="Members" value="Members"></v-list-item>
          </RouterLink>
          <RouterLink to="/raids">
            <v-list-item prepend-icon="mdi-sword-cross" title="Raids" value="Raids"></v-list-item>
          </RouterLink>
        </v-list>
      </v-navigation-drawer>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const isLoggedIn = ref(false); 
const router = useRouter();

let auth;

const handleLogout = () => {
  signOut(auth).then(() => {
    router.push('/');
  })
}

onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
})
</script>
