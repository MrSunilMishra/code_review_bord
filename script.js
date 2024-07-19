document.addEventListener('DOMContentLoaded', function() {
    const codeSnippet = document.getElementById('code-snippet');
  /* start code */  const codeText = `
     
document.getElementById('copy-button').addEventListener('click', function() {
    const codeSnippet = document.getElementById('code-snippet').textContent;
    navigator.clipboard.writeText(codeSnippet).then(function() {
        alert('Code copied to clipboard!');
    }).catch(function(error) {
        alert('Failed to copy code: ', error);
    });
});

    `;/* end code */
    let index = 0;
    const copyButton = document.getElementById('copy-button');

    // Disable the copy button initially
    copyButton.disabled = true;

    function typeCode() {
        if (index < codeText.length) {
            codeSnippet.textContent += codeText.charAt(index);
            index++;
            setTimeout(typeCode, 50); // Adjust typing speed here (milliseconds per character)
        } else {
            Prism.highlightElement(codeSnippet); // Highlight syntax after typing
            // Enable the copy button after typing is complete
            copyButton.disabled = false;
        }
    }

    typeCode();

    copyButton.addEventListener('click', function() {
        navigator.clipboard.writeText(codeSnippet.textContent).then(function() {
            alert('Code copied to clipboard!');
        }).catch(function(error) {
            alert('Failed to copy code: ', error);
        });
    });
});
