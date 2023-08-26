let jsonData;


fetch('date.json')
.then(response => response.json())
.then(data => {
// Store the parsed data in the jsonData variable
jsonData = data;
console.log(typeof jsonData);
console.log(jsonData);


// Call a function that uses the jsonData variable
useJsonData();

// Call the countdown clock function
countClock();
})
.catch(error => console.error(error));


let next = null;


function useJsonData() {


for(let i = 0; i<jsonData.length; i++){
let dateString= jsonData[i]['date'];
let dateObject= new Date(dateString);
let timeStamp = dateObject.getTime()
let now = new Date();
let nowTimeStamp = now.getTime();


if(timeStamp>nowTimeStamp){
console.log(jsonData[i])
next = jsonData[i]


break;


}


}
document.getElementById('nextHoliday').innerHTML = 'Next holiday is ' + next['date'] + '&nbsp;' + next['dayOfWeek'] + '<br> ' + next['holiday'];
if(next['dayOfWeek']==='Saturday'){
    document.getElementById('nextHoliday').innerHTML = 'Next holiday is ' + next['date']+',' + '&nbsp;' + next['dayOfWeek'] + '<br>' + next['holiday']+ '<br> ' +'Damn! Holiday on Saturday!!!'+'</br>頂！星期六先黎紅日。。。';
}

if(next['dayOfWeek']==='Sunday'){
  document.getElementById('nextHoliday').innerHTML = 'Next holiday is ' + next['date']+',' + '&nbsp;' + next['dayOfWeek'] + '<br>' + next['holiday']+ '<br> ' +'Compensation leave on monday!!!'+'</br>好彩有補假！';
}


}

function countClock() {
    // Set the date we're counting down to
    const countDownDate = new Date(next["date"]).getTime();
    // Get the #demo element
    const demo = document.getElementById("demo");
    // Update the count down every 1 second
    const x = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output the result in the #demo element
      demo.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "</br>";
      
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        demo.innerHTML = "EXPIRED";
      }
    }, 1000);
  }

let today = new Date();

let todayDayOfWeek = today.getDay(); // returns a number from 0 to 6 representing the day of the week
let todayMonth = today.getMonth(); // returns a number from 0 to 11 representing the month (0 = January, 1 = February, etc.)
let todayYear = today.getFullYear(); // returns the year as a four-digit number
let todayTime = today.getTime(); // returns the number of milliseconds since January 1, 1970
let options = { weekday: 'long' };
let dayOfWeek = today.toLocaleDateString('en-US', options);



let todayFullDate = todayYear + "-" + (todayMonth + 1) + "-" + today.getDate(); // adds 1 to the month because getMonth() returns a number from 0 to 11
document.getElementById("todaydate").innerHTML ='Today is '+ todayFullDate+', '+ dayOfWeek;



// Get the #demo element
