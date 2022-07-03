{
const d = document

var scrollcontrol = { state: 'free', x: 0, y: 0, hash: '' }
var scrolltimeout

function movetohash(event) {
    const hash = (location.hash || ' ').substring(1)
    if (event) {
        console.log(`event:onhashclick #${hash}`, JSON.stringify(scrollcontrol))
        window.scrollTo(scrollcontrol.x, scrollcontrol.y)
        Object.assign(scrollcontrol, {
            state: 'blockscroll',
            hash
        })
        console.log(`setting`, JSON.stringify(scrollcontrol))
        if (scrolltimeout) {
            clearTimeout(scrolltimeout)
        }
        scrolltimeout = setTimeout(controlScroll, 100)
        return
    }
    if (scrollcontrol.state === 'free') {
        console.log(`event:onhashload #${hash}`, JSON.stringify(scrollcontrol))
        Object.assign(scrollcontrol, {
            state: 'scrolltohash',
            hash
        })
        console.log(`event:beforeautoscroll #${hash}`, JSON.stringify(scrollcontrol))
        console.log(`setting`, JSON.stringify(scrollcontrol))
        d.getElementById(hash).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
}

setTimeout(movetohash, 100)

window.addEventListener('hashchange', movetohash)

document.addEventListener('scroll', controlScroll)

window.addEventListener('click', e => {
    if (e.target && e.target.href) {
        const clickhash = e.target.href.split('#')[1]
        if (`#${clickhash}` === location.hash) {
            location.hash = ''
            Object.assign(scrollcontrol, {
                state: 'free',
                x: scrollcontrol.x,
                y: scrollcontrol.y
            })
            if (scrolltimeout) {
                clearTimeout(scrolltimeout)
            }
            scrolltimeout = setTimeout(() => {
                movetohash()
            }, 100)
        }
    }
})

function controlScroll () {
    const { state, x, y, hash } = scrollcontrol
    const { scrollX: newX, scrollY: newY } = window
    if (state === 'free') {
        if (x !== newX || y !== newY) {
            if (scrolltimeout) {
                clearTimeout(scrolltimeout)
            }
            scrolltimeout = setTimeout(() => {
                Object.assign(scrollcontrol, {
                    state: 'moving',
                    x: newX,
                    y: newY
                })
                console.log('event:onmovestart', JSON.stringify({ newX, newY, ...scrollcontrol }))
                controlScroll()
            }, 100)
        }
    }
    if (state === 'moving' || state === 'scrolltohash') {
        if (x === newX && y === newY) {
            console.log('event:onmoveend', JSON.stringify(scrollcontrol))
            Object.assign(scrollcontrol, {
                state: 'free'
            })
        }
        Object.assign(scrollcontrol, {
            x: newX,
            y: newY
        })
        if (scrolltimeout) {
            clearTimeout(scrolltimeout)
        }
        scrolltimeout = setTimeout(controlScroll, 100)
    }
    if (state === 'blockscroll') {
        if (x !== newX || y !== newY) {
            console.log('event:onblockscroll', JSON.stringify({ newX, newY, ...scrollcontrol }))
            window.scrollTo(x, y)
        }
        if (scrolltimeout) {
            clearTimeout(scrolltimeout)
        }
        scrolltimeout = setTimeout(() => {
            scrollcontrol.state = 'scrolltohash'
            d.getElementById(hash).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
            console.log('event:onblockscrolltimeout', JSON.stringify({ newX, newY, ...scrollcontrol }))
            clearTimeout(scrolltimeout)
            controlScroll()
        }, 50)
    }
};

window.movetohash = movetohash
}