<template>
  <div class="mt-5 mb-5">
    <div
      style="border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 25px"
      class="text-xs-left"
    >
      <span v-for="author in config.authors" :key="author.name">
        <a :href="config.authors[0].url" target="_blank" class="author-link">{{
          author.name
        }}</a> </span
      >&nbsp;&nbsp;|&nbsp;&nbsp;<span style="color: #666"
        >Updated: {{ config.meta.lastUpdate | format }}</span
      ><span v-if="print"
        >&nbsp;&nbsp;|&nbsp;&nbsp;<v-btn
          to="/print-friendly"
          flat
          small
          :color="config.primaryColor"
          style="margin-left: -4px; font-family: 'Lato', sans-serif; font-weight: 700"
        >
          Print &nbsp;
          <v-icon dark>print</v-icon>
        </v-btn></span
      >
    </div>
  </div>
</template>

<script>
import config from "@/config";
export default {
  data() {
    return {
      config
    };
  },
  mounted() {},
  props: {
    print: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
