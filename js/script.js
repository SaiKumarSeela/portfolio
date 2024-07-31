const bioNameElement = document.getElementById('bio-name');
const typedTextElement = document.getElementById('typed-text');

const Bio = {
    name: "Your Name Here",
    roles: ["ML Engineer", "Data Scientist", "GenAI Developer", "Data Analyst", "Full-stack Developer"]
};

bioNameElement.textContent = Bio.name;

let currentRoleIndex = 0;
let isTyping = false;
let isDeleting = false;

function typeWriter() {
    const currentRole = Bio.roles[currentRoleIndex];
    const chars = currentRole.split('');

    typedTextElement.textContent = '';

    let typedIndex = 0;

    const typeInterval = setInterval(() => {
        if (typedIndex === chars.length) {
            clearInterval(typeInterval);
            isTyping = false;
            isDeleting = true;
            deleteText();
            return;
        }

        typedTextElement.textContent += chars[typedIndex];
        typedIndex++;
    }, 50);
}

function deleteText() {
    const currentRole = Bio.roles[currentRoleIndex];
    const chars = currentRole.split('');

    let deleteIndex = chars.length - 1;

    const deleteInterval = setInterval(() => {
        if (deleteIndex < 0) {
            clearInterval(deleteInterval);
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % Bio.roles.length;
            typeWriter();
            return;
        }

        typedTextElement.textContent = chars.slice(0, deleteIndex).join('');
        deleteIndex--;
    }, 100);
}

function changeRole() {
    if (!isTyping && !isDeleting) {
        typeWriter();
    }
}

typeWriter();
// setInterval(changeRole, 5000); // Optional: Change role every 5 seconds