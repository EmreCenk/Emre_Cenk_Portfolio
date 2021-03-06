

var current_id = 0;

window.onload = function(){
    create_carousel(5, "Amazing_Engine", "to_insert1");
    // create_carousel(5, "Amazing_Engine", "to_insert2");

    $("#tsparticles")
  .particles()
  .init(
    {
      background: {
        color: {
          value: "rgb(26, 188, 156)",
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    },
    function (container) {
      // container is the particles container where you can play/pause or stop/start.
      // the container is already started, you don't need to start it manually.
    }
  );

};

function create_carousel(howmany, folder_name, id_to_insert = null){
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
        src='assets/img/project_images/${folder_name}/example_image_${i}.PNG
        ' alt='${test[i]} slide'>\
        </div>\
        `

        all_text += slide_temp



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

    if (id_to_insert === null){  
        element_to_add = document.body
  
    }
    else{
        element_to_add = document.getElementById(id_to_insert);
    }

    element_to_add.innerHTML += all_text;

    current_id+=1;
}

// animate();