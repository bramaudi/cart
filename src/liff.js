export const liffInit = () => liff.init({ liffId: '1655457217-XdEO0230' })

export const liffLogin = () => {
  liffInit()
    .then(() => {
      if (liff.isLoggedIn()) {
        window.location.href = window.location.origin + '/#!/menu'
      } else {
        liff.login();
      }
    })
    .catch(() => {
      console.log('Failed to init LIFF');
    })
}

export const liffLogout = () => {
  liffInit()
    .then(() => {
      if (liff.isLoggedIn()) {
        liff.logout();
        window.location.reload()
      }
    })
    .catch(() => {
      console.log('Failed to init LIFF');
    })
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