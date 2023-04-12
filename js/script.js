//Business Logic for Pizza-Parlor//
function calculateTotal() {
    // Get the size and base price
    const sizeInputs = document.getElementsByName("size");
    let sizePrice = 0;
    for (const sizeInput of sizeInputs) {
      if (sizeInput.checked) {
        sizePrice = parseInt(sizeInput.value);
        break;
      }
    }
    
    // Get the selected veggies and calculate the veggie price
    const veggieInputs = document.getElementsByName("veggies");
    let veggiePrice = 0;
    let numVeggies = 0;
    for (const veggieInput of veggieInputs) {
      if (veggieInput.checked) {
        veggiePrice += parseInt(veggieInput.value);
        numVeggies++;
        if (numVeggies === 3) {
          break;
        }
      }
    }
    
    // Get the selected meats and calculate the meat price
    const meatInputs = document.getElementsByName("meats");
    let meatPrice = 0;
    let numMeats = 0;
    for (const meatInput of meatInputs) {
      if (meatInput.checked) {
        meatPrice += parseInt(meatInput.value);
        numMeats++;
        if (numMeats === 3) {
          break;
        }
      }
    }
    
    // Calculate the total price
    const totalPrice = sizePrice + veggiePrice + meatPrice;
    
    // Display the total price to the user
    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total price: $${totalPrice}`;
  }
