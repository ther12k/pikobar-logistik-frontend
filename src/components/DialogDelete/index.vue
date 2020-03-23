<template>
  <v-row justify="center" class="dialog-delete">
    <v-dialog
      v-model="dialogDelete"
      persistent
      max-width="450px"
    >
      <v-card>
        <div class="justify-center dialog-img-delete">
          <img src="../../static/image-delete-dialog.svg">
        </div>
        <v-card-title
          class="dialog-delete-title"
        >
          {{ $t('label.delete_dialog') }}
        </v-card-title>
        <v-card-actions class="justify-center" style="padding: 2rem">
          <v-btn
            color="grey"
            outlined
            style="height: 40px;min-width: 140px;"
            @click="dialogDelete = false"
          >
            Batal
          </v-btn>
          <v-btn
            color="red"
            outlined
            style="height: 40px;min-width: 140px;"
            @click="deleteData"
          >
            Hapus
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DialogDelete',
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    storePathDelete: {
      type: String,
      default: null
    },
    storePathResetList: {
      type: String,
      default: null
    },
    storePathGetList: {
      type: String,
      default: null
    },
    dataDeleted: {
      type: String,
      default: null
    }
  },
  computed: {
    dialogDelete: {
      get() {
        return this.dialog
      },
      set(val) {
        this.$emit('update:dialogDelete', val)
      }
    }
  },
  methods: {
    async deleteData() {
      await this.$store.dispatch(this.storePathDelete, this.dataDeleted)
      await this.$emit('update:dialogDelete', false)
      await this.$emit('update:deletedData', {})
      await this.$store.dispatch('toast/successToast', this.$t('success.data_success_delete'))
      if (this.storePathResetList) {
        await this.$store.dispatch(this.storePathResetList)
      }
      await this.$store.dispatch(this.storePathGetList)
    }
  }
}
</script>
