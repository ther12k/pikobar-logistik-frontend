import Layout from '@/layout'

const faskes = {
  path: '/faskes',
  component: Layout,
  redirect: '/faskes/terdaftar',
  meta: {
    title: 'medical_facility_title',
    icon: 'mdi-hospital',
    roles: ['superadmin', 'dinkesprov']
  },
  active: false,
  children: [
    {
      path: '/faskes/belum-terdaftar',
      meta: {
        title: 'not_registered_title',
        noCache: true,
        roles: ['superadmin', 'dinkesprov']
      },
      beforeEnter: (to, from, next) => {
        next({
          name: 'FaskesBelumTerdaftar',
          params: { verification_status: 'not_verified' }
        })
      }
    },
    {
      path: '/faskes/belum-terdaftar/:verification_status',
      component: () => import('@/views/masterData/faskes/list'),
      name: 'FaskesBelumTerdaftar',
      meta: {
        title: 'not_registered_title',
        noCache: true,
        roles: ['superadmin', 'dinkesprov']
      },
      hidden: true
    },
    {
      path: '/faskes/terdaftar',
      meta: {
        title: 'registered_title',
        noCache: true,
        roles: ['superadmin', 'dinkesprov']
      },
      beforeEnter: (to, from, next) => {
        next({
          name: 'FaskesTerdaftar',
          params: { verification_status: 'verified' }
        })
      }
    },
    {
      path: '/faskes/terdaftar/:verification_status',
      component: () => import('@/views/masterData/faskes/list'),
      name: 'FaskesTerdaftar',
      meta: {
        title: 'registered_title',
        noCache: true,
        roles: ['superadmin', 'dinkesprov']
      },
      hidden: true
    }
  ]
}

export default faskes
