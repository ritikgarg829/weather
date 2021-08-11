const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_value = document.getElementById('temp_value');
const temp_status1 = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');  

const getInfo =async(event) =>{
event.preventDefault();
let cityvalue=cityname.value;

if(cityvalue === ""){
city_name.innerText = 'please enter the city before search';
datahide.classList.add('data_hide');

}
else{
    try{
        let url=  `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=050cca22629b748a101d223b51b48402`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData =[data];
        city_name.innerText =`${arrData[0].name} ,${arrData[0].sys.country}`; 
        temp_value.innerText = arrData[0].main.temp;
        const tempmood = arrData[0].weather[0].main;
        // temp_status1.innerText = arrData[0].weather[0].main;
           
       if(tempmood=="Clear"){
           temp_status1.innerHTML ="<i class='fas fa-sun' style='color: #eccc68;'></i>";
       }
    else if(tempmood=="Clouds"){
        temp_status1.innerHTML =
                   "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
    }   else if(tempmood=="Rain"){
        temp_status1.innerHTML =
                   "<i class='fas fa-bolt' style='color:#a4b0be;'></i>";
    } 
    else{
        temp_status1.innerHTML =
                   "<i class='fas fa-moon' style='color:#f1f2f6;'></i>";
    }
    datahide.classList.remove('data_hide');

    }
    catch{
    city_name.innerText = 'please enter the city Name properly';
    datahide.classList.add('data_hide');
    }
}

}


submitbtn.addEventListener('click', getInfo);