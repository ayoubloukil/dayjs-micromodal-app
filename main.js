dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

let timezoneSelect = document.getElementById('timezone');
let micromodalModal1 = document.getElementById("modal-1");
let continueButton = document.getElementById('btn-continue');
let date = document.getElementById("date");
let time_hms = document.getElementById("time-hms");
let selectedTimezone;
MicroModal.init();


function showMicromodal (){
  micromodalModal1.style.display = "block";
}

function closeMicromodal (){
  micromodalModal1.style.display = "none";
}


setInterval(() => {
    date.innerHTML = dayjs().format('dddd, D MMMM, YYYY');
    time_hms.innerHTML = dayjs().format('h:mm:ss');
    timezoneSelect.innerHTML = dayjs.tz.guess();
  }, 1000)



function updateTime() {
  if (selectedTimezone) {
    setInterval(() => {
      date.innerHTML = dayjs().tz(selectedTimezone).format('dddd, D MMMM, YYYY');
      time_hms.innerHTML = dayjs().tz().setDefault(selectedTimezone).format('h:mm:ss');
      timezoneSelect.innerHTML = dayjs.tz(selectedTimezone).format();
    }, 1000)
  }
}

continueButton.addEventListener('click', () => {
  selectedTimezone = timezoneSelect.value;
  updateTime();  
  closeMicromodal();
});



