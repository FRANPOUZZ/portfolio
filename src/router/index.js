import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Composant de la page d'accueil
import NotFound from '../views/NotFound.vue'; // Import pour la page 404

const routes = [
  {
    path: '/', // Route pour la page d'accueil
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*', // Route pour les pages non trouvées (404)
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Utilisation du mode "history"
  routes
});

export default router;


