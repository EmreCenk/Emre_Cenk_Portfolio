

var current_id = 0;

window.onload = function(){
    create_carousel(5, "to_insert1");

};

function create_carousel(howmany, id_to_insert = null){
// Is this function good practice? Hell no. Do I have enough time to do properly? Probably not. 

    let test = ["First", "Second", "Third", "Fourth", "Fifth"]
    let all_text = `<div id='${"carouselExampleControls"+current_id}' class='carousel slide' data-ride='carousel'>\
    <div class='carousel-inner'>\
    `
    let slide_temp, element_to_add

    for (let i = 0; i<howmany; i++){
        if (i == 0){
            slide_temp = "<div class='carousel-item active'>"
        }
        else{
            slide_temp = "<div class='carousel-item'>"
        }
        slide_temp += `
        <img class='d-block w-100'\
        src='assets/img/project_images/Amazing_Engine/example_image_${i}.PNG
        ' alt='${test[i]} slide'>\
        </div>\
        `

        all_text += slide_temp
        console.log("is this happening?")



    }
    
    all_text += `\
    <a class='carousel-control-prev' href='#${"carouselExampleControls"+current_id}' role='button' data-slide='prev'>\
    <span class='carousel-control-prev-icon' aria-hidden='true'></span>\
    <span class='sr-only'>Previous</span>\
  </a>\
  <a class='carousel-control-next' href='#${"carouselExampleControls"+current_id}' role='button' data-slide='next'>\
    <span class='carousel-control-next-icon' aria-hidden='true'></span>\
    <span class='sr-only'>Next</span>\
  </a>\</div>`;
    console.log("yes?", all_text);

    if (id_to_insert === null){  
        element_to_add = document.body
  
    }
    else{
        element_to_add = document.getElementById(id_to_insert);
    }

    element_to_add.innerHTML += all_text;

    current_id+=1;
}