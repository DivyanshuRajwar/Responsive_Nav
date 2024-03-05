const overlay=document.querySelector(".overlayer");
const media_nav=document.querySelector(".media_nav");
const menu_icon=document.querySelector(".menu_icon");
const dot_icon=document.querySelector(".dot_icon");
const cross_icon=document.querySelector(".cross_icon");

const open_menu=()=>{
    overlay.classList.add("open_overlay");
    media_nav.classList.add("open_menu");
    dot_icon.classList.add("hide_dot");
    cross_icon.classList.add("show_cross");
    console.log("Media nav khul gyiii hia bhai jii..");
}
const close_menu=()=>{
    overlay.classList.remove("open_overlay");
    media_nav.classList.remove("open_menu");
    dot_icon.classList.remove("hide_dot");
    cross_icon.classList.remove("show_cross");
    console.log("overlayer close hia bhai jii");
}
const close_icon=document.querySelector(".cross");
