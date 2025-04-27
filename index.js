let data = []

$(document).ready(function() {
    $.getJSON('data.json', function(response) {
        data = response;
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
                            <button class="remove-button">Remove</button>
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

// filter options

let filterOption = $(".filters ul > li");
let allOption = $(".all-button");
let activeOption = $(".active-button");
let inactiveOption = $(".inactive-button");
let removeButton = $(".remove-button");

filterOption.on("click", function() {
    filterOption.removeAttr('id');
    $(this).attr('id', 'active');
})

$(".container-grid-extensions").on("change", ".form-check-input", function() {
    let index = $(this).data('index');
    let isChecked = $(this).is(":checked");
    data[index].isActive = isChecked;
})

allOption.on("click", function() {
    data.forEach(function(item, index) {
        let extensionBox = $("#mySwitch-" + index).closest(".extension-box");
        extensionBox.show();
    })
})

activeOption.on("click", function() {
    data.forEach(function(item, index) {
        let extensionBox = $("#mySwitch-" + index).closest(".extension-box");
        if (item.isActive == false) {
            extensionBox.hide();
        } else {
            extensionBox.show();
        }  
    })
})

inactiveOption.on("click", function() {
    data.forEach(function(item, index) {
        let extensionBox = $("#mySwitch-" + index).closest(".extension-box");
        if (item.isActive == true) {
            extensionBox.hide();
        } else {
            extensionBox.show();
        }  
    })
})

$(".container-grid-extensions").on("click", ".remove-button", function() {
    let extensionBox = $(this).closest(".extension-box");
    extensionBox.hide();
})

// modify theme


