import { ref } from 'vue'

const hasConnection = ref(false)

window.addEventListener('online', () => (hasConnection.value = true))
window.addEventListener('offline', () => (hasConnection.value = false))
