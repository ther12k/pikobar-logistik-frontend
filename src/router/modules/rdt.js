import Layout from '@/layout'

const rdtRouter = {
  path: '/rdt',
  component: Layout,
  redirect: '/rdt',
  meta: {
    title: 'rdt',
    icon: 'mdi-book-plus',
    roles: ['superadmin', 'dinkesprov', 'dinkeskota', 'faskes']
  },
  active: false,
  children: [
    {
      path: '/rdt/create',
      component: () => import('@/views/rapidTest/formRapid'),
      meta: {
        title: 'create_rdt',
        noCache: true,
        roles: ['superadmin', 'dinkesprov', 'dinkeskota', 'faskes']
      }
    },
    {
      path: '/rdt/medical-personel',
      component: () => import('@/views/rdt/list'),
      meta: {
        title: 'list_rdt',
        noCache: true,
        roles: ['superadmin', 'dinkeskota', 'faskes']
      }
    }
  ]
}

export default rdtRouter
