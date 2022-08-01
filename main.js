const mainPage = document.querySelector('.MainPage');

function bringUpCustomers (customerArray) {
    for (let customer of customerArray) {
        // Variable creation to create elements
        let entryBox = document.createElement('div');
        let imageBox = document.createElement('img');
        let nameBox = document.createElement('h1');
        let emailBox = document.createElement('h2');
        let addressBox = document.createElement('p');
        let dobBox = document.createElement('p');
        let custDateBox = document.createElement('p');
        //adding classes to elements created
        entryBox.classList.add("entries");
        imageBox.classList.add("pics");
        nameBox.classList.add("names");
        emailBox.classList.add("emails");
        addressBox.classList.add("addresses");
        dobBox.classList.add("dobs");
        custDateBox.classList.add("custDates");
        //entering information for elements
        imageBox.src = customer.picture.large;
        nameBox.innerText = `${customer.name.first.charAt(0).toUpperCase() 
                            + customer.name.first.slice(1)} 
                            ${customer.name.last.charAt(0).toUpperCase() 
                            + customer.name.last.slice(1)}`;
        emailBox.innerText = `${customer.email}`;
        addressBox.innerText = `${customer.location.street.number} ${customer.location.street.name}
                                ${customer.location.city} ${customer.location.state} ${customer.location.postcode}`;
        dobBox.innerText = `${customer.dob.date}`;
        custDateBox.innerText = `Customer Since: ${customer.registered.date}`;
        //appending elements
        mainPage.appendChild(entryBox);
        entryBox.appendChild(imageBox);
        entryBox.appendChild(nameBox);
        entryBox.appendChild(emailBox);
        entryBox.appendChild(addressBox);
        entryBox.appendChild(dobBox);
        entryBox.appendChild(custDateBox)
        
    }
}

bringUpCustomers(customers);