import Layout from '@/layout'

const surveyRouter = {
  path: '/laporan',
  component: Layout,
  redirect: '/laporan/index',
  meta: {
    icon: 'library_books',
    roles: ['superadmin', 'dinkesprov', 'dinkeskota', 'faskes']
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
        roles: ['superadmin', 'dinkesprov', 'dinkeskota', 'faskes']
      }
    },
    {
      path: 'create',
      component: () => import('@/views/laporan/form'),
      hidden: true,
      meta: {
        title: 'laporan_create',
        icon: 'library_books',
        noCache: true,
        roles: ['superadmin', 'dinkeskota', 'faskes']
      }
    },
    {
      path: 'stepper',
      component: () => import('@/views/laporan/formStepper'),
      hidden: true,
      meta: {
        title: 'laporan_create',
        icon: 'library_books',
        noCache: true,
        roles: ['superadmin', 'dinkeskota', 'faskes']
      }
    },
    {
      path: 'detail/:id',
      component: () => import('@/views/laporan/detail'),
      hidden: true,
      meta: {
        title: 'laporan_detail',
        icon: 'library_books',
        noCache: true,
        roles: ['superadmin', 'dinkeskota', 'faskes']
      }
    },
    {
      path: 'edit-case/:id',
      component: () => import('@/views/laporan/editCase'),
      hidden: true,
      meta: {
        title: 'laporan_edit',
        icon: 'library_books',
        noCache: true,
        roles: ['superadmin', 'dinkeskota', 'faskes']
      }
    },
    {
      path: 'edit-history-case/:id',
      component: () => import('@/views/laporan/editHistoryCase'),
      hidden: true,
      meta: {
        title: 'laporan_edit',
        icon: 'library_books',
        noCache: true,
        roles: ['superadmin', 'dinkeskota', 'faskes']
      }
    }
  ]
}

export default surveyRouter
