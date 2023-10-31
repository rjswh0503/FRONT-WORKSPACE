 //라디오 버튼 이벤트 처리
 const genderResult = document.getElementById("genderResult");
 const maleRadio = document.getElementById("maleRadio");
 const femaleRadio = document.getElementById("femaleRadio");
 const otherRadio = document.getElementById("otherRadio");


 maleRadio.addEventListener("change", updateGenderResult);
 femaleRadio.addEventListener("change", updateGenderResult);
 otherRadio.addEventListener("change", updateGenderResult);

 function updateGenderResult(){
     if(maleRadio.checked){
         genderResult.textContent ="선택된 성별 : 남성";
     }else if(femaleRadio.checked) {
         genderResult.textContent ="선택된 성별 : 여성";

     }else if(otherRadio.checked) {
         genderResult.textContent ="선택된 성별 : 기타";
     }
 }


 //체크박스 이벤트 처리
 const fruitsResult = document.getElementById("fruitsResult");
 const appleCheckbox = document.getElementById("appleCheckbox");
 const bananaCheckbox = document.getElementById("bananaCheckbox");
 const orangeCheckbox = document.getElementById("orangeCheckbox");

 appleCheckbox.addEventListener("change", updatefruitsResult);
 bananaCheckbox.addEventListener("change", updatefruitsResult);
 orangeCheckbox.addEventListener("change", updatefruitsResult);


 //updatefruitsResult  = change 이벤트가 발생할 때 실행
 /*현재 선택된 체크박스를 확인하고 선택된 과일 항목을 배열에 추가한다음
 결과 메세디를 업데이트
 */

 function updatefruitsResult(){
     const selectFruits = []; //과일을 담을 수 있는 빈 배열
     /*
     applecheckbox.checked = checked의 속성을 사용해서 각 체크박스의 선택
     여부를 확인하고, 선택된 과일 항목을 selectfruits 배열에 추가
     */
     if(appleCheckbox.checked){ 
         selectFruits.push("사과");
     }

     if(bananaCheckbox.checked){
         selectFruits.push("바나나");
     }
     if(orangeCheckbox.checked){
         selectFruits.push("오렌지");
     }
     fruitsResult.textContent = "선택된 과일 : " + selectFruits.join(", ");

 }