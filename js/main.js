$(document).ready(function(){
    $(".panel").click(function(){
        $(this).toggleClass("panel_clicked");
    });
    $("#stopResumeAnimation").click(function(){
        $(".panel2").toggleClass("stopAnimation");
    });
});
