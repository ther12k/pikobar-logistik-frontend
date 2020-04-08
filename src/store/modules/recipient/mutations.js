export default {
  SET_LIST_RECIPIENT: (state, data) => {
    state.listRecipient = data
  },
  SET_TOTAL_LIST_RECIPIENT: (state, data) => {
    state.totalList = data
  },
  SET_SUMMARY_RECIPIENT: (state, data) => {
    state.summaryRecipient = data
  },
  SET_DETAIL_RECIPIENT: (state, data) => {
    state.dataKitRecipient = {
      cityCode: data[0]['kemendagri_kabupaten_kode'],
      cityName: data[0]['kemendagri_kabupaten_nama'],
      totalStock: parseInt(data[0]['total_stock']) - parseInt(data[0]['total_used']),
      totalUsed: data[0]['total_used'],
      totalReceived: data[0]['total_stock']
    }
  },
  SET_WIDGET_RECIPIENT: (state, data) => {
    state.dataWidgetRecipient = data
  },
  SET_LIST_DETAIL_RECIPIENT: (state, data) => {
    state.listDetailRecipient = data
  },
  SET_TOTAL_LIST_DETAIL_RECIPIENT: (state, data) => {
    state.totalListDetailRecipient = data
  }
}
