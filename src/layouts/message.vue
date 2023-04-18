<template>
  <component :is="memberCenter.state.layoutMode"></component>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMemberCenter } from '@/stores/memberCenter'
import { useAdminInfo } from '@/stores/adminInfo'
import router from '@/router/index'
import { useRoute } from 'vue-router'
import { admin } from '@/api/controllerUrls'

const route = useRoute()
const memberCenter = useMemberCenter()
const adminInfo = useAdminInfo()

onMounted(() => {
  if (!adminInfo.token) return router.push({ name: 'adminLogin' })
})
</script>

<!-- 只有在 components 选项中的组件可以被动态组件使用-->
<script lang="ts">
import Default from '@/layouts/container/default.vue'
export default {
  components: { Default },
}
</script>

<style scoped lang="scss"></style>
