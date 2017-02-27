///Forside menu
$(function () {

    $myMenu = $("#myMenu");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetMenu',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $myMenu.append("<li class='menupunkter'><a class='drawer-menu-item' href=\"" + post.Navn + ".html" + "\".>" + post.Navn + " </a></li>");
            });
        }
    });

});
///Nyhed Forum
$(function () {

    $myforum = $("#myforumN");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetForumN',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $myforum.append("<div class='foverskrift'>" + post.Overskrift + "</div> ");

            });
        }
    });

});
///Diskussion Forum
$(function () {

    $myforum = $("#myforumD");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:13105/api/Get/GetForumD',
        success: function (posts) {
            $.each(posts, function (i, post) {
                $myforum.append("<div class='foverskrift'>" + post.Overskrift + "</div> ");

            });
        }
    });

});