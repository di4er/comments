$(document).ready(function () {
    $('#submit').bind('click', function submit() {
        var out = '';
        Data = new Date();
        Year = Data.getFullYear();
        Month = Data.getMonth();
        Day = Data.getDate();
        switch (Month) {
            case 0: fMonth = "января"; break;
            case 1: fMonth = "февраля"; break;
            case 2: fMonth = "марта"; break;
            case 3: fMonth = "апреля"; break;
            case 4: fMonth = "мае"; break;
            case 5: fMonth = "июня"; break;
            case 6: fMonth = "июля"; break;
            case 7: fMonth = "августа"; break;
            case 8: fMonth = "сентября"; break;
            case 9: fMonth = "октября"; break;
            case 10: fMonth = "ноября"; break;
            case 11: fMonth = "декабря"; break;
        }
        var message = document.getElementById('newmessage').value;
        out += '<div class="comment-item">';
        out += '<a href="#" class="comment-item-name">Самуил</a>';
        out += '<span class="comment-item-date">' + Day + ' ' + fMonth + ' ' + Year + '</span>';
        out += '<div class="comment-item-message">' + message + '</div>';
        out += '</div>';
        $('#comments-items').append(out);
    });

    document.onkeypress = function (e) {
        var enter = 13;
        if (e.ctrlKey && enter) {
            submit();
        }
    }
});

