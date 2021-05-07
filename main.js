function ejercicio(event) {
	var monitor  = document.getElementById("monitor");
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");
	var cero = document.getElementById("cero");
	var borrar = document.getElementById("borrar");
	var menos = document.getElementById("menos");
	var mas = document.getElementById("mas");
	var multiplicar = document.getElementById("multiplicar");
	var dividir = document.getElementById("dividir");
	var igual = document.getElementById("igual");



	uno.onclick = function uno(e) {
		monitor.textContent = monitor.textContent + "1";
	}
	dos.onclick = function dos(e) {
		monitor.textContent = monitor.textContent + "2";
	}
	tres.onclick = function tres(e) {
		monitor.textContent = monitor.textContent + "3";
	}
	cuatro.onclick = function cuatro(e) {
		monitor.textContent = monitor.textContent + "4";
	}
	cinco.onclick = function cinco(e) {
		monitor.textContent = monitor.textContent + "5";
	}
	seis.onclick = function seis(e) {
		monitor.textContent = monitor.textContent + "6";
	}
	siete.onclick = function siete(e) {
		monitor.textContent = monitor.textContent + "7";
	}
	ocho.onclick = function ocho(e) {
		monitor.textContent = monitor.textContent + "8";
	}
	nueve.onclick = function nueve(e) {
		monitor.textContent = monitor.textContent + "9";
	}
	cero.onclick = function cero(e) {
		monitor.textContent = monitor.textContent + "0";
	}
	borrar.onclick = function borrar(e) {
		monitor.textContent = ""
	}
	mas.onclick = function mas(e) {
		monitor.textContent = monitor.textContent + "+";
	}
	menos.onclick = function menos(e) {
		monitor.textContent = monitor.textContent + "-";
		}
	multiplicar.onclick = function multiplicar(e) {
		monitor.textContent = monitor.textContent + "*";
		}
	dividir.onclick = function dividir(e) {
		monitor.textContent = monitor.textContent + "/";
	}
	igual.onclick = function igual(e) {
		monitor.textContent = eval(monitor.textContent);
	}
}
