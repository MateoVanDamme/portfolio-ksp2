import { addButtonClickListener } from './modules/button-module.js'
import { createNavbar } from './modules/navbar-builder.js'
import { showAlert } from './modules/alerts-module.js';
import { getCraft } from './modules/craft-fetcher-module.js';

//Add navbar
createNavbar("Scene generation");

//Add buttons
addButtonClickListener("btnRedditParajet", 'https://www.reddit.com/r/KerbalSpaceProgram/comments/17kt82m/flying_over_the_ksc2_with_the_new_blackrack/');


document.getElementById('btnCopy').addEventListener('click', function () {
    // URL to fetch the text from
    var url = 'https://storage.googleapis.com/ksp2-crafts/Parajet.txt';

    getCraft(url)
        .then(function (textToCopy) {
            // Create a temporary input element to copy the text to the clipboard
            var tempInput = document.createElement('input');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            showAlert('Text copied to clipboard!');
        })
        .catch(function (error) {
            console.error(error);
            showAlert('Failed to fetch content.');
        });
});