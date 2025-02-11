(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pleaseeeeeeeeee",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Damn I didn't know you don't love me :(",
    "fine...FINE Ig I'll have to ask my other gfs...",
    "Just kidding, say yes please! ❤️",
    "Ok now you clicking No just to see what I've put next",
    "This is just rude",
    "Fine you leave me no choice",
    "Also Yes"
];

const gifs = [
    "https://media1.tenor.com/m/vP19ezKffCAAAAAC/svt-seventeen.gif",
    "https://media1.tenor.com/m/TzPFsKxYXkQAAAAC/skeptical-futurama.gif",
    "https://media1.tenor.com/m/TNDA1ajj6WsAAAAd/really-are-you-sure.gif",
    "https://media1.tenor.com/m/2l_sN8dnI3sAAAAC/sad-cute.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHdneXBjYzc4aXNudG5uYjV6aXU3YXA3dG1xZWhycGh2bGFjZG1yNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Y5BbDSkSTiY8/giphy.gif",
    "https://media1.tenor.com/m/V_z072YdErsAAAAC/rat-cry-mouse-cutie.gif",
    "https://media.tenor.com/10ixWTBLI7sAAAAC/llorandi.gif",
    "https://media1.tenor.com/m/2p8Qmjxv8UkAAAAC/eye-roll-wei-wuxian.gif",
    "https://media.tenor.com/DPsOCWppxsEAAAAi/not-caring-yawning.gif",
    "https://media.tenor.com/SFy5Za0DyMEAAAAi/erm-fingers.gif",
    "https://media1.tenor.com/m/F9HKQ-TaAGQAAAAd/mingyu-mingyu-face.gif",
    "https://media1.tenor.com/m/YEyQrWHr8LUAAAAC/kdj-orv.gif",
    "https://media1.tenor.com/m/rSP-F_2IuXYAAAAC/sneaky-guilty-eyes.gif",
    "https://media.tenor.com/OSg0ozC5lfsAAAAd/hehe.gif"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    document.getElementById('imageGIF').src = gifs[messageIndex];
    noButton.textContent = messages[messageIndex];
    messageIndex = messageIndex + 1;
    const yesCurrentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const noCurrentSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    if(messageIndex < 14){
        yesButton.style.fontSize = `${yesCurrentSize * 1.1}px`;
    }
    else if(messageIndex == 14){
        yesButton.textContent = "YES I LOVE YOU SO MUCH, I'm such a dumbass how could I say no to you, you're the best!!!!";
        yesButton.style.fontSize = `${yesCurrentSize * 1.5}px`;
        noButton.style.fontSize = `${noCurrentSize * 0.1}px`;
    }
    else if(messageIndex > 14){
        window.location.href = "yes_page.html";
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}