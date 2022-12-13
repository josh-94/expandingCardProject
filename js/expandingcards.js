const contenedor = document.querySelectorAll('.contenedor');

contenedor.forEach(contenedor => {
    contenedor.addEventListener('click', () => {
		removeActiveClasses()
		contenedor.classList.add('active')
	})
})

function removeActiveClasses() {
	contenedor.forEach(contenedor => {
		contenedor.classList.remove('active')
	})
}
