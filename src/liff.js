export const liffInit = () => {
  return liff.init({ liffId: '1655457217-XdEO0230' })
}

export const liffLogin = () => {
	liffInit().then(() => {
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      window.location.href = '#!/menu'
    }
  })
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
    sendAlertIfNotInClient();
  } else {
    liff.sendMessages([{
      'type': 'text',
      text
    }]).then(function() {
      window.alert('Message sent');
    }).catch(function(error) {
      window.alert('Error sending message: ' + error);
    });
  }
}