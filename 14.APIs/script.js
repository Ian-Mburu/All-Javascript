document.addEventListener('DOMContentLoaded', function() {
    let countryList = document.querySelector('.countries');

    // Ajax call
    // 1. create an XMLHttpRequest Object
    let request = new XMLHttpRequest();

    // 2. create requests
    request.open('GET', 'https://restcountries.com/v3.1/name/kenya'); // Updated API URL

    // 3. send request
    request.send();

    request.addEventListener('load', function() {
        // Convert JSON string to JavaScript object
        let [data] = JSON.parse(request.responseText);
        console.log(data);

        const html = `
        <article class="country">
            <img class="country_img" src="${data.flags[0]}" alt="Flag of ${data.name.common}" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">${data.region}</h4>
                <p class="country_row"> <span>👫</span> ${data.population.toLocaleString()}</p>
                <p class="country_row"> <span>🥱</span> ${Object.values(data.languages).join(', ')}</p>
                <p class="country_row"> <span>💰</span> ${Object.values(data.currencies).map(curr => curr.name).join(', ')}</p>
            </div>
        </article>
        `;

        countryList.insertAdjacentHTML('beforeend', html);
    });
});
