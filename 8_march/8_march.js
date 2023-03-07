document.addEventListener("DOMContentLoaded", () => {
	let flyingPaperSound =
		"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/flyingpaper.mp3",
		takingPaperSound =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/takepaper.mp3",
		rotatingPaper =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/paperRotating.mp3",
		stampMachine =
			"https://raw.githubusercontent.com/MrGregor228/Notes-For-Piano/master/paper%20sound/stampmachine.mp3",
		carelessWhisper =
			"8_march/igor-saruhanov-8-marta.mp3";

	let firstSound = new Audio();
	firstSound.volume = [0.2];
	firstSound.src = flyingPaperSound;

	let secondSound = new Audio();
	secondSound.volume = [0.2];
	secondSound.src = takingPaperSound;

	let thirdSound = new Audio();
	thirdSound.volume = [0.2];
	thirdSound.src = rotatingPaper;

	let playMusic = new Audio();
	playMusic.volume = [0.2];
	playMusic.src = carelessWhisper;

	let letterWrapper = document.querySelector(".letter-wrapper"),
		paper = document.querySelector(".paper"),
		letterCover = document.querySelector(".letter-closure"),
		leftSideOfLetter = document.querySelector(".left-side"),
		centerOfLetter = document.querySelector(".center"),
		rightSideOfLetter = document.querySelector(".right-side"),
		submitName = document.querySelector(".submit-name"),
		askNameInput = document.querySelector(".ask-name input[type=text]");

	let letterWrapperClicked = false;

	let name = "";

	letterWrapper.addEventListener("click", () => {
		letterWrapper.classList.add("clicked");
		if (!letterWrapperClicked) {
			firstSound.play();
			letterWrapperClicked = true;
		}
	});

	const text1 =
		"Отдел развития творчества и проектной деятельности ОБУК ОЦКНТ от всего сердца поздравляет Вас с самым обворожительным праздником весны! Без Вас бы не было написано ни строчки - это фраза из песни, очень глубоко определяет наше отношение к Вам и значимость этих милых слов Жена, Мама, Бабушка, Дочка, Сестра в наших мужских сердцах. Может мы этого отношения не всегда проявляем, но вы для нас самое дорогое.",
		text2 = "Мы желаем нашим милым женщинам счастья, любови, улыбок, добра, здоровья и благополучия. Пусть ваши мечты исполняются всё чаще, а близкие люди окружают вас теплом и поддержкой, заботой и взаимным вниманием. Тепла, солнца, радости, благополучия, уюта и счастья Вам и вашему дому. Пусть новыми красками играют привычные дни, а приятные чувства встречаются там, где их не ждешь. Музыки в сердце, музыки в душе, гармонии во всем! С 8 Марта!";

	let options = {
		strings: [text1, text2],
		typeSpeed: 60,
		showCursor: false
	};

	let typed;

	letterCover.addEventListener("click", () => {
		letterCover.classList.toggle("opened");
		secondSound.play();
		if (letterCover.classList.contains("opened")) {
			letterCover.title = "Закрыть";
		} else {
			letterCover.title = "Открыть";
		}

		leftSideOfLetter.classList.toggle("opened");
		centerOfLetter.classList.toggle("opened");
		rightSideOfLetter.classList.toggle("opened");
	});

	askNameInput.addEventListener("input", () => {
		paper.querySelector(".name").textContent =
			"Дорогая " + askNameInput.value + "!";
		if (askNameInput.value.length < 2) {
			submitName.style.display = "none";
		} else {
			submitName.style.display = "block";
		}
	});
	askNameInput.oninput = () => {
		let keyboardSound = new Audio();
		keyboardSound.src = stampMachine;
		keyboardSound.volume = [0.5];
		keyboardSound.play();
	};

	submitName.addEventListener("click", () => {
		playMusic.play();
		thirdSound.play();
		letterCover.classList.toggle("opened");
		leftSideOfLetter.classList.toggle("opened");
		centerOfLetter.classList.toggle("opened");
		rightSideOfLetter.classList.toggle("opened");
		letterWrapper.classList.add("submitted");
		paper.classList.toggle("watch");
		setTimeout(() => {
			typed = new Typed("#message", options);
		}, 1500);
		document.body.style.opacity = "0";
		setTimeout(() => {
			document.querySelector(".container").style.backgroundImage =
				"url('https://i.ibb.co/DLt3PP0/flowers-374318-1920.jpg')";
			document.body.style.opacity = "1";
		}, 1000);
	});
});