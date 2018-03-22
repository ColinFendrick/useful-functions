function preventLetters (event) {
  // Backspace, delete, tab, escape, enter, .,
  const allowed = [46, 8, 9, 27, 13, 110, 190, 20, 35, 36, 37, 38, 39, 18];
  if (allowed.indexOf(event.keyCode) !== -1 || event.metaKey || event.ctrlKey)  {
    console.log('allowed', event)
    return;
  } else if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode< 96 || event.keyCode > 105)) {
    event.returnValue = false; 
    event.preventDefault();
  }
}