$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#sentence").val();

    var originalList=input.split(' ').join('').split('')
    var reverseList=originalList.slice();

    reverseList.reverse();
    var num = 0
    for (var i=0; i<=originalList.length; i+=1){
      if (originalList[i]!=reverseList[i]){
        num+=1
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
