export const liffLogin = () => {
  if (!liff.isLoggedIn()) {
    liff.login();
  } else {
    window.location.href = '#!/menu'
  }
}

export const liffLogout = () => {
  if (liff.isLoggedIn()) {
    liff.logout();
    window.location.reload();
  }
}

export const liffOpenExternal = (url) => {
  liff.openWindow({
    url,
    external: true
  });
}

export const liffSendMessage = (text) => {
  if (!liff.isInClient()) {
    window.alert('Maaf, tidak bisa melakukan checkout di luar LINE.')
  } else {
    liff.sendMessages([{
      'type': 'text',
      text
    }]).then(function() {
      window.alert('Pesanan berhasil di checkout.');
    }).catch(function(error) {
      window.alert('Error sending message: ' + error);
    });
  }
}