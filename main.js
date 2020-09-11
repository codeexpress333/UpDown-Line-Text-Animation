//Start Animation
anime.timeline({ loop: true })
    .add({
        targets: '.container .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
    }).add({
        targets: '.container .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
    }).add({
        targets: '.container .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.container .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.container .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.container',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
