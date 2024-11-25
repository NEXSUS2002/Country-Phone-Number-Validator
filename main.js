document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const toggleModeBtn = document.getElementById('toggle-mode');

    checkBtn.addEventListener('click', validateNumber);
    clearBtn.addEventListener('click', clearInput);
    toggleModeBtn.addEventListener('click', toggleMode);
});

function validateNumber() {
    const userInput = document.getElementById("user-input").value;
    const resultsDiv = document.getElementById("results-div");
    const selectedCountry = document.getElementById("country-select").value;

    if (!userInput) {
        resultsDiv.textContent = "Error: Please provide a phone number."; return;
    }
    if (!validatePhoneNumber(userInput, selectedCountry)) {
        resultsDiv.textContent = `Error: Invalid ${getCountryName(selectedCountry)} number format.`;
    } else {
        resultsDiv.textContent = `Valid ${getCountryName(selectedCountry)} number: ${userInput}`;
    }
}

function clearInput() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
}

function toggleMode() {
    document.body.classList.toggle('dark');
}

function validatePhoneNumber(phoneNumber, country) {
    const patterns = {
        us: [
            /^1?\s?\d{3}-\d{3}-\d{4}$/,
            /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,
            /^1?\(\d{3}\)\d{3}-\d{4}$/,
            /^1?\s?\d{3}\s?\d{3}\s?\d{4}$/,
            /^\d{10}$/, /^\d{3}-\d{3}-\d{4}$/,
            /^\(\d{3}\)\d{3}-\d{4}$/
        ],

        ng: [
            /^0[789][01]\d{8}$/,        // 08012345678, 07012345678
            /^0[789][01] \d{3} \d{3} \d{4}$/,       // 0701 234 5678
            /^\+234 [789][01] \d{3} \d{3} \d{4}$/,  // +234 801 234 5678
            /^234 [789][01] \d{3} \d{3} \d{4}$/     // 234 801 234 5678
        ],

        uk: [
            /^\+44\s?7\d{3}|\(?07\d{3}\)?\s?\d{3}\s?\d{3}$/,
            /^07\d{3}\s?\d{6}$/,
            /^(\+44\s?1\d{2}|011\d{1})\s?\d{3}\s?\d{4}$/
        ],

        jp: [
            /^\+81\d{1,2}-\d{1,4}-\d{4}$/,
            /^\(?0\d{1,3}\)?-?\d{1,4}-?\d{4}$/,
            /^0\d{9,10}$/
        ],

        cn: [
            /^\+86-?\d{1,4}-?\d{1,4}-?\d{4}$/,
            /^1[34578]\d{9}$/
        ]
        // Add more country patterns as needed
    };

    if (!patterns[country]) { 
        const resultsDiv = document.getElementById("results-div"); 
        resultsDiv.textContent = "Error: Unsupported country selected."; 
        return false; 
    }

    for (const pattern of patterns[country]) {
        if (pattern.test(phoneNumber)) {
            return true;
        }
    }
    return false;
}

function getCountryName(code) {
    const countries = {
        us: 'US',
        ng: 'Nigerian',
        uk: 'UK',
        jp: 'Japanese',
        cn: 'Chinese'
        // Add more country codes and names as needed
    };
    return countries[code] || 'Unknown';
}
