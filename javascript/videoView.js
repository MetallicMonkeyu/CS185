const blur = document.createElement('div')
blur.id = 'bigPicture'
document.body.appendChild(blur)
// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
blur.addEventListener('click', e => {
        if (e.target !== e.currentTarget) {
            return
        }
        blur.classList.remove('active')
    }
)

const videos = document.querySelectorAll('video')
const iframes = document.querySelectorAll('iframe')


videos.forEach(video => {
    video.addEventListener('click', e => {
        
        blur.classList.add('active')
        const vid = document.createElement('video')
        vid.autoplay = true;
        vid.src = video.src
        while (blur.firstChild) {
            blur.removeChild(blur.firstChild)
        }
        blur.appendChild(vid)
  })
})

iframes.forEach(iframe => {
    iframe.addEventListener('click', e => {
        

        blur.classList.add('active')
        const frame = document.createElement('iframe')
        frame.autoplay = true;
        frame.src = iframe.src
        while (blur.firstChild) {
            blur.removeChild(blur.firstChild)
        }
        blur.appendChild(vid)
  })
})