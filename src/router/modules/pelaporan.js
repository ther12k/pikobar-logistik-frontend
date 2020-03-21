import Layout from '@/layout'

const surveyRouter = {
  path: '/laporan',
  component: Layout,
  redirect: '/laporan/index',
  meta: {
    icon: 'library_books',
    roles: ['admin', 'dinkesprov', 'dinkeskota']
  },
  active: false,
  children: [
    {
      path: 'index',
      component: () => import('@/views/laporan/list'),
      meta: {
        title: 'laporan_title',
        icon: 'library_books',
        roles: ['admin', 'dinkesprov', 'dinkeskota']
      }
    },
    {
      path: 'create',
      component: () => import('@/views/laporan/form'),
      hidden: true,
      meta: {
        title: 'laporan_create',
        icon: 'library_books',
        roles: ['admin', 'dinkeskota']
      }
    },
    {
      path: 'stepper',
      component: () => import('@/views/laporan/formStepper'),
      hidden: true,
      meta: {
        title: 'laporan_create',
        icon: 'library_books',
        roles: ['admin', 'dinkeskota']
      }
    },
    {
      path: 'detail/:id',
      component: () => import('@/views/laporan/detail'),
      hidden: true,
      meta: {
        title: 'laporan_detail',
        icon: 'library_books',
        roles: ['admin', 'dinkeskota']
      }
    },
    {
      path: 'edit-case/:id',
      component: () => import('@/views/laporan/editCase'),
      hidden: true,
      meta: {
        title: 'laporan_edit',
        icon: 'library_books',
        roles: ['admin', 'dinkeskota']
      }
    },
    {
      path: 'edit-history-case/:id',
      component: () => import('@/views/laporan/editHistoryCase'),
      hidden: true,
      meta: {
        title: 'laporan_edit',
        icon: 'library_books',
        roles: ['admin', 'dinkeskota']
      }
    }
  ]
}

export default surveyRouter
