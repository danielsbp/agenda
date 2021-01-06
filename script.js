function changeData() {
	let yearInput = document.querySelector('#year');
	let monthInput = document.querySelector('#selectM');

	let ano = yearInput.value;
	let mes = monthInput.value;
	let data = new Date(ano, mes, 1);

	let firstDayNumber = data.getDay();

	console.log('firstDayName');

	//Limpa a tabela
	let semanas = [document.querySelector('#semana1'), document.querySelector('#semana2'),document.querySelector('#semana3'), document.querySelector('#semana4'), document.querySelector('#semana5'), document.querySelector('#semana6')];
	for (var i = 0; i < semanas.length; i++) {
		for (var j = 0; j < 7 ; j++) {
			semanas[i].innerHTML = '';	
		}
	}


	console.log(semanas.length);
	let p = 0;
	let inc = false;
	for (var i = 0; i < semanas.length; i++) {
		console.log('funcionou');
		for (var j = 0; j < 7 ; j++) {
			
			let position = firstDayNumber;

			if(i == 0 && j==position) {
				inc = true;
			}

			if(inc==true) {
				p++;
				data.setDate(p);
				if(p!=data.getDate()) {
					inc = false;
				}
				else {
					semanas[i].innerHTML += '<td>'+p+'</td>';	
				}
				
				
				// Se eu colocar um número maior que 30 num mês que
				// tem 30 dias, o JS começa a contar de novo. 
				// 
			}
			else {
				semanas[i].innerHTML += '<td></td>';
			}
			
		}
			 	
	}
	// dia + 1 pra colocar no table;


}

changeData();