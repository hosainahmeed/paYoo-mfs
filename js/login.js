document.getElementById("btn-Login").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = document.getElementById("mobile-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  if (mobileNumber === "01772" && pinNumber === "2233") {
    window.location.href = '/home.html'
  } else {
    alert("Use mobile number  = 01772 ans pin number = 2233")
  }
});
