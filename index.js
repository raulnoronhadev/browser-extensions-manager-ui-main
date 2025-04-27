let data = []

$(document).ready(function() {
    $.getJSON('data.json', function(response) {
        data = response;
        console.log(data);
        data.forEach(function(item, index) {
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
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" 
                                    id="mySwitch-${index}" 
                                    name="darkmode" 
                                    value="yes"
                                    ${item.isActive ? 'checked' : ''}
                                    data-index="${index}"
                                >
                            </div>
                    </div>
                </div>
            `)
        })
    })
})

let filterOption = $(".filters ul > li");

filterOption.on("click", function() {
    filterOption.removeAttr('id');
    $(this).attr('id', 'active');
})

$(".container-grid-extensions").on("change", ".form-check-input", function() {
    let index = $(this).data('index');
    let isChecked = $(this).is(":checked");
    data[index].isActive = isChecked;
    console.log(`Switch do item ${index} alterado para: ${isChecked}`);
    console.log(data);
})