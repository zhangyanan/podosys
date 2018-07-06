import server from '@/models/workarea'
//选中的用户
export const NOTICE_GET_SELECTED_USER = 'NOTICE_GET_SELECTED_USER'
export const NOTICE_SET_SELECTED_USER = 'NOTICE_SET_SELECTED_USER'
//选中的活动
export const NOTICE_GET_SELECTED_ACTIVITY = 'NOTICE_GET_SELECTED_ACTIVITY'
export const NOTICE_SET_SELECTED_ACTIVITY = 'NOTICE_SET_SELECTED_ACTIVITY'
//选中将要变更的gg状态
export const NOTICE_GET_SELECTED_GG_STATUES = 'NOTICE_GET_SELECTED_GG_STATUES'
export const NOTICE_SET_SELECTED_GG_STATUES = 'NOTICE_SET_SELECTED_GG_STATUES'
//页面跳转标示
export const NOTICE_GET_PAGE_NAVIGATION = 'NOTICE_GET_PAGE_NAVIGATION'
export const NOTICE_SET_PAGE_NAVIGATION = 'NOTICE_SET_PAGE_NAVIGATION'

const state = {
    //选中的用户
    selectedUser:"",
    //选中的活动
    selectedActivity:"",
    //选中将要变更的gg状态
    selectedGGStatus:"",
    //页面跳转标示
    pageNavigation:'{"from":"登陆页面","to":"蝈蝈列表"}',
    //state: JSON.parse(sessionStorage.getItem('selectedGG')) || {},
}

const getters = {
    selectedUser: state => state.selectedUser,
    selectedActivity: state => state.selectedActivity,
    selectedGGStatus: state => state.selectedGGStatus,
    pageNavigation: state => state.pageNavigation,
}

const actions = {
  setSelectedUser ({ commit }, data) {
    commit(NOTICE_SET_SELECTED_USER, data)
  },

  setSelectedActivity ({ commit }, data) {
    commit(NOTICE_SET_SELECTED_ACTIVITY, data)
  },

  setSelectedGGStatus ({ commit }, data) {
    commit(NOTICE_SET_SELECTED_GG_STATUES, data)
  },

  setPageNavigation ({ commit }, data) {
    commit(NOTICE_SET_PAGE_NAVIGATION, data)
  },
  /*getSelectedUser({ commit }){
    return this.selectedUser
  }*/
}

const mutations = {
  [NOTICE_SET_SELECTED_USER] (state, data) {
    //console.log(data)
    state.selectedUser = data
  },
  [NOTICE_SET_SELECTED_ACTIVITY] (state, data) {
    //console.log(data)
    state.selectedActivity = data
  },
  [NOTICE_SET_SELECTED_GG_STATUES] (state, data) {
    //console.log(data)
    state.selectedGGStatus = data
  },
  [NOTICE_SET_PAGE_NAVIGATION] (state, data) {
    //console.log(data)
    state.pageNavigation = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}