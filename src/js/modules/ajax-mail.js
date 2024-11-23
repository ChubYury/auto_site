"use strict"

let orderSendBtn = document.querySelector('.modal .btn');
orderSendBtn.addEventListener("click", ajaxSend);

// Отправка письма на почту

async function ajaxSend(e) {
	e.preventDefault();

	// Получаем значения всех полей в модальном оке
	let getEmail = document.querySelector('.modal input[name="mail"]');
	let getComment = document.querySelector('.modal textarea');
	let errorText = document.querySelector('.modal .result-text');
	let getRecaptchaVal = document.querySelector('.modal #g-recaptcha-response');

	let errors = [];
	// Удаление классов с ошибками с элементов
	getEmail.classList.remove('error-input');
	getComment.classList.remove('error-input');
	errorText.classList.remove('error_text');
	errorText.classList.remove('success_text');
	errorText.textContent = '';


	// Проверяем не пустые ли значения
	// Если какое то значение осталось пустым, то заносим ошибку в массив
	if(!getEmail.value) 
		errors.push('mail');

	if(!getComment.value) 
		errors.push('getComment');

	let response = grecaptcha.getResponse();
	if(!response) {
		errorText.classList.add('error_text');
		errorText.textContent = 'Заполните поле reCaptcha';
		return false;
	}


	// Проверяем не пустой ли массив с ошибками, если ошибки есть - выводим ошибки
	// Если массив пуст - отправляем данные на сервер
	if(errors.length) {
		errorText.classList.add('error_text');
		errors.forEach((element) => {
			errorText.textContent = 'Некорректно введены данные';
			if(element == 'mail')
				getEmail.classList.add('error-input');

			if(element == 'getComment')
				getComment.classList.add('error-input');
		});
		return false;
	} else {
		// Во время отправки сообщения блокируем кнопку отправки во избежание спама
		document.querySelector('.modal .btn-primary').setAttribute("disabled", "disabled");

		let createFormData = new FormData();
		createFormData.append('mail', getEmail.value);
		createFormData.append('comment', getComment.value);
		createFormData.append('route', getRoute);
		createFormData.append('g-recaptcha-response', getRecaptchaVal.value);

		let response = await fetch('applications/modules/order-mail.php', {
			method: 'POST',
			body: createFormData,
			headers: {
				'X-Requested-With': 'XMLHttpRequest'
			}
		});

		// Получаем ответ в формате JSON
		let result = await response.json();

		// Если отправка прошла успешно - сообщаем об этом пользователя
		// Так же разрешаем взаимодействие с кнопкой отправки
		// После закрываем модальное окно
		if(response.ok) {
			document.querySelector('.modal .btn-primary').removeAttribute("disabled");
			
			if(result.status === false && result.errors.length) {
				errorText.classList.add('display');
				errorText.textContent = 'Некорректно введены данные';
				result.errors.forEach((element) => {
					if(element == 'mail') 
						getEmail.classList.add('error_text');

					if(element == 'getComment')
						getComment.classList.add('error_text');

					if(element == 'reCaptcha') {
						numPack.classList.add('error_text');
						errorText.textContent = 'reCaptcha не принята, попробуйте ещё раз';
					}

					if(element == 'mailError') {
						errorText.textContent = 'Произошла ошибка при попытке отправки сообщения';
					}
				});
				document.querySelector('html').style.overflow = 'unset';
			} else if(result.status === true){
				errorText.classList.add('success_text');
				errorText.textContent = result.message;

				setTimeout(() => {
					if(document.querySelector('.modal').classList.contains('current')) {
						document.querySelector('.modal').classList.remove('current');
						document.querySelector('.modal-blocker').classList.remove('active');
						document.querySelector('html').style.overflow = 'unset';
						errorText.classList.remove('success_text');
						errorText.textContent = '';
					}
				}, 4000);
			}
		}
	}

}