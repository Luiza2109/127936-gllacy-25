var link=document.querySelector(".write-btn"),popup=document.querySelector(".modal-login"),close=popup.querySelector(".modal-close"),login=popup.querySelector("[name=login]"),form=popup.querySelector(".login-form"),email=popup.querySelector("[name=mail]"),storage=localStorage.getItem("login");link.addEventListener("click",function(o){o.preventDefault(),popup.classList.add("modal-show"),storage?(login.value=storage,password.focus()):login.focus()}),close.addEventListener("click",function(o){o.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(o){login.value&&email.value?localStorage.setItem("login",login.value):(o.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(o){27===o.keyCode&&popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error"))});