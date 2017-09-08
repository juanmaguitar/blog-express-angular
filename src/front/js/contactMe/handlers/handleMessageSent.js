function handleMessageSent () {
  // Success message
  $('#success')
    .html("<div class='alert alert-success'>")

  $('#success > .alert-success')
    .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
    .append('</button>')

  $('#success > .alert-success')
    .append('<strong>Your message has been sent. </strong>')

  $('#success > .alert-success')
    .append('</div>')

  // clear all fields
  $('#contactForm').trigger('reset')
}

export default handleMessageSent
