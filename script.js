window.addEventListener('load', function(){
    const dog_result=document.getElementById("dog");
    function randomDogPic() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                dog_result.innerHTML = `<img src=${data.message} alt="dog" width=100% height=100% style="border-top-left-radius: 9em;border-bottom-left-radius: 9em;"/>`
            });
    }
    
    randomDogPic()
})