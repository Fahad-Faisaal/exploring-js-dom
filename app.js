const allButtons = document.getElementsByClassName('btn-test');

// Count functionalities
function count() {
  // storing parent of buttons
  const btnContainer = document.querySelector('.btn-container');
  
  let result = 0;
  // control
  function control(id) {
    document.getElementById(id).innerText = result;
  }
  
  btnContainer.addEventListener('click', function(e) {
    // avoideng clicks that are not buttons
    if (!e.target.classList.contains('btn-test')) return;

    // add
    if (e.target.classList.contains('add')) {
      result++;
      control('title');
    }
  
    // substract
    if (e.target.classList.contains('substract')) {
      result = result <= 0 ? 0 : result - 1;
      control('title');
    }
  
    // reset
    if (e.target.classList.contains('reset')) {
      result = 0;
      control('title');
    }
  })
}
count();

