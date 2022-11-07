export default {
  routes: [
    {
     method: 'GET',
     path: '/game/claim',
     handler: 'game.claim',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
