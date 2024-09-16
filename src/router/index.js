import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Composant de la page d'accueil
import DivTwo from '../components/div2.vue'; // Import du composant div2
import Formu from '../components/formu.vue'; // Import du composant formu
import Description from '../components/description.vue'; // Import du composant description
import NotFound from '../views/NotFound.vue'; // Import pour la page 404

const routes = [
  {
    path: '/', // Route pour la page d'accueil
    name: 'home',
    component: HomeView
  },
  {
    path: '/description', // Route pour le composant description
    name: 'description',
    component: Description
  },
  {
    path: '/divtwo', // Route pour le composant div2
    name: 'divtwo',
    component: DivTwo
  },
  {
    path: '/formu', // Route pour le composant formu
    name: 'formu',
    component: Formu
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


