function insert(num){
    var myString = document.form.idx.value;
    var lastChar = myString[myString.length - 1];
    if (myString.length < 30) {
     if (!isNaN(lastChar) || lastChar == null || !isNaN(num)) {
      document.form.idx.value = myString + num;
     }else if(num != lastChar){
      document.form.idx.value = myString.replace(lastChar, num);
     }
    }
   }
   function equal(){
    var sum = document.form.idx.value;
    if (sum) {
     document.form.idx.value = eval(sum);
    }
   }
   function clean(){
    document.form.idx.value = '';
   }
   function back(){
    var exp = document.form.idx.value;
    document.form.idx.value = exp.substring(0,exp.length - 1);
   }