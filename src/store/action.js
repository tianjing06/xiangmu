import {login} from '../utils/request'
let actions = {
  getToken ({commit}, {data, notify, router}) {
    login(data).then((res) => {
      console.log(data)
      if (res.status == 1) {
        commit('saveToken', res.token)
        commit('saveUser', res.user.name)
        localStorage.setItem('token', res.token)
        notify({
          title: '登录成功',
          message: '跳转首页',
          type: 'success'
        })
        // location.href = '/home/homePage'
        setTimeout(() => {
          router.push({
            path: '/home/homePage'
          })
        }, 1000)
      } else {
        notify({
          title: '登录出错',
          message: '信息错误',
          type: 'error'
        })
      }
    })
  }
}
export default actions
