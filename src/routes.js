import Dashboard from './screens/dashboard'
import Events from './screens/events'
import Create from './components/create/create'

export const Routes = [
  {
    path: '/events-management',
    component: Dashboard,
    routes: [
      {
        path: '/events-management/create',
        component: Create,
      },
      {
        path: '/events-management/events',
        component: Events,
      }
    ]
  },
  {
    path: '*',
    component: Dashboard,
  },
]
