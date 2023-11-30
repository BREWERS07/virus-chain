var codeText = document.getElementById("coupon-code");

codeText.innerText = `Your special coupon code is ${Math.round(Math.random() * 100000000000000)}!!`;

specialWindow = window.open("","Inspiration", 'width=400, height=400');
specialWindow.document.body.innerHTML = `<div style="width: 100vw; height: 100vh; background-color: purple; background-size: 100% 100%;">That wasn't very smart :(. Never allow popups from a suspicious website!</div><script></script>`;
