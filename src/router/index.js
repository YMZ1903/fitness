import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ManageExercises from '@/pages/ManageExercises';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: HelloWorld,
    },
    {
      path: '/manage-exercises',
      name: 'ManageExercises',
      component: ManageExercises,
    }
  ],
});
