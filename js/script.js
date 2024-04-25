$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });


//country code picker 
// -----Country Code Selection
// $("#mobile_code").intlTelInput({
// 	initialCountry: "in",
// 	separateDialCode: true,
// 	// utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
// });

// $(function () {
//     var code = "+19876543210"; // Assigning value from model.
//     $('#mobile').val(code);
//     $('#mobile').intlTelInput({
//         autoHideDialCode: true,
//         autoPlaceholder: "ON",
//         dropdownContainer: document.body,
//         formatOnDisplay: true,
//        // hiddenInput: "full_number",
//         initialCountry: "us",
//       //  nationalMode: true,
//         placeholderNumberType: "MOBILE",
//         preferredCountries: ['us','gb','in'],
//         separateDialCode: true
//     });
//     $('#btn-submit').on('click', function () {
//         var code = $("#mobile").intlTelInput("getSelectedCountryData").dialCode;
//         var phoneNumber = $('#mobile').val();
//       //  $('#mobile').val(code+phoneNumber);
//         //  alert('Country Code : ' + code + '\nPhone Number : ' + phoneNumber );
//         document.getElementById("code").innerHTML = code;
//         document.getElementById("mobile-number").innerHTML = phoneNumber;
//     });
// });
// const input = document.querySelector("#mobile");
//   window.intlTelInput(input, {
//     utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@21.2.4/build/js/utils.js",
//   });

//   const input = document.querySelector("#mobile");
//   window.intlTelInput(input, {
//     utilsScript: "./utils.js",
//   });  

//flag picker
const input = document.querySelector("#mobile");
  window.intlTelInput(input, {
    utilsScript: "./js/utils.js",
    useFullscreenPopup: false,
    countrySearch: true,
    // autoPlaceholder: "aggressive", 
    showSelectedDialCode: true,
    initialCountry: "auto"  //automatically fetches users ip and displays their flag
  });