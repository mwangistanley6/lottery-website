// Navigation function
function navigate(section) {
    // Update bottom nav
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // Show the appropriate section
    showSection(section);
}

// Function to show a specific section
function showSection(section) {
    // Hide all sections first
    const sections = document.querySelectorAll('.section-container');
    sections.forEach(s => s.style.display = 'none');
    
    // Show the main content by default
    const mainContent = document.querySelector('.main-content');
    mainContent.style.display = 'block';
    
    // Handle home section
    const homeElements = document.querySelectorAll('.badge-section, .menu-grid, .lottery-banner');
    
    // If we're showing the home section (or no section specified)
    if (!section || section === 'home') {
        // Show the main content elements and ensure proper display
        homeElements.forEach(el => {
            if (el) {
                el.style.display = el.classList.contains('menu-grid') ? 'grid' : 'block';
            }
        });
        // Update nav state
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.toggle('active', item.querySelector('span').textContent.toLowerCase() === 'home');
        });
        return;
    }
    
    // Hide home elements when showing other sections
    homeElements.forEach(el => {
        if (el) el.style.display = 'none';
    });
    
    // Hide the main content elements
    document.querySelectorAll('.badge-section, .menu-grid, .lottery-banner').forEach(el => {
        if (el) el.style.display = 'none';
    });
    
    // Show the selected section
    const sectionElement = document.getElementById(`${section}-section`);
    if (sectionElement) {
        sectionElement.style.display = 'block';
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Function to show a toast notification
function showToast(message) {
    // Create toast element if it doesn't exist
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        document.body.appendChild(toast);
        
        // Add CSS for toast
        const style = document.createElement('style');
        style.textContent = `
            #toast-notification {
                position: fixed;
                bottom: 70px;
                left: 50%;
                transform: translateX(-50%);
                background-color: rgba(0,0,0,0.7);
                color: white;
                padding: 12px 20px;
                border-radius: 5px;
                z-index: 1000;
                font-size: 14px;
                opacity: 0;
                transition: opacity 0.3s;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Set message and show toast
    toast.textContent = message;
    toast.style.opacity = 1;
    
    // Hide toast after 2 seconds
    setTimeout(() => {
        toast.style.opacity = 0;
    }, 2000);
}

// Section display function
function showSection(section) {
    // Hide all sections first
    const sections = document.querySelectorAll('.section-container');
    sections.forEach(s => s.style.display = 'none');
    
    // Show the main content by default
    document.querySelector('.main-content').style.display = 'block';
    
    // If we're showing the home section (or no section specified)
    if (!section || section === 'home') {
        // Show the main content elements
        document.querySelectorAll('.badge-section, .menu-grid, .lottery-banner').forEach(el => {
            if (el) el.style.display = 'block';
        });
        return;
    }
    
    // Hide the main content elements
    document.querySelectorAll('.badge-section, .menu-grid, .lottery-banner').forEach(el => {
        if (el) el.style.display = 'none';
    });
    
    // Show the selected section
    const sectionElement = document.getElementById(`${section}-section`);
    if (sectionElement) {
        sectionElement.style.display = 'block';
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

function showSectionModal(title, description, icon) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'section-modal';
    
    modal.innerHTML = `
        <div class="section-modal-content">
            <div class="section-modal-icon">${icon}</div>
            <h2>${title}</h2>
            <p>${description}</p>
            <button class="section-modal-button">Explore</button>
        </div>
    `;
    
    // Add CSS for modal
    const style = document.createElement('style');
    style.textContent = `
        .section-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .section-modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            max-width: 80%;
        }
        .section-modal-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        .section-modal-button {
            margin-top: 1rem;
            padding: 0.5rem 2rem;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
    
    // Add to body
    document.body.appendChild(modal);
    
    // Close when clicked
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}

// Notification system
function showNotifications() {
    // Create and show notification panel
    let notificationPanel = document.getElementById('notification-panel');
    
    if (!notificationPanel) {
        notificationPanel = document.createElement('div');
        notificationPanel.id = 'notification-panel';
        notificationPanel.className = 'notification-panel';
        
        // Add notifications
        notificationPanel.innerHTML = `
            <div class="notification-header">
                <h3>Notifications</h3>
                <span class="close-notifications" onclick="closeNotifications()">&times;</span>
            </div>
            <div class="notification-list">
                <div class="notification-item unread">
                    <div class="notification-icon">🎉</div>
                    <div class="notification-content">
                        <div class="notification-title">Welcome to DXM!</div>
                        <div class="notification-message">Get started with your journey today.</div>
                        <div class="notification-time">Just now</div>
                    </div>
                </div>
                <div class="notification-item unread">
                    <div class="notification-icon">💰</div>
                    <div class="notification-content">
                        <div class="notification-title">Daily Bonus Available</div>
                        <div class="notification-message">Claim your daily rewards in the lottery!</div>
                        <div class="notification-time">30 minutes ago</div>
                    </div>
                </div>
                <div class="notification-item unread">
                    <div class="notification-icon">🔔</div>
                    <div class="notification-content">
                        <div class="notification-title">New Announcement</div>
                        <div class="notification-message">Check the News section for updates.</div>
                        <div class="notification-time">2 hours ago</div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notificationPanel);
        
        // Add CSS for the notification panel
        const style = document.createElement('style');
        style.textContent = `
            .notification-panel {
                position: fixed;
                top: 60px;
                right: 10px;
                width: 300px;
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                z-index: 1000;
                overflow: hidden;
            }
            
            .notification-header {
                padding: 12px 15px;
                background-color: var(--primary-color);
                color: white;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .notification-header h3 {
                margin: 0;
                font-size: 16px;
            }
            
            .close-notifications {
                font-size: 20px;
                cursor: pointer;
            }
            
            .notification-list {
                max-height: 350px;
                overflow-y: auto;
            }
            
            .notification-item {
                padding: 12px 15px;
                border-bottom: 1px solid #eee;
                display: flex;
                cursor: pointer;
            }
            
            .notification-item:hover {
                background-color: #f9f9f9;
            }
            
            .notification-item.unread {
                background-color: #f0f7ff;
            }
            
            .notification-icon {
                font-size: 24px;
                margin-right: 12px;
            }
            
            .notification-title {
                font-weight: bold;
                font-size: 14px;
                margin-bottom: 4px;
            }
            
            .notification-message {
                font-size: 13px;
                color: #555;
            }
            
            .notification-time {
                font-size: 11px;
                color: #888;
                margin-top: 4px;
            }
        `;
        document.head.appendChild(style);
    } else {
        notificationPanel.style.display = 'block';
    }
}

function closeNotifications() {
    const notificationPanel = document.getElementById('notification-panel');
    if (notificationPanel) {
        notificationPanel.style.display = 'none';
    }
}

// Lottery functionality
function startLottery() {
    const modal = document.getElementById('lotteryModal');
    modal.style.display = 'block';
}

function closeLottery() {
    const modal = document.getElementById('lotteryModal');
    modal.style.display = 'none';
}


// Wheel spinning functionality
let canSpin = true;
const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');

// Initialize wheel item positions
const wheelItems = document.querySelectorAll('.wheel-item');
wheelItems.forEach((item, index) => {
    const degrees = (360 / wheelItems.length) * index;
    item.style.transform = `rotate(${degrees}deg)`;
});

spinButton.addEventListener('click', () => {
    if (!canSpin) return;
    
    canSpin = false;
    const spins = 8; // Increased number of full rotations for more excitement
    const itemCount = 8; // Number of items on the wheel
    const degreesPerItem = 360 / itemCount;
    const randomItem = Math.floor(Math.random() * itemCount);
    const degrees = spins * 360 + (randomItem * degreesPerItem);
    
    wheel.style.transform = `rotate(${degrees}deg)`;
    
    setTimeout(() => {
        const prizes = ['$50', '$100', 'Gift Card', '$75', 'Free Meal', '$150', 'Movie Pass', '$200'];
        const prize = prizes[randomItem];
        alert(`🎉 Congratulations! You won ${prize}! 🎉`);
        canSpin = true;
    }, 5200);
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('lotteryModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
