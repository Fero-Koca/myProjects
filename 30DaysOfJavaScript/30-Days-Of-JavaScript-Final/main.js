/* HEADER  START*/
const length = document.querySelector(".length")

length.innerHTML = `TOTAL NUMBER OF COUNTRIES: <b>${countries.length}</b>`
/* HEADER END */
/* LİST START */

function search() {
  let input = document.getElementById("Input").value.trim()
  let list = document.querySelector("#list")
  /* COUNTRİES FİLTER */
  const filtered = countries.filter((item) => {
    return Object.keys(item).some((key) => item[key]
      .toString()
      .toLowerCase()
      .includes(input.toLocaleLowerCase()))
  })
  /* FİLTERED MAP */
  const rrr = filtered.map((e) => `
<div class="list-div">
<li>
<img src="${e.flag}" style="
max-width: 140px;
max-height: 140px;
margin-top: 7px;
"></img>
<p><b>${e.name}</b></p>
<p>Capital: ${e.capital} </p>
<p>Language: ${e.languages}</p>
<p>Population: ${e.population}</p>
</li>
</div>
`

  )
  /* İNNNER */
  list.innerHTML = rrr.join(" ")



/* FOR HEADER */
const filtered_length = document.querySelector(".filtered-length")
filtered_length.innerHTML = `
<span><b> 
${filtered.length} </b></span> countries satisified the search criteria
`
}
/* FOR HEADER */

/* LİST END */



/* NAME BUTTON START */
let button1 = document.querySelector(".button-1")
button1.addEventListener("click", sortNameA)

function sortNameA() {
  let input = document.getElementById("Input").value.trim()

  let list = document.querySelector("#list")

  let span = document.querySelector(".btn-spn-1")
  let span2 = document.querySelector(".btn-spn-2")
  let span3 = document.querySelector(".btn-spn-3")
  span2.innerHTML = ""
  span3.innerHTML = ""

  const filter_name = countries.filter((item) => {
    return Object.keys(item).some((key) => item[key]
      .toString()
      .toLowerCase()
      .includes(input.toLocaleLowerCase()))
  })

  filter_name.sort((a, b) => {
    if (a.name > b.name) { return -1 }
    if (a.name < b.name) { return 1 }
    return 0
  })

  const rrr = filter_name.map((e) => `
<div class="list-div">
<li>
<img src="${e.flag}" style="
max-width: 140px;
max-height: 140px;
margin-top: 7px;
"></img>
<p><b>${e.name}</b></p>
<p>Capital: ${e.capital} </p>
<p>Language: ${e.languages}</p>
<p>Population: ${e.population}</p>
</li>
</div>
`

  )
  /* İNNNER */
  list.innerHTML = rrr.join(" ")

  span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>`

  button1.removeEventListener("click", sortNameA)
  button1.addEventListener("click", sortNameZ)
};



function sortNameZ() {
  let input = document.getElementById("Input").value.trim()
  let list = document.querySelector("#list")
  let span = document.querySelector(".btn-spn-1")
  let span2 = document.querySelector(".btn-spn-2")
  let span3 = document.querySelector(".btn-spn-3")
  span2.innerHTML = ""
  span3.innerHTML = ""

  const filter_name = countries.filter((item) => {
    return Object.keys(item).some((key) => item[key]
      .toString()
      .toLowerCase()
      .includes(input.toLocaleLowerCase()))
  })

  filter_name.sort((a, b) => {
    if (a.name > b.name) { return 1 }
    if (a.name < b.name) { return -1 }
    return 0
  })


  const rrr = filter_name.map((e) => `
<div class="list-div">
<li>
<img src="${e.flag}" style="
max-width: 140px;
max-height: 140px;
margin-top: 7px;
"></img>
<p><b>${e.name}</b></p>
<p>Capital: ${e.capital} </p>
<p>Language: ${e.languages}</p>
<p>Population: ${e.population}</p>
</li>
</div>
`

  )
  /* İNNNER */
  list.innerHTML = rrr.join(" ")

  span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>`


  button1.removeEventListener("click", sortNameZ)
  button1.addEventListener("click", sortNameA)
}
/* NAME BUTTON END */


/* CAPITAL BUTTON START */
let button2 = document.querySelector(".button-2")
button2.addEventListener("click", sortCapitalA)

