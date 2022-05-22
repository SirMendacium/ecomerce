const app = new Vue ({
    el: '#app',
    data: {
        tag: "all"
    }
})

$( "#all" ).click(function() {
    app.tag = "all"
})

