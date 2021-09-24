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

            // eq: index태그를 통해서 해당하는 번호를 가져와라.
            $(".lnb").eq(gnbIndex).css("display","block"); //인라인 태그의 우선순위를 
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
});