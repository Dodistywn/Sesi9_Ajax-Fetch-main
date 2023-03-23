const url = "https://jsonplaceholder.typicode.com/users"

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((json) =>
        console.log(json));

// --> atas dan bawah merupakan function get mengambil dan menampilkan data
async function fetchData() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}
fetchData()




