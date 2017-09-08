import handleMessageSent from './handleMessageSent'
import handleErrorSendingMessage from './handleErrorSendingMessage'

function submitSuccess ($form, event) {
  event.preventDefault() // prevent default submit behaviour
  // get values from FORM

  const name = $('input#name').val()
  const email = $('input#email').val()
  const phone = $('input#phone').val()
  const message = $('textarea#message').val()

  let firstName = name // For Success/Failure Message
  // Check for white space in name for Success/Fail message
  if (firstName.indexOf(' ') >= 0) {
    firstName = name.split(' ').slice(0, -1).join(' ')
  }

  let $this = $('#sendMessageButton')
  $this.prop('disabled', true) // Disable submit button until AJAX call is complete to prevent duplicate messages

  $.ajax({
    url: '/mail/contact',
    type: 'POST',
    data: { name, phone, email, message },
    cache: false,
    success: handleMessageSent,
    error: handleErrorSendingMessage.bind(null, firstName),
    complete: function () {
      setTimeout(function () {
        $this.prop('disabled', false) // Re-enable submit button when AJAX call is complete
      }, 1000)
    }
  })
}

export default submitSuccess
