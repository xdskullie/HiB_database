class Status{
    constructor(label, color){
        this.label = label;
        this.color = color;
    }
}

// Enum-like keys for statuses (use these keys as <option> values)
const STATUS = Object.freeze({
    EJ_BOKAD: 'EJ_BOKAD',
    BOKAD: 'BOKAD',
    RINGA: 'RINGA',
    ATERKOPPLA: 'ATERKOPPLA',
    FARDIG: 'FARDIG'
});

// Map keys -> Status objects
const statuses = Object.freeze({
    [STATUS.EJ_BOKAD]: new Status("Ej bokad", "red"),
    [STATUS.BOKAD]: new Status("Bokad", "green"),
    [STATUS.RINGA]: new Status("Ringa", "yellow"),
    [STATUS.ATERKOPPLA]: new Status("Återkoppla", "blue"),
    [STATUS.FARDIG]: new Status("Färdig", "white")
});

// Expose for debugging/other scripts
window.STATUS = STATUS;
window.statuses = statuses;

// Current status variable (stores the Status instance). Default to EJ_BOKAD.
window.currentStatus = statuses[STATUS.EJ_BOKAD];

// DOM wiring: populate select, show current status, update variable on change/submit
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('status');
    const display = document.getElementById('current-status');

    if (!select) return; // nothing to do if select not present

    // Populate options from statuses map
    select.innerHTML = '';
    Object.keys(STATUS).forEach((key) => {
        const optionValue = STATUS[key];
        const s = statuses[optionValue];
        if (!s) return;
        const opt = document.createElement('option');
        opt.value = optionValue;
        opt.textContent = s.label;
        select.appendChild(opt);
    });

    // Set initial selection and display
    select.value = STATUS.EJ_BOKAD;
    if (display) {
        display.textContent = window.currentStatus.label;
        display.style.color = window.currentStatus.color;
    }

    // When selection changes, update the currentStatus variable and display
    select.addEventListener('change', (e) => {
        const key = e.target.value;
        if (statuses[key]) {
            window.currentStatus = statuses[key];
            if (display) {
                display.textContent = window.currentStatus.label;
                display.style.color = window.currentStatus.color;
            }
        }
    });

    // Prevent form submission from reloading; treat as 'save' and keep variable updated
    const form = select.closest('form');
    if (form) {
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            const confirmEl = document.getElementById('status-confirm');
            if (confirmEl) confirmEl.textContent = `Saved: ${window.currentStatus.label}`;
            console.log('Status saved:', window.currentStatus);
        });
    }
});
