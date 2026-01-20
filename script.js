document.addEventListener('DOMContentLoaded', function() {
    const passwordForm = document.getElementById('passwordForm');
    const errorMessage = document.getElementById('errorMessage');
    
    // Correct password (you can change this)
    const CORRECT_PASSWORD = "HappyBirthdayMom";
    
    passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const passwordInput = document.getElementById('password');
        
        if (passwordInput.value === CORRECT_PASSWORD) {
            // Create confetti effect
            createConfetti();
            
            // Redirect to memory page after short delay
            setTimeout(() => {
                window.location.href = "memory.html";
            }, 1500);
        } else {
            // Show error message
            errorMessage.classList.remove('hidden');
            passwordInput.value = '';
            passwordInput.focus();
            
            // Shake animation for wrong password
            passwordInput.classList.add('animate-shake');
            setTimeout(() => {
                passwordInput.classList.remove('animate-shake');
            }, 500);
        }
    });
    
    function createConfetti() {
        const colors = ['#ec4899', '#8b5cf6', '#f43f5e', '#f59e0b', '#10b981'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }
});
