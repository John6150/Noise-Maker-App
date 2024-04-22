let tBody = document.getElementById("tbody")

// let awaiting = setInterval(() => {
    fetch("/admin/api").then((data) => data.json()).then((data) => {
        console.log(data)
        data.forEach((el, i) => {
            tBody.innerHTML += `
            <tr>
            <td>${i + 1}</td>
            <td>${el.fullName}</td>
            <td id="deg">${el.Degree}</td>
            <td id="btn">
            
            <form action="/admin/incr/${el.id}" method="post">
            <button type="submit" id="opt">+</button>
            </form>

            <form action="/admin/decr/${el.id}" method="post">
            <button type="submit" id="opt">-</button>
            </form>

            <form action="/admin/del/${el.id}" method="post">
            <button type="submit" id="opt">Del</button>
            </form>
            </td>
        </tr>
                                 `
        });

    })
//     clearInterval(awaiting)
// }, 2000)

// function degreeIncr(i) {
//     deg[i].innerHTML = Number(deg[i].innerHTML) + 1

// }
// function degreeDecr(i) {
//     deg[i].innerHTML == 1 ? deg[i].innerHTML = 1 : deg[i].innerHTML = Number(deg[i].innerHTML) - 1

// }


