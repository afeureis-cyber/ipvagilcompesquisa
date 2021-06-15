firebase.auth().languageCode = 'pt-BR'



authForm.onsubmit = function (event) {
   
    event.preventDefault()
    
      firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error) {
        alert('Usuário ou senha não encontrado')
        console.log('Falha no acesso')
        console.log(error)
        
      })
}

// Função que centraliza e trata a autenticação
firebase.auth().onAuthStateChanged(function (user) {
   
    if (user) {
      showUserContent(user)
    } else {
      showAuth()
    }
  })

  // Função que permite ao usuário sair da conta dele
function signOut() {
    firebase.auth().signOut().catch(function (error) {
      console.log('Falha ao sair da conta')
      console.log(error)
    })
  }

  // Função que permite o usuário redefinir a senha dele
function sendPasswordResetEmail() {
  var email = prompt('Redefinir senha! Informe o seu endereço de e-mail.', authForm.email.value)
  if (email) {
    
    firebase.auth().sendPasswordResetEmail(email, actionCodeSettings).then(function () {
      alert('E-mail de redefinição de senha foi enviado para ' + email + '.')
    }).catch(function (error) {
      alert('Houve um erro ao enviar e-mail de redefinição de senha!')
      console.log(error)
    })
   
  } else {
    alert('É preciso preencher o campo de e-mail para redefinir a senha!')
  }
}


  