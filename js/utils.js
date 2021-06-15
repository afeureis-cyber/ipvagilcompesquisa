var authForm = document.getElementById('authForm')
var auth = document.getElementById('auth')
var userContent = document.getElementById('userContent')

var userEmail = document.getElementById('userEmail')
var userContent = document.getElementById('userContent')

var passwordReset = document.getElementById('passwordReset')

var emailLogin = document.getElementById('emailLogin')

var nomeLogin = document.getElementById('nomeLogin')

var telefoneLogin = document.getElementById('telefoneLogin')


// Simplifica a exibição de elementos da página
function showItem(element) {
    element.style.display = 'block'
  }
  
  // Simplifica a remoção de elementos da página
  function hideItem(element) {
    element.style.display = 'none'
  }

  // Mostrar conteúdo para usuários autenticados
function showUserContent(user) {
    console.log(user)
   
    userEmail.innerHTML = user.email
    emailLogin.innerHTML = user.email
    if (user.email == 'afeureis@gmail.com') {
      nomeLogin.innerHTML = 'Despachante Fernando'
      telefoneLogin.innerHTML = '19982697997'
    }

    if (user.email == 'leandrogenghini@gmail.com') {
      nomeLogin.innerHTML = 'Despachante Leandro'
      telefoneLogin.innerHTML = '19996604705'
    }

    hideItem(auth)
    showItem(userContent)
  }
  
  // Mostrar conteúdo para usuários não autenticados
  function showAuth() {
    authForm.email.value = ''
    authForm.password.value = ''
    hideItem(userContent)
    showItem(auth)
  }

  // Atributos extras de configuração de e-mail
var actionCodeSettings = {
  url: 'https://ipvagilcompesquisa.netlify.app'
}


