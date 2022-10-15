const clock = document.querySelector('.clock');
const secArrow = document.getElementsByClassName('second-arrow');
const minArrow = document.getElementsByClassName('minute-arrow');
const hourArrow = document.getElementsByClassName('hour-arrow');

for (let i = 0; i < 60; i++) {
	if ((i + 1) % 5 === 0) {
		clock.innerHTML += (`<div class='minute_line bold-minute_line' style='transform: rotate(${(i + 1) * 6}deg)'>|</div>`)
	}
	clock.innerHTML += (`<div class='minute_line' style='transform: rotate(${(i + 1) * 6}deg)'>|</div>`)
}

const showTime = () => {
	const time = new Date();
	const hour = time.getHours() * 30;
	const minute = time.getMinutes() * 6;
	const second = time.getSeconds() * 6;

	hourArrow[0].style.transform = `rotateZ(${hour + (minute / 12)}deg)`;
	minArrow[0].style.transform = `rotateZ(${minute}deg)`;
	secArrow[0].style.transform = `rotateZ(${second}deg)`;
}
showTime()

setInterval(() => showTime(), 1000)