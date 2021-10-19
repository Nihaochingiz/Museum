

let prices =  [
  [100, 200],
  [150, 250],
  [300, 400]
];

let permanentExhibition = document.getElementsByName('g');
let numberMinus = document.getElementsByTagName("number-minus");
let numberPlus = document.getElementsByTagName("number-plus");
let input0 = document.getElementById('input');//взяли счетчик из html
let input2 = document.getElementById('input2');//взяли счетчик из html
let total = document.getElementById("total");

let eGlob;


for ( i = 0; i < permanentExhibition.length; i++) {
  
  permanentExhibition[i].onclick = newFunction
}


function newFunction(e) {
  eGlob = e
 console.log(prices[e.target.value])
 formula();
}


function formula () {
  
  allprice = (prices[eGlob.target.value][0] * input0.value) +
  (prices[eGlob.target.value][1]  * input2.value)
 

  console.log(total.innerHTML)

  total.innerHTML = allprice;

}


function counter(elem,counterNum) {
  
  let input,j;// объявили переменные переменная ввод и переменная j, которую изменяем
 if ( counterNum === 1) { // если выбран первый счетчик
   input = input0;// ввод будет равен input0, то есть первому счетчику из html
  j = input.value;// j будет равна значение из input, а присвоили мы ему input0
 
 } else if ( counterNum === 2 ) {// если выбран второй счетчик
   input = input2;// ввод будет равен input2, то есть второму счетчику из html
   j = input.value;//j будет равна значение из input, а присвоили мы ему input2
 }
 
 if (elem.innerHTML === '+' ) {
  j++; //если элемент внутри хтмл будет равен плюсу, мы увеличиваем значение на 1
} else {

   if (j  >   0) {
     j--  //в противном случае уменьшаем, причем значение больше 0, мы уменьшаем значение на 1
   }

 }
 input.value = j;  // значение инпута будет равно переменной j
 
 formula();
 
};


//привязан только к input.value, убрать привязку к j


