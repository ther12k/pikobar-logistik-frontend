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
      path: '/rdt/odp-list',
      component: () => import('@/views/rdt/list'),
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
    },
    {
      path: '/rdt/detail/:id',
      component: () => import('@/views/rdt/detail'),
      hidden: true,
      meta: {
        title: 'rdt_detail',
        noCache: true,
        roles: ['superadmin', 'dinkeskota', 'faskes']
      }
    },
    {
      path: '/rdt/update-result/:id',
      component: () => import('@/views/rdt/updateResult'),
      hidden: true,
      meta: {
        title: 'rdt_update',
        noCache: true,
        roles: ['superadmin', 'dinkeskota', 'faskes']
      }
    }
  ]
}

export default rdtRouter
