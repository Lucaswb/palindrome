$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#sentence").val();
    var originalList=input.split(' ').join('').split('')
    var reverseList=originalList.slice();

    reverseList.reverse();
    var num = 0
    for (var i=0; originalList.length<=i; i+=1){
      if (originalList[i]!=reverseList[i]){
        alert("problem")
        num+=1
        alert(num)
        break
      }
    }
    if (num===0){
      alert("is a palindrome")
    } else {
      alert("is not a palindrome")
    }

  })
})
