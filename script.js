// alert(2222)

let mainBtnPet = document.getElementById('pet-cat');
let mainBtnNotPet = document.getElementById('not-pet-cat');

mainBtnPet.onclick = function () {
    document.getElementById("content").style.display = "none";
    document.getElementById('main').innerHTML = `
        <div class="image-cat">
            <img src="images/333.png" alt="мур мур мур">
        </div>
    `
}

mainBtnNotPet.onclick = function () {
    document.getElementById("content").style.display = "none";
    document.getElementById('main').innerHTML = `
        <div class="image-cat">
            <img src="images/222.png" alt=":(((">
        </div>
    `
}