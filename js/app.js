angular.module('bloonApp', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouter) {
    const defaultState = {
      name: 'welcome',
      url: '/welcome',
      component: 'bloonListComponent'
    }
  
    const descriptionState = {
      name: 'description',
      url: '/info',
      component: 'descriptionComponent'
    }

    const robotsState = {
      name: 'robots',
      url: '/robots',
      component: 'robotListComponent',
      resolve: {
        resolvedRobots: ['robotListService', function(robotService){
          return robotService.getAllRobots()
        }]
      }
    }

    const bloonDetailState = {
      name: 'welcome.bloon',
      url: '/bloon/{bloonId}',
      component: 'bloonDetailComponent',
      resolve:  {
        bloon: ['bloonListService', '$transition$', function(list, trans) {
          return list.getBloon(trans.params().bloonId);
        }]
      }
    }
  

    stateProvider.state(defaultState);
    stateProvider.state(robotsState);
    stateProvider.state(descriptionState);
    stateProvider.state(bloonDetailState);

    urlRouter.otherwise('/welcome');
    
  }]);