$(document).ready(function () {

    const envelope = $("#envelope");
    const btnOpen = $("#open");
    const btnReset = $("#reset");

    let isOpen = false;

    /* =========================
       EVENTOS
    ========================= */

    envelope.on("click", toggleEnvelope);
    btnOpen.on("click", openEnvelope);
    btnReset.on("click", closeEnvelope);

    /* =========================
       FUNCIONES
    ========================= */

    function toggleEnvelope() {
        if (isOpen) {
            closeEnvelope();
        } else {
            openEnvelope();
        }
    }

    function openEnvelope() {
        if (isOpen) return;

        envelope.addClass("open").removeClass("close");
        isOpen = true;

        btnOpen.text("💘 Carta Abierta");
        playSound();
        createExtraHearts();
        vibrate();
    }

    function closeEnvelope() {
        if (!isOpen) return;

        envelope.addClass("close").removeClass("open");
        isOpen = false;

        btnOpen.text("💖 Abrir Carta");
    }

    /* =========================
       SONIDO ROMÁNTICO
    ========================= */

    function playSound() {
        const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=romantic-music-ambient-11070.mp3");
        audio.volume = 0.4;
        audio.play();
    }

    /* =========================
       VIBRACIÓN (si es móvil)
    ========================= */

    function vibrate() {
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
    }

    /* =========================
       CORAZONES EXTRA DINÁMICOS
    ========================= */

    function createExtraHearts() {

        const heartsContainer = $(".hearts");
    
        for (let i = 0; i < 15; i++) {
    
            const heart = $("<div class='heart'></div>");
    
            heart.css({
                left: Math.random() * 100 + "%",
                animationDuration: (4 + Math.random() * 2) + "s",
                transform: "scale(" + (0.7 + Math.random()) + ") rotate(45deg)"
            });
    
            heartsContainer.append(heart);
    
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }
    

});
