$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        console.log(data);

        data.forEach(function(item) {
            $('.container-grid-extensions').append(`
                <div class="extension-box">
                    <div class="img_and_content">
                        <img src="${item.logo}" alt="${item.name}">
                        <div class="extension-text">
                            <h1>${item.name}</h1>
                            <p>${item.description}</p>
                        </div>
                    </div>
                    <div class="extension-options">
                            <button class="remove">Remove</button>
                            
                    </div>
                </div>
            `)
        })
    })
})