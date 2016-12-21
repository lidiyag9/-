function show_text(){
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
c1_elem.style.display='block';
c2_elem.style.display = 'none';
c3_elem.style.display = 'none';
}

function show_pic(){
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
c1_elem.style.display = 'none';
c2_elem.style.display = 'block';
c3_elem.style.display = 'none';
}

function show_game() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'block';
}
function check() {
    x = document.getElementById("q1");
    if (x.checked) {
        alert("Yes")
    } else {
        alert("No")
    }
    ;
    q3e = document.getElementById("q3");
    answer = q3e.value;
    rese = document.getElementById('res');
    rese.innerHTML= "Вы уверены, что " + answer + '?';

}

function check_me()
{
    var count=0;
    with(document.test) {
if (!Q1[0].checked&&!Q1[1].checked&&!Q1[2].checked)  
{count+=1};  
if (!Q2[0].checked&&!Q2[1].checked&&!Q2[2].checked)  
{count+=1};  
if (!Q3[0].checked&&!Q3[1].checked&&!Q3[2].checked)  
{ count += 1 };
if (!Q4[0].checked && !Q4[1].checked && !Q4[2].checked)
{ count += 1 };
if (count>0) alert("Вы выполнили не все задания. Проверьте себя!")    
        else answer();
    }
} 
 
function control(k, f1,f2,f3,f4) {
if (k==1&&f1.checked) return true;
if (k==2&&f2.checked) return true;
if (k == 3 && f3.checked) return true;
if (k == 4 && f4.checked) return true;
return false;
}

function answer() {
answ="";
     with(document)    {
    answ+=control(res.charAt(0) ,test.Q1[0],test.Q1[1],test.Q1[2])?"1":"0";
answ+=control(res.charAt(1) ,test.Q2[0],test.Q2[1],test.Q2[2])?"1":"0";
answ+=control(res.charAt(2) ,test.Q3[0],test.Q3[1],test.Q3[2])?"1":"0";
answ += control(res.charAt(3), test.Q4[0], test.Q4[1], test.Q4[2]) ? "1" : "0";

showResult();
    }
}
 
function showResult()   {
    var nok=0;
    var i,s;
 
for (i=0; i<answ.length;i++) {nok+=answ.charAt(i)=="1"?1:0;}
if(nok==4) s="ОТЛИЧНО";
if(nok<4) s="ХОРОШО";
if(nok<3.25) s="УДОВЛЕТВОРИТЕЛЬНО";
if (nok<2.5) s="НЕУДОВЛЕТВОРИТЕЛЬНО";
    document.test.s1.value="Количество правильных ответов "+nok+". Ваша оценка "+s+".";
 
with(document.test)
    {
    if (answ.charAt(0)=="1") {T1.value=" + "} else {T1.value=" - "};
   if (answ.charAt(1)=="1") {T2.value=" + "} else {T2.value=" - "};
   if (answ.charAt(2) == "1") { T3.value = " + " } else { T3.value = " - " };
   if (answ.charAt(3) == "1") { T4.value = " + " } else { T4.value = " - " };
     }
}
function showhide(obj){
    if(obj == 'none') return 'inline';
    else return 'none';
}