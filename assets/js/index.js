$(document).ready(function() {

    var pagesProtected = ['/index.html', '/product.html', '/users.html'];

    var loggedIn = localStorage.getItem('loggedin');

    //Checking Protected Pages
    if (pagesProtected.includes(location.pathname)) {

        // Checking Whether Loggedin Or Not
        if (!loggedIn) {
            location.replace('/login.html')
        }


    }

    $('#logout-btn').click(function() {
        localStorage.removeItem('loggedin');
    })


    $('#login-btn').click(function() {


        var username = $('#username').val();
        var password = $('#password').val()

        if (username === password) {

            localStorage.setItem('loggedin', true)

            alert('login Successful')


            location.href = '/index.html'
        } else {

            alert('please Enter Correct Credentials')
        }
    });

})

/////////////////////////////orders page//////////////////////

let orderCount = 0
let ordersData = [];
let updatedOrdersList = []

function generateOrder(orderData) {

    console.log(orderData.id)
    $('#ordersbody')
        .append($('<tr>').addClass("tableRow " + orderData.orderStatus)
            .append($('<td>').addClass("orderID").text(orderData.id))
            .append($('<td>').addClass("CustomerName").text(orderData.customerName))
            .append($('<td>').addClass("date").text(orderData.orderDate).append($('<br>'))
                .append($('<span>').addClass('time').text(orderData.orderTime)))
            .append($('<td>').addClass("amount").text(orderData.amount))
            .append($('<td>').addClass("status").text(orderData.orderStatus))
        )
}

