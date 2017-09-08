import submitSuccess from './handlers/submitSuccess'

$('#contactForm input,#contactForm textarea').jqBootstrapValidation({
  preventSubmit: true,
  // additional error messages or events
  submitError: function ($form, event, errors) {},
  submitSuccess: submitSuccess,
  filter: function () {
    return $(this).is(':visible')
  }
})

$('a[data-toggle="tab"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

/* When clicking on Full hide fail/success boxes */
$('#name').focus(function () {
  $('#success').html('')
})
