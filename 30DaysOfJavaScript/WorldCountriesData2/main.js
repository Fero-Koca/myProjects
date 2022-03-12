console.log("hello")

let h4 = document.querySelector('h4')
h4.innerHTML = `TOTAL NUMBER OF COUNTRIES: ${countries.length}`




let search = (() => {
let filter_countries = []
let filter_element = document.querySelector('#filter')
let filter_type = 'normal'
let order_type = 'asc'
let _this = this;

return {
    setTypeFilter: (filter_name) => filter_type = filter_name,
    executeFilter: (search) => {
        if(filter_type == 'normal') {
            search.normal(search)
            return true
        }
        search.all(search)
        return true
    },

    normal: (search) => {
        filter_element = document.querySelector('#filter').value.trim()
        filter_countries = countries
        if (filter_element.length > 0){
            let regexOne = new RegExp(`^${filter_element}`,'gi')
            filter_countries = countries.filter(country => country.match(regexOne) != null)
        }

        search.order(1);
        let html = filter_countries.map(country => `<span>${country}</span>`).join(' ')
        document.querySelector('#list').innerHTML = html



        let html2 = filter_countries.map(country => country.charAt(0))
        if( html2.length >= 1) {
            document.querySelector('p').innerHTML = `COUNTRIES START WITH <span class="with">${html2[0]}</span> ARE <span class="wlength">${html2.length}</span>`

        } else {
            document.querySelector('p').innerHTML = ""
        }
          

    },

    order: (blocked = null, search) => {
        if(order_type == 'asc') {
            filter_countries = filter_countries.sort((a, b) => {
                if( a > b) {return 1}
                if( a < b) {return -1}
                return 0
            })
    
        if (blocked == null) {
            order_type = 'desc'
        if (filter_type == 'normal'){
            search.normal(search)
        } else {
            search.all(search)
        }
     }
     return true;
    }
    filter_countries = filter_countries.sort((a, b) =>{
        if(a > b){ return -1 }
        if(a < b){ return 1 }
        return 0
    })

    if(blocked == null){
        order_type = 'asc'
        search.executeFilter()
        if(filter_type == 'normal') {
            search.normal(search)
        } else {
            search.all(search)
        }
    }
    return true;
},




    all: (search) => {
        filter_element = document.querySelector('#filter').value.trim()
        filter_countries = countries
        if (filter_element.length > 0) {
            let regexOne = new RegExp(`${filter_element}`, 'gi')
        filter_countries = countries.filter(country => country.match(regexOne) != null)
        }
    search.order(1)
    let html = filter_countries.map(country => `<span>${country}</span>`).join(' ')
    document.querySelector('#list').innerHTML = html
    }





}
})()

