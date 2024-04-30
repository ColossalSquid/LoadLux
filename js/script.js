$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });


//flag picker
const input = document.querySelector("#mobile");
  window.intlTelInput(input, {
    utilsScript: "./js/utils.js",
    useFullscreenPopup: false,
    countrySearch: true,
    // autoPlaceholder: "aggressive", 
    showSelectedDialCode: true,
    initialCountry: "ca"  
});


//form submission
var form = document.getElementById("form");
var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("modal-button");
var modalCloseSpan = document.getElementById("close-btn"); 

modalBtn.onclick = function () {
  modal.style.display = "none";
}

modalCloseSpan.onclick = function() {
  modal.style.display = "none";
}; 

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      modal.style.display = "block";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)