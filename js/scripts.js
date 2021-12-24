const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");

const textsTochange = document.querySelectorAll("[data-section]")

const changeLanguage = async (language) => {
    const requestJason = await fetch(`./languages/${language}.json`);
    const texts = await requestJason.json();

    for (const textTochange of textsTochange){
        const section = textsTochange.dataset.section;
        const value = textsTochange.dataset.value;

        textTochange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener("click", (e) =>{
    changeLanguage(e.target.parentElement.dataset.language);
});

    toggleTheme.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    if(toggleIcon.src.includes('moon.svg')){
        toggleIcon.src ='assets/icons/sun.svg';
        toggleText.textContent ="Ligth Mode";
    } else {
        toggleIcon.src ='assets/icons/moon.svg';
        toggleText.textContent ="Dark Mode";
    }
});

toggleColors.addEventListener("click", (e) => {
    rootStyles.setProperty("--primary-color", e.target.dataset.color);
});