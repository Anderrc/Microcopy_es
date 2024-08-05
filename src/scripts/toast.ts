let toastTimeout: any;

function showToast(message: string) {
	const toastElement: any = document.getElementById('toast');
	console.log('💩 ~ showToast ~ toastElement:', toastElement);

	toastElement.innerText = message;
	toastElement.classList.remove('hide');
	toastElement.classList.add('show');

	// Ocultar el toast después de 3 segundos
	clearTimeout(toastTimeout);
	toastTimeout = setTimeout(() => {
		toastElement.classList.remove('show');
		toastElement.classList.add('hide');
	}, 3000);
}

export { showToast };
