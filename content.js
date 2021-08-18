'use strict';

$(".bolt-master-panel-content").bind("DOMSubtreeModified", function() {
    $(".text-ellipsis").each(function(index) {
        // console.log($(this).children().first().text())
        if ($(this).children().first().text().startsWith("Terraform Plan")
            || $(this).children().first().text().startsWith("Terraform Apply")) {
            $(this).children().first().css({ color: "yellow" });
        }
    })
});
