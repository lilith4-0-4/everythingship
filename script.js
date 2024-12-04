    document.querySelectorAll('.gift').forEach(gift => {
        gift.addEventListener('click', () => {
        const message = document.createElement('div');
        message.classList.add('surprise');
        if (gift.id === 'gift1') {
            message.textContent = 'did you know you’re really cute';
        } else if (gift.id === 'gift2') {
            message.textContent = 'and i really wanna kiss you';
        } else if (gift.id === 'gift3') {
            message.textContent = 'and you’re the best present i could ever ask for';
        }
        gift.replaceWith(message);
        message.style.opacity = '0';
        setTimeout(() => {
            message.style.opacity = '1';
        }, 100);
        });
    });

    const snowflakes = document.getElementById('snowflakes');

    // snowflakes
    function generateSnowflakes() {
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.animationDuration = 3 + Math.random() * 2 + 's';
        snowflakes.appendChild(snowflake);
    }

    setTimeout(() => {
        snowflakes.style.opacity = '0';
        setTimeout(() => {
            snowflakes.innerHTML = '';
        }, 5000);
    }, 10000);
    }

    generateSnowflakes();


    // letter
    const letter = `
            
To my cutest crispy roll,

I wish you the merriest Christmas ever. Two and a half years of knowing you feel like two and a half minutes, but at the same time it feels like I’ve known you my whole life. I’ll always admire the deep emotional bond we share, I could talk to you for hours and never get tired. You’ve never failed to put a smile on my face during all this time and for that, I’m eternally grateful.

There is truly no one else as kind, caring, understanding and funny as you and those are just a few of the many good adjectives I could use to describe you. You’re genuinely perfect and I am so proud of you and the man you’ve become.

Here’s to many more (white) Christmases together and hours spent cuddling underneath blankets by a fireplace.

Sending endless kisses and cuddles forever, 
Your magic star

        `;

    const letterElement = document.getElementById('letter');
    let index = 0;

    function typeLetter() {
    if (index < letter.length) {
        letterElement.textContent += letter.charAt(index);
        index++;
        setTimeout(typeLetter, 80);
    }
    }

        typeLetter();

/* COUNTDOWN */
    document.addEventListener("DOMContentLoaded", () => {
    const countdownContainer = document.getElementById("countdown-container");
    const mainContent = document.getElementById("wholebody");
    const targetDate = new Date("December 25, 2024 00:00:00").getTime();
  
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
  
      if (timeLeft <= 0) {
        countdownContainer.style.display = "none";
        mainContent.style.display = "block";
        clearInterval(timer);
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    };
  
    const timer = setInterval(updateCountdown, 1000);

    updateCountdown();
  });
  
