window.addEventListener('load', function(){
    const dog_result=document.getElementById("dog");
    function randomDogPic() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                dog_result.innerHTML = `<img src=${data.message} alt="dog" width=100% height=100% style="border-top-left-radius: 9em;border-bottom-left-radius: 9em;"/>`
            });
    }
    document.getElementById("btn").addEventListener("click",getInfo);
    async function getInfo(){
        const name= document.getElementById("fname").value;

        if (!name){
            alert("Please Enter a name");
            return;   
        }

        const  gender=document.getElementById("gender");
        const  age=document.getElementById("age");
        const  nationality=document.getElementById("nationality");
        
        function getGender(){
            fetch(`https://api.genderize.io/?name=${name}`)
                .then(res => res.json())
                .then(data => {
                    gender.innerHTML = `Your gender is ${data.gender}`
                })
        }
        getGender()
        function getAge(){
            fetch(`https://api.agify.io/?name=${name}`)
                .then(res => res.json())
                .then(data => {
                    age.innerHTML = `Your age is ${data.age}`
                })
        }
        getAge()
        function getNationality(){
            fetch(` https://api.nationalize.io/?name=${name}`)
                .then(res => res.json())
                .then(data => {
                    nationality.innerHTML = `Your country is ${data.country[0].country_id}`
                    for (let i = 1; i < 99; i++)
                        nationality.innerHTML += `,${data.country[i].country_id}`
                    
                })
        }
        getNationality()
    }
    
    randomDogPic()
})