'use strict';

$(".bolt-master-panel-content").bind("DOMSubtreeModified", function() {
    $(".bolt-link").each(function(index) {
        // console.log($(this).children().first().text())
        var n = $(this).children().first();
        if (n.text().startsWith("Terraform Plan")
            || n.text().startsWith("Terraform Apply")) {
            n.css({ color: "DeepSkyBlue", fontWeight: "bold"});
        }
    })
});
