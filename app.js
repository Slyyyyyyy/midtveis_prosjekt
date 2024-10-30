const colorOptions = document.querySelectorAll('.color-option');
const watchSide = document.getElementById('watch-side');
const watchFront = document.getElementById('watch-front');
const colorName = document.getElementById('current-color');


const images = {
    'jet-black': {
        side: 'imgs/vc',
        front: 'imgs/jet_black_front.png'
    },
    'silver': {
        side: 'imgs/silver_side.png',
        front: 'imgs/silver_front.png'
    },
    'rose-gold': {
        side: 'imgs/rose_gold_side.png',
        front: 'imgs/rose_gold_front.png'
    }
};


colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedColor = option.getAttribute('data-color');
        
        watchSide.src = images[selectedColor].side;
        watchFront.src = images[selectedColor].front;
        colorName.textContent = selectedColor.replace('-', ' ').toUpperCase();
    });
});


window.addEventListener('scroll', function() {
    const watchSection = document.getElementById('watch-section');
    const sectionPosition = watchSection.getBoundingClientRect();
    
    if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
        document.body.classList.add('in-view'); 
    } else {
        document.body.classList.remove('in-view'); 
    }
});
