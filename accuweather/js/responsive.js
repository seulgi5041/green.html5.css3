$(function(){
    var gnbFlag = false;
    var gnbIndex;

    // 제이쿼리는 $("선택자") 필수! css개념과 유사.
    $(".nav li").on({
        "mouseenter" : function() {
            /*  하위메뉴 마우스 대면 보이기 lnb show   */ 

            if (gnbIndex != undefined) {
                $(".lnb").eq(gnbIndex).css("display", "none");
            }

            // .index : 태그의 index 번호를 가져오는 것이다.
            // $(this) 는? : 이벤트가 발생하는 태그, 태그들의 정보를 가지고 있다. 즉, (.nav li) 태그를 가리키는 것.
            gnbIndex = $(this).index();
            gnbFlag = true;

            // 미리 css로 class속성 지정 해 준 class의 속성을 삭제(disapper가 붙음), 추가(appear가 붙음).
            // remove 속성 해 준 이유는 혹시라도 계속 add로 남아있을까봐.
            $(".lnb_container").removeClass("disappear");
            $(".lnb_container").addClass("appear");
            // 실질적으로 보이는 부분. 위에 두개속성은 애니메이션 속성을 주기위한것임.
            // .show : 해당 태그의 display를 none에서 block으로 해주는 속성.
            $(".lnb_container").show();

            // eq: gnbIndex = $(this).index();태그를 통해서 gnb-li 각각 인덱스와 동일한 lnb div그룹의 배열 번호를 가져와라.
            $(".lnb").eq(gnbIndex).css("display","block"); //인라인 태그의 우선순위를 이용 
            
            // .css는 css의 속성을 바꿔줄 수 있는 태그. display에서 block으로 바꿔라.



            /* 액티브 바 show */ 

            $(".active_bar").show();
            
            // 선택된 li와 left와 width를 구해 activ_bar의 위치와 길이를 조절한다.
            // offset: ( )가 선택한 요소가 브라우저 기준으로!!! 값을 구한다.
            var listLeft = $(this).offset().left;
            var listWidth = $(this).width();

            $(".active_bar").width(listWidth);
            $(".active_bar").offset({left: listLeft + 17}); // li에 padding이 있었으므로 padding값을 더해준 것
            // 위에서 구한 값에 offset을 이용해서 해당 값에 위치를 지정할 수도 있다.

        },
        "mouseleave" : function() {

        }
    });



    /* 하위메뉴 안 보이게 하기 */ 
    $(".lnb_container").on({
        "mouseleave" : function() {

            if(gnbFlag) {
                $(".lnb_container").removeClass("appear");
                $(".lnb_container").addClass("disappear");
                $(".lnb_container").hide();
                $(".active_bar").hide();
            } else {
                return;
            }
        }

    });

    /* 모바일 햄버거 메뉴 클릭 시 나오게 하기 */
    $(".trigger").on({
        "click" : function(){

            // 햄버거 메뉴 버튼이 보일때(햄버거 메뉴가 -교재215p-visible상태인가?로 판단)
            if($(".mobile.hamburger").is(":visible") {
                /* 모바일 닫기 버튼 show */
                $(".mobile.hamburger").hide();
                $(".mobile.close").show();

                /* 모바일 전체 메뉴 show */
                $("#main_header").height(60);
                $("#main_content").hide();
                $("#main_footer").hide();
                $("#mobile_menu").show();

                $("#mobile_menu").empty(); //#mobile_menu 하위 태그 초기화
                $(".nav li").eq(3).show(); //mobile에서만 보이는 메뉴 2개 추가 (nav배열의 세번째 배열 자리의 것)
                $(".nav li").eq(4).show();


                var nav = $(".nav").clone();
                $("#mobile_menu").append(nav); //복제한 nav를 넣어서 id값이 모바일메뉴인 아이에 덧붙여준다.
                $("#mobile_menu").show();
            } else {
                // 닫기 메뉴 버튼이 보일때
                /* 모바일 햄버거 버튼 show */ 
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();

                /* 모바일 전체 메뉴 show */
                $("#main_header").height(390);
                $("#main_content").show();
                $("#main_footer").show();
                $("#mobile_menu").hide();
            }

        }

    });


    // 모바일 버전일때 넓이를 넓히면 모바일 사이즈인채로 늘어나버림.
    // 그것을 고치는 것.
    // resize : 브라우저의 사이즈가 바뀌었을때 이벤트가 일어나게 하는 코드.
    $(window).resize(function() {
        var width = $(window).width(); //사용자가 보는 뷰포트 넓이 구하기

        if(width > 767) {
            $("li").eq(3).hide();
            $("li").eq(4).hide();

            if($(".mobile.hamburger").is(":visible")) {
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();

                /* 모바일 전체 메뉴 show */
                $("#main_header").height(390);
                $("#main_content").show();
                $("#main_footer").show();

                $("#mobile_menu").hide();
            }
        }

    });


});