function handleErrorSendingMessage (firstName) {
  // Fail message
  $('#success')
    .html("<div class='alert alert-danger'>")

  $('#success > .alert-danger')
    .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    .append('</button>')

  $('#success > .alert-danger')
    .append($('<strong>').text('Sorry ' + firstName + ', it seems that my mail server is not responding. Please try again later!'))

  $('#success > .alert-danger').append('</div>')

  // clear all fields
  $('#contactForm').trigger('reset')
}

export default handleErrorSendingMessage
