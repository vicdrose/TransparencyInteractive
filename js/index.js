$(document).ready(function() {
    $('form').submit(function(event) { 
        $('#title + .throw_error').empty(); 
        $('#comment + .throw_error').empty(); 
        $('#success').empty();
    
        var postForm = { 
            'title': $('#title').val(),
            'comment': $('#comment').val()
        };
        $.ajax({
            type: 'POST',
            url: './submit.php',
            data: postForm,
            dataType: 'json',
            success: function(data) {
                console.log(data);
                if (!data.success) {
                    if (data.errors.title) {
                        console.log(data.errors.title);
                        $('#title + .throw_error').fadeIn(1000).html(data.errors.title);
                    }
                    if (data.errors.comment) {
                        console.log(data.errors.comment);
                        $('#comment + .throw_error').fadeIn(1000).html(data.errors.comment);
                    }
                } else {
                    checkdatabase();
                    $('#success').fadeIn(1000).append('<p>' + data.posted + '</p>');
                }
            }
        });
        event.preventDefault();
    });

    function checkdatabase() {
        $('#output').empty();
        $.ajax({
            url: './data.php',
            dataType: 'json',
            cache: false,
            success: function(data) {
                var i = 0;
                $.each(data, function(index) {
                    i++;
                    console.log(data[index]);
                    $('#output').append("<div class='well'><b>Title</b>:  " + data[index].title + " <br>    <b>Note</b>:  " + data[index].comment + "<br><br></div>");
                });
            }
        });
    }
    checkdatabase();
});

/*
function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text('"' + quote + '"');
        if (author) {
          $('#author').text('- ' + author);
        }
        else {
          $('#author').text('- unknown');
        }
      }
    }); //making an API request
  }
*/

//http://transparencyinteractive.com/about/img/header.gif
//https://media.giphy.com/media/aQ8hC3sok8khi/giphy.gif

function Enter(){
  document.getElementById("enter").style.display="none";
  document.getElementById("navmenu").style.display="block";
  document.getElementById("homebtn").style.display="inline";
  //document.getElementById("Title").style.display="none";
  document.getElementById('tools').style.display="inline";
  document.getElementById('tools1').style.display="inline";
  document.getElementById('front').style.display="block";
}
function home(){
  document.getElementById("enter").style.display="block";
  document.getElementById("navmenu").style.display="block";
  document.getElementById("homebtn").style.display="none";
  //document.getElementById("Title").style.display="block";
  document.getElementById('tools').style.display="none";
  document.getElementById('tools1').style.display="none";
  document.getElementById('front').style.display="none";
}

function password(){

    var password = prompt("Hold it baby, what's the password?", "Do I know you like dat?");
    if (password == " ") {
        Enter();
    } else {
        alert("Mr. Superman no live here");
    }
    
}
