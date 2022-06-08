import { ref } from '@vue/reactivity'

const hasConnection = ref(false)

window.addEventListener('online', () => (hasConnection.value = true))
window.addEventListener('offline', () => (hasConnection.value = false))