// New Button
$('#newCB').click(() => {
    if (!($('#newCB').prop('checked'))) {
        $('.New').addClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item => {
            if (item.orderStatus == 'Packed') {
                if ($('#packedCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'InTransit') {
                if ($('#inTransmitCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Delivered') {
                if ($('#deliveredCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
        })
    } else {
        $('.New').removeClass('hide')
        updatedOrdersList = []
        if ($('#newCB').prop('checked')) {
            ordersData.forEach(item => {
                if (item.orderStatus == 'New') {
                    updatedOrdersList.push(item)
                }
            })
        }
        if ($('#packedCB').prop('checked')) {
            ordersData.forEach(item => {
                if (item.orderStatus == 'packedCB') {
                    updatedOrdersList.push(item)
                }
            })
        }
        if ($('#inTransmitCB').prop('checked')) {
            ordersData.forEach(item => {
                if (item.orderStatus == 'inTransmitCB') {
                    updatedOrdersList.push(item)
                }
            })
        }
        if ($('#deliveredCB').prop('checked')) {
            ordersData.forEach(item => {
                if (item.orderStatus == 'deliveredCB') {
                    updatedOrdersList.push(item)
                }
            })
        }
    }
    $('#orderCount').text(updatedOrdersList.length)
    for (var i = 0; i < updatedOrdersList.length; i++) {
        generateOrder(updatedOrdersList[i])
    }
})

// Packed Button
$('#packedCB').click(() => {
    if (!($('#packedCB').prop('checked'))) {
        $('.Packed').addClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item => {
            if (item.orderStatus == 'New') {
                if ($('#newCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'InTransit') {
                if ($('#inTransmitCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Delivered') {
                if ($('#deliveredCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
        })
    } else {
        $('.Packed').removeClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item => {
            if (item.orderStatus == 'New') {
                if ($('#newCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Packed') {
                if ($('#packedCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'InTransit') {
                if ($('#inTransmitCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Delivered') {
                if ($('#deliveredCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
        })
    }
    $('#orderCount').text(updatedOrdersList.length)
    for (var i = 0; i < updatedOrdersList.length; i++) {
        generateOrder(updatedOrdersList[i])
    }
})

// InTransit Button
$('#inTransmitCB').click(() => {
    if (!($('#inTransmitCB').prop('checked'))) {
        $('.InTransit').addClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item => {
            if (item.orderStatus == 'New') {
                if ($('#newCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Packed') {
                if ($('#packedCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Delivered') {
                if ($('#deliveredCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
        })
    } else {
        $('.InTransit').removeClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item => {
            if (item.orderStatus == 'New') {
                if ($('#newCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Packed') {
                if ($('#packedCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'InTransit') {
                if ($('#inTransmitCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Delivered') {
                if ($('#deliveredCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
        })
    }
    $('#orderCount').text(updatedOrdersList.length)
    for (var i = 0; i < updatedOrdersList.length; i++) {
        generateOrder(updatedOrdersList[i])
    }
})

// Delivered Button
$('#deliveredCB').click(() => {
    if (!($('#deliveredCB').prop('checked'))) {
        $('.Delivered').addClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item => {
            if (item.orderStatus == 'New') {
                if ($('#newCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Packed') {
                if ($('#packedCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'InTransit') {
                if ($('#inTransmitCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
        })
    } else {
        $('.Delivered').removeClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item => {
            if (item.orderStatus == 'New') {
                if ($('#newCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Packed') {
                if ($('#packedCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'InTransit') {
                if ($('#inTransmitCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
            if (item.orderStatus == 'Delivered') {
                if ($('#deliveredCB').prop('checked')) {
                    updatedOrdersList.push(item)
                }
            }
        })
    }
    $('#orderCount').text(updatedOrdersList.length)
    for (var i = 0; i < updatedOrdersList.length; i++) {
        generateOrder(updatedOrdersList[i])
    }
})

$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', (data) => {

    orderCount = data.length
    ordersData = data;
    $('#orderCount').text(orderCount)
    for (var i = 0; i < data.length; i++) {
        generateOrder(data[i])
    }

}).fail(() => alert("order GET failed"))


///////////////////////////Products page//////////////////////

function generateProductList(ProductData) {
    $('#productsbody')
        .append($('<tr>').addClass("tableRow")
            .append($('<td>').addClass("productID").text(ProductData.id))
            .append($('<td>').addClass("medicineName").text(ProductData.medicineName))
            .append($('<td>').addClass("medicineBrand").text(ProductData.medicineBrand))
            .append($('<td>').addClass("expDate").text(ProductData.expiryDate))
            .append($('<td>').addClass("unitPrice").text("$" + ProductData.unitPrice))
            .append($('<td>').addClass("stock").text(ProductData.stock))
        )

}
$('#expCB').click(() => {
    if (($('#expCB').prop('checked') == false) && ($('#lowCB').prop('checked') == false)) {
        var data = JSON.parse(localStorage.getItem('products_data'));
        $('#productsbody').empty();

        for (var i = 0; i < data.length; i++) {
            generateProductList(data[i])
        }
        return
    }


    if ($('#expCB').prop('checked') == true) {
        var data = JSON.parse(localStorage.getItem('products_data'));

        const today = new Date()
        let expiredProducts = data.filter(function(d) {
            let expiryDay = new Date(d.expiryDate)
            return today.setHours(0, 0, 0, 0) <= expiryDay.setHours(0, 0, 0, 0)
        });

        let lowStock = data.filter(function(d) {
            return d.stock < 100
        });
        //Removing old data
        $('#productsbody').empty();
        for (var i = 0; i < expiredProducts.length; i++) {
            //Updating New Data
            generateProductList(expiredProducts[i])

        }

    } else {
        var data = JSON.parse(localStorage.getItem('products_data'));
        let lowStock = data.filter(function(d) {
            return d.stock < 100
        });
        $('#productsbody').empty();
        for (var i = 0; i < lowStock.length; i++) {
            generateProductList(lowStock[i])
        }
    }

})

$('#lowCB').click(() => {

    var data = JSON.parse(localStorage.getItem('products_data'));
    if ($('#lowCB').prop('checked') == true) {
        let lowStock = data.filter(function(d) {
            return d.stock < 100
        });
        $('#productsbody').empty();
        for (var i = 0; i < lowStock.length; i++) {
            generateProductList(lowStock[i])
        }
    } else if (($('#expCB').prop('checked') == true)) {
        var data = JSON.parse(localStorage.getItem('products_data'));
        console.log(data);
        const today = new Date()
        let expiredProducts = data.filter(function(d) {
            let expiryDay = new Date(d.expiryDate)
            return today.setHours(0, 0, 0, 0) <= expiryDay.setHours(0, 0, 0, 0)
        });



        let lowStock = data.filter(function(d) {
            return d.stock < 100
        });
        $('#productsbody').empty();
        for (var i = 0; i < expiredProducts.length; i++) {
            generateProductList(expiredProducts[i])
        }
    } else {
        var data = JSON.parse(localStorage.getItem('products_data'));
        $('#productsbody').empty();
        for (var i = 0; i < data.length; i++) {
            generateProductList(data[i])
        }
    }


})


$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', (data) => {

    ProductCount = data.length

    $('#productCount').text(ProductCount)

    localStorage.setItem('products_data', JSON.stringify(data));


    for (var i = 0; i < data.length; i++) {

        generateProductList(data[i])

    }


}).fail(() => alert("order GET failed"))

////////////////////// users page////////////////////////
function generateUser(userData) {
    $('#usersbody')
        .append($('<tr>').addClass("tableRow")
            .append($('<td>').addClass("userID").text(userData.id))
            .append($('<td>').addClass("userProfilePic")
                .append($('<img>').attr({ "src": userData.profilePic, "alt": "profile-pic" })))
            .append($('<td>').addClass("userName").text(userData.fullName))
            .append($('<td>').addClass("userDOB").text(userData.dob))
            .append($('<td>').addClass("userGender").text(userData.gender))
            .append($('<td>').addClass("userLocation").text(userData.currentCity + "," + userData.currentCountry))
        )

}
// =========================== SEARCH functionality ===================================
$(document).ready(function() {
    $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', (res) => {
        res.forEach((user) => generateUser(user))
    })
    $('#search-bar').keydown((e) => {

        let inputValue = $('#search-bar').val().toLowerCase()
        if (inputValue.length > 1) {

            $.get(
                `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${inputValue}`,
                (res) => {
                    $('#usersbody').empty()
                    res.forEach((user) => generateUser(user))
                },
            )
        }
    })
    $('#reset-btn').click((e) => {
        e.preventDefault()
        $('#search-bar').val('')
        $.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', (res) => {
            $('#usersbody').empty()
            res.forEach((user) => generateUser(user))
        })
    })
})