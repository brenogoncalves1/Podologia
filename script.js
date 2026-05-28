
        const numeroWhatsapp = "16894653221"; 
        const mensagemPersonalizada = "Olá, Ivaneide! Gostaria de agendar uma avaliação podológica.";

        const linksWhatsapp = document.querySelectorAll('.whatsapp-link');
        const urlFinal = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemPersonalizada)}`;

        linksWhatsapp.forEach(link => {
            link.setAttribute('href', urlFinal);
            link.setAttribute('target', '_blank');
        });
