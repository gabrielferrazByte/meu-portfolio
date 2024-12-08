// Aguarda o carregamento completo do DOM para inicializar a funcionalidade do formulário
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    // Adiciona um evento de envio ao formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Exibe uma mensagem de sucesso com os dados do formulário 
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.\n\nE-mail: ${email}\nMensagem: ${message}`);

        // Limpa os campos do formulário
        form.reset();
    });
});
