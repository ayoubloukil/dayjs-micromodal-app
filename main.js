dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

let selectedTimezone;

MicroModal.init();

document.getElementById("timezone").innerHTML = dayjs.tz.guess();

setInterval(() => {
    document.getElementById("date").innerHTML = dayjs().format('dddd, D MMMM, YYYY');
    document.getElementById("time-hms").innerHTML = dayjs().format('h:mm:ss');
  }, 1000)

function showMicromodal (){
  document.getElementById("modal-1").style.display = "block";
}

function closeMicromodal (){
  document.getElementById("modal-1").style.display = "none";
}

document.getElementById('btn-continue').addEventListener('click', () => {
  const timezoneSelect = document.getElementById('timezone');
  selectedTimezone = timezoneSelect.value;
  closeMicromodal();
  updateTime();
});