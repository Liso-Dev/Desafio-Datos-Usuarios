const userData = (() => {
    let bloque = document.querySelector('#user-data');
    return {
        show: async () => {

            let response = await fetch('https://randomuser.me/api/?results=10');
            let data = await response.json();

            let userInfo = data.results.map(
                i => `
                <div class="col-12 mb-3 mt-3 d-flex justify-content-center">
                    <div class="card bg-dark text-white" style="width: 20rem;">
                        <img src="${i.picture.large}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${i.name.first} ${i.name.last}</h5>
                            <span class="card-text">${i.email}</span><br>
                            <span class="card-text">${i.cell}</span>
                        </div>
                    </div>
                </div>

                `).join('')

            bloque.innerHTML = userInfo;
        }
    };
})();

userData.show();