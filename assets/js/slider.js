const room1Images = document.getElementsByClassName("room1Images")
const room2Images = document.getElementsByClassName("room2Images")
const room3Images = document.getElementsByClassName("room3Images")
const rooms = [
    {
        images: room1Images,
        counter: 0
    },
    {
        images: room2Images,
        counter: 0
    },
    {
        images: room3Images,
        counter: 0
    },
]
function nextImage(roomId){
    rooms[roomId].counter = rooms[roomId].counter+1
    if (rooms[roomId].counter > rooms[roomId].images.length-1) rooms[roomId].counter = 0
    console.log(rooms[roomId].counter)
    for(let i = 0; i<rooms[roomId].images.length; i++){
        rooms[roomId].images[i].style.display = "none"
    }
    $(rooms[roomId].images[rooms[roomId].counter]).fadeIn();
}
function prevImage(roomId){
    rooms[roomId].counter = rooms[roomId].counter-1
    if (rooms[roomId].counter < 0) rooms[roomId].counter = rooms[roomId].images.length-1
    console.log(rooms[roomId].counter)
    for(let i = 0; i<rooms[roomId].images.length; i++){
        rooms[roomId].images[i].style.display = "none"
    }
    $(rooms[roomId].images[rooms[roomId].counter]).fadeIn();
}