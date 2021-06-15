$(function ()
{
  /* A jQuery selection is made
  containing the <p> element at
  the end of the page */
  var $p = $("p");

  /* That element is copied
  using the .clone() method */
  var $clonedQuote = $p.clone();

  // The paragraph is removed.
  $p.remove();

  /* The cloned version of the
  quote is inserted after the <h2>
  element at the top of the page. */
  $clonedQuote.insertAfter("h2");

  /* The first list item is detached
  from the DOM tree and stored
  in a variable called $move Item */
  var $moveItem = $("#one").detach();

  $moveItem.appendTo("ul");
})