function sortCapitalA() {
  let input = document.getElementById("Input").value.trim()
  let list = document.querySelector("#list")
  let span = document.querySelector(".btn-spn-2")
  let span2 = document.querySelector(".btn-spn-3")
  let span3 = document.querySelector(".btn-spn-1")
  span2.innerHTML = ""
  span3.innerHTML = ""

  const filter_capital = countries.filter((item) => {
    return Object.keys(item).some((key) => item[key]
      .toString()
      .toLowerCase()
      .includes(input.toLocaleLowerCase()))
  })

  filter_capital.sort((a, b) => {
    if (a.capital > b.capital) { return -1 }
    if (a.capital < b.capital) { return 1 }
    return 0
  })

  const rrr = filter_capital.map((e) => `
<div class="list-div">
<li>
<img src="${e.flag}" style="
max-width: 140px;
max-height: 140px;
margin-top: 7px;
"></img>
<p><b>${e.name}</b></p>
<p>Capital: ${e.capital} </p>
<p>Language: ${e.languages}</p>
<p>Population: ${e.population}</p>
</li>
</div>
`

  )
  /* İNNNER */
  list.innerHTML = rrr.join(" ")

  span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>`

  button2.removeEventListener("click", sortCapitalA)
  button2.addEventListener("click", sortCapitalZ)
};

function sortCapitalZ() {
  let input = document.getElementById("Input").value.trim()
  let list = document.querySelector("#list")
  let span = document.querySelector(".btn-spn-2")
  let span2 = document.querySelector(".btn-spn-3")
  let span3 = document.querySelector(".btn-spn-1")
  span2.innerHTML = ""
  span3.innerHTML = ""

  const filter_capital = countries.filter((item) => {
    return Object.keys(item).some((key) => item[key]
      .toString()
      .toLowerCase()
      .includes(input.toLocaleLowerCase()))
  })

  filter_capital.sort((a, b) => {
    if (a.capital > b.capital) { return 1 }
    if (a.capital < b.capital) { return -1 }
    return 0
  })


  const rrr = filter_capital.map((e) => `
<div class="list-div">
<li>
<img src="${e.flag}" style="
max-width: 140px;
max-height: 140px;
margin-top: 7px;
"></img>
<p><b>${e.name}</b></p>
<p>Capital: ${e.capital} </p>
<p>Language: ${e.languages}</p>
<p>Population: ${e.population}</p>
</li>
</div>
`

  )
  /* İNNNER */
  list.innerHTML = rrr.join(" ")

  span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>`

  button2.removeEventListener("click", sortCapitalZ)
  button2.addEventListener("click", sortCapitalA)
}
/* CAPITAL BUTTON END */

/* POP. BUTTON START */
let button3 = document.querySelector(".button-3")
button3.addEventListener("click", sortPopA)

function sortPopA() {
  let input = document.getElementById("Input").value.trim()
  let list = document.querySelector("#list")
  let span = document.querySelector(".btn-spn-3")
  let span2 = document.querySelector(".btn-spn-2")
  let span3 = document.querySelector(".btn-spn-1")
  span2.innerHTML = ""
  span3.innerHTML = ""

  const filter_pop = countries.filter((item) => {
    return Object.keys(item).some((key) => item[key]
      .toString()
      .toLowerCase()
      .includes(input.toLocaleLowerCase()))
  })

  filter_pop.sort((a, b) => {
    if (a.population > b.population) { return -1 }
    if (a.population < b.population) { return 1 }
    return 0
  })

  const rrr = filter_pop.map((e) => `
<div class="list-div">
<li>
<img src="${e.flag}" style="
max-width: 140px;
max-height: 140px;
margin-top: 7px;
"></img>
<p><b>${e.name}</b></p>
<p>Capital: ${e.capital} </p>
<p>Language: ${e.languages}</p>
<p>Population: ${e.population}</p>
</li>
</div>
`

  )
  /* İNNNER */
  list.innerHTML = rrr.join(" ")

  span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-arrow-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>`

  button3.removeEventListener("click", sortPopA)
  button3.addEventListener("click", sortPopZ)
};

function sortPopZ() {
  let input = document.getElementById("Input").value.trim()
  let list = document.querySelector("#list")
  let span = document.querySelector(".btn-spn-3")
  let span2 = document.querySelector(".btn-spn-2")
  let span3 = document.querySelector(".btn-spn-1")
  span2.innerHTML = ""
  span3.innerHTML = ""


  const filter_pop = countries.filter((item) => {
    return Object.keys(item).some((key) => item[key]
      .toString()
      .toLowerCase()
      .includes(input.toLocaleLowerCase()))
  })

  filter_pop.sort((a, b) => {
    if (a.population > b.population) { return 1 }
    if (a.population < b.population) { return -1 }
    return 0
  })


  const rrr = filter_pop.map((e) => `
<div class="list-div">
<li>
<img src="${e.flag}" style="
max-width: 140px;
max-height: 140px;
margin-top: 7px;
"></img>
<p><b>${e.name}</b></p>
<p>Capital: ${e.capital} </p>
<p>Language: ${e.languages}</p>
<p>Population: ${e.population}</p>
</li>
</div>
`

  )
  /* İNNNER */
  list.innerHTML = rrr.join(" ")

  span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>`

  button3.removeEventListener("click", sortPopZ)
  button3.addEventListener("click", sortPopA)
}
/* POP. BUTTON END */


/* GRAPH START */




  