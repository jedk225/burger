$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var devour = $(this).data("devour");
        // alert(id)
        // alert(devour)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: { devoured: devour }
        }).then(
            function () {
                location.reload();
            }
        )
    })

    $(".addBurger").on("click", function (event) {
        var addNew = $("#burger").val().trim();
        if (addNew) {
            $.ajax("/api/burgers/", {
                type: "POST",
                data: { name: addNew }
            }).then(
                function () {
                    location.reload();
                }
            )
        } else {
            event.preventDefault();
            alert("Please input a valid name")
        }
    })
})