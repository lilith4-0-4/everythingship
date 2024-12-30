const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');
const couponImage = document.getElementById('coupon-image');
const popupText = document.getElementById('popup-text'); // Text placeholder
const closeBtn = document.getElementById('close-btn');

// pics and text
const coupons = {
    1: { image: "images/coupon1.png", text: "so you can know what it feels like to not be skellie for once" },
    2: { image: "images/coupon2.webp", text: "reminder: you are my home" },
    3: { image: "images/rickroll.gif", text: "they can't all be winners" },
    4: { image: "images/coupon4.webp", text: "maybe you can finally show me all them songs" },
    5: { image: "images/coupon5.webp", text: "if i laaaay heeereeeeee" },
    6: { image: "images/coupon6.webp", text: "make the most of it crispy roll" },
    7: { image: "images/coupon7.jpg", text: "almost as spicy as you" },
    8: { image: "images/coupon8.webp", text: "any pic of your liking (or multiple winky face)" },
    9: { image: "images/coupon9.png", text: "happy cake day to my lil redditor (hint: i wonder what would happen if this photo could be flipped)" }
};

// day 9
const toggleImages = ["images/coupon9.png", "images/coupon9alt.png"];
let isToggled = false; // tracking

// card clicked handler
cards.forEach(card => {
    card.addEventListener('click', () => {
        const day = parseInt(card.dataset.day);  
        // corresponding pic and text
        card.classList.add('opened');
        popupText.textContent = coupons[day].text;
        couponImage.src = coupons[day].image;
        popup.classList.remove('hidden');
        // day 9
        if (day === 9) {
            isToggled = false; // reset toggle state
            couponImage.addEventListener('click', toggleNinthImage);
        } else {
            couponImage.removeEventListener('click', toggleNinthImage);
        }
    });
});
function toggleNinthImage() {
    isToggled = !isToggled;
    couponImage.src = isToggled ? toggleImages[1] : toggleImages[0];
}

// close handler
closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// rules
const rule = document.getElementById('rules');
rule.onclick = function() {
    rule.innerHTML = "2. Enjoy it just as much as I enjoyed making it";
};
