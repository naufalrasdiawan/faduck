// scripts.js

function copyContractAddress() {
    const contractAddress = "GrKaJCeHCJ1P7shdiPax9U6VvED9feFo3Yjz5uZspump";
    navigator.clipboard.writeText(contractAddress).then(() => {
        alert('Contract address copied!');
    });
}