import Layout from '@/layout'

const rdtRouter = {
  path: '/rdt',
  component: Layout,
  redirect: '/rdt/index',
  meta: {
    title: 'rdt',
    icon: 'local_activity',
    roles: ['superadmin', 'dinkesprov', 'dinkeskota', 'faskes']
  },
  active: false,
  children: [
    {
      path: '/index',
      component: () => import('@/views/laporan/list'),
      meta: {
        title: 'odp',
        icon: 'local_activity',
        noCache: true,
        roles: ['superadmin', 'dinkesprov', 'dinkeskota', 'faskes']
      }
    },
    {
      path: '/stepper',
      component: () => import('@/views/laporan/formStepper'),
      meta: {
        title: 'rdt_create',
        icon: 'library_books',
        noCache: true,
        roles: ['superadmin', 'dinkeskota', 'faskes']
      }
    }
  ]
}

export default rdtRouter
