const video = document.querySelector('#video')
const play = document.querySelector('#play')
const stop = document.querySelector('#stop')
const progress = document.querySelector('#progress')
const timeStamp = document.querySelector('#timestamp')

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setProgressChange)

function toggleVideoStatus() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
}
function updateProgress() {
  progress.value = Number(video.currentTime / video.duration) * 100

  let mins = Math.floor(video.currentTime / 60)
  if (mins < 10) {
    mins = '0' + String(mins)
  }

  let secs = Math.floor(video.currentTime % 60)
  if (secs < 10) {
    secs = '0' + String(secs)
  }

  timeStamp.innerHTML = `${mins}:${secs}`
}

function setProgressChange() {
  video.currentTime = Number(progress.value * video.duration) / 100
}

function stopVideo() {
  video.currentTime = 0
  video.pause()
}
