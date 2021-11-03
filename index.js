function createCard(div) {
    const card = document.createElement('table')
    const tbody = document.createElement('tbody')
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr')

        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('td')
            const id = `${i+1}${j+1}`

            const checkbox = document.createElement('input')
            checkbox.setAttribute('type', 'checkbox')
            checkbox.setAttribute('id', id);

            const styleDiv = document.createElement('div')
            styleDiv.classList.add('circle')

            const label = document.createElement('label')
            label.setAttribute('for', id)

            if (i === 2 && j === 2) {
                checkbox.checked = true
                label.innerHTML = 'I attended class'
                checkbox.disabled = true
            } else {
                const randomEvent = Math.floor((hallmarkMovies.length-1) * Math.random())
                label.innerHTML = hallmarkMovies[randomEvent]
                hallmarkMovies.splice(randomEvent, 1)
            }
            
            cell.appendChild(checkbox)
            cell.appendChild(styleDiv)
            cell.appendChild(label)
            row.appendChild(cell)
        }

        tbody.appendChild(row)
    }
    card.appendChild(tbody)
    document.getElementById(div).appendChild(card)
}

const bingoEvents = {
    general : [

    ],
    monday : [

    ]
}

var hallmarkMovies = [
    "protagonist goes to small town",
    "misunderstanding",
    "'chirstmas is more than just presents'",
    "all work boyfriend",
    "love vs career",
    "christmas movie",
    "festival, concert, or parade",
    "protagonist is a career woman",
    "dead relative or spouse",
    "kid undivorces parents",
    "almost kiss",
    "opens with a christmas song",
    "bad at baking",
    "having fun montage",
    "mistletoe kiss",
    "chime sound effect when chirstmassy thing happens",
    "old person = wisdom",
    "old ex appears",
    "chirstmas themed cursing",
    "black sassy coworker/best friend",
    "grand gesture",
    "makeover",
    "love triangle",
    "chasing a taxi",
    ""

]