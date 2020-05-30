import Dashboard from './screens/dashboard'
import Events from './screens/events'
import CreateEvent from './screens/createEvent'

export const Routes = [
  {
    path: '/events-management',
    component: Dashboard,
    routes: [
      {
        path: '/events-management/create',
        component: CreateEvent,
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