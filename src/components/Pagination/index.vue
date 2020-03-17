<template>
  <v-row v-if="total > 0" justify="space-between">
    <v-col cols="2">
      <v-select
        :items="pageSizes"
        v-model="pageSize"
        filled
        label="Baris"
        @change="changePageSize"
      />
    </v-col>
    <v-col cols="auto">
      <div style="float: right;">
        <v-pagination
          v-model="currentPage"
          :length="total"
          circle
          @input="onNext"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [5, 10, 20, 30]
      }
    },
    onNext: {
      type: Function,
      default: null
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:pageUpdate', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    changePageSize(value) {
      this.pageSize = value
      this.currentPage = 1
      this.onNext()
    }
  }
}
</script>
