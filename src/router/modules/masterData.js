import Layout from '@/layout'

const masterData = {
  path: '/master-data',
  component: Layout,
  redirect: '/master-data/fasilitas-kesehatan',
  meta: {
    title: 'master_data_title',
    icon: 'library_books',
    roles: ['superadmin', 'dinkesprov']
  },
  active: false,
  children: [
    {
      path: 'fasilitas-kesehatan',
      component: () => import('@/views/masterData/listFasilitasKesehatan'),
      meta: {
        title: 'medical_facility_title',
        icon: 'library_books',
        noCache: true,
        roles: ['superadmin', 'dinkesprov']
      }
    }
  ]
}

export default masterData
