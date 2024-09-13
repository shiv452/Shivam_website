// document.getElementById('next').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').appendChild(lists[0]);
// }
// document.getElementById('prev').onclick = function(){
//     let lists = document.querySelectorAll('.item');
//     document.getElementById('slide').prepend(lists[lists.length - 1]);
// }
document.getElementById('next').onclick = function() {
    let slide = document.getElementById('slide');
    let lists = slide.querySelectorAll('.item'); // Re-select items within #slide

    if (lists.length > 0) {
        slide.appendChild(lists[0]); // Move the first item to the end
    }
}

document.getElementById('prev').onclick = function() {
    let slide = document.getElementById('slide');
    let lists = slide.querySelectorAll('.item'); // Re-select items within #slide

    if (lists.length > 0) {
        slide.prepend(lists[lists.length - 1]); // Move the last item to the beginning
    }
}
