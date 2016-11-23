
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "¿Cuándo fue la última vez que Chivas y Águilas se enfrentaron en liguilla?",
				      "respuestas": [
				        {
				          "respuesta": "Verano 1999",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clausura 2016",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Apertura 2015",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clausura 2005",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el gol del triunfo del América en el último Clásico disputado en liguilla?",
				      "respuestas": [
				        {
				          "respuesta": "Oribe Peralta",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Darwin Quintero",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Enrique Esqueda",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cuauhtémoc Blanco",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el resultado del Clásico de torneo regular en este Apertura 2016?",
				      "respuestas": [
				        {
				          "respuesta": "América ganó 3-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Empate 1-1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Chivas ganó 3-0",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Chivas ganó 3-1",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador marcó dos goles en el Clásico del torneo regular?",
				      "respuestas": [
				        {
				          "respuesta": "Isaac Brizuela",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Orbelín Pineda",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Carlos Peña",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Chofis López",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el gol de América en el Clásico de Copa MX?",
				      "respuestas": [
				        {
				          "respuesta": "Osmar Mares",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Darwin Quintero",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Oribe Peralta",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Michael Arroyo",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el gol de Chivas en el Clásico de Copa MX?",
				      "respuestas": [
				        {
				          "respuesta": "Isaac Brizuela",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alan Pulido",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Aris Hernández",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Chofis López",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador falló el penalti definitivo en las semifinales de la Copa MX?",
				      "respuestas": [
				        {
				          "respuesta": "Alan Pulido",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Orbelín Pineda",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Michael Arroyo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Osmar Mares",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el último torneo en que Chivas eliminó al América en liguilla?",
				      "respuestas": [
				        {
				          "respuesta": "1987-1988",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Apertura 2006",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Clausura 2008",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Verano 1997",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántas veces ha eliminado América a Chivas en liguilla?",
				      "respuestas": [
				        {
				          "respuesta": "Dos",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cuatro",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Siete",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Cinco",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién es el máximo goleador de América en Clásicos?",
				      "respuestas": [
				        {
				          "respuesta": "Luis Roberto Alves “Zague”",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Cuauhtémoc Blanco",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Enrique Borja",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Salvador Cabañas",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo se dio el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Jornada 7 del torneo regular",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Semifinales de la Copa MX",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Amistoso en Carson",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jornada 15 del torneo regular",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el resultado del último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "1-2 Chivas",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1-1; América ganó en penales",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "0-0; Chivas ganó en penales",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1-1; Chivas ganó en penales",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En dónde se disputó el primer Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Estadio Jalisco",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Parque Oblatos",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Estadio Azteca",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estadio Azul (Ciudad de los Deportes)",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién es el máximo goleador de Chivas en Clásicos?",
				      "respuestas": [
				        {
				          "respuesta": "Salvador “Chava” Reyes",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Omar Bravo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ignacio Vázquez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Adolfo Bautista",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el resultado del último Clásico jugado en el Estadio de Chivas?",
				      "respuestas": [
				        {
				          "respuesta": "Ganó América 4-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ganó Chivas 1-0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Empate 0-0",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Empate 1-1",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el gol de Chivas en el último Clásico disputado en liguilla?",
				      "respuestas": [
				        {
				          "respuesta": "Orbelín Pineda",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Alan Pulido",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Omar Bravo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Javier Ledesma",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo se jugó el primer Clásico en el Estadio Chivas?",
				      "respuestas": [
				        {
				          "respuesta": "Apertura 2012",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Apertura 2010",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clausura 2010",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clausura 2011",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En dónde se jugó el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Soldier Field",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "John F. Kennedy Stadium",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estadio Chivas",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estadio Azteca",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador falló un penalti decisivo en el último Clásico de liguilla?",
				      "respuestas": [
				        {
				          "respuesta": "Carlos Peña",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Marco Fabián",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Omar Bravo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Javier Eduardo López",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Jugador emblemático de Chivas que pasó al América en 1999",
				      "respuestas": [
				        {
				          "respuesta": "Benjamín Galindo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Demetrio Madero",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis García",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ramón Ramírez",
				          "tipo": "true"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		});
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if(aciertos<=5){
	  	aficionado="";
	  	msg="dices que eres Chiva o Águila, pero en realidad sólo ves el futbol cuando hay reuniones familiares o se juega una final.";
  	}
  	
  	if(aciertos<=10 && aciertos >= 6){
	  	aficionado="";
	  	msg="sigues a tu equipo, pero no muy a menudo. Por lo menos sabes contra quién es el siguiente partido, que ya es ganancia.";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="eres un fiel seguidor de tu equipo. No te bajas del tren en las malas y cuando es día del partido, tienes el jersey bien puesto.";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="Wooow. Eres un fanático de verdad. Por gente como tú es que existe el Clásico.";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: América "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Guadalajara primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/pizzafut-clasicoliguilla");
		window.open("https://twitter.com/share?text="+text+"&hashtags=pizzafut&url="+url,"","width=500, height=300");

	} else {
		
		
		
	}
	
	});
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


