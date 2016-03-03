var calcArray = [];

$('span').on('click', function(event) {
  var $this = $(this);
  if (event.target.id === 'cancel') {
    $('#screen').empty();
    calcArray = [];
  }
  else if (event.target.id === 'calc') {
    var calcString = calcArray.join('');
    $('#screen').empty();
    var calcValue = eval(calcString);
    $('#screen').append(calcValue);
  }
  else if (event.target.className === 'operator' && $this.text() === 'x') {
    console.log($this.text());
    $('#screen').append($this.text());
    calcArray.push('*');
  }
  else if (event.target.className === 'operator' && $this.text() === '\u00F7') {
    $('#screen').append($this.text());
    calcArray.push('/');
  }
  else {
    console.log($this.text());
    $('#screen').append($this.text());
    calcArray.push($this.text());
  }
})
