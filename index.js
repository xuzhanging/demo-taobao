$(function() {
    // var catchObj = {};
    var timer = null;
    function debounceSearch(kw) {
        timer = window.setTimeout(function() {
            getSuggestList(kw);
        }, 500)
    }
    $("#ipt1").on('keyup', function() {
        var keywords = $(this).val().trim();
        if(keywords.length <= 0) {
            $(".result").hide();
            return;
        }
        // console.log(keywords);
        // getSuggestList(keywords);
        window.clearTimeout(timer);
        // if(catchObj[keywords]) {

        // }
        debounceSearch(keywords);//防抖
    })
    function getSuggestList(kw) {
        $.ajax({
            url: 'https://suggest.taobao.com/sug?q='+kw,
            dataType: 'jsonp',
            success: function(res) {
                // var k = $("#ipt1").val().trim();
                // catchObj[k] = res;
                console.log(res);
                $("#ol1").empty();
                $(".result").show();
                for(var k in res.result) {
                    // console.log(k);
                    $("#ol1").append("<li>" + res.result[k][0] + "</li>")
                }
            }
        })
    }
})