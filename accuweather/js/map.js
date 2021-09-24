var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.45291287715856, 126.70375520682704), // 지도의 중심좌표 (js에서 new가 나오면 무조건 객체!)
        // 숫자 커질수록 축소, 작을수록 확대.
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
// new를 통해 생성 할 때 ( , ) 값들을 넣어줌. - 이 값들은 위에서 생성한 것.
var map = new kakao.maps.Map(mapContainer, mapOption); 