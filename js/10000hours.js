// js file
const startButton = document.querySelector(".start_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");


function calculator(){
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result")

    if(fieldValue.value == ""){
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if (timeValue.value== ""){
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    }else if(timeValue_int>24){
        alert('잘못된 값입니다. 24 이하의 값을 입력해주세요.')
        return false;
    }

    //여길 다 통과했다면 제대로 된 값을 입력했다는 의미
    result.style.display = 'none';
    loading.style.display = 'flex';
    //fheld로딩되는화면이 먼저나오고

    setTimeout(function(){
        loading.style.display = 'none';
        result.style.display = 'flex';
        fieldResult.innerHTML = fieldValue.value;
        timeResult.innerHTML = parseInt((10000/timeValue_int),10);
    }, 1800);
    //10진수로 1.8초 뒤에 

}

function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}

// 모달창 밖을 클릭했을 때도 모달창이 닫히게
window.onclick = function(event){
    if(event.target == modal){
        closeModal();
    }
}

function copyUrl(){
    let url  = window.location.href;
    let tmp = document.createElement('input');

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.")
}

shareButton.addEventListener('click',copyUrl);
openButton.addEventListener('click',openModal);
closeButton.addEventListener('click',closeModal);
startButton.addEventListener('click',calculator);
