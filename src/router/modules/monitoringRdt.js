import Layout from '@/layout'

const monitoringRdt = {
  path: '/monitoring-rdt',
  component: Layout,
  redirect: '/monitoring-rdt/index',
  meta: {
    icon: 'mdi-monitor',
    roles: ['superadmin', 'dinkesprov', 'dinkeskota', 'faskes']
  },
  active: false,
  children: [{
    path: 'index',
    component: () => import('@/views/monitoringRdt/list'),
    meta: {
      title: 'monitoring_rdt_title',
      icon: 'mdi-monitor',
      noCache: true,
      roles: ['superadmin', 'dinkesprov', 'dinkeskota', 'faskes']
    }
  },
  {
    path: 'detail/:id',
    component: () => import('@/views/monitoringRdt/detail'),
    hidden: true,
    meta: {
      title: 'laporan_detail',
      icon: 'library_books',
      noCache: true,
      roles: ['superadmin', 'dinkeskota', 'dinkesprov', 'faskes']
    }
  }]
}

export default monitoringRdt
