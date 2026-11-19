const clock = document.getElementById('clock')
const tick = () => {
  clock.textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}
tick()
setInterval(tick, 1000)
