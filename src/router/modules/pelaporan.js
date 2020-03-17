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
        roles: ['admin']
      }
    },
    {
      path: 'create',
      component: () => import('@/views/laporan/form'),
      hidden: true,
      meta: {
        title: 'laporan_create',
        icon: 'library_books',
        roles: ['admin']
      }
    },
    {
      path: 'stepper',
      component: () => import('@/views/laporan/formStepper'),
      hidden: true,
      meta: {
        title: 'laporan_create',
        icon: 'library_books',
        roles: ['admin']
      }
    }
  ]
}

export default surveyRouter
