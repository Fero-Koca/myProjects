
let feedback = document.querySelector('.feedback')

let buttonPop = document.querySelector('.population')
let buttonLang = document.querySelector('.languages')
let grapTitle = document.querySelector('.graph-title')
let stat = document.querySelector('#stat')
feedback.textContent = `Currently, we have ${countries_data.length} countries`

buttonPop.addEventListener("click", function(){
    grapTitle.textContent = "10 Most populated country in the world"
})

buttonLang.addEventListener("click", function(){
    grapTitle.textContent = "10 Most Spoken languages in the world"
})

let listOfTop10 = (function()
{ 
    let languages = {}
    let population = {}
    let totalPopulation = Object.entries(countries_data).reduce((total,country) =>{
        return (typeof total == "number")
        ? (total + country[1].population)
        : (total[1].population + country[1].population)
    })

    countries_data.map(country => {
        population[country.name] = country.population
        country.languages.map(language =>{
            if(languages[language] === undefined){
                languages[language] = 0
            }
            languages[language]++
            })
        })
        let populationTop10 = Object.entries(population).sort((a,b) => {
            if(a[1] > b[1]) {return -1}
            if(a[1] < b[1]) {return 1}
            return 0
        })
        .slice(0,11)

        let languagesTop10 = Object.entries(languages).sort((a,b) => {
            if(a[1] > b[1]){ return -1 }
            if(a[1] < b[1]){ return 1 }
            return 0
          }).slice(0,11)

          let mountPercentHtml = (list) => {
              let nameHtml = ""
              let percHtml = ""
              let valueHtml= ""
              list.map(values => {
                  nameHtml += `<span class='country'>${values[0]}</span><br/>`
                  percHtml += `<span class='percentual' style='padding: 0px ${values[1] * 3}px'></span><br/>`
                  valueHtml += `<span class='value'>${values[1]}</span><br/>`
              })
              return `<table><tr><td>${nameHtml}</td><td>${percHtml}</td><td>${valueHtml}</td><tr></table>`

          }
          

        return {
            languages: () => document.querySelector("#stat").innerHTML = mountPercentHtml(languagesTop10),
            population: () => {
                let nameHtml = `<span class='country'>World</span><br/>`
                let percHtml = `<span class='percentual' style='padding: 0px 100px'></span><br/>`
                let valueHtml = `<span class='value'>${totalPopulation}</span><br/>`     
            populationTop10.map(values => {
            let value = (values[1]*100)/totalPopulation
            nameHtml += `<span class='country'>${values[0]}</span><br/>`
            percHtml += `<span class='percentual' style='padding: 0px ${value*3}px'></span><br/>`
            valueHtml += `<span class='value'>${values[1]}</span><br/>` 
            })    
            let html = `<table><tr><td>${nameHtml}</td><td>${percHtml}</td><td>${valueHtml}</td><tr></table>`
            document.getElementById('stat').innerHTML = html 
            },
        }
}) ()

