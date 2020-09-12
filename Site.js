function callApi() {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = 'https://dragon-ball-api.herokuapp.com/api/character/';

    fetch(proxyurl + url) // Call the fetch function passing the url of the API as a parameter
        .then(response => response.json())
        //.then(data => document.getElementById('codeBox').innerHTML = data)
        .then(data => Append(data)
        )
        .catch(function(error) {
            // This is where you run code if the server returns any errors
            console.log(error);
        });
}

function Append(data) {
let html = '';
    data.map(user => {
        let htmlSegment = ` <div class="user">
                            <img width = 500 height = 500 src="${user.image}" >
                            <p>Nome: ${user.name}</p>
                            <p>Planeta de origem: ${user.originPlanet}</p>
                            <p>Raça: ${user.species}   
                            <p>Gênero: ${user.gender}</p>
                            <p>Série de origem: ${user.series}</p>
                            <p>Status atual: ${user.status}</p>
                        </div> `;

        html += htmlSegment;
    });

    let container = document.querySelector('#GOKU');
    container.innerHTML = html;
}    