$(document).ready(function() {

    // Get page-content original position
    var contentTop = $('#page-content').offset().top;

    // Show/hide top link on page load
    showHideTopLink(contentTop);

    // Show/hide top link on scroll
    $(window).scroll(function() {
        showHideTopLink(contentTop);
    });

    // Scroll page on click action
    $('#page-top-link').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        return false;
    });

    $('.file-play-button').click(function(event) {
        var url = 'http://192.168.1.4:8080/api/v1/play';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText);
            }
        }
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);
    });

    $('.file-stop-button').click(function(event) {
        var url = 'http://192.168.1.4:8080/api/v1/stop';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText);
            }
        }
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);
    });

    $('.file-ff-button').click(function(event) {
        var url = 'http://192.168.1.4:8080/api/v1/forward';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText);
            }
        }
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);
    });

    $('.file-rew-button').click(function(event) {
        var url = 'http://192.168.1.4:8080/api/v1/rewind';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText);
            }
        }
        xmlHttp.open("GET", url, true); // true for asynchronous
        xmlHttp.send(null);
    });

    // Add button on click action
    $('.file-add-button').click(function(event) {
        var name = $(this).closest('li').attr('data-name');
        var path = $(this).closest('li').attr('data-href');

        var url = 'http://192.168.1.4:8080/api/v1/add';
        var params = "path=/" + path;
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                console.log(xmlHttp.responseText + "\n" + path);
            }
        }
        xmlHttp.open("POST", url, true); // true for asynchronous
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.send(params);
    });

    // Hash button on click action
    $('.file-info-button').click(function(event) {

        // Get the file name and path
        var name = $(this).closest('li').attr('data-name');
        var path = $(this).closest('li').attr('data-href');

        // Set modal title value
        $('#file-info-modal .modal-title').text(name);

        $('#file-info .md5-hash').text('Loading...');
        $('#file-info .sha1-hash').text('Loading...');
        $('#file-info .filesize').text('Loading...');

        $.ajax({
            url:     '?hash=' + path,
            type:    'get',
            success: function(data) {

                // Parse the JSON data
                var obj = jQuery.parseJSON(data);

                // Set modal pop-up hash values
                $('#file-info .md5-hash').text(obj.md5);
                $('#file-info .sha1-hash').text(obj.sha1);
                $('#file-info .filesize').text(obj.size);

            }
        });

        // Show the modal
        $('#file-info-modal').modal('show');

        // Prevent default link action
        event.preventDefault();

    });

});

function showHideTopLink(elTop) {
    if($('#page-navbar').offset().top + $('#page-navbar').height() >= elTop) {
        $('#page-top-nav').show();
    } else {
        $('#page-top-nav').hide();
    }
}
