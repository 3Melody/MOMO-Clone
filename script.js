const catagory = document.getElementById('all-catagory');
let numbar = 0;

function tabbar(){
    numbar += 1;
    if (numbar % 2 == 0){
        catagory.style.display = "none";
    }else{
        catagory.style.display = "flex";
    catagory.style.flexDirection = "column";
    }
}