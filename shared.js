// Global Utility Functions
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Modal Handler
const openModal = (modalId) => {
    const modal = $(`#${modalId}`);
    if (modal) {
        modal.display = 'flex'; // Initial show
        setTimeout(() => modal.classList.add('active'), 10);
        modal.style.display = 'flex';
    }
};

const closeModal = (modalId) => {
    const modal = $(`#${modalId}`);
    if (modal) {
        modal.style.display = 'none';
    }
};

// Toast Notification System
const showToast = (message, type = 'success') => {
    const toast = $('#toast');
    if (!toast) return;
    
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
};

// Initial Avatar Generation
const generateAvatars = () => {
    const colors = ['#f43f5e', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b'];
    $$('.avatar-init').forEach((el, index) => {
        const name = el.getAttribute('data-name') || 'U';
        el.textContent = name.charAt(0).toUpperCase();
        el.style.backgroundColor = colors[index % colors.length];
    });
};

// Bulk Selection Logic
let selectedUsers = new Set();
const initBulkSelection = () => {
    const masterCheck = $('#master-check');
    const itemChecks = $$('.item-check');
    const bulkBar = $('#bulk-bar');
    const selectedCount = $('#selected-count');

    if (!masterCheck) return;

    masterCheck.addEventListener('change', (e) => {
        itemChecks.forEach(check => {
            check.checked = e.target.checked;
            updateSelection(check);
        });
        toggleBulkBar();
    });

    itemChecks.forEach(check => {
        check.addEventListener('change', () => {
            updateSelection(check);
            toggleBulkBar();
        });
    });

    const updateSelection = (checkbox) => {
        const id = checkbox.getAttribute('data-id');
        if (checkbox.checked) selectedUsers.add(id);
        else selectedUsers.delete(id);
    };

    const toggleBulkBar = () => {
        if (selectedUsers.size > 0) {
            bulkBar.classList.add('active');
            selectedCount.textContent = selectedUsers.size;
        } else {
            bulkBar.classList.remove('active');
        }
    };
};

// Simulate Background Process (Progress Bar)
const runBulkProcess = (taskName) => {
    const progressOverlay = $('#progress-overlay');
    const progressBar = $('#progress-bar-fill');
    const progressTextText = $('#progress-text');
    
    if (!progressOverlay) return;
    
    progressOverlay.style.display = 'flex';
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
        progressTextText.textContent = `${taskName}: ${Math.floor(progress)}%`;
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                progressOverlay.style.display = 'none';
                showToast(`Đã hoàn thành ${taskName} cho ${selectedUsers.size} bản ghi.`);
                selectedUsers.clear();
                toggleBulkBar();
                $$('.item-check').forEach(c => c.checked = false);
                $('#master-check').checked = false;
            }, 500);
        }
    }, 200);
};

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
    generateAvatars();
    initBulkSelection();

    // Close Modals on overlay click
    $$('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.style.display = 'none';
        });
    });
});
