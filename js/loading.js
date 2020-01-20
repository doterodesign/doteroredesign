function loading() {
  setTimeout(function () {
    if ($("#overlay").is(":visible")) {
      $("#overlay").toggle('600');
    }
  });
}

loading();
