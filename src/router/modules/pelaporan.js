import Layout from '@/layout'

const surveyRouter = {
  path: '/laporan',
  component: Layout,
  redirect: '/laporan/index',
  meta: {
    icon: 'library_books',
    roles: ['admin']
  },
  active: false,
  children: [
    {
      path: 'index',
      component: () => import('@/views/laporan/list'),
      meta: {
        title: 'laporan_title',
        icon: 'library_books',
        noCache: true,
        affix: true,
        roles: ['admin']
      }
    }
  ]
}

export default surveyRouter
