export default {
  infoToast({ commit }, message) {
    commit('INFO_TOAST', message)
  },
  successToast({ commit }, message) {
    commit('SUCCESS_TOAST', message)
  },
  updateToast({ commit }, message) {
    commit('UPDATE_TOAST', message)
  },
  warningToast({ commit }, message) {
    commit('WARNING_TOAST', message)
  },
  errorToast({ commit }, message) {
    commit('ERROR_TOAST', message)
  },
  inactiveToast({ commit }) {
    commit('INACTIVE_TOAST')
  }
}
