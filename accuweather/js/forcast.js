

//url은 전역변수로.
// 아큐웨더의 API를 url에 넣어줬음
var url = "https://api.openweathermap.org/data/2.5/weather";
url  += "?appid=5b94187dfcff8cb319868abee2f627de";
url  += "&units=metric";
url  += "&lang=kr";
url  += "&q=";


//현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city) {
    var dataObj;
    
    $.ajax({
        type: "GET",
        // 위의 city가 비어있음. 나중에 url 뒤에 (매개변수)지역이 붙을것
        url: url += city,
        dataType: "json",

        //async의 뜻은 비동기의(false로 따로 지정하기 전, 기본적으로는 트루임.)
        async: false, //결과 데이터를 리턴시키기 위해 동기 방식으로 변경
        success: function(data) {
            // 정상 응답 시 처리 작업
            dataObj(data);
        },
        error: function(request, status, error) {
            //응답 에러시 처리 작업
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        },

    });


    return dataObj;

}

// 현재 날씨의 온도 얻어오기
function getCurrentTemp(city) {

}