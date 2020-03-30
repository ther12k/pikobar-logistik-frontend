import Layout from '@/layout'

const dashboardRouter = {
  path: '/',
  component: Layout,
  redirect: 'dashboard',
  meta: {
    icon: 'dashboard',
    roles: ['superadmin', 'dinkesprov', 'dinkeskota']
  },
  active: false,
  children: [
    {
      path: '/',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: 'dashboard',
        icon: 'dashboard',
        noCache: true,
        affix: true,
        roles: ['superadmin', 'dinkesprov', 'dinkeskota']
      }
    }
  ]
}

export default dashboardRouter
