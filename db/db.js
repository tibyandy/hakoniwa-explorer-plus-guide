{
fetch('../db/db.md').then(x => x.text()).then(markdown => {
    document.querySelector('.post-title').innerHTML = 'database'

    const dbindexes = {}
    let dbindexid = 0

    datatables = Object.fromEntries(
        markdown.substring(2).split('\n# ')
        .map(mdpart => mdpart.split('\n').filter(mdline => mdline.trim()))
        .map(([ mdh1, mdth, , ...mdtbody ]) => {
            const [ dtname, dtalias ] = mdh1.split(': ')
            let dtindexid = 0
            const [ head, ...body ] = [mdth, ...mdtbody].map(mdtr =>
                mdtr.slice(1, -1).trim().split('|').map(mdtd => {
                    mdtd = mdtd.trim()
                    if (mdtd[0] === '!') {
                        const key = mdtd.substring(1)
                        dbindexes[key] = { id: ++dtindexid, uid: ++dbindexid, dtname, dtalias, key }
                    }
                    return mdtd.trim()
                })
            )
            return [ dtname, { head, body, alias: dtalias } ]
        }))

    const domElem = document.querySelector('.post-content')

    const getBodyCellContent = (value, alias, column = '', domtag) => {
        if (value[0] === '!') {
            value = value.substring(1)
            if (dbindexes[value]) {
                const { uid, id, dtname, dtalias, key } = dbindexes[value]
                const linkId = `${dtalias}${id}`
                value = `<span title="#${linkId} - ${dtname} ${id} (uid ${uid})" id="${linkId}"><b>[${id}] </b>${value}<b></b></span>`
            } else {
                value = `<span title="${column}=${value}"><span><b>?????⟩ </b>${value}</span></span>`
            }
        } else if (dbindexes[value]) {
            const { uid, id, dtname, dtalias, key } = dbindexes[value]
            const linkId = `${dtalias}${id}`
            value = `<a title="Link to ${dtname} ${id} (uid ${uid})" href="#${linkId}">[<b>${value}</b> » ${linkId}]</a>`
        } else if (!value) {
            value = `<i>${column}</i>`
        }
        return `<${domtag}>${value}</${domtag}>`
    }

    const printDatatableContent = (alias = '_', content) => content[0].length > 1
        ? '<table class="datatable">\n' +
            content.map((row, r) => `  <tr><th>${r || ''}</th>` + row.map((x, i) => {
                x = x.trim()
                if (!r) return `<th>${x}</th>`
                const y = content[0][i]
                x = getBodyCellContent(x, alias, y, 'td')
                return x
            }).join('') + '').join('</tr>\n')
            + '</table>\n'
        : '<ul class="datatable">' + content.slice(1).map(([x]) => {
            x = getBodyCellContent(x, alias, content[0][0], 'li')
            return x
        }).join('') + '</ul>'
    
    domElem.innerHTML = '<b id="datatables">datatables = [</b>' +
        Object.keys(datatables).map(dtname => ` <b><a href="#${dtname}">'${dtname}'</a></b>`).join(',')
        + ' <b>]</b>' +
        Object.entries(datatables).map(([ dtname, { head, body, alias } ]) =>
            `<div class="dt"><b id="${dtname}"><a href="#datatables">datatables</a>[ '${dtname}' ] =</b>\n`
            + printDatatableContent(alias, [head, ...body])
    ).join('</div>')

    requestAnimationFrame(movetohash)
})
}