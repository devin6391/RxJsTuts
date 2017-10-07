var input = $("#textInput"),
    $results = $('#results'),
    debounceTime = 750,
    timer = null,
    ajaxRef = null,
    prevText = "";

input.on("click", function(event) {
  var text = event.targe.value;
  if(prevText == text) return false;
  prevText = text;
  if(text.length < 3) return false;

  if(timer){
    clearTimeout(timer);
    timer = null;
    if(ajaxRef) ajaxRef.abort();
  }

  if(!timer) {
    timer = setTimeout(function() {
      ajaxRef = $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
          action: 'opensearch',
          format: 'json',
          search: term
        }
      })
      .success(successTask)
      .error(errorTask)
    }, debounceTime);
  }
});
