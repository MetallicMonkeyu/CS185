
const blur = document.createElement('div')
blur.id = 'bigPicture'
document.body.appendChild(blur)
// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
blur.addEventListener('click', e => {
        if (e.target !== e.currentTarget) {
            // console.log(e.currentTarget)
            // console.log(e.target)
            // console.log(blur.firstChild)
            //console.log(e.parentElement.querySelector('video'))
            //e.currentTarget.querySelector('video').pause();
            return
        }
        console.log(e.currentTarget.querySelector('video'))
         e.currentTarget.querySelector('video').pause();
        // e.currentTarget.querySelector('video').autoplay = false;
        blur.classList.remove('active')
        
    }
)

const videos = document.querySelectorAll('video')
const iframes = document.querySelectorAll('iframe')


videos.forEach(video => {
    
    video.addEventListener('click', e => {
        
        blur.classList.add('active')
        // console.log(blur.classList)
        const vid = document.createElement('video')
        
         
        
        vid.src = video.src
        video.pause();
        vid.autoplay = true;
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
