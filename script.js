document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input[type="text"]');
    const select = form.querySelector('select');
    const submitButton = form.querySelector('button.open-modal-btn');
    const modal = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-modal-btn");

    // Function to check if input fields are empty
    function checkEmptyInputs() {
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add('empty-input');
            } else {
                input.classList.remove('empty-input');
            }
        });
        if (select.value === 'Select') {
            select.classList.add('empty-input');
        } else {
            select.classList.remove('empty-input');
        }
    }

    // Function to handle placeholder disappearance
    function handlePlaceholder(event) {
        const input = event.target;
        input.removeAttribute('placeholder');
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        // Check if any input fields are empty
        checkEmptyInputs();

        // Check if all input fields are filled
        const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        const selectFilled = select.value !== 'no-value';
        if (allFilled && selectFilled) {
            // Calculate and display results
            calculateAndDisplayResults();
            // Open the modal
            modal.classList.remove('hide');
        }
    }

    // Function to close modal
    function closeModal() {
        modal.classList.add('hide');
    }

    // Add event listener to form submit button
    submitButton.addEventListener('click', handleSubmit);

    // Add event listener to input fields for placeholder disappearance
    inputs.forEach(input => {
        input.addEventListener('input', handlePlaceholder);
        input.addEventListener('input', function() {
            // Check if any text input field contains non-numeric characters
            const inputValue = input.value.trim();
            const containsNonNumeric = !/^\d*\.?\d*$/.test(inputValue);
            // Display exclamation icon if non-numeric characters are found
            const exclamationIcon = input.nextElementSibling.querySelector('.fa-exclamation-circle');
            if (containsNonNumeric) {
                exclamationIcon.style.display = 'inline-block';
            } else {
                exclamationIcon.style.display = 'none';
            }
            // Disable submit button if any text input field contains non-numeric characters
            submitButton.disabled = containsNonNumeric;
        });
    });

    // Add event listener to close button
    closeBtn.addEventListener('click', closeModal);

    // Function to calculate and display results
    function calculateAndDisplayResults() {
        // Get values from form fields
        const grossAnnualIncome = parseFloat(inputs[0].value);
        const extraIncome = parseFloat(inputs[1].value);
        const ageGroup = select.value;
        const deductions = parseFloat(inputs[2].value);

        // Calculate overall income
        const totalIncome = grossAnnualIncome + extraIncome - deductions;

        if (totalIncome > 800000) {
            document.querySelector('.table-box').style.display='block';
            document.querySelector('.no-tax').style.display='none';

            // Calculate taxable income (considering exemption limit)
            const taxableIncome = Math.max(0, totalIncome - 800000); 

            // Determine tax rate based on age group
            let taxRate;
            switch (ageGroup) {
                case '<40':
                    taxRate = 0.3;
                    break;
                case '≥ 40 & < 60':
                    taxRate = 0.4;
                    break;
                case '≥ 60':
                    taxRate = 0.1;
                    break;
                default:
                    console.error("Invalid age group selected");
            }

            const overallIncome=totalIncome-(taxableIncome * taxRate);
console.log("overallIncome : "+overallIncome)
console.log("taxableIncome : "+taxableIncome)
            // Display values in modal
            document.getElementById('taxable-income').innerHTML = `${taxableIncome.toFixed(2)}`;
            document.getElementById('tax-rate').innerHTML = `${(taxRate * 100).toFixed(2)}%`;
            document.getElementById('tax-amount').innerHTML = `${(taxableIncome * taxRate).toFixed(2)}`; 
            document.getElementById('total-amount').innerHTML = `${totalIncome.toFixed(2)}`;
            document.getElementById('overall-amount').innerHTML = `${overallIncome.toFixed(2)}`;

        } else {
            document.querySelector('.table-box').style.display='none';
            const noTaxBox = document.querySelector('.no-tax'); 
            noTaxBox.style.display = 'block';
            noTaxBox.querySelector('h2').innerText = "Your Overall Income will be";
            noTaxBox.querySelector('h3').innerText =  totalIncome.toFixed(2) ;
            noTaxBox.querySelector('h4').innerText = "Your overall income is less then 8 lakhs, so you are in Tax free zone.";

        }
    }
});
