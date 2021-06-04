

var cbs = document.getElementsByClassName('cb');

function cbClick() {
    var input = document.querySelector('input[data-id="' + this.getAttribute('data-id') + '"]:not([type="checkbox"])');
    input.disabled = !this.checked;
}

for(var i in cbs) {
    cbs[i].onclick = cbClick;
}



var total = 0

var dinheiro = 0

var botaoCalcularValor = document.querySelector("#calcularValor");

console.log(botaoCalcularValor);

botaoCalcularValor.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#formValor");

	console.log(form);

	var simulado = form.valor.value;

	var dinheiro = form.dinheiro.value;

	console.log(simulado);

	console.log(dinheiro);

	
	

	var total = simulado - dinheiro;

	console.log(total);



	var tdSimulado = document.querySelector("#simu")

	tdSimulado.textContent = simulado;


	var tdDinheiro = document.querySelector("#dinu")

	tdDinheiro.textContent = dinheiro;



	var tdTotal = document.querySelector("#totu")

	tdTotal.textContent = total;

	var regiao = document.getElementsByName('regiao');


	

	//************** comeco do if */


	if (regiao[0].checked){ 


	
		//12 vezes

		var tdDoze = document.querySelector("#info-dozevezes");
		var doze = tdDoze.textContent;

		//console.log (doze);

		var doze = total * 1.22;

		//console.log (doze);

		tdDoze.textContent = doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozePres = document.querySelector("#infopres-dozevezes");
		var dozePres = tdDozePres.textContent;

		//console.log(dozePres);

		var dozePres = doze / 12;

		tdDozePres.textContent = dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDozeCom = document.querySelector("#com-dozevezes");
		var dozeCom = tdDozeCom.textContent;

		var dozeCom = doze * 0;

		tdDozeCom.textContent = dozeCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozeCliente = document.querySelector("#tabcliente-dozevezes");
		var dozeCliente = tdDozeCliente.textContent;

		var dozeCliente = dozePres;

		tdDozeCliente.textContent = dozeCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldoze = document.querySelector("#total-doze");
		var totaldoze  = tdtotaldoze.textContent;
		var totaldoze = doze;
		tdtotaldoze.textContent = totaldoze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		

		var opt12 = document.getElementById('opt12')
		opt12.innerHTML = `12x no cartão <strong>${doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`






		//11 vezes


		var tdOnce = document.querySelector("#info-oncevezes");
		var once = tdOnce.textContent;

		//console.log (once);

		var once = total * 1.198;

		//console.log (once);

		tdOnce.textContent = once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOncePres = document.querySelector("#infopres-oncevezes");
		var oncePres = tdOncePres.textContent;

		//console.log(oncePres);

		var oncePres = once / 11;

		tdOncePres.textContent = oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdOnceCom = document.querySelector("#com-oncevezes");
		var onceCom = tdOnceCom.textContent;

		var onceCom = once * 0;

		tdOnceCom.textContent = onceCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})




		var tdOnceCliente = document.querySelector("#tabcliente-oncevezes");
		var onceCliente = tdOnceCliente.textContent;

		var onceCliente = oncePres;

		tdOnceCliente.textContent = onceCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalonce = document.querySelector("#total-once");
		var totalonce  = tdtotalonce.textContent;
		var totalonce = once;
		tdtotalonce.textContent = totalonce.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt11 = document.getElementById('opt11')
		opt11.innerHTML = `11x no cartão <strong>${once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//10 vezes


		var tdDez = document.querySelector("#info-dezvezes");
		var dez = tdDez.textContent;

		//console.log (once);

		var dez = total * 1.187;

		//console.log (once);

		tdDez.textContent = dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDezPres = document.querySelector("#infopres-dezvezes");
		var dezPres = tdDezPres.textContent;

		//console.log(oncePres);

		var dezPres = dez / 10;

		tdDezPres.textContent = dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDezCom = document.querySelector("#com-dezvezes");
		var dezCom = tdDezCom.textContent;

		var dezCom = dez * 0;

		tdDezCom.textContent = dezCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDezCliente = document.querySelector("#tabcliente-dezvezes");
		var dezCliente = tdDezCliente.textContent;

		var dezCliente = dezPres;

		tdDezCliente.textContent = dezCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldez = document.querySelector("#total-dez");
		var totaldez  = tdtotaldez.textContent;
		var totaldez = dez;
		tdtotaldez.textContent = totaldez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		
		var opt10 = document.getElementById('opt10')
		opt10.innerHTML = `10x no cartão <strong>${dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`



		//9 vezes


		var tdNove = document.querySelector("#info-novevezes");
		var nove = tdNove.textContent;

		//console.log (once);

		var nove = total * 1.183;

		//console.log (once);

		tdNove.textContent = nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNovePres = document.querySelector("#infopres-novevezes");
		var novePres = tdNovePres.textContent;

		//console.log(oncePres);

		var novePres = nove / 9;

		tdNovePres.textContent = novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNoveCom = document.querySelector("#com-novevezes");
		var noveCom = tdNoveCom.textContent;

		var noveCom = nove * 0;

		tdNoveCom.textContent = noveCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdNoveCliente = document.querySelector("#tabcliente-novevezes");
		var noveCliente = tdNoveCliente.textContent;

		var noveCliente = novePres;

		tdNoveCliente.textContent = noveCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalnove = document.querySelector("#total-nove");
		var totalnove  = tdtotalnove.textContent;
		var totalnove = nove;
		tdtotalnove.textContent = totalnove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt9 = document.getElementById('opt9')
		opt9.innerHTML = ` 09x no cartão <strong>${nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//8 vezes


		var tdOito = document.querySelector("#info-oitovezes");
		var oito = tdOito.textContent;

		//console.log (once);

		var oito = total * 1.161;

		//console.log (once);

		tdOito.textContent = oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOitoPres = document.querySelector("#infopres-oitovezes");
		var oitoPres = tdOitoPres.textContent;

		//console.log(oncePres);

		var oitoPres = oito / 8;

		tdOitoPres.textContent = oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCom = document.querySelector("#com-oitovezes");
		var oitoCom = tdOitoCom.textContent;

		var oitoCom = oito * 0;

		tdOitoCom.textContent = oitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCliente = document.querySelector("#tabcliente-oitovezes");
		var oitoCliente = tdOitoCliente.textContent;

		var oitoCliente = oitoPres;

		tdOitoCliente.textContent = oitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaloito = document.querySelector("#total-oito");
		var totaloito  = tdtotaloito.textContent;
		var totaloito = oito;
		tdtotaloito.textContent = totaloito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt8 = document.getElementById('opt8')
		opt8.innerHTML = `08x no cartão <strong>${oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//7 vezes


		var tdSete = document.querySelector("#info-setevezes");
		var sete = tdSete.textContent;

		//console.log (once);

		var sete = total * 1.151;

		//console.log (once);

		tdSete.textContent = sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSetePres = document.querySelector("#infopres-setevezes");
		var setePres = tdSetePres.textContent;

		//console.log(oncePres);

		var setePres = sete / 7;

		tdSetePres.textContent = setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCom = document.querySelector("#com-setevezes");
		var seteCom = tdSeteCom.textContent;

		var seteCom = sete * 0;

		tdSeteCom.textContent = seteCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCliente = document.querySelector("#tabcliente-setevezes");
		var seteCliente = tdSeteCliente.textContent;

		var seteCliente = setePres;

		tdSeteCliente.textContent = seteCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalsete = document.querySelector("#total-sete");
		var totalsete  = tdtotalsete.textContent;
		var totalsete = sete;
		tdtotalsete.textContent = totalsete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt7 = document.getElementById('opt7')
		opt7.innerHTML = `07x no cartão <strong>${sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//6 vezes


		var tdSeis = document.querySelector("#info-seisvezes");
		var seis = tdSeis.textContent;

		//console.log (once);

		var seis = total * 1.135;

		//console.log (once);

		tdSeis.textContent = seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeisPres = document.querySelector("#infopres-seisvezes");
		var seisPres = tdSeisPres.textContent;

		//console.log(oncePres);

		var seisPres = seis / 6;

		tdSeisPres.textContent = seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCom = document.querySelector("#com-seisvezes");
		var seisCom = tdSeisCom.textContent;

		var seisCom = seis * 0;

		tdSeisCom.textContent = seisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCliente = document.querySelector("#tabcliente-seisvezes");
		var seisCliente = tdSeisCliente.textContent;

		var seisCliente = seisPres;

		tdSeisCliente.textContent = seisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalseis = document.querySelector("#total-seis");
		var totalseis  = tdtotalseis.textContent;
		var totalseis = seis;
		tdtotalseis.textContent = totalseis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt6 = document.getElementById('opt6')
		opt6.innerHTML = `06x no cartão <strong>${seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//5 vezes


		var tdCinco = document.querySelector("#info-cincovezes");
		var cinco = tdCinco.textContent;

		//console.log (once);

		var cinco = total * 1.123;

		//console.log (once);

		tdCinco.textContent = cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoPres = document.querySelector("#infopres-cincovezes");
		var cincoPres = tdCincoPres.textContent;

		//console.log(oncePres);

		var cincoPres = cinco / 5;

		tdCincoPres.textContent = cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoCom = document.querySelector("#com-cincovezes");
		var cincoCom = tdCincoCom.textContent;

		var cincoCom = cinco * 0;

		tdCincoCom.textContent = cincoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdCincoCliente = document.querySelector("#tabcliente-cincovezes");
		var cincoCliente = tdCincoCliente.textContent;

		var cincoCliente = cincoPres;

		tdCincoCliente.textContent = cincoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalcinco = document.querySelector("#total-cinco");
		var totalcinco  = tdtotalcinco.textContent;
		var totalcinco = cinco;
		tdtotalcinco.textContent = totalcinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt5 = document.getElementById('opt5')
		opt5.innerHTML = `05x no cartão <strong>${cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//4 vezes


		var tdQuatro = document.querySelector("#info-quatrovezes");
		var quatro = tdQuatro.textContent;

		//console.log (once);

		var quatro = total * 1.101;

		//console.log (once);

		tdQuatro.textContent = quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		var tdQuatroPres = document.querySelector("#infopres-quatrovezes");
		var quatroPres = tdQuatroPres.textContent;

		//console.log(oncePres);

		var quatroPres = quatro / 4;

		tdQuatroPres.textContent = quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdQuatroCom = document.querySelector("#com-quatrovezes");
		var quatroCom = tdQuatroCom.textContent;

		var quatroCom = quatro * 0;

		tdQuatroCom.textContent = quatroCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdQuatroCliente = document.querySelector("#tabcliente-quatrovezes");
		var quatroCliente = tdQuatroCliente.textContent;

		var quatroCliente = quatroPres;

		tdQuatroCliente.textContent = quatroCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalquatro = document.querySelector("#total-quatro");
		var totalquatro  = tdtotalquatro.textContent;
		var totalquatro = quatro;
		tdtotalquatro.textContent = totalquatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt4 = document.getElementById('opt4')
		opt4.innerHTML = `04x no cartão <strong>${quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//3 vezes


		var tdTres = document.querySelector("#info-tresvezes");
		var tres = tdTres.textContent;

		//console.log (once);

		var tres = total * 1.092;

		//console.log (once);

		tdTres.textContent = tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresPres = document.querySelector("#infopres-tresvezes");
		var tresPres = tdTresPres.textContent;

		//console.log(oncePres);

		var tresPres = tres / 3;

		tdTresPres.textContent = tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresCom = document.querySelector("#com-tresvezes");
		var tresCom = tdTresCom.textContent;

		var tresCom = tres * 0;

		tdTresCom.textContent = tresCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdTresCliente = document.querySelector("#tabcliente-tresvezes");
		var tresCliente = tdTresCliente.textContent;

		var tresCliente = tresPres;

		tdTresCliente.textContent = tresCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaltres = document.querySelector("#total-tres");
		var totaltres  = tdtotaltres.textContent;
		var totaltres = tres;
		tdtotaltres.textContent = totaltres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt3 = document.getElementById('opt3')
		opt3.innerHTML = `03x no cartão <strong>${tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//2 vezes


		var tdDois = document.querySelector("#info-doisvezes");
		var dois = tdDois.textContent;

		//console.log (once);

		var dois = total * 1.075;

		//console.log (once);

		tdDois.textContent = dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDoisPres = document.querySelector("#infopres-doisvezes");
		var doisPres = tdDoisPres.textContent;

		//console.log(oncePres);

		var doisPres = dois / 2;

		tdDoisPres.textContent = doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCom = document.querySelector("#com-doisvezes");
		var doisCom = tdDoisCom.textContent;

		var doisCom = dois * 0;

		tdDoisCom.textContent = doisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCliente = document.querySelector("#tabcliente-doisvezes");
		var doisCliente = tdDoisCliente.textContent;

		var doisCliente = doisPres;

		tdDoisCliente.textContent = doisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldois = document.querySelector("#total-dois");
		var totaldois  = tdtotaldois.textContent;
		var totaldois = dois;
		tdtotaldois.textContent = totaldois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt2 = document.getElementById('opt2')
		opt2.innerHTML = `02x no cartão <strong>${dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//1 vezes


		var tdUm = document.querySelector("#info-umvezes");
		var um = tdUm.textContent;

		//console.log (once);

		var um = total * 1.065;

		//console.log (once);

		tdUm.textContent = um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmPres = document.querySelector("#infopres-umvezes");
		var umPres = tdUmPres.textContent;

		//console.log(oncePres);

		var umPres = um;

		tdUmPres.textContent = umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmCom = document.querySelector("#com-umvezes");
		var umCom = tdUmCom.textContent;

		var umCom = um * 0;

		tdUmCom.textContent = umCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdUmCliente = document.querySelector("#tabcliente-umvezes");
		var umCliente = tdUmCliente.textContent;

		var umCliente = umPres;

		tdUmCliente.textContent = umCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalum = document.querySelector("#total-um");
		var totalum  = tdtotalum.textContent;
		var totalum = um;
		tdtotalum.textContent = totalum.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt1 = document.getElementById('opt1')
		opt1.innerHTML = `01x no cartão <strong>${um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//Débito----------------------------------------------------------------------------------------------------------------



		var tdDebito = document.querySelector("#info-debito");
		var debito = tdDebito.textContent;

		//console.log (once);

		var debito = total * 1.018;

		//console.log (once);

		tdDebito.textContent = debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoPres = document.querySelector("#infopres-debito");
		var debitoPres = tdDebitoPres.textContent;

		//console.log(oncePres);

		var debitoPres = debito;

		tdDebitoPres.textContent = debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoCom = document.querySelector("#com-debito");
		var debitoCom = tdDebitoCom.textContent;

		var debitoCom = um * 0;

		tdDebitoCom.textContent = debitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDebitoCliente = document.querySelector("#tabcliente-debito");
		var debitoCliente = tdDebitoCliente.textContent;

		var debitoCliente = debitoPres;

		tdDebitoCliente.textContent = debitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldebito = document.querySelector("#total-debito");
		var totaldebito = tdtotaldebito.textContent;
		var totaldebito = debito;
		tdtotaldebito.textContent = totaldebito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var optdeb = document.getElementById('optdeb')
		optdeb.innerHTML = `01x no cartão de débito <strong>${debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

	}

	//************************* faixa 1************************* */


	if (regiao[1].checked){ 


			
		//12 vezes

		var tdDoze = document.querySelector("#info-dozevezes");
		var doze = tdDoze.textContent;

		//console.log (doze);

		var doze = total * 1.22905;

		//console.log (doze);

		tdDoze.textContent = doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozePres = document.querySelector("#infopres-dozevezes");
		var dozePres = tdDozePres.textContent;

		//console.log(dozePres);

		var dozePres = doze / 12;

		tdDozePres.textContent = dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDozeCom = document.querySelector("#com-dozevezes");
		var dozeCom = tdDozeCom.textContent;

		var dozeCom = doze * 0.01;

		tdDozeCom.textContent = dozeCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozeCliente = document.querySelector("#tabcliente-dozevezes");
		var dozeCliente = tdDozeCliente.textContent;

		var dozeCliente = dozePres;

		tdDozeCliente.textContent = dozeCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldoze = document.querySelector("#total-doze");
		var totaldoze  = tdtotaldoze.textContent;
		var totaldoze = doze;
		tdtotaldoze.textContent = totaldoze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		
		

		var opt12 = document.getElementById('opt12')
		opt12.innerHTML = `12x no cartão <strong>${doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`






		//11 vezes


		var tdOnce = document.querySelector("#info-oncevezes");
		var once = tdOnce.textContent;

		//console.log (once);

		var once = total * 1.21132;

		//console.log (once);

		tdOnce.textContent = once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOncePres = document.querySelector("#infopres-oncevezes");
		var oncePres = tdOncePres.textContent;

		//console.log(oncePres);

		var oncePres = once / 11;

		tdOncePres.textContent = oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdOnceCom = document.querySelector("#com-oncevezes");
		var onceCom = tdOnceCom.textContent;

		var onceCom = once * 0.01;

		tdOnceCom.textContent = onceCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})




		var tdOnceCliente = document.querySelector("#tabcliente-oncevezes");
		var onceCliente = tdOnceCliente.textContent;

		var onceCliente = oncePres;

		tdOnceCliente.textContent = onceCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalonce = document.querySelector("#total-once");
		var totalonce  = tdtotalonce.textContent;
		var totalonce = once;
		tdtotalonce.textContent = totalonce.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt11 = document.getElementById('opt11')
		opt11.innerHTML = `11x no cartão <strong>${once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//10 vezes


		var tdDez = document.querySelector("#info-dezvezes");
		var dez = tdDez.textContent;

		//console.log (once);

		var dez = total * 1.20012;

		//console.log (once);

		tdDez.textContent = dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDezPres = document.querySelector("#infopres-dezvezes");
		var dezPres = tdDezPres.textContent;

		//console.log(oncePres);

		var dezPres = dez / 10;

		tdDezPres.textContent = dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDezCom = document.querySelector("#com-dezvezes");
		var dezCom = tdDezCom.textContent;

		var dezCom = dez * 0.01;

		tdDezCom.textContent = dezCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDezCliente = document.querySelector("#tabcliente-dezvezes");
		var dezCliente = tdDezCliente.textContent;

		var dezCliente = dezPres;

		tdDezCliente.textContent = dezCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldez = document.querySelector("#total-dez");
		var totaldez  = tdtotaldez.textContent;
		var totaldez = dez;
		tdtotaldez.textContent = totaldez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt10 = document.getElementById('opt10')
		opt10.innerHTML = `10x no cartão <strong>${dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`



		//9 vezes


		var tdNove = document.querySelector("#info-novevezes");
		var nove = tdNove.textContent;

		//console.log (once);

		var nove = total * 1.19601;

		//console.log (once);

		tdNove.textContent = nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNovePres = document.querySelector("#infopres-novevezes");
		var novePres = tdNovePres.textContent;

		//console.log(oncePres);

		var novePres = nove / 9;

		tdNovePres.textContent = novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNoveCom = document.querySelector("#com-novevezes");
		var noveCom = tdNoveCom.textContent;

		var noveCom = nove * 0.01;

		tdNoveCom.textContent = noveCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdNoveCliente = document.querySelector("#tabcliente-novevezes");
		var noveCliente = tdNoveCliente.textContent;

		var noveCliente = novePres;

		tdNoveCliente.textContent = noveCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalnove = document.querySelector("#total-nove");
		var totalnove  = tdtotalnove.textContent;
		var totalnove = nove;
		tdtotalnove.textContent = totalnove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt9 = document.getElementById('opt9')
		opt9.innerHTML = ` 09x no cartão <strong>${nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//8 vezes


		var tdOito = document.querySelector("#info-oitovezes");
		var oito = tdOito.textContent;

		//console.log (once);

		var oito = total * 1.1737;

		//console.log (once);

		tdOito.textContent = oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOitoPres = document.querySelector("#infopres-oitovezes");
		var oitoPres = tdOitoPres.textContent;

		//console.log(oncePres);

		var oitoPres = oito / 8;

		tdOitoPres.textContent = oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCom = document.querySelector("#com-oitovezes");
		var oitoCom = tdOitoCom.textContent;

		var oitoCom = oito * 0.01;

		tdOitoCom.textContent = oitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCliente = document.querySelector("#tabcliente-oitovezes");
		var oitoCliente = tdOitoCliente.textContent;

		var oitoCliente = oitoPres;

		tdOitoCliente.textContent = oitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaloito = document.querySelector("#total-oito");
		var totaloito  = tdtotaloito.textContent;
		var totaloito = oito;
		tdtotaloito.textContent = totaloito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt8 = document.getElementById('opt8')
		opt8.innerHTML = `08x no cartão <strong>${oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//7 vezes


		var tdSete = document.querySelector("#info-setevezes");
		var sete = tdSete.textContent;

		//console.log (once);

		var sete = total * 1.1635;

		//console.log (once);

		tdSete.textContent = sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSetePres = document.querySelector("#infopres-setevezes");
		var setePres = tdSetePres.textContent;

		//console.log(oncePres);

		var setePres = sete / 7;

		tdSetePres.textContent = setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCom = document.querySelector("#com-setevezes");
		var seteCom = tdSeteCom.textContent;

		var seteCom = sete * 0.01;

		tdSeteCom.textContent = seteCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCliente = document.querySelector("#tabcliente-setevezes");
		var seteCliente = tdSeteCliente.textContent;

		var seteCliente = setePres;

		tdSeteCliente.textContent = seteCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalsete = document.querySelector("#total-sete");
		var totalsete  = tdtotalsete.textContent;
		var totalsete = sete;
		tdtotalsete.textContent = totalsete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt7 = document.getElementById('opt7')
		opt7.innerHTML = `07x no cartão <strong>${sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//6 vezes


		var tdSeis = document.querySelector("#info-seisvezes");
		var seis = tdSeis.textContent;

		//console.log (once);

		var seis = total * 1.1472;

		//console.log (once);

		tdSeis.textContent = seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeisPres = document.querySelector("#infopres-seisvezes");
		var seisPres = tdSeisPres.textContent;

		//console.log(oncePres);

		var seisPres = seis / 6;

		tdSeisPres.textContent = seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCom = document.querySelector("#com-seisvezes");
		var seisCom = tdSeisCom.textContent;

		var seisCom = seis * 0.01;

		tdSeisCom.textContent = seisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCliente = document.querySelector("#tabcliente-seisvezes");
		var seisCliente = tdSeisCliente.textContent;

		var seisCliente = seisPres;

		tdSeisCliente.textContent = seisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalseis = document.querySelector("#total-seis");
		var totalseis  = tdtotalseis.textContent;
		var totalseis = seis;
		tdtotalseis.textContent = totalseis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt6 = document.getElementById('opt6')
		opt6.innerHTML = `06x no cartão <strong>${seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//5 vezes


		var tdCinco = document.querySelector("#info-cincovezes");
		var cinco = tdCinco.textContent;

		//console.log (once);

		var cinco = total * 1.135;

		//console.log (once);

		tdCinco.textContent = cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoPres = document.querySelector("#infopres-cincovezes");
		var cincoPres = tdCincoPres.textContent;

		//console.log(oncePres);

		var cincoPres = cinco / 5;

		tdCincoPres.textContent = cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoCom = document.querySelector("#com-cincovezes");
		var cincoCom = tdCincoCom.textContent;

		var cincoCom = cinco * 0.01;

		tdCincoCom.textContent = cincoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdCincoCliente = document.querySelector("#tabcliente-cincovezes");
		var cincoCliente = tdCincoCliente.textContent;

		var cincoCliente = cincoPres;

		tdCincoCliente.textContent = cincoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalcinco = document.querySelector("#total-cinco");
		var totalcinco  = tdtotalcinco.textContent;
		var totalcinco = cinco;
		tdtotalcinco.textContent = totalcinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt5 = document.getElementById('opt5')
		opt5.innerHTML = `05x no cartão <strong>${cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//4 vezes


		var tdQuatro = document.querySelector("#info-quatrovezes");
		var quatro = tdQuatro.textContent;

		//console.log (once);

		var quatro = total * 1.11273;

		//console.log (once);

		tdQuatro.textContent = quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		var tdQuatroPres = document.querySelector("#infopres-quatrovezes");
		var quatroPres = tdQuatroPres.textContent;

		//console.log(oncePres);

		var quatroPres = quatro / 4;

		tdQuatroPres.textContent = quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdQuatroCom = document.querySelector("#com-quatrovezes");
		var quatroCom = tdQuatroCom.textContent;

		var quatroCom = quatro * 0.01;

		tdQuatroCom.textContent = quatroCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdQuatroCliente = document.querySelector("#tabcliente-quatrovezes");
		var quatroCliente = tdQuatroCliente.textContent;

		var quatroCliente = quatroPres;

		tdQuatroCliente.textContent = quatroCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalquatro = document.querySelector("#total-quatro");
		var totalquatro  = tdtotalquatro.textContent;
		var totalquatro = quatro;
		tdtotalquatro.textContent = totalquatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt4 = document.getElementById('opt4')
		opt4.innerHTML = `04x no cartão <strong>${quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//3 vezes


		var tdTres = document.querySelector("#info-tresvezes");
		var tres = tdTres.textContent;

		//console.log (once);

		var tres = total * 1.10352;

		//console.log (once);

		tdTres.textContent = tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresPres = document.querySelector("#infopres-tresvezes");
		var tresPres = tdTresPres.textContent;

		//console.log(oncePres);

		var tresPres = tres / 3;

		tdTresPres.textContent = tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresCom = document.querySelector("#com-tresvezes");
		var tresCom = tdTresCom.textContent;

		var tresCom = tres * 0.01;

		tdTresCom.textContent = tresCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdTresCliente = document.querySelector("#tabcliente-tresvezes");
		var tresCliente = tdTresCliente.textContent;

		var tresCliente = tresPres;

		tdTresCliente.textContent = tresCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaltres = document.querySelector("#total-tres");
		var totaltres  = tdtotaltres.textContent;
		var totaltres = tres;
		tdtotaltres.textContent = totaltres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt3 = document.getElementById('opt3')
		opt3.innerHTML = `03x no cartão <strong>${tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//2 vezes


		var tdDois = document.querySelector("#info-doisvezes");
		var dois = tdDois.textContent;

		//console.log (once);

		var dois = total * 1.08631;

		//console.log (once);

		tdDois.textContent = dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDoisPres = document.querySelector("#infopres-doisvezes");
		var doisPres = tdDoisPres.textContent;

		//console.log(oncePres);

		var doisPres = dois / 2;

		tdDoisPres.textContent = doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCom = document.querySelector("#com-doisvezes");
		var doisCom = tdDoisCom.textContent;

		var doisCom = dois * 0.01;

		tdDoisCom.textContent = doisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCliente = document.querySelector("#tabcliente-doisvezes");
		var doisCliente = tdDoisCliente.textContent;

		var doisCliente = doisPres;

		tdDoisCliente.textContent = doisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldois = document.querySelector("#total-dois");
		var totaldois  = tdtotaldois.textContent;
		var totaldois = dois;
		tdtotaldois.textContent = totaldois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt2 = document.getElementById('opt2')
		opt2.innerHTML = `02x no cartão <strong>${dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//1 vezes


		var tdUm = document.querySelector("#info-umvezes");
		var um = tdUm.textContent;

		//console.log (once);

		var um = total * 1.07608;

		//console.log (once);

		tdUm.textContent = um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmPres = document.querySelector("#infopres-umvezes");
		var umPres = tdUmPres.textContent;

		//console.log(oncePres);

		var umPres = um;

		tdUmPres.textContent = umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmCom = document.querySelector("#com-umvezes");
		var umCom = tdUmCom.textContent;

		var umCom = um * 0.01;

		tdUmCom.textContent = umCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdUmCliente = document.querySelector("#tabcliente-umvezes");
		var umCliente = tdUmCliente.textContent;

		var umCliente = umPres;

		tdUmCliente.textContent = umCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalum = document.querySelector("#total-um");
		var totalum  = tdtotalum.textContent;
		var totalum = um;
		tdtotalum.textContent = totalum.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt1 = document.getElementById('opt1')
		opt1.innerHTML = `01x no cartão <strong>${um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//Débito----------------------------------------------------------------------------------------------------------------



		var tdDebito = document.querySelector("#info-debito");
		var debito = tdDebito.textContent;

		//console.log (once);

		var debito = total * 1.018;

		//console.log (once);

		tdDebito.textContent = debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoPres = document.querySelector("#infopres-debito");
		var debitoPres = tdDebitoPres.textContent;

		//console.log(oncePres);

		var debitoPres = debito;

		tdDebitoPres.textContent = debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoCom = document.querySelector("#com-debito");
		var debitoCom = tdDebitoCom.textContent;

		var debitoCom = um * 0;

		tdDebitoCom.textContent = debitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDebitoCliente = document.querySelector("#tabcliente-debito");
		var debitoCliente = tdDebitoCliente.textContent;

		var debitoCliente = debitoPres;

		tdDebitoCliente.textContent = debitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldebito = document.querySelector("#total-debito");
		var totaldebito  = tdtotaldebito.textContent;
		var totaldebito = debito;
		tdtotaldebito.textContent = totaldebito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var optdeb = document.getElementById('optdeb')
		optdeb.innerHTML = `01x no cartão de débito <strong>${debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

	}


	if (regiao[2].checked){ 


		





	

	
		//12 vezes

		var tdDoze = document.querySelector("#info-dozevezes");
		var doze = tdDoze.textContent;

		//console.log (doze);

		var doze = total * 1.24293;

		//console.log (doze);

		tdDoze.textContent = doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozePres = document.querySelector("#infopres-dozevezes");
		var dozePres = tdDozePres.textContent;

		//console.log(dozePres);

		var dozePres = doze / 12;

		tdDozePres.textContent = dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDozeCom = document.querySelector("#com-dozevezes");
		var dozeCom = tdDozeCom.textContent;

		var dozeCom = doze * 0.02;

		tdDozeCom.textContent = dozeCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozeCliente = document.querySelector("#tabcliente-dozevezes");
		var dozeCliente = tdDozeCliente.textContent;

		var dozeCliente = dozePres;

		tdDozeCliente.textContent = dozeCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldoze = document.querySelector("#total-doze");
		var totaldoze  = tdtotaldoze.textContent;
		var totaldoze = doze;
		tdtotaldoze.textContent = totaldoze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		
		

		var opt12 = document.getElementById('opt12')
		opt12.innerHTML = `12x no cartão <strong>${doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`






		//11 vezes


		var tdOnce = document.querySelector("#info-oncevezes");
		var once = tdOnce.textContent;

		//console.log (once);

		var once = total * 1.2249;

		//console.log (once);

		tdOnce.textContent = once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOncePres = document.querySelector("#infopres-oncevezes");
		var oncePres = tdOncePres.textContent;

		//console.log(oncePres);

		var oncePres = once / 11;

		tdOncePres.textContent = oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdOnceCom = document.querySelector("#com-oncevezes");
		var onceCom = tdOnceCom.textContent;

		var onceCom = once * 0.02;

		tdOnceCom.textContent = onceCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})




		var tdOnceCliente = document.querySelector("#tabcliente-oncevezes");
		var onceCliente = tdOnceCliente.textContent;

		var onceCliente = oncePres;

		tdOnceCliente.textContent = onceCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalonce = document.querySelector("#total-once");
		var totalonce  = tdtotalonce.textContent;
		var totalonce = once;
		tdtotalonce.textContent = totalonce.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt11 = document.getElementById('opt11')
		opt11.innerHTML = `11x no cartão <strong>${once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//10 vezes


		var tdDez = document.querySelector("#info-dezvezes");
		var dez = tdDez.textContent;

		//console.log (once);

		var dez = total * 1.21349;

		//console.log (once);

		tdDez.textContent = dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDezPres = document.querySelector("#infopres-dezvezes");
		var dezPres = tdDezPres.textContent;

		//console.log(oncePres);

		var dezPres = dez / 10;

		tdDezPres.textContent = dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDezCom = document.querySelector("#com-dezvezes");
		var dezCom = tdDezCom.textContent;

		var dezCom = dez * 0.02;

		tdDezCom.textContent = dezCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDezCliente = document.querySelector("#tabcliente-dezvezes");
		var dezCliente = tdDezCliente.textContent;

		var dezCliente = dezPres;

		tdDezCliente.textContent = dezCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldez = document.querySelector("#total-dez");
		var totaldez  = tdtotaldez.textContent;
		var totaldez = dez;
		tdtotaldez.textContent = totaldez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt10 = document.getElementById('opt10')
		opt10.innerHTML = `10x no cartão <strong>${dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`



		//9 vezes


		var tdNove = document.querySelector("#info-novevezes");
		var nove = tdNove.textContent;

		//console.log (once);

		var nove = total * 1.20925;

		//console.log (once);

		tdNove.textContent = nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNovePres = document.querySelector("#infopres-novevezes");
		var novePres = tdNovePres.textContent;

		//console.log(oncePres);

		var novePres = nove / 9;

		tdNovePres.textContent = novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNoveCom = document.querySelector("#com-novevezes");
		var noveCom = tdNoveCom.textContent;

		var noveCom = nove * 0.02;

		tdNoveCom.textContent = noveCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdNoveCliente = document.querySelector("#tabcliente-novevezes");
		var noveCliente = tdNoveCliente.textContent;

		var noveCliente = novePres;

		tdNoveCliente.textContent = noveCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalnove = document.querySelector("#total-nove");
		var totalnove  = tdtotalnove.textContent;
		var totalnove = nove;
		tdtotalnove.textContent = totalnove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt9 = document.getElementById('opt9')
		opt9.innerHTML = ` 09x no cartão <strong>${nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//8 vezes


		var tdOito = document.querySelector("#info-oitovezes");
		var oito = tdOito.textContent;

		//console.log (once);

		var oito = total * 1.18666;

		//console.log (once);

		tdOito.textContent = oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOitoPres = document.querySelector("#infopres-oitovezes");
		var oitoPres = tdOitoPres.textContent;

		//console.log(oncePres);

		var oitoPres = oito / 8;

		tdOitoPres.textContent = oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCom = document.querySelector("#com-oitovezes");
		var oitoCom = tdOitoCom.textContent;

		var oitoCom = oito * 0.02;

		tdOitoCom.textContent = oitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCliente = document.querySelector("#tabcliente-oitovezes");
		var oitoCliente = tdOitoCliente.textContent;

		var oitoCliente = oitoPres;

		tdOitoCliente.textContent = oitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaloito = document.querySelector("#total-oito");
		var totaloito  = tdtotaloito.textContent;
		var totaloito = oito;
		tdtotaloito.textContent = totaloito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt8 = document.getElementById('opt8')
		opt8.innerHTML = `08x no cartão <strong>${oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//7 vezes


		var tdSete = document.querySelector("#info-setevezes");
		var sete = tdSete.textContent;

		//console.log (once);

		var sete = total * 1.1763;

		//console.log (once);

		tdSete.textContent = sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSetePres = document.querySelector("#infopres-setevezes");
		var setePres = tdSetePres.textContent;

		//console.log(oncePres);

		var setePres = sete / 7;

		tdSetePres.textContent = setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCom = document.querySelector("#com-setevezes");
		var seteCom = tdSeteCom.textContent;

		var seteCom = sete * 0.02;

		tdSeteCom.textContent = seteCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCliente = document.querySelector("#tabcliente-setevezes");
		var seteCliente = tdSeteCliente.textContent;

		var seteCliente = setePres;

		tdSeteCliente.textContent = seteCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalsete = document.querySelector("#total-sete");
		var totalsete  = tdtotalsete.textContent;
		var totalsete = sete;
		tdtotalsete.textContent = totalsete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt7 = document.getElementById('opt7')
		opt7.innerHTML = `07x no cartão <strong>${sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//6 vezes


		var tdSeis = document.querySelector("#info-seisvezes");
		var seis = tdSeis.textContent;

		//console.log (once);

		var seis = total * 1.15969;

		//console.log (once);

		tdSeis.textContent = seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeisPres = document.querySelector("#infopres-seisvezes");
		var seisPres = tdSeisPres.textContent;

		//console.log(oncePres);

		var seisPres = seis / 6;

		tdSeisPres.textContent = seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCom = document.querySelector("#com-seisvezes");
		var seisCom = tdSeisCom.textContent;

		var seisCom = seis * 0.02;

		tdSeisCom.textContent = seisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCliente = document.querySelector("#tabcliente-seisvezes");
		var seisCliente = tdSeisCliente.textContent;

		var seisCliente = seisPres;

		tdSeisCliente.textContent = seisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

			var tdtotalseis = document.querySelector("#total-seis");
		var totalseis  = tdtotalseis.textContent;
		var totalseis = seis;
		tdtotalseis.textContent = totalseis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt6 = document.getElementById('opt6')
		opt6.innerHTML = `06x no cartão <strong>${seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//5 vezes


		var tdCinco = document.querySelector("#info-cincovezes");
		var cinco = tdCinco.textContent;

		//console.log (once);

		var cinco = total * 1.14726;

		//console.log (once);

		tdCinco.textContent = cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoPres = document.querySelector("#infopres-cincovezes");
		var cincoPres = tdCincoPres.textContent;

		//console.log(oncePres);

		var cincoPres = cinco / 5;

		tdCincoPres.textContent = cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoCom = document.querySelector("#com-cincovezes");
		var cincoCom = tdCincoCom.textContent;

		var cincoCom = cinco * 0.02;

		tdCincoCom.textContent = cincoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdCincoCliente = document.querySelector("#tabcliente-cincovezes");
		var cincoCliente = tdCincoCliente.textContent;

		var cincoCliente = cincoPres;

		tdCincoCliente.textContent = cincoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalcinco = document.querySelector("#total-cinco");
		var totalcinco  = tdtotalcinco.textContent;
		var totalcinco = cinco;
		tdtotalcinco.textContent = totalcinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt5 = document.getElementById('opt5')
		opt5.innerHTML = `05x no cartão <strong>${cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//4 vezes


		var tdQuatro = document.querySelector("#info-quatrovezes");
		var quatro = tdQuatro.textContent;

		//console.log (once);

		var quatro = total * 1.12467;

		//console.log (once);

		tdQuatro.textContent = quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		var tdQuatroPres = document.querySelector("#infopres-quatrovezes");
		var quatroPres = tdQuatroPres.textContent;

		//console.log(oncePres);

		var quatroPres = quatro / 4;

		tdQuatroPres.textContent = quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdQuatroCom = document.querySelector("#com-quatrovezes");
		var quatroCom = tdQuatroCom.textContent;

		var quatroCom = quatro * 0.02;

		tdQuatroCom.textContent = quatroCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdQuatroCliente = document.querySelector("#tabcliente-quatrovezes");
		var quatroCliente = tdQuatroCliente.textContent;

		var quatroCliente = quatroPres;

		tdQuatroCliente.textContent = quatroCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalquatro = document.querySelector("#total-quatro");
		var totalquatro  = tdtotalquatro.textContent;
		var totalquatro = quatro;
		tdtotalquatro.textContent = totalquatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt4 = document.getElementById('opt4')
		opt4.innerHTML = `04x no cartão <strong>${quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//3 vezes


		var tdTres = document.querySelector("#info-tresvezes");
		var tres = tdTres.textContent;

		//console.log (once);

		var tres = total * 1.11537;

		//console.log (once);

		tdTres.textContent = tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresPres = document.querySelector("#infopres-tresvezes");
		var tresPres = tdTresPres.textContent;

		//console.log(oncePres);

		var tresPres = tres / 3;

		tdTresPres.textContent = tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresCom = document.querySelector("#com-tresvezes");
		var tresCom = tdTresCom.textContent;

		var tresCom = tres * 0.02;

		tdTresCom.textContent = tresCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdTresCliente = document.querySelector("#tabcliente-tresvezes");
		var tresCliente = tdTresCliente.textContent;

		var tresCliente = tresPres;

		tdTresCliente.textContent = tresCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaltres = document.querySelector("#total-tres");
		var totaltres  = tdtotaltres.textContent;
		var totaltres = tres;
		tdtotaltres.textContent = totaltres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt3 = document.getElementById('opt3')
		opt3.innerHTML = `03x no cartão <strong>${tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//2 vezes


		var tdDois = document.querySelector("#info-doisvezes");
		var dois = tdDois.textContent;

		//console.log (once);

		var dois = total * 1.09784;

		//console.log (once);

		tdDois.textContent = dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDoisPres = document.querySelector("#infopres-doisvezes");
		var doisPres = tdDoisPres.textContent;

		//console.log(oncePres);

		var doisPres = dois / 2;

		tdDoisPres.textContent = doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCom = document.querySelector("#com-doisvezes");
		var doisCom = tdDoisCom.textContent;

		var doisCom = dois * 0.02;

		tdDoisCom.textContent = doisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCliente = document.querySelector("#tabcliente-doisvezes");
		var doisCliente = tdDoisCliente.textContent;

		var doisCliente = doisPres;

		tdDoisCliente.textContent = doisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldois = document.querySelector("#total-dois");
		var totaldois  = tdtotaldois.textContent;
		var totaldois = dois;
		tdtotaldois.textContent = totaldois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt2 = document.getElementById('opt2')
		opt2.innerHTML = `02x no cartão <strong>${dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//1 vezes


		var tdUm = document.querySelector("#info-umvezes");
		var um = tdUm.textContent;

		//console.log (once);

		var um = total * 1.08742;

		//console.log (once);

		tdUm.textContent = um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmPres = document.querySelector("#infopres-umvezes");
		var umPres = tdUmPres.textContent;

		//console.log(oncePres);

		var umPres = um;

		tdUmPres.textContent = umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmCom = document.querySelector("#com-umvezes");
		var umCom = tdUmCom.textContent;

		var umCom = um * 0.02;

		tdUmCom.textContent = umCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdUmCliente = document.querySelector("#tabcliente-umvezes");
		var umCliente = tdUmCliente.textContent;

		var umCliente = umPres;

		tdUmCliente.textContent = umCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalum = document.querySelector("#total-um");
		var totalum  = tdtotalum.textContent;
		var totalum = um;
		tdtotalum.textContent = totalum.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt1 = document.getElementById('opt1')
		opt1.innerHTML = `01x no cartão <strong>${um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//Débito----------------------------------------------------------------------------------------------------------------



		var tdDebito = document.querySelector("#info-debito");
		var debito = tdDebito.textContent;

		//console.log (once);

		var debito = total * 1.018;

		//console.log (once);

		tdDebito.textContent = debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoPres = document.querySelector("#infopres-debito");
		var debitoPres = tdDebitoPres.textContent;

		//console.log(oncePres);

		var debitoPres = debito;

		tdDebitoPres.textContent = debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoCom = document.querySelector("#com-debito");
		var debitoCom = tdDebitoCom.textContent;

		var debitoCom = um * 0;

		tdDebitoCom.textContent = debitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDebitoCliente = document.querySelector("#tabcliente-debito");
		var debitoCliente = tdDebitoCliente.textContent;

		var debitoCliente = debitoPres;

		tdDebitoCliente.textContent = debitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldebito = document.querySelector("#total-debito");
		var totaldebito = tdtotaldebito.textContent;
		var totaldebito = debito;
		tdtotaldebito.textContent = totaldebito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var optdeb = document.getElementById('optdeb')
		optdeb.innerHTML = `01x no cartão de débito <strong>${debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

	}

if (regiao[3].checked){ 


	

	
		//12 vezes

		var tdDoze = document.querySelector("#info-dozevezes");
		var doze = tdDoze.textContent;

		//console.log (doze);

		var doze = total * 1.25713;

		//console.log (doze);

		tdDoze.textContent = doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozePres = document.querySelector("#infopres-dozevezes");
		var dozePres = tdDozePres.textContent;

		//console.log(dozePres);

		var dozePres = doze / 12;

		tdDozePres.textContent = dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDozeCom = document.querySelector("#com-dozevezes");
		var dozeCom = tdDozeCom.textContent;

		var dozeCom = doze * 0.03;

		tdDozeCom.textContent = dozeCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozeCliente = document.querySelector("#tabcliente-dozevezes");
		var dozeCliente = tdDozeCliente.textContent;

		var dozeCliente = dozePres;

		tdDozeCliente.textContent = dozeCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdtotaldoze = document.querySelector("#total-doze");
		var totaldoze  = tdtotaldoze.textContent;
		var totaldoze = doze;
		tdtotaldoze.textContent = totaldoze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		

		var opt12 = document.getElementById('opt12')
		opt12.innerHTML = `12x no cartão <strong>${doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`






		//11 vezes


		var tdOnce = document.querySelector("#info-oncevezes");
		var once = tdOnce.textContent;

		//console.log (once);

		var once = total * 1.23879;

		//console.log (once);

		tdOnce.textContent = once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOncePres = document.querySelector("#infopres-oncevezes");
		var oncePres = tdOncePres.textContent;

		//console.log(oncePres);

		var oncePres = once / 11;

		tdOncePres.textContent = oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdOnceCom = document.querySelector("#com-oncevezes");
		var onceCom = tdOnceCom.textContent;

		var onceCom = once * 0.03;

		tdOnceCom.textContent = onceCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})




		var tdOnceCliente = document.querySelector("#tabcliente-oncevezes");
		var onceCliente = tdOnceCliente.textContent;

		var onceCliente = oncePres;

		tdOnceCliente.textContent = onceCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalonce = document.querySelector("#total-once");
		var totalonce  = tdtotalonce.textContent;
		var totalonce = once;
		tdtotalonce.textContent = totalonce.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt11 = document.getElementById('opt11')
		opt11.innerHTML = `11x no cartão <strong>${once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//10 vezes


		var tdDez = document.querySelector("#info-dezvezes");
		var dez = tdDez.textContent;

		//console.log (once);

		var dez = total * 1.22722;

		//console.log (once);

		tdDez.textContent = dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDezPres = document.querySelector("#infopres-dezvezes");
		var dezPres = tdDezPres.textContent;

		//console.log(oncePres);

		var dezPres = dez / 10;

		tdDezPres.textContent = dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDezCom = document.querySelector("#com-dezvezes");
		var dezCom = tdDezCom.textContent;

		var dezCom = dez * 0.03;

		tdDezCom.textContent = dezCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDezCliente = document.querySelector("#tabcliente-dezvezes");
		var dezCliente = tdDezCliente.textContent;

		var dezCliente = dezPres;

		tdDezCliente.textContent = dezCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldez = document.querySelector("#total-dez");
		var totaldez  = tdtotaldez.textContent;
		var totaldez = dez;
		tdtotaldez.textContent = totaldez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt10 = document.getElementById('opt10')
		opt10.innerHTML = `10x no cartão <strong>${dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`



		//9 vezes


		var tdNove = document.querySelector("#info-novevezes");
		var nove = tdNove.textContent;

		//console.log (once);

		var nove = total * 1.22281;

		//console.log (once);

		tdNove.textContent = nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNovePres = document.querySelector("#infopres-novevezes");
		var novePres = tdNovePres.textContent;

		//console.log(oncePres);

		var novePres = nove / 9;

		tdNovePres.textContent = novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNoveCom = document.querySelector("#com-novevezes");
		var noveCom = tdNoveCom.textContent;

		var noveCom = nove * 0.03;

		tdNoveCom.textContent = noveCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdNoveCliente = document.querySelector("#tabcliente-novevezes");
		var noveCliente = tdNoveCliente.textContent;

		var noveCliente = novePres;

		tdNoveCliente.textContent = noveCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalnove = document.querySelector("#total-nove");
		var totalnove  = tdtotalnove.textContent;
		var totalnove = nove;
		tdtotalnove.textContent = totalnove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt9 = document.getElementById('opt9')
		opt9.innerHTML = ` 09x no cartão <strong>${nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//8 vezes


		var tdOito = document.querySelector("#info-oitovezes");
		var oito = tdOito.textContent;

		//console.log (once);

		var oito = total * 1.19989;

		//console.log (once);

		tdOito.textContent = oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOitoPres = document.querySelector("#infopres-oitovezes");
		var oitoPres = tdOitoPres.textContent;

		//console.log(oncePres);

		var oitoPres = oito / 8;

		tdOitoPres.textContent = oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCom = document.querySelector("#com-oitovezes");
		var oitoCom = tdOitoCom.textContent;

		var oitoCom = oito * 0.03;

		tdOitoCom.textContent = oitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCliente = document.querySelector("#tabcliente-oitovezes");
		var oitoCliente = tdOitoCliente.textContent;

		var oitoCliente = oitoPres;

		tdOitoCliente.textContent = oitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaloito = document.querySelector("#total-oito");
		var totaloito  = tdtotaloito.textContent;
		var totaloito = oito;
		tdtotaloito.textContent = totaloito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt8 = document.getElementById('opt8')
		opt8.innerHTML = `08x no cartão <strong>${oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//7 vezes


		var tdSete = document.querySelector("#info-setevezes");
		var sete = tdSete.textContent;

		//console.log (once);

		var sete = total * 1.18933;

		//console.log (once);

		tdSete.textContent = sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSetePres = document.querySelector("#infopres-setevezes");
		var setePres = tdSetePres.textContent;

		//console.log(oncePres);

		var setePres = sete / 7;

		tdSetePres.textContent = setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCom = document.querySelector("#com-setevezes");
		var seteCom = tdSeteCom.textContent;

		var seteCom = sete * 0.03;

		tdSeteCom.textContent = seteCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCliente = document.querySelector("#tabcliente-setevezes");
		var seteCliente = tdSeteCliente.textContent;

		var seteCliente = setePres;

		tdSeteCliente.textContent = seteCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalsete = document.querySelector("#total-sete");
		var totalsete  = tdtotalsete.textContent;
		var totalsete = sete;
		tdtotalsete.textContent = totalsete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt7 = document.getElementById('opt7')
		opt7.innerHTML = `07x no cartão <strong>${sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//6 vezes


		var tdSeis = document.querySelector("#info-seisvezes");
		var seis = tdSeis.textContent;

		//console.log (once);

		var seis = total * 1.1724;

		//console.log (once);

		tdSeis.textContent = seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeisPres = document.querySelector("#infopres-seisvezes");
		var seisPres = tdSeisPres.textContent;

		//console.log(oncePres);

		var seisPres = seis / 6;

		tdSeisPres.textContent = seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCom = document.querySelector("#com-seisvezes");
		var seisCom = tdSeisCom.textContent;

		var seisCom = seis * 0.03;

		tdSeisCom.textContent = seisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCliente = document.querySelector("#tabcliente-seisvezes");
		var seisCliente = tdSeisCliente.textContent;

		var seisCliente = seisPres;

		tdSeisCliente.textContent = seisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalseis = document.querySelector("#total-seis");
		var totalseis  = tdtotalseis.textContent;
		var totalseis = seis;
		tdtotalseis.textContent = totalseis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt6 = document.getElementById('opt6')
		opt6.innerHTML = `06x no cartão <strong>${seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//5 vezes


		var tdCinco = document.querySelector("#info-cincovezes");
		var cinco = tdCinco.textContent;

		//console.log (once);

		var cinco = total * 1.1598;

		//console.log (once);

		tdCinco.textContent = cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoPres = document.querySelector("#infopres-cincovezes");
		var cincoPres = tdCincoPres.textContent;

		//console.log(oncePres);

		var cincoPres = cinco / 5;

		tdCincoPres.textContent = cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoCom = document.querySelector("#com-cincovezes");
		var cincoCom = tdCincoCom.textContent;

		var cincoCom = cinco * 0.03;

		tdCincoCom.textContent = cincoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdCincoCliente = document.querySelector("#tabcliente-cincovezes");
		var cincoCliente = tdCincoCliente.textContent;

		var cincoCliente = cincoPres;

		tdCincoCliente.textContent = cincoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalcinco = document.querySelector("#total-cinco");
		var totalcinco  = tdtotalcinco.textContent;
		var totalcinco = cinco;
		tdtotalcinco.textContent = totalcinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt5 = document.getElementById('opt5')
		opt5.innerHTML = `05x no cartão <strong>${cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//4 vezes


		var tdQuatro = document.querySelector("#info-quatrovezes");
		var quatro = tdQuatro.textContent;

		//console.log (once);

		var quatro = total * 1.13689;

		//console.log (once);

		tdQuatro.textContent = quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		var tdQuatroPres = document.querySelector("#infopres-quatrovezes");
		var quatroPres = tdQuatroPres.textContent;

		//console.log(oncePres);

		var quatroPres = quatro / 4;

		tdQuatroPres.textContent = quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdQuatroCom = document.querySelector("#com-quatrovezes");
		var quatroCom = tdQuatroCom.textContent;

		var quatroCom = quatro * 0.03;

		tdQuatroCom.textContent = quatroCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdQuatroCliente = document.querySelector("#tabcliente-quatrovezes");
		var quatroCliente = tdQuatroCliente.textContent;

		var quatroCliente = quatroPres;

		tdQuatroCliente.textContent = quatroCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalquatro = document.querySelector("#total-quatro");
		var totalquatro  = tdtotalquatro.textContent;
		var totalquatro = quatro;
		tdtotalquatro.textContent = totalquatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt4 = document.getElementById('opt4')
		opt4.innerHTML = `04x no cartão <strong>${quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//3 vezes


		var tdTres = document.querySelector("#info-tresvezes");
		var tres = tdTres.textContent;

		//console.log (once);

		var tres = total * 1.12738;

		//console.log (once);

		tdTres.textContent = tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresPres = document.querySelector("#infopres-tresvezes");
		var tresPres = tdTresPres.textContent;

		//console.log(oncePres);

		var tresPres = tres / 3;

		tdTresPres.textContent = tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresCom = document.querySelector("#com-tresvezes");
		var tresCom = tdTresCom.textContent;

		var tresCom = tres * 0.03;

		tdTresCom.textContent = tresCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdTresCliente = document.querySelector("#tabcliente-tresvezes");
		var tresCliente = tdTresCliente.textContent;

		var tresCliente = tresPres;

		tdTresCliente.textContent = tresCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaltres = document.querySelector("#total-tres");
		var totaltres  = tdtotaltres.textContent;
		var totaltres = tres;
		tdtotaltres.textContent = totaltres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt3 = document.getElementById('opt3')
		opt3.innerHTML = `03x no cartão <strong>${tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//2 vezes


		var tdDois = document.querySelector("#info-doisvezes");
		var dois = tdDois.textContent;

		//console.log (once);

		var dois = total * 1.10967;

		//console.log (once);

		tdDois.textContent = dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDoisPres = document.querySelector("#infopres-doisvezes");
		var doisPres = tdDoisPres.textContent;

		//console.log(oncePres);

		var doisPres = dois / 2;

		tdDoisPres.textContent = doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCom = document.querySelector("#com-doisvezes");
		var doisCom = tdDoisCom.textContent;

		var doisCom = dois * 0.03;

		tdDoisCom.textContent = doisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCliente = document.querySelector("#tabcliente-doisvezes");
		var doisCliente = tdDoisCliente.textContent;

		var doisCliente = doisPres;

		tdDoisCliente.textContent = doisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldois = document.querySelector("#total-dois");
		var totaldois  = tdtotaldois.textContent;
		var totaldois = dois;
		tdtotaldois.textContent = totaldois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt2 = document.getElementById('opt2')
		opt2.innerHTML = `02x no cartão <strong>${dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//1 vezes


		var tdUm = document.querySelector("#info-umvezes");
		var um = tdUm.textContent;

		//console.log (once);

		var um = total * 1.09898;

		//console.log (once);

		tdUm.textContent = um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmPres = document.querySelector("#infopres-umvezes");
		var umPres = tdUmPres.textContent;

		//console.log(oncePres);

		var umPres = um;

		tdUmPres.textContent = umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmCom = document.querySelector("#com-umvezes");
		var umCom = tdUmCom.textContent;

		var umCom = um * 0.03;

		tdUmCom.textContent = umCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdUmCliente = document.querySelector("#tabcliente-umvezes");
		var umCliente = tdUmCliente.textContent;

		var umCliente = umPres;

		tdUmCliente.textContent = umCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalum = document.querySelector("#total-um");
		var totalum  = tdtotalum.textContent;
		var totalum = um;
		tdtotalum.textContent = totalum.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt1 = document.getElementById('opt1')
		opt1.innerHTML = `01x no cartão <strong>${um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//Débito----------------------------------------------------------------------------------------------------------------



		var tdDebito = document.querySelector("#info-debito");
		var debito = tdDebito.textContent;

		//console.log (once);

		var debito = total * 1.018;

		//console.log (once);

		tdDebito.textContent = debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoPres = document.querySelector("#infopres-debito");
		var debitoPres = tdDebitoPres.textContent;

		//console.log(oncePres);

		var debitoPres = debito;

		tdDebitoPres.textContent = debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoCom = document.querySelector("#com-debito");
		var debitoCom = tdDebitoCom.textContent;

		var debitoCom = um * 0;

		tdDebitoCom.textContent = debitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDebitoCliente = document.querySelector("#tabcliente-debito");
		var debitoCliente = tdDebitoCliente.textContent;

		var debitoCliente = debitoPres;

		tdDebitoCliente.textContent = debitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldebito = document.querySelector("#total-debito");
		var totaldebito = tdtotaldebito.textContent;
		var totaldebito = debito;
		tdtotaldebito.textContent = totaldebito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var optdeb = document.getElementById('optdeb')
		optdeb.innerHTML = `01x no cartão de débito <strong>${debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

	}

if (regiao[4].checked){ 



	
		//12 vezes

		var tdDoze = document.querySelector("#info-dozevezes");
		var doze = tdDoze.textContent;

		//console.log (doze);

		var doze = total * 1.2715;

		//console.log (doze);

		tdDoze.textContent = doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozePres = document.querySelector("#infopres-dozevezes");
		var dozePres = tdDozePres.textContent;

		//console.log(dozePres);

		var dozePres = doze / 12;

		tdDozePres.textContent = dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDozeCom = document.querySelector("#com-dozevezes");
		var dozeCom = tdDozeCom.textContent;

		var dozeCom = doze * 0.04;

		tdDozeCom.textContent = dozeCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozeCliente = document.querySelector("#tabcliente-dozevezes");
		var dozeCliente = tdDozeCliente.textContent;

		var dozeCliente = dozePres;

		tdDozeCliente.textContent = dozeCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldoze = document.querySelector("#total-doze");
		var totaldoze  = tdtotaldoze.textContent;
		var totaldoze = doze;
		tdtotaldoze.textContent = totaldoze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
				

		var opt12 = document.getElementById('opt12')
		opt12.innerHTML = `12x no cartão <strong>${doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`






		//11 vezes


		var tdOnce = document.querySelector("#info-oncevezes");
		var once = tdOnce.textContent;

		//console.log (once);

		var once = total * 1.253;

		//console.log (once);

		tdOnce.textContent = once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOncePres = document.querySelector("#infopres-oncevezes");
		var oncePres = tdOncePres.textContent;

		//console.log(oncePres);

		var oncePres = once / 11;

		tdOncePres.textContent = oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdOnceCom = document.querySelector("#com-oncevezes");
		var onceCom = tdOnceCom.textContent;

		var onceCom = once * 0.04;

		tdOnceCom.textContent = onceCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})




		var tdOnceCliente = document.querySelector("#tabcliente-oncevezes");
		var onceCliente = tdOnceCliente.textContent;

		var onceCliente = oncePres;

		tdOnceCliente.textContent = onceCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalonce = document.querySelector("#total-once");
		var totalonce  = tdtotalonce.textContent;
		var totalonce = once;
		tdtotalonce.textContent = totalonce.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt11 = document.getElementById('opt11')
		opt11.innerHTML = `11x no cartão <strong>${once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//10 vezes


		var tdDez = document.querySelector("#info-dezvezes");
		var dez = tdDez.textContent;

		//console.log (once);

		var dez = total * 1.2411;

		//console.log (once);

		tdDez.textContent = dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDezPres = document.querySelector("#infopres-dezvezes");
		var dezPres = tdDezPres.textContent;

		//console.log(oncePres);

		var dezPres = dez / 10;

		tdDezPres.textContent = dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDezCom = document.querySelector("#com-dezvezes");
		var dezCom = tdDezCom.textContent;

		var dezCom = dez * 0.04;

		tdDezCom.textContent = dezCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDezCliente = document.querySelector("#tabcliente-dezvezes");
		var dezCliente = tdDezCliente.textContent;

		var dezCliente = dezPres;

		tdDezCliente.textContent = dezCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldez = document.querySelector("#total-dez");
		var totaldez  = tdtotaldez.textContent;
		var totaldez = dez;
		tdtotaldez.textContent = totaldez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt10 = document.getElementById('opt10')
		opt10.innerHTML = `10x no cartão <strong>${dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`



		//9 vezes


		var tdNove = document.querySelector("#info-novevezes");
		var nove = tdNove.textContent;

		//console.log (once);

		var nove = total * 1.237;

		//console.log (once);

		tdNove.textContent = nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNovePres = document.querySelector("#infopres-novevezes");
		var novePres = tdNovePres.textContent;

		//console.log(oncePres);

		var novePres = nove / 9;

		tdNovePres.textContent = novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNoveCom = document.querySelector("#com-novevezes");
		var noveCom = tdNoveCom.textContent;

		var noveCom = nove * 0.04;

		tdNoveCom.textContent = noveCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdNoveCliente = document.querySelector("#tabcliente-novevezes");
		var noveCliente = tdNoveCliente.textContent;

		var noveCliente = novePres;

		tdNoveCliente.textContent = noveCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalnove = document.querySelector("#total-nove");
		var totalnove  = tdtotalnove.textContent;
		var totalnove = nove;
		tdtotalnove.textContent = totalnove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt9 = document.getElementById('opt9')
		opt9.innerHTML = ` 09x no cartão <strong>${nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//8 vezes


		var tdOito = document.querySelector("#info-oitovezes");
		var oito = tdOito.textContent;

		//console.log (once);

		var oito = total * 1.2125;

		//console.log (once);

		tdOito.textContent = oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOitoPres = document.querySelector("#infopres-oitovezes");
		var oitoPres = tdOitoPres.textContent;

		//console.log(oncePres);

		var oitoPres = oito / 8;

		tdOitoPres.textContent = oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCom = document.querySelector("#com-oitovezes");
		var oitoCom = tdOitoCom.textContent;

		var oitoCom = oito * 0.04;

		tdOitoCom.textContent = oitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCliente = document.querySelector("#tabcliente-oitovezes");
		var oitoCliente = tdOitoCliente.textContent;

		var oitoCliente = oitoPres;

		tdOitoCliente.textContent = oitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaloito = document.querySelector("#total-oito");
		var totaloito  = tdtotaloito.textContent;
		var totaloito = oito;
		tdtotaloito.textContent = totaloito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt8 = document.getElementById('opt8')
		opt8.innerHTML = `08x no cartão <strong>${oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//7 vezes


		var tdSete = document.querySelector("#info-setevezes");
		var sete = tdSete.textContent;

		//console.log (once);

		var sete = total * 1.203;

		//console.log (once);

		tdSete.textContent = sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSetePres = document.querySelector("#infopres-setevezes");
		var setePres = tdSetePres.textContent;

		//console.log(oncePres);

		var setePres = sete / 7;

		tdSetePres.textContent = setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCom = document.querySelector("#com-setevezes");
		var seteCom = tdSeteCom.textContent;

		var seteCom = sete * 0.04;

		tdSeteCom.textContent = seteCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCliente = document.querySelector("#tabcliente-setevezes");
		var seteCliente = tdSeteCliente.textContent;

		var seteCliente = setePres;

		tdSeteCliente.textContent = seteCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalsete = document.querySelector("#total-sete");
		var totalsete  = tdtotalsete.textContent;
		var totalsete = sete;
		tdtotalsete.textContent = totalsete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt7 = document.getElementById('opt7')
		opt7.innerHTML = `07x no cartão <strong>${sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//6 vezes


		var tdSeis = document.querySelector("#info-seisvezes");
		var seis = tdSeis.textContent;

		//console.log (once);

		var seis = total * 1.186;

		//console.log (once);

		tdSeis.textContent = seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeisPres = document.querySelector("#infopres-seisvezes");
		var seisPres = tdSeisPres.textContent;

		//console.log(oncePres);

		var seisPres = seis / 6;

		tdSeisPres.textContent = seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCom = document.querySelector("#com-seisvezes");
		var seisCom = tdSeisCom.textContent;

		var seisCom = seis * 0.04;

		tdSeisCom.textContent = seisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCliente = document.querySelector("#tabcliente-seisvezes");
		var seisCliente = tdSeisCliente.textContent;

		var seisCliente = seisPres;

		tdSeisCliente.textContent = seisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

			var tdtotalseis = document.querySelector("#total-seis");
		var totalseis  = tdtotalseis.textContent;
		var totalseis = seis;
		tdtotalseis.textContent = totalseis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt6 = document.getElementById('opt6')
		opt6.innerHTML = `06x no cartão <strong>${seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//5 vezes


		var tdCinco = document.querySelector("#info-cincovezes");
		var cinco = tdCinco.textContent;

		//console.log (once);

		var cinco = total * 1.173;

		//console.log (once);

		tdCinco.textContent = cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoPres = document.querySelector("#infopres-cincovezes");
		var cincoPres = tdCincoPres.textContent;

		//console.log(oncePres);

		var cincoPres = cinco / 5;

		tdCincoPres.textContent = cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoCom = document.querySelector("#com-cincovezes");
		var cincoCom = tdCincoCom.textContent;

		var cincoCom = cinco * 0.04;

		tdCincoCom.textContent = cincoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdCincoCliente = document.querySelector("#tabcliente-cincovezes");
		var cincoCliente = tdCincoCliente.textContent;

		var cincoCliente = cincoPres;

		tdCincoCliente.textContent = cincoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalcinco = document.querySelector("#total-cinco");
		var totalcinco  = tdtotalcinco.textContent;
		var totalcinco = cinco
		tdtotalcinco.textContent = totalcinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt5 = document.getElementById('opt5')
		opt5.innerHTML = `05x no cartão <strong>${cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//4 vezes


		var tdQuatro = document.querySelector("#info-quatrovezes");
		var quatro = tdQuatro.textContent;

		//console.log (once);

		var quatro = total * 1.15;

		//console.log (once);

		tdQuatro.textContent = quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		var tdQuatroPres = document.querySelector("#infopres-quatrovezes");
		var quatroPres = tdQuatroPres.textContent;

		//console.log(oncePres);

		var quatroPres = quatro / 4;

		tdQuatroPres.textContent = quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdQuatroCom = document.querySelector("#com-quatrovezes");
		var quatroCom = tdQuatroCom.textContent;

		var quatroCom = quatro * 0.04;

		tdQuatroCom.textContent = quatroCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdQuatroCliente = document.querySelector("#tabcliente-quatrovezes");
		var quatroCliente = tdQuatroCliente.textContent;

		var quatroCliente = quatroPres;

		tdQuatroCliente.textContent = quatroCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalquatro = document.querySelector("#total-quatro");
		var totalquatro  = tdtotalquatro.textContent;
		var totalquatro = quatro;
		tdtotalquatro.textContent = totalquatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt4 = document.getElementById('opt4')
		opt4.innerHTML = `04x no cartão <strong>${quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//3 vezes


		var tdTres = document.querySelector("#info-tresvezes");
		var tres = tdTres.textContent;

		//console.log (once);

		var tres = total * 1.14;

		//console.log (once);

		tdTres.textContent = tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresPres = document.querySelector("#infopres-tresvezes");
		var tresPres = tdTresPres.textContent;

		//console.log(oncePres);

		var tresPres = tres / 3;

		tdTresPres.textContent = tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresCom = document.querySelector("#com-tresvezes");
		var tresCom = tdTresCom.textContent;

		var tresCom = tres * 0.04;

		tdTresCom.textContent = tresCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdTresCliente = document.querySelector("#tabcliente-tresvezes");
		var tresCliente = tdTresCliente.textContent;

		var tresCliente = tresPres;

		tdTresCliente.textContent = tresCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaltres = document.querySelector("#total-tres");
		var totaltres  = tdtotaltres.textContent;
		var totaltres = tres;
		tdtotaltres.textContent = totaltres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt3 = document.getElementById('opt3')
		opt3.innerHTML = `03x no cartão <strong>${tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//2 vezes


		var tdDois = document.querySelector("#info-doisvezes");
		var dois = tdDois.textContent;

		//console.log (once);

		var dois = total * 1.1218;

		//console.log (once);

		tdDois.textContent = dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDoisPres = document.querySelector("#infopres-doisvezes");
		var doisPres = tdDoisPres.textContent;

		//console.log(oncePres);

		var doisPres = dois / 2;

		tdDoisPres.textContent = doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCom = document.querySelector("#com-doisvezes");
		var doisCom = tdDoisCom.textContent;

		var doisCom = dois * 0.04;

		tdDoisCom.textContent = doisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCliente = document.querySelector("#tabcliente-doisvezes");
		var doisCliente = tdDoisCliente.textContent;

		var doisCliente = doisPres;

		tdDoisCliente.textContent = doisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldois = document.querySelector("#total-dois");
		var totaldois  = tdtotaldois.textContent;
		var totaldois = dois;
		tdtotaldois.textContent = totaldois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt2 = document.getElementById('opt2')
		opt2.innerHTML = `02x no cartão <strong>${dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//1 vezes


		var tdUm = document.querySelector("#info-umvezes");
		var um = tdUm.textContent;

		//console.log (once);

		var um = total * 1.111;

		//console.log (once);

		tdUm.textContent = um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmPres = document.querySelector("#infopres-umvezes");
		var umPres = tdUmPres.textContent;

		//console.log(oncePres);

		var umPres = um;

		tdUmPres.textContent = umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmCom = document.querySelector("#com-umvezes");
		var umCom = tdUmCom.textContent;

		var umCom = um * 0.04;

		tdUmCom.textContent = umCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdUmCliente = document.querySelector("#tabcliente-umvezes");
		var umCliente = tdUmCliente.textContent;

		var umCliente = umPres;

		tdUmCliente.textContent = umCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalum = document.querySelector("#total-um");
		var totalum  = tdtotalum.textContent;
		var totalum = um;
		tdtotalum.textContent = totalum.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt1 = document.getElementById('opt1')
		opt1.innerHTML = `01x no cartão <strong>${um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//Débito----------------------------------------------------------------------------------------------------------------



		var tdDebito = document.querySelector("#info-debito");
		var debito = tdDebito.textContent;

		//console.log (once);

		var debito = total * 1.018;

		//console.log (once);

		tdDebito.textContent = debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoPres = document.querySelector("#infopres-debito");
		var debitoPres = tdDebitoPres.textContent;

		//console.log(oncePres);

		var debitoPres = debito;

		tdDebitoPres.textContent = debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoCom = document.querySelector("#com-debito");
		var debitoCom = tdDebitoCom.textContent;

		var debitoCom = um * 0;

		tdDebitoCom.textContent = debitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDebitoCliente = document.querySelector("#tabcliente-debito");
		var debitoCliente = tdDebitoCliente.textContent;

		var debitoCliente = debitoPres;

		tdDebitoCliente.textContent = debitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldebito = document.querySelector("#total-debito");
		var totaldebito = tdtotaldebito.textContent;
		var totaldebito = debito;
		tdtotaldebito.textContent = totaldebito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var optdeb = document.getElementById('optdeb')
		optdeb.innerHTML = `01x no cartão de débito <strong>${debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

	}

if (regiao[5].checked){ 



	
		//12 vezes

		var tdDoze = document.querySelector("#info-dozevezes");
		var doze = tdDoze.textContent;

		//console.log (doze);

		var doze = total * 1.2864;

		//console.log (doze);

		tdDoze.textContent = doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozePres = document.querySelector("#infopres-dozevezes");
		var dozePres = tdDozePres.textContent;

		//console.log(dozePres);

		var dozePres = doze / 12;

		tdDozePres.textContent = dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDozeCom = document.querySelector("#com-dozevezes");
		var dozeCom = tdDozeCom.textContent;

		var dozeCom = doze * 0.05;

		tdDozeCom.textContent = dozeCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDozeCliente = document.querySelector("#tabcliente-dozevezes");
		var dozeCliente = tdDozeCliente.textContent;

		var dozeCliente = dozePres;

		tdDozeCliente.textContent = dozeCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldoze = document.querySelector("#total-doze");
		var totaldoze  = tdtotaldoze.textContent;
		var totaldoze = doze;
		tdtotaldoze.textContent = totaldoze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		
		

		var opt12 = document.getElementById('opt12')
		opt12.innerHTML = `12x no cartão <strong>${doze.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dozePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`






		//11 vezes


		var tdOnce = document.querySelector("#info-oncevezes");
		var once = tdOnce.textContent;

		//console.log (once);

		var once = total * 1.2675;

		//console.log (once);

		tdOnce.textContent = once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOncePres = document.querySelector("#infopres-oncevezes");
		var oncePres = tdOncePres.textContent;

		//console.log(oncePres);

		var oncePres = once / 11;

		tdOncePres.textContent = oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdOnceCom = document.querySelector("#com-oncevezes");
		var onceCom = tdOnceCom.textContent;

		var onceCom = once * 0.05;

		tdOnceCom.textContent = onceCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})




		var tdOnceCliente = document.querySelector("#tabcliente-oncevezes");
		var onceCliente = tdOnceCliente.textContent;

		var onceCliente = oncePres;

		tdOnceCliente.textContent = onceCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalonce = document.querySelector("#total-once");
		var totalonce  = tdtotalonce.textContent;
		var totalonce = once;
		tdtotalonce.textContent = totalonce.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt11 = document.getElementById('opt11')
		opt11.innerHTML = `11x no cartão <strong>${once.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oncePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//10 vezes


		var tdDez = document.querySelector("#info-dezvezes");
		var dez = tdDez.textContent;

		//console.log (once);

		var dez = total * 1.2553;

		//console.log (once);

		tdDez.textContent = dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDezPres = document.querySelector("#infopres-dezvezes");
		var dezPres = tdDezPres.textContent;

		//console.log(oncePres);

		var dezPres = dez / 10;

		tdDezPres.textContent = dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDezCom = document.querySelector("#com-dezvezes");
		var dezCom = tdDezCom.textContent;

		var dezCom = dez * 0.05;

		tdDezCom.textContent = dezCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDezCliente = document.querySelector("#tabcliente-dezvezes");
		var dezCliente = tdDezCliente.textContent;

		var dezCliente = dezPres;

		tdDezCliente.textContent = dezCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldez = document.querySelector("#total-dez");
		var totaldez  = tdtotaldez.textContent;
		var totaldez = dez;
		tdtotaldez.textContent = totaldez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt10 = document.getElementById('opt10')
		opt10.innerHTML = `10x no cartão <strong>${dez.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${dezPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`



		//9 vezes


		var tdNove = document.querySelector("#info-novevezes");
		var nove = tdNove.textContent;

		//console.log (once);

		var nove = total * 1.251;

		//console.log (once);

		tdNove.textContent = nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNovePres = document.querySelector("#infopres-novevezes");
		var novePres = tdNovePres.textContent;

		//console.log(oncePres);

		var novePres = nove / 9;

		tdNovePres.textContent = novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdNoveCom = document.querySelector("#com-novevezes");
		var noveCom = tdNoveCom.textContent;

		var noveCom = nove * 0.05;

		tdNoveCom.textContent = noveCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdNoveCliente = document.querySelector("#tabcliente-novevezes");
		var noveCliente = tdNoveCliente.textContent;

		var noveCliente = novePres;

		tdNoveCliente.textContent = noveCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalnove = document.querySelector("#total-nove");
		var totalnove  = tdtotalnove.textContent;
		var totalnove = nove;
		tdtotalnove.textContent = totalnove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt9 = document.getElementById('opt9')
		opt9.innerHTML = ` 09x no cartão <strong>${nove.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${novePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//8 vezes


		var tdOito = document.querySelector("#info-oitovezes");
		var oito = tdOito.textContent;

		//console.log (once);

		var oito = total * 1.2271;

		//console.log (once);

		tdOito.textContent = oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdOitoPres = document.querySelector("#infopres-oitovezes");
		var oitoPres = tdOitoPres.textContent;

		//console.log(oncePres);

		var oitoPres = oito / 8;

		tdOitoPres.textContent = oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCom = document.querySelector("#com-oitovezes");
		var oitoCom = tdOitoCom.textContent;

		var oitoCom = oito * 0.05;

		tdOitoCom.textContent = oitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdOitoCliente = document.querySelector("#tabcliente-oitovezes");
		var oitoCliente = tdOitoCliente.textContent;

		var oitoCliente = oitoPres;

		tdOitoCliente.textContent = oitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaloito = document.querySelector("#total-oito");
		var totaloito  = tdtotaloito.textContent;
		var totaloito = oito;
		tdtotaloito.textContent = totaloito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt8 = document.getElementById('opt8')
		opt8.innerHTML = `08x no cartão <strong>${oito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${oitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//7 vezes


		var tdSete = document.querySelector("#info-setevezes");
		var sete = tdSete.textContent;

		//console.log (once);

		var sete = total * 1.2162;

		//console.log (once);

		tdSete.textContent = sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSetePres = document.querySelector("#infopres-setevezes");
		var setePres = tdSetePres.textContent;

		//console.log(oncePres);

		var setePres = sete / 7;

		tdSetePres.textContent = setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCom = document.querySelector("#com-setevezes");
		var seteCom = tdSeteCom.textContent;

		var seteCom = sete * 0.05;

		tdSeteCom.textContent = seteCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeteCliente = document.querySelector("#tabcliente-setevezes");
		var seteCliente = tdSeteCliente.textContent;

		var seteCliente = setePres;

		tdSeteCliente.textContent = seteCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalsete = document.querySelector("#total-sete");
		var totalsete  = tdtotalsete.textContent;
		var totalsete = sete;
		tdtotalsete.textContent = totalsete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt7 = document.getElementById('opt7')
		opt7.innerHTML = `07x no cartão <strong>${sete.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${setePres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//6 vezes


		var tdSeis = document.querySelector("#info-seisvezes");
		var seis = tdSeis.textContent;

		//console.log (once);

		var seis = total * 1.199;

		//console.log (once);

		tdSeis.textContent = seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdSeisPres = document.querySelector("#infopres-seisvezes");
		var seisPres = tdSeisPres.textContent;

		//console.log(oncePres);

		var seisPres = seis / 6;

		tdSeisPres.textContent = seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCom = document.querySelector("#com-seisvezes");
		var seisCom = tdSeisCom.textContent;

		var seisCom = seis * 0.05;

		tdSeisCom.textContent = seisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdSeisCliente = document.querySelector("#tabcliente-seisvezes");
		var seisCliente = tdSeisCliente.textContent;

		var seisCliente = seisPres;

		tdSeisCliente.textContent = seisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

			var tdtotalseis = document.querySelector("#total-seis");
		var totalseis  = tdtotalseis.textContent;
		var totalseis = seis;
		tdtotalseis.textContent = totalseis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt6 = document.getElementById('opt6')
		opt6.innerHTML = `06x no cartão <strong>${seis.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${seisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//5 vezes


		var tdCinco = document.querySelector("#info-cincovezes");
		var cinco = tdCinco.textContent;

		//console.log (once);

		var cinco = total * 1.1857;

		//console.log (once);

		tdCinco.textContent = cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoPres = document.querySelector("#infopres-cincovezes");
		var cincoPres = tdCincoPres.textContent;

		//console.log(oncePres);

		var cincoPres = cinco / 5;

		tdCincoPres.textContent = cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdCincoCom = document.querySelector("#com-cincovezes");
		var cincoCom = tdCincoCom.textContent;

		var cincoCom = cinco * 0.05;

		tdCincoCom.textContent = cincoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdCincoCliente = document.querySelector("#tabcliente-cincovezes");
		var cincoCliente = tdCincoCliente.textContent;

		var cincoCliente = cincoPres;

		tdCincoCliente.textContent = cincoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalcinco = document.querySelector("#total-cinco");
		var totalcinco  = tdtotalcinco.textContent;
		var totalcinco = cinco;
		tdtotalcinco.textContent = totalcinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt5 = document.getElementById('opt5')
		opt5.innerHTML = `05x no cartão <strong>${cinco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${cincoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//4 vezes


		var tdQuatro = document.querySelector("#info-quatrovezes");
		var quatro = tdQuatro.textContent;

		//console.log (once);

		var quatro = total * 1.1621;

		//console.log (once);

		tdQuatro.textContent = quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
		var tdQuatroPres = document.querySelector("#infopres-quatrovezes");
		var quatroPres = tdQuatroPres.textContent;

		//console.log(oncePres);

		var quatroPres = quatro / 4;

		tdQuatroPres.textContent = quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdQuatroCom = document.querySelector("#com-quatrovezes");
		var quatroCom = tdQuatroCom.textContent;

		var quatroCom = quatro * 0.05;

		tdQuatroCom.textContent = quatroCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdQuatroCliente = document.querySelector("#tabcliente-quatrovezes");
		var quatroCliente = tdQuatroCliente.textContent;

		var quatroCliente = quatroPres;

		tdQuatroCliente.textContent = quatroCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalquatro = document.querySelector("#total-quatro");
		var totalquatro  = tdtotalquatro.textContent;
		var totalquatro = quatro;
		tdtotalquatro.textContent = totalquatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt4 = document.getElementById('opt4')
		opt4.innerHTML = `04x no cartão <strong>${quatro.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${quatroPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//3 vezes


		var tdTres = document.querySelector("#info-tresvezes");
		var tres = tdTres.textContent;

		//console.log (once);

		var tres = total * 1.15222;

		//console.log (once);

		tdTres.textContent = tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresPres = document.querySelector("#infopres-tresvezes");
		var tresPres = tdTresPres.textContent;

		//console.log(oncePres);

		var tresPres = tres / 3;

		tdTresPres.textContent = tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdTresCom = document.querySelector("#com-tresvezes");
		var tresCom = tdTresCom.textContent;

		var tresCom = tres * 0.05;

		tdTresCom.textContent = tresCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdTresCliente = document.querySelector("#tabcliente-tresvezes");
		var tresCliente = tdTresCliente.textContent;

		var tresCliente = tresPres;

		tdTresCliente.textContent = tresCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaltres = document.querySelector("#total-tres");
		var totaltres  = tdtotaltres.textContent;
		var totaltres = tres;
		tdtotaltres.textContent = totaltres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt3 = document.getElementById('opt3')
		opt3.innerHTML = `03x no cartão <strong>${tres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${tresPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//2 vezes


		var tdDois = document.querySelector("#info-doisvezes");
		var dois = tdDois.textContent;

		//console.log (once);

		var dois = total * 1.134;

		//console.log (once);

		tdDois.textContent = dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDoisPres = document.querySelector("#infopres-doisvezes");
		var doisPres = tdDoisPres.textContent;

		//console.log(oncePres);

		var doisPres = dois / 2;

		tdDoisPres.textContent = doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCom = document.querySelector("#com-doisvezes");
		var doisCom = tdDoisCom.textContent;

		var doisCom = dois * 0.05;

		tdDoisCom.textContent = doisCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})


		var tdDoisCliente = document.querySelector("#tabcliente-doisvezes");
		var doisCliente = tdDoisCliente.textContent;

		var doisCliente = doisPres;

		tdDoisCliente.textContent = doisCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldois = document.querySelector("#total-dois");
		var totaldois  = tdtotaldois.textContent;
		var totaldois = dois;
		tdtotaldois.textContent = totaldois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt2 = document.getElementById('opt2')
		opt2.innerHTML = `02x no cartão <strong>${dois.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcelas de <strong>${doisPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`


		//1 vezes


		var tdUm = document.querySelector("#info-umvezes");
		var um = tdUm.textContent;

		//console.log (once);

		var um = total * 1.123;

		//console.log (once);

		tdUm.textContent = um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmPres = document.querySelector("#infopres-umvezes");
		var umPres = tdUmPres.textContent;

		//console.log(oncePres);

		var umPres = um;

		tdUmPres.textContent = umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdUmCom = document.querySelector("#com-umvezes");
		var umCom = tdUmCom.textContent;

		var umCom = um * 0.05;

		tdUmCom.textContent = umCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdUmCliente = document.querySelector("#tabcliente-umvezes");
		var umCliente = tdUmCliente.textContent;

		var umCliente = umPres;

		tdUmCliente.textContent = umCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotalum = document.querySelector("#total-um");
		var totalum  = tdtotalum.textContent;
		var totalum = um;
		tdtotalum.textContent = totalum.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var opt1 = document.getElementById('opt1')
		opt1.innerHTML = `01x no cartão <strong>${um.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${umPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

		//Débito----------------------------------------------------------------------------------------------------------------



		var tdDebito = document.querySelector("#info-debito");
		var debito = tdDebito.textContent;

		//console.log (once);

		var debito = total * 1.018;

		//console.log (once);

		tdDebito.textContent = debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoPres = document.querySelector("#infopres-debito");
		var debitoPres = tdDebitoPres.textContent;

		//console.log(oncePres);

		var debitoPres = debito;

		tdDebitoPres.textContent = debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdDebitoCom = document.querySelector("#com-debito");
		var debitoCom = tdDebitoCom.textContent;

		var debitoCom = um * 0;

		tdDebitoCom.textContent = debitoCom.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})



		var tdDebitoCliente = document.querySelector("#tabcliente-debito");
		var debitoCliente = tdDebitoCliente.textContent;

		var debitoCliente = debitoPres;

		tdDebitoCliente.textContent = debitoCliente.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var tdtotaldebito = document.querySelector("#total-debito");
		var totaldebito = tdtotaldebito.textContent;
		var totaldebito = debito;
		tdtotaldebito.textContent = totaldebito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

		var optdeb = document.getElementById('optdeb')
		optdeb.innerHTML = `01x no cartão de débito <strong>${debito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> parcela de <strong>${debitoPres.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>`

	}


});

document.getElementById("btnPrint").onclick = function() {
	window.print();
  }


  var botaoEnviaDados = document.querySelector("#enviaDados");

console.log(botaoEnviaDados);

botaoEnviaDados.addEventListener("click", function(event){
	event.preventDefault();

	var formDados = document.querySelector("#formDados");

	console.log(formDados);

	if (formDados.inputPlaca.value=="")
		{
		alert( "Preencha a Placa do veículo!" );
		formDados.inputPlaca.focus();
		return false;
		}

	if (formDados.inputRenavam.value=="")
		{
		alert( "Preencha o Renavam do veículo!" );
		formDados.inputRenavam.focus();
		return false;
		}

	//if (formDados.inputNome.value=="")
	//	{
	//	alert( "Preencha o nome do proprietário do cartão!" );
	//	formDados.inputNome.focus();
	//	return false;
	//	}

	//if (formDados.inputCPF.value=="")
	//	{
    //	alert( "Preencha o cpf do proprietário do cartão!" );
	//	formDados.inputCPF.focus();
	//	return false;
//		}

	if (formDados.inputMulta.value=="")
		{
		alert( "Coloque o valor dos tributos pagos!" );
		formDados.inputMulta.focus();
		return false;
		}

	
	if (formDados.inputText.value=="")
		{
		alert( "Coloque as observações sobre o contrato!" );
		formDados.inputText.focus();
		return false;
		}

	if (formDados.inputEstado.value=="")
		{
		alert( "Coloque o Estado do veículo!" );
		formDados.inputEstado.focus();
		return false;
		}

	if (formDados.inputPagamento.value=="0x")
		{
		alert( "Coloque a forma de pagamento" );
		formDados.inputPagamento.focus();
		return false;
		}


	var data = new Date();

	var day = data.getDate();
	var mess = (data.getMonth() + 1);
	var anos = data.getFullYear();
	var hora = data.getHours();
	var minuto = data.getMinutes();

	console.log(data);

	var dat = document.getElementById('dat')
	dat.innerHTML = `${day}/${mess}/${anos} - ${hora}:${minuto}`



	var placa = formDados.inputPlaca.value;

	console.log(placa);

	var nome = formDados.inputNome.value;

	console.log(nome);

	var cpf = formDados.inputCPF.value;

	console.log(cpf);

	var renavam = formDados.inputRenavam.value;

	console.log(renavam);

	var pagamento = formDados.inputPagamento.value;

	console.log(pagamento);

	var pla = document.getElementById('pla')
	pla.innerHTML = `${placa}`

	var ren = document.getElementById('ren')
	ren.innerHTML = `${renavam}`

	var estado = formDados.inputEstado.value;

	console.log(estado)




	var valorSimular = formDados.valSimula.value;

	console.log(valorSimular);

	var valSim = document.getElementById('valSim')
	valSim.innerHTML = `${valorSimular.toString().replace(".", ",")}`

	console.log(totSim);





	var valorDinheiro = formDados.valDinheiro.value;

	console.log(valorDinheiro);

	var valDin = document.getElementById('valDin')
	valDin.innerHTML = `${valorDinheiro.toString().replace(".", ",")}`

	console.log(valDin);

	if (valorDinheiro =="")
		{
		valorDinheiro = 0.00;
		}








	var totalSimulado = formDados.valTotal.value;

	console.log(totalSimulado);

	var totSim = document.getElementById('totSim');
	totSim.innerHTML = `${totalSimulado.toString().replace(".", ",")}`

	console.log(totSim);




	var est = document.getElementById('est')
	est.innerHTML = `${estado}`

	var nom = document.getElementById('nom')
	nom.innerHTML = `${nome}`


	var cpfIn = document.getElementById('cpf')
	cpfIn.innerHTML = `${cpf}`


	





	var multa = formDados.inputMulta.value;

	var testemulta = multa - valorSimular;

	console.log(testemulta);



	if (testemulta > 0)
		{
		console.log(testemulta);
		console.log(multa);
		console.log(valorSimular);
		console.log(`esses valores`);

		alert( "O valor dos tributos não pode ser maior do que o valor simulado" );
		formDados.inputMulta.focus();
		return false;
		}

		if (valorSimular > 2500)
	{
	   if (formDados.inputNome.value=="")
		{
	     alert( "Valor do contrato superior a R$ 2.500,00. Preencha o nome do proprietário do cartão!" );
		formDados.inputNome.focus();
		return false;
		}
	}
	   if (valorSimular > 2500)
	    {
	   if (formDados.inputCPF.value=="")
		{
		alert( "Valor do contrato superior a R$ 2.500,00. Preencha o cpf do proprietário do cartão!" );
		formDados.inputCPF.focus();
		return false;
		}
	}

	var mul = document.getElementById('mul')
	mul.innerHTML = `${multa.toString().replace(".", ",")}`


	



	var pag = document.getElementById('pag')
	pag.innerHTML = `${pagamento}`

	var observacao = formDados.inputText.value;

	var obs = document.getElementById('obs')
	obs.innerHTML = `${observacao}`

	var contnao = document.getElementById('contnao')
	contnao.innerHTML = `Contrato do veículo placa ${placa} gerado com sucesso - clique em finalizar o envio`
	contnao.style.color = 'green'

	var regiao2 = document.getElementsByName('regiao');

	// comeco do if

	if (regiao2[0].checked){

		// 12 vezes **********************************************************************************

		if(formDados.inputPagamento.value == "12x") {

			var valorMaquina = totalSimulado * 1.22;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 12;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`


			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 22;




			

			



		}

		//11 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "11x") {

			var valorMaquina = totalSimulado * 1.198;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 11;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`



			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 19.8;


			



		}


		//10 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "10x") {

			var valorMaquina = totalSimulado * 1.187;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 10;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 18.7;



			



		}


		//9 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "9x") {

			var valorMaquina = totalSimulado * 1.183;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 9;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 18.3;



			



		}

		//8 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "8x") {

			var valorMaquina = totalSimulado * 1.161;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 8;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`


			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 16.1;



			



		}

		//7 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "7x") {

			var valorMaquina = totalSimulado * 1.151;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 7;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 15.1;



			



		}

		//6 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "6x") {

			var valorMaquina = totalSimulado * 1.135;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 6;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 13.5;



			



		}


		//5 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "5x") {

			var valorMaquina = totalSimulado * 1.123;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 5;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 12.3;



			



		}


		//4 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "4x") {

			var valorMaquina = totalSimulado * 1.101;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 4;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 10.1;



			



		}


		//3 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "3x") {

			var valorMaquina = totalSimulado * 1.092;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 3;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 9.2;



			



		}


		//2 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "2x") {

			var valorMaquina = totalSimulado * 1.075;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 2;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 7.5;



			



		}

		//1 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "1x") {

			var valorMaquina = totalSimulado * 1.065;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 6.5;
		}
		
		//Debito------------------------------------------------------------------

		if(formDados.inputPagamento.value == "debito") {

			var valorMaquina = totalSimulado * 1.018;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 1.8;

			



			



		}

		

}

	// comeco do if faixa 2***************************************************************************************

	if (regiao2[1].checked){

		// 12 vezes **********************************************************************************

		if(formDados.inputPagamento.value == "12x") {

			var valorMaquina = totalSimulado * 1.22905;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 12;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`


			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 22.9;


			



		}

		//11 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "11x") {

			var valorMaquina = totalSimulado * 1.21132;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 11;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 21.13;



			



		}


		//10 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "10x") {

			var valorMaquina = totalSimulado * 1.20012;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 10;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 20;



			



		}


		//9 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "9x") {

			var valorMaquina = totalSimulado * 1.19601;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 9;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 19.6;



			



		}

		//8 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "8x") {

			var valorMaquina = totalSimulado * 1.1737;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 8;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 17.37;



			



		}

		//7 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "7x") {

			var valorMaquina = totalSimulado * 1.1635;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 7;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 16.35;



			



		}

		//6 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "6x") {

			var valorMaquina = totalSimulado * 1.1472;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 6;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 14.72;



			



		}


		//5 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "5x") {

			var valorMaquina = totalSimulado * 1.135;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 5;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 13.5;



			



		}


		//4 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "4x") {

			var valorMaquina = totalSimulado * 1.11273;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 4;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 11.27;



			



		}


		//3 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "3x") {

			var valorMaquina = totalSimulado * 1.10352;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 3;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 10.35;



			



		}


		//2 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "2x") {

			var valorMaquina = totalSimulado * 1.08631;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 2;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 8.63;



			



		}

		//1 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "1x") {

			var valorMaquina = totalSimulado * 1.07608;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.01;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 7.60;



			



		}

		//Debito------------------------------------------------------------------

		if(formDados.inputPagamento.value == "debito") {

			var valorMaquina = totalSimulado * 1.018;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 1.8;

			
		}

		

}


	// comeco do if faixa 2***************************************************************************************

	if (regiao2[2].checked){

		// 12 vezes **********************************************************************************

		if(formDados.inputPagamento.value == "12x") {

			var valorMaquina = totalSimulado * 1.24293;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 12;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`


			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 24.29;


			



		}

		//11 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "11x") {

			var valorMaquina = totalSimulado * 1.2249;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 11;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 22.49;



			



		}


		//10 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "10x") {

			var valorMaquina = totalSimulado * 1.21349;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 10;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 21.34;



			



		}


		//9 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "9x") {

			var valorMaquina = totalSimulado * 1.20925;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 9;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 20.92;



			



		}

		//8 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "8x") {

			var valorMaquina = totalSimulado * 1.18666;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 8;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 18.66;



			



		}

		//7 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "7x") {

			var valorMaquina = totalSimulado * 1.1763;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 7;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 17.63;



			



		}

		//6 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "6x") {

			var valorMaquina = totalSimulado * 1.15969;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 6;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 15.96;



			



		}


		//5 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "5x") {

			var valorMaquina = totalSimulado * 1.14726;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 5;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 14.72;



			



		}


		//4 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "4x") {

			var valorMaquina = totalSimulado * 1.12467;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 4;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 12.46;



			



		}


		//3 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "3x") {

			var valorMaquina = totalSimulado * 1.11537;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 3;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 11.53;



			



		}


		//2 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "2x") {

			var valorMaquina = totalSimulado * 1.09784;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 2;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 9.78;



			



		}

		//1 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "1x") {

			var valorMaquina = totalSimulado * 1.08742;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.02;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 8.74;

			

			



		}

		//Debito------------------------------------------------------------------

		if(formDados.inputPagamento.value == "debito") {

			var valorMaquina = totalSimulado * 1.018;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 1.8;

		
	}

}


	// comeco do if faixa 2***************************************************************************************

	if (regiao2[3].checked){

		// 12 vezes **********************************************************************************

		if(formDados.inputPagamento.value == "12x") {

			var valorMaquina = totalSimulado * 1.25713;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 12;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`


			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 25.71;


			



		}

		//11 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "11x") {

			var valorMaquina = totalSimulado * 1.23879;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 11;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 23.87;



		}


		//10 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "10x") {

			var valorMaquina = totalSimulado * 1.22722;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 10;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 22.72;



		}


		//9 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "9x") {

			var valorMaquina = totalSimulado * 1.22281;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 9;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 22.28;




		}

		//8 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "8x") {

			var valorMaquina = totalSimulado * 1.19989;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 8;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 19.98;



		}

		//7 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "7x") {

			var valorMaquina = totalSimulado * 1.18933;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 7;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 18.93;



		}

		//6 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "6x") {

			var valorMaquina = totalSimulado * 1.1724;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 6;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 17.24;



		
		}


		//5 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "5x") {

			var valorMaquina = totalSimulado * 1.1598;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 5;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 15.98;



		}


		//4 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "4x") {

			var valorMaquina = totalSimulado * 1.13689;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 4;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 13.68;



			
		}


		//3 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "3x") {

			var valorMaquina = totalSimulado * 1.12738;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 3;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 12.73;



		}


		//2 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "2x") {

			var valorMaquina = totalSimulado * 1.10967;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 2;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 10.96;


		}

		//1 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "1x") {

			var valorMaquina = totalSimulado * 1.09898;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.03;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 9.89;

			

			



		}

		//Debito------------------------------------------------------------------

		if(formDados.inputPagamento.value == "debito") {

			var valorMaquina = totalSimulado * 1.018;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 1.8;

		
	}

}


	// comeco do if faixa 2***************************************************************************************

	if (regiao2[4].checked){

		// 12 vezes **********************************************************************************

		if(formDados.inputPagamento.value == "12x") {

			var valorMaquina = totalSimulado * 1.2715;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 12;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`


			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 27.15;



		}

		//11 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "11x") {

			var valorMaquina = totalSimulado * 1.253;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 11;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 25.30;


		}


		//10 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "10x") {

			var valorMaquina = totalSimulado * 1.2411;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 10;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 24.10;



		}


		//9 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "9x") {

			var valorMaquina = totalSimulado * 1.237;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 9;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 23.70;



		

		}

		//8 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "8x") {

			var valorMaquina = totalSimulado * 1.2125;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 8;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 21.25;



		}

		//7 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "7x") {

			var valorMaquina = totalSimulado * 1.203;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 7;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 20.30;



		}

		//6 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "6x") {

			var valorMaquina = totalSimulado * 1.186;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 6;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 18.60;



		}


		//5 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "5x") {

			var valorMaquina = totalSimulado * 1.173;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 5;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 17.30;


		}


		//4 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "4x") {

			var valorMaquina = totalSimulado * 1.15;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 4;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 15.00;



		}


		//3 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "3x") {

			var valorMaquina = totalSimulado * 1.14;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 3;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 14.00;


		}


		//2 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "2x") {

			var valorMaquina = totalSimulado * 1.1218;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 2;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 12.18;


		}

		//1 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "1x") {

			var valorMaquina = totalSimulado * 1.111;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.04;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 11.11;

		

		}

		//Debito------------------------------------------------------------------

		if(formDados.inputPagamento.value == "debito") {

			var valorMaquina = totalSimulado * 1.018;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 1.8;

		
	}

}


	// comeco do if faixa 2***************************************************************************************

	if (regiao2[5].checked){

		// 12 vezes **********************************************************************************

		if(formDados.inputPagamento.value == "12x") {

			var valorMaquina = totalSimulado * 1.2864;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 12;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`


			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 28.64;

		}

		//11 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "11x") {

			var valorMaquina = totalSimulado * 1.2675;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 11;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 26.75;


		}


		//10 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "10x") {

			var valorMaquina = totalSimulado * 1.2553;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 10;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 25.53;


		}


		//9 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "9x") {

			var valorMaquina = totalSimulado * 1.251;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 9;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 25.10;



		}

		//8 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "8x") {

			var valorMaquina = totalSimulado * 1.2271;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 8;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 22.71;


		}

		//7 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "7x") {

			var valorMaquina = totalSimulado * 1.2162;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 7;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 21.62;


		}

		//6 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "6x") {

			var valorMaquina = totalSimulado * 1.199;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 6;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 19.90;

		}


		//5 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "5x") {

			var valorMaquina = totalSimulado * 1.1857;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 5;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 18.57;


		}


		//4 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "4x") {

			var valorMaquina = totalSimulado * 1.1621;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 4;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 16.21;



		}


		//3 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "3x") {

			var valorMaquina = totalSimulado * 1.15222;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 3;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 15.22;


		}


		//2 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "2x") {

			var valorMaquina = totalSimulado * 1.134;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 2;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 13.40;


		}

		//1 vezes ****************************************************************************************************************** */

		if(formDados.inputPagamento.value == "1x") {

			var valorMaquina = totalSimulado * 1.123;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0.05;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`

			//---------------------------------------------

			servCont = 12.30;

			
		}

		//Debito------------------------------------------------------------------

		if(formDados.inputPagamento.value == "debito") {

			var valorMaquina = totalSimulado * 1.018;

			console.log(valorMaquina);

			var maq = document.querySelector("#maq");
			maq.innerHTML = `${valorMaquina.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var parcela = valorMaquina / 1;

			console.log(parcela);


			var valpar = document.querySelector("#valPar");
			valpar.innerHTML = `${parcela.toFixed(2).replace(".", ",")}`

			//-------------------------------------------------


			var comissao = valorMaquina * 0;

			console.log(comissao);

			var com = document.querySelector("#com");
			com.innerHTML = `${comissao.toFixed(2).replace(".", ",")}`

			//--------------------------------------------------


			var serDesp = totalSimulado - multa;

			var serTot = document.querySelector("#serTot");
			serTot.innerHTML = `${serDesp.toFixed(2).replace(".", ",")}`

			//------------------------------------------------

			var serDespTot = serDesp + comissao;

			console.log(serDespTot);

			var pagades = document.querySelector("#pagades");
			pagades.innerHTML = `${serDespTot.toFixed(2).replace(".", ",")}`


			//---------------------------------------------

			servCont = 1.8;

		
	}


}

	document.getElementById('ma').style.display = 'block';

	window.scrollTo(0,document.body.scrollHeight);






	var maqdin = Number (valorMaquina) + Number (valorDinheiro);

	console.log(maqdin);












	var con = document.getElementById('con')
	con.innerHTML = `<strong>CONTRATO DE PRESTAÇÃO DE SERVIÇO PARA PAGAMENTO IPVA,
	TAXAS E MULTAS E SERVIÇOS DE TERCEIROS </strong> <br>  
	<br>
	Eu, <strong>${nome}</strong>
	Portador (a) do CPF nº <strong>${cpf}</strong>
	Contrato a empresa AGIL SOLUCOES E INTERMEDIACAO DE
	SERVICOS LTDA, CNPJ 34.638.474/0001-85 para intermediar serviços de
	terceiros e efetuar o pagamento de IPVA, taxas e multas do veículo com placa
	<strong>${placa}</strong> e renavam <strong>${renavam}</strong>. <br>

	Totalizando <strong>R$ ${maqdin.toFixed(2)}</strong>, pagos da seguinte maneira:
	R$ ${valorDinheiro} em dinheiro mais ${pagamento} de R$ ${parcela.toFixed(2)},
	já incluídos os serviços prestados. Pagamento
	realizado com a utilização de cartão de crédito/débito, comprovado através de
	transação presencial com a utilização de senha pessoal, conforme
	comprovante em anexo. Tenho a ciência da quitação da dívida junto ao órgão
	público e a todos os terceiros envolvidos. <br>
	<br>


	Assinatura:________________________________ <br>

	
	
	Local e Data:______________________________<br>
	<br>

	
	Autorizo a operadora do meu cartão de crédito a realizar a transação, declaro que sou o titular do cartão a ser usado,
	comprovado através de transação presencial com uso de senha pessoal. Estou ciente de que a falsidade na prestação
	desta informação, sem prejuízo de serem aplicadas as penalidades previstas neste instrumento, inclusive sua rescisão e
	apuração de perdas e danos, sujeitará todas as pessoas que para ela concorrem, às penalidades previstas na legislação
	criminal relativas à falsidade ideológica art. 299 do Código Penal . Taxa de serviço de ${servCont}% aplicada sobre o valor
	total de tributos pagos, taxa cadastral e serviços de despachante. `

	





	








	var msg = document.getElementById('msg')
	msg.innerHTML = `<strong>CONTRATO DE PRESTAÇÃO DE SERVIÇO PARA PAGAMENTO IPVA,
	TAXAS E MULTAS E SERVIÇOS DE TERCEIROS </strong> <br>  
	<br>
	Eu, <strong>${nome}</strong>
	Portador (a) do CPF nº <strong>${cpf}</strong>
	Contrato a empresa AGIL SOLUCOES E INTERMEDIACAO DE
	SERVICOS LTDA, CNPJ 34.638.474/0001-85 para intermediar serviços de
	terceiros e efetuar o pagamento de IPVA, taxas e multas do veículo com placa
	<strong>${placa}</strong> e renavam <strong>${renavam}</strong>. <br>

	Totalizando <strong>R$ ${maqdin.toFixed(2)}</strong>, pagos da seguinte maneira:
	R$ ${valorDinheiro} em dinheiro mais ${pagamento} de R$ ${parcela.toFixed(2)},
	já incluídos os serviços prestados. Pagamento
	realizado com a utilização de cartão de crédito/débito, comprovado através de
	transação presencial com a utilização de senha pessoal, conforme
	comprovante em anexo. Tenho a ciência da quitação da dívida junto ao órgão
	público e a todos os terceiros envolvidos. <br>
	<br>


	Assinatura:________________________________ <br>

	
	
	Local e Data:______________________________<br>
	<br>

	
	Autorizo a operadora do meu cartão de crédito a realizar a transação, declaro que sou o titular do cartão a ser usado,
	comprovado através de transação presencial com uso de senha pessoal. Estou ciente de que a falsidade na prestação
	desta informação, sem prejuízo de serem aplicadas as penalidades previstas neste instrumento, inclusive sua rescisão e
	apuração de perdas e danos, sujeitará todas as pessoas que para ela concorrem, às penalidades previstas na legislação
	criminal relativas à falsidade ideológica art. 299 do Código Penal . Taxa de serviço de ${servCont}% aplicada sobre o valor
	total de tributos pagos, taxa cadastral e serviços de despachante. `

	

});


document.getElementById("btnPrint2").onclick = function() {
	window.print();
  }


