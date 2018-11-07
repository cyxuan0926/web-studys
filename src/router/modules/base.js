// import frame from '@/App'
let base = [
  {
    path: '/event-catch-bubbling/demo',
    name: '事件捕捉/事件冒泡-学习',
    component: resolve => require(['@/pages/event-catch-bubbling/ecb-demo'], resolve)

  }
]

// base.forEach(item => {
//   item.component = frame
// })

export default base
