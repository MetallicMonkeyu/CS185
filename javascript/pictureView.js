// Code reference: https://www.youtube.com/watch?v=uKVVSwXdLr0

const blur = document.createElement('div')
blur.id = 'bigPicture'
document.body.appendChild(blur)

blur.addEventListener('click', e => {
        if (e.target !== e.currentTarget) {
            return
        }
        blur.classList.remove('active')
    }
)

const images = document.querySelectorAll('.pics')
const imgsrc = document.querySelectorAll('img')

images.forEach(image => {
    
    
    image.addEventListener('click', e => {
        
        blur.classList.add('active')
        const img = document.createElement('img')
        
        img.src = imgsrc.item(index(image)).src

        while (blur.firstChild) {
            blur.removeChild(blur.firstChild)
        }
        blur.appendChild(img)
        
  })
   
})

function index(el) {
    var children = images, i = 0;
    for (; i < children.length; i++) {
        if (children[i] == el) {
            return i;
        }
    }
    return -1;
}