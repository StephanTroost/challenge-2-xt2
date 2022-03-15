


class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start(){
        setInterval(() => {
            this.update();
        }, 1000);
    }

    update(){
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;


        console.log(timeFormatted);
    }

    getTimeParts() {
        const now = new Date();
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(), 
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock")
const clockObject = new DigitalClock (clockElement);

clockObject.start();

var today = new Date
var hour = parseInt(today.getHours());
var image = document.getElementById('clockimage').innerHTML;

function clockimg(){
    if (hour >= 0 && hour <= 12) {
        document.getElementById('clockimage').src = "sunrise.jpg";
    }

    else if (hour >= 13 && hour <= 23){
        document.getElementById('clockimage').src = "moonlight.jpg"
    }
        
    }

