
var btn1=document.getElementById('add');
var list_container=document.getElementById('list_container');

btn1.addEventListener("click",function(){create_under(list_container);
										 checkboxes();} );









function create_under(parentNode){
	var element=create_element(parentNode);

	parentNode.appendChild(element);


}

function create_element(parentNode){
	var value=document.getElementById("text").value;
	var list_container=document.getElementById("list_container");




	//createElement
	var list=document.createElement("li");
	var btn1=document.createElement("button");   ///add_content
	var btn2=document.createElement("button");   ///delete
	 /////change content button
	var btn3=document.createElement('button');





   	







	var ul=document.createElement("ul");
	var item=document.createElement("li");

	var p=document.createElement('p');
	p.setAttribute('class','content');


	// if(parentNode.id!=='list_container'){
	var check=document.createElement('input');

	check.setAttribute('type','checkbox');
	check.setAttribute('class','check');
	check.addEventListener('click',checkboxes);

	
	list.appendChild(check);
	
	// }


	

	list.appendChild(ul);

	if(parentNode.id==="list_container"){list.appendChild(btn1);}
	//item以後的元素沒有新增功能
	// 
	list.appendChild(btn2);
	list.appendChild(btn3);
	list.appendChild(p);


	






	//setAttribute


	setListAttribute(list,value);

	setButtonAttribute(btn1,btn2,btn3);
	// setulAttribute(ul);


	//append

	// ul.appendChild(item);
	
	ul.setAttribute('class','item_container');

	

	

	

	


	
	

	// document.getElementById("list_container").appendChild(list);
	


	

	setinputblank();

	return  list;

}


function setListAttribute(list,value){
	list.setAttribute("class","list");

	list.lastChild.innerHTML=value;
	// list.addEventListener("dblclick",function(){

	// 	change_content(list);

	// })

}

function setButtonAttribute(btn1,btn2,btn3){

	btn1.setAttribute("class","add");
	btn1.innerHTML=('add new items :');
	btn1.addEventListener('click', add_content);
	btn1.addEventListener('click', checkboxes);///更新do,undo



	btn2.setAttribute("class","cross");
	btn2.addEventListener('click', delete_element);
	btn2.addEventListener('click', checkboxes);///更新do,undo


	btn3.setAttribute('class','edit');
	btn3.innerHTML='edit';
	btn3.addEventListener('click',edit_content);

}

// function setulAttribute(ul){
// 	ul.setAttribute('dblclick',function(){
// 		ul.appendChild(item);

// 	})

// }


function setinputblank(){
	var myinput=document.getElementById('text');
	myinput.value="";

}


function add_content(){
	var message=prompt("new content is : ");
	var ul_node=this.parentNode.childNodes[1];////插在ul下面

	
	create_under(ul_node);
	
	var list=ul_node.lastChild;

	list.lastChild.innerHTML=message;  //new append node is the last


}

// var hide=(list)=>{
// 	list.

// }

function edit_content(){
	var message=prompt("change content to : ");
	list=this.parentNode;
	list.lastChild.innerHTML=message;

}


function checkboxes(){
    var inputElems = document.getElementsByTagName("input"),
    count = 0;
    for (var i=0; i<inputElems.length; i++) {
    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true){
        count++;
    }
	}



	var done=document.getElementById('done');
	var undone=document.getElementById('undone');
	


	done.innerHTML="已完成："+ count;
	undone.innerHTML="未完成："+ (inputElems.length-1-count);




}



function delete_element(){
	
	this.parentNode.remove();
}

