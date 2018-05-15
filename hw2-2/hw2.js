var car_pos=0;
var user_1choice=0;
var user_2choice=0;
var goat_pos=0;

table=[0,0,0,0];  //(0,0) ,(0,1),(1,0),(1,1)

var img=document.getElementsByClassName('img');
var stage=1;

// for(let i=0;i<3;i++){
// var img=document.getElementsByClassName('img');
// img[i].addEventListener('click',function(){
// 			 choose();
// 				 });

// }

reset();



function reset(){
	
	// set_statistic();
	stage=1;
	user_1choice=0;
	user_2choice=0;
	goat_pos=0;

	for(let i=0;i<3;i++){
		var img=document.getElementsByClassName('img');	
		img[i].childNodes[1].src="./images/doorclose.jpeg" ;



	}




	car_pos=set_car_pos();
	

}

function set_car_pos(){
	var rand=Math.floor(Math.random()*3)+1; //1~3
	car_pos=rand;

	return car_pos;

}




function choose(x){
	
	// var that=this;
	console.log(x);


	if(stage===1){
		set_choice(x);
		show_pic(x);
		stage++;
		return;

	}
	else if(stage===2){
		set_choice(x);
		show_pic(x);
		
		


		if(user_1choice===user_2choice){
			if(user_2choice===car_pos){
				table[1]+=1;
				table[3]+=1;
			}
			else{table[1]+=1;}

		}
			else if(user_1choice!=user_2choice){
				if(user_2choice===car_pos){
					table[0]+=1;
					table[2]+=1;
				}
				else{table[0]+=1;}
			}

		

		set_statistic();
		setTimeout("alert('one more run!!')",100);
		setTimeout("reset()",200);

	}
	
}






function opendoor(x){
	var id=x.parentNode.id;
	var index;

	if(id=='first')index=1;
	else if(id=='second')index=2;
	else if (id=='third')index=3;

	if(index==goat_pos)return;
	x.src="images/dooropen.jpeg";
}
	
	



function closedoor(x){
	var id=x.parentNode.id;
	var index;

	if(id=='first')index=1;
	else if(id=='second')index=2;
	else if (id=='third')index=3;
	
	if(index==goat_pos)return;
	x.src="images/doorclose.jpeg";



}


function set_choice(x){
	var id=x.parentNode.id;
	console.log('user_1choice:'+id);


	if(stage===1){
	
	if(id==='first'){user_1choice=1;}
	else if(id==='second'){user_1choice=2;}
	else if(id==='third'){user_1choice=3;}
	}
	else if(stage===2){
		if(id==='first'){user_2choice=1;}
	else if(id==='second'){user_2choice=2;}
	else if(id==='third'){user_2choice=3;}

	}

	

}

function show_pic(x){
	// var div=x.parentNode;


	
	if(stage===1){


		var img=document.getElementsByClassName('img');
		for(let i=1;i<=3;i++){
		if(i!=car_pos&&i!=user_1choice){
			img[i-1].childNodes[1].src="./images/goat.jpeg";
			goat_pos=i;
			return;

		}


	}//for

	}//if
	else if(stage===2){
		console.log(x);
		if(user_2choice===car_pos){x.src="./images/car.jpeg";}
		else{x.src="./images/goat.jpeg";}
		


	}


	
	

}

function set_statistic(){
	var r1 = document.getElementById("mytable").rows[1].cells;
	var r2 = document.getElementById("mytable").rows[2].cells;
	var r3 = document.getElementById("mytable").rows[3].cells;
	

	r1[1].innerHTML = table[0];
	r1[3].innerHTML = table[1];
	r2[1].innerHTML = table[2];
	r2[3].innerHTML = table[3];
	r3[1].innerHTML = table[2]/table[0]*100;
	r3[3].innerHTML = table[3]/table[1]*100;



}




