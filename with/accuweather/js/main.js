// 중심이 되는부분. (기능은 각각의 하부 파일에. 여기는 호출해주는곳.)
// var result = getCurrentWeather("incheon");
// console.log(result);


var cityList = ["seoul", "incheon", "gyeonggi-do", "gwangju", "busan", "jeju"];

$(".temp").each(function(i) {
    $(this).text(getCurrentTemp(cityList[i]) + "℃");
});

$(".location").on({
    "click" : function() {
        var q = $(this).children(".q").attr("id");
        var redirectURL = "pages/weather_location.html?q=" + q; 
        location.href = redirectURL;
    }
});