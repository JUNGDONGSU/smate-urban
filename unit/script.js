// Video Popup functions
function openPopup() {
    document.getElementById("videoPopup").style.display = "flex";
    const video = document.getElementById("popupVideo");
    video.play().catch(error => {
        console.log("비디오 자동 재생 실패 (사용자 상호작용 필요):", error);
    });
}

function closePopup() {
    document.getElementById("videoPopup").style.display = "none";
    document.getElementById("popupVideo").pause();
    document.getElementById("popupVideo").currentTime = 0;
}

// --- Mobile Navigation (Hamburger Menu) Logic ---
const hamburgerButton = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu ul li a');

if (hamburgerButton && navigationMenu) {
    hamburgerButton.addEventListener('click', () => {
        navigationMenu.classList.toggle('nav-open'); // Toggle class on <nav> element
        hamburgerButton.classList.toggle('active'); // Toggle class on hamburger button itself (for X shape)

        // Update ARIA attributes for accessibility
        const isExpanded = navigationMenu.classList.contains('nav-open');
        hamburgerButton.setAttribute('aria-expanded', isExpanded);
        if (isExpanded) {
            hamburgerButton.setAttribute('aria-label', '메뉴 닫기');
        } else {
            hamburgerButton.setAttribute('aria-label', '메뉴 열기');
        }
    });

    // Close menu when a link is clicked in mobile navigation
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navigationMenu.classList.contains('nav-open')) {
                navigationMenu.classList.remove('nav-open');
                hamburgerButton.classList.remove('active');
                hamburgerButton.setAttribute('aria-expanded', 'false');
                hamburgerButton.setAttribute('aria-label', '메뉴 열기');
            }
        });
    });
}
// --- End of Mobile Navigation Logic ---

// --- Scroll-based Header Transparency and Color Change Logic ---
const mainHeader = document.getElementById('main-header'); // 헤더 요소 가져오기
const logoLink = mainHeader.querySelector('.logo a'); // 로고 링크 요소
const navMenuLinks = mainHeader.querySelectorAll('.nav-menu ul li a'); // 네비게이션 링크 요소들
const hamburgerSpans = mainHeader.querySelectorAll('.hamburger-menu span'); // 햄버거 메뉴 span 요소들 (아이콘 색상 변경용)

// 스크롤 이벤트 핸들러
function handleScroll() {
    // 스크롤 위치가 50px를 초과하면 'scrolled' 클래스 추가, 아니면 제거
    if (window.scrollY > 50) {
        mainHeader.classList.add('scrolled');
        // 텍스트 색상 변경
        // 로고 이미지와 텍스트를 포함하는 a 태그의 색상 변경
        // 로고 이미지는 filter: invert() 또는 다른 방식으로 처리 가능 (현재 요청에서는 텍스트만)
        logoLink.style.color = 'var(--dark-navy-color)';
        navMenuLinks.forEach(link => {
            link.style.color = 'var(--dark-navy-color)';
        });
        hamburgerSpans.forEach(span => {
            span.style.backgroundColor = 'var(--dark-navy-color)';
        });
    } else {
        mainHeader.classList.remove('scrolled');
        // 텍스트 색상 원래대로 변경
        logoLink.style.color = ''; // CSS 기본값으로 돌아가도록 초기화
        navMenuLinks.forEach(link => {
            link.style.color = ''; // CSS 기본값으로 돌아가도록 초기화
        });
        hamburgerSpans.forEach(span => {
            span.style.backgroundColor = ''; // CSS 기본값으로 돌아가도록 초기화
        });
    }
}

// 페이지 로드 시 및 스크롤 시 이벤트 리스너 추가
window.addEventListener('scroll', handleScroll);
// 초기 로드 시에도 한 번 호출하여 현재 스크롤 위치에 따라 적용
handleScroll();
// --- End of Scroll-based Header Transparency and Color Change Logic ---


// UNIT.html 스크립트 부분 시작
// 실제 평택진위쌍용스마트어반 세대 데이터
const unitData = [
    {
        type: '66A형',
        count: 184,
        ratio: '29.97%',
        exclusiveArea: 64.37,
        exclusiveAreaPyeong: 19.47,
        supplyArea: 83.69,
        supplyAreaPyeong: 25.31,
        rooms: '침실 3개',
        bathrooms: '화장실 2개',
        features: '안방 드레스룸, 현관 워크인 장, 페트리 공간구성, 4BAY 맞통풍 구조, 안방 1개, 방 2개, 화장실 2개, 주방 페트리 구성 혁신평면',
        structure: '4BAY 맞통풍 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit64A.webp' // 이미지 URL을 여기에 추가하세요
    },
    {
        type: '66B형',
        count: 92,
        ratio: '29.97%',
        exclusiveArea: 64.43,
        exclusiveAreaPyeong: 19.49,
        supplyArea: 84.50,
        supplyAreaPyeong: 25.56,
        rooms: '침실 3개',
        bathrooms: '화장실 2개',
        features: '안방 드레스룸, 현관 워크인 장, 페트리 공간구성, 2면 개방형 타워 구조, 침실 3개, 화장실 2개, 거실과 다이닝 공간 일체형 구조',
        structure: '2면 개방형 타워 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit64B.webp'
    },
    {
        type: '66C형',
        count: 92,
        ratio: '29.97%',
        exclusiveArea: 64.52,
        exclusiveAreaPyeong: 19.51,
        supplyArea: 84.88,
        supplyAreaPyeong: 25.67,
        rooms: '침실 3개',
        bathrooms: '화장실 2개',
        features: '안방 드레스룸, 현관 워크인 장, 페트리 공간구성, 2면 개방형 타워 구조, 침실 3개, 화장실 2개, 거실과 다이닝 공간 일체형 구조',
        structure: '2면 개방형 타워 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit64C.webp'
    },
    {
        type: '77A형',
        count: 36,
        ratio: '5.86%',
        exclusiveArea: 77.80,
        exclusiveAreaPyeong: 23.53,
        supplyArea: 100.19,
        supplyAreaPyeong: 30.31,
        rooms: '침실 3개',
        bathrooms: '화장실 2개',
        features: '안방 드레스룸, 현관 워크인 장, 페트리 공간구성, 4BAY 맞통풍 구조, 안방 1개, 방 2개, 화장실 2개, 주방 페트리 구성 혁신평면',
        structure: '4BAY 맞통풍 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit77A.webp'
    },
    {
        type: '77B형',
        count: 18,
        ratio: '5.86%',
        exclusiveArea: 77.62,
        exclusiveAreaPyeong: 23.48,
        supplyArea: 101.63,
        supplyAreaPyeong: 30.74,
        rooms: '침실 3개',
        bathrooms: '화장실 2개',
        features: '안방 드레스룸, 현관 워크인 장, 주방 페트리 공간구성, 4BAY 맞통풍 구조, 안방 1개, 방 2개, 화장실 2개, 주방 페트리 구성 혁신평면',
        structure: '4BAY 맞통풍 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit77B.webp'
    },
    {
        type: '77C형',
        count: 18,
        ratio: '5.86%',
        exclusiveArea: 77.94,
        exclusiveAreaPyeong: 23.58,
        supplyArea: 101.64,
        supplyAreaPyeong: 30.75,
        rooms: '침실 3개',
        bathrooms: '화장실 2개',
        features: '안방 드레스룸, ㄱ자 주방 및 아일랜드 식탁, 2면 개방형 타워 구조, 침실 3개, 화장실 2개, 거실과 다이닝 공간 일체형 구조',
        structure: '2면 개방형 타워 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit77C.webp'
    },
    {
        type: '84A형',
        count: 501,
        ratio: '64.17%',
        exclusiveArea: 84.88,
        exclusiveAreaPyeong: 25.68,
        supplyArea: 109.49,
        supplyAreaPyeong: 33.12,
        rooms: '침실 3개',
        bathrooms: '화장실 2개',
        features: '안방 드레스룸, 현관 대형 워크인 장, 주방 페트리 공간구성, 4BAY 맞통풍 구조, 안방 1개, 방 2개, 화장실 2개, 주방 페트리 구성 혁신평면',
        structure: '4BAY 맞통풍 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit84A.webp'
    },
    {
        type: '84B형',
        count: 112,
        ratio: '64.17%',
        exclusiveArea: 84.92,
        exclusiveAreaPyeong: 25.69,
        supplyArea: 111.11,
        supplyAreaPyeong: 33.61,
        rooms: '침실 3개',
        bathrooms: '화장실 2개',
        features: '안방 드레스룸, 현관 대형 워크인 장, 주방 페트리 공간구성, 4BAY 맞통풍 구조, 안방 1개, 방 2개, 화장실 2개, 주방 페트리 구성 혁신평면',
        structure: '4BAY 맞통풍 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit84B.webp'
    },
    {
        type: '84C형',
        count: 112,
        ratio: '64.17%',
        exclusiveArea: 84.93,
        exclusiveAreaPyeong: 25.69,
        supplyArea: 110.50,
        supplyAreaPyeong: 33.43,
        rooms: '침실 3개',
        bathrooms: '화장실 2개',
        features: '안방 및 작은방 드레스룸, 페트리 공간 2개 구성, 2면 개방형 타워 구조, 침실 3개, 화장실 2개, 거실과 다이닝 공간 일체형 구조',
        structure: '2면 개방형 타워 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit84C.webp'
    },
    {
        type: '84D형',
        count: 63,
        ratio: '64.17%',
        exclusiveArea: 84.92,
        exclusiveAreaPyeong: 25.69,
        supplyArea: 111.36,
        supplyAreaPyeong: 33.69,
        rooms: '세대구분형 1.5룸',
        bathrooms: '화장실 2개',
        features: '세대구분형, 세대 분리가 가능한 공간구성, 독특한 공간설계로 세대구분형 1.5룸 혁신평면',
        structure: '세대구분형 구조',
        imageUrl: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/image/unit84D.webp'
    }
];

// 유닛 카드 생성 함수
function createUnitCards() {
    const unitsGrid = document.getElementById('unitsGrid');
    
    unitData.forEach((unit, index) => {
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.onclick = () => openModal(unit);
        
        // 이미지 영역 생성
        const imageContent = unit.imageUrl ? 
            `<img src="${unit.imageUrl}" alt="${unit.type} 평면도" onerror="this.onerror=null; this.src='https://placehold.co/1066x677/cccccc/333333?text=No+Image';" />` :
            `<div class="image-placeholder">🏠</div>
             <div class="image-upload-hint">이미지 추가</div>`;
        
        unitCard.innerHTML = `
            <div class="unit-image">
                ${imageContent}
            </div>
            <div class="unit-content">
                <div class="unit-type">
                    ${unit.type}
                    <span class="unit-count">${unit.count}세대</span>
                </div>
                <div class="unit-details">
                    <div class="detail-item">
                        <div class="detail-label">전용면적</div>
                        <div class="detail-value">${unit.exclusiveArea}㎡</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">평형</div>
                        <div class="detail-value">${unit.exclusiveAreaPyeong}평</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">공급면적</div>
                        <div class="detail-value">${unit.supplyArea}㎡</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">공급평형</div>
                        <div class="detail-value">${unit.supplyAreaPyeong}평</div>
                    </div>
                </div>
                <div class="unit-features">
                    <div class="features-title">주요 특징</div>
                    <div class="features-list">${unit.rooms}, ${unit.bathrooms}<br>${unit.structure}</div>
                </div>
            </div>
        `;
        
        unitsGrid.appendChild(unitCard);
    });
}

// 모달 열기 함수
function openModal(unit) {
    const modal = document.getElementById('unitModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = `${unit.type} 상세 정보`;
    
    // 모달 이미지 영역 생성
    const modalImageContent = unit.imageUrl ? 
        `<img src="${unit.imageUrl}" alt="${unit.type} 평면도" onerror="this.onerror=null; this.src='https://placehold.co/1066x677/cccccc/333333?text=No+Image';" />` :
        `<div class="image-placeholder" style="font-size: 4rem; color: #667eea; opacity: 0.3;">🏠</div>`;
    
    modalBody.innerHTML = `
        <div class="modal-image">
            ${modalImageContent}
        </div>
        <div class="modal-detail-grid">
            <div class="modal-detail-item">
                <div class="modal-detail-label">전용면적</div>
                <div class="modal-detail-value">${unit.exclusiveArea}㎡</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">전용평형</div>
                <div class="modal-detail-value">${unit.exclusiveAreaPyeong}평</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">공급면적</div>
                <div class="modal-detail-value">${unit.supplyArea}㎡</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">공급평형</div>
                <div class="modal-detail-value">${unit.supplyAreaPyeong}평</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">세대수</div>
                <div class="modal-detail-value">${unit.count}세대</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">비율</div>
                <div class="modal-detail-value">${unit.ratio}</div>
            </div>
        </div>
        <div class="modal-features">
            <h4>세대 특징 및 구조</h4>
            <p><strong>방 구성:</strong> ${unit.rooms}, ${unit.bathrooms}</p>
            <p><strong>구조 특징:</strong> ${unit.structure}</p>
            <p><strong>상세 특징:</strong> ${unit.features}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// 모달 닫기 함수
function closeModal() {
    const modal = document.getElementById('unitModal');
    modal.style.display = 'none';
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    createUnitCards();
    
    // 모달 닫기 이벤트 리스너
    const closeBtn = document.querySelector('.close');
    const modal = document.getElementById('unitModal');
    
    closeBtn.onclick = closeModal;
    
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }
});
// UNIT.html 스크립트 부분 끝


// Ensure the canvas script runs after the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('sparkle-canvas');
    const ctx = canvas.getContext('2d');

    // Function to resize the canvas to match its parent's dimensions
    function resizeCanvas() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
    }
    resizeCanvas(); // Initial canvas size adjustment
    window.addEventListener('resize', resizeCanvas); // Adjust canvas size on window resize

    // Array to hold sparkle objects
    const sparkles = [];
    const SPARKLE_COUNT = 50;

    // Array to hold shooting star objects (will usually have 0 or 1 element)
    const shootingStars = [];
    // Adjusted time to next shooting star for more frequent appearance (0.5 to 2 seconds)
    let timeToNextShootingStar = Math.floor(Math.random() * (1.5 * 60)) + (0.5 * 60);

    // Factory function to create a new sparkle object
    function createSparkle() {
        // Generate a random hue for rainbow colors (0-360 degrees)
        const hue = Math.floor(Math.random() * 360);
        // Keep saturation and lightness high for vibrant colors
        const saturation = 70 + Math.random() * 30; // 70-100%
        // Increased lightness range for brighter sparkles
        const lightness = 70 + Math.random() * 30; // 70-100%
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

        return {
            x: Math.random(), // Normalized x position (0 to 1)
            y: Math.random(), // Normalized y position (0 to 1)
            size: 2 + Math.random() * 5, // Base sparkle size
            alpha: 0.2 + Math.random() * 0.6, // Base opacity
            color: color, // Random rainbow color
            life: 300 + Math.random() * 500, // Sparkle lifespan in frames
            age: 0 // Current sparkle age in frames
        };
    }

    // Factory function to create a new shooting star object
    function createShootingStar() {
        let startX, startY, angle;
        const edge = Math.floor(Math.random() * 3); // 0: Top, 1: Left, 2: Right

        if (edge === 0) { // Starts from the top edge
            startX = Math.random() * canvas.width;
            startY = -20; // Slightly off-screen at the top
            angle = Math.PI / 2 + (Math.random() - 0.5) * (Math.PI / 3.5); // Downwards, with slight angle variation
        } else if (edge === 1) { // Starts from the left edge
            startX = -20;
            startY = Math.random() * canvas.height * 0.6; // Not too low
            angle = (Math.random() * (Math.PI / 4)) + Math.PI / 8; // Down-right direction
        } else { // Starts from the right edge
            startX = canvas.width + 20;
            startY = Math.random() * canvas.height * 0.6;
            angle = Math.PI - ((Math.random() * (Math.PI / 4)) + Math.PI / 8); // Down-left direction
        }

        // Speed reduced to half
        const speed = (1.25 + Math.random() * 1.75) / 2;
        return {
            x: startX,
            y: startY,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            // Shooting star head size returned to original range (no * 2 multiplier)
            size: (1.5 + Math.random() * 2),
            // Tail length significantly increased for longer appearance
            tailLength: 50 + Math.random() * 50,
            color: `rgba(255, 255, ${Math.floor(210 + Math.random() * 46)}, 1)`, // Bright white or slightly yellowish color
            opacity: 0.6 + Math.random() * 0.4, // Base opacity (used for fade effect)
            life: 150 + Math.random() * 150, // Lifespan in frames
            age: 0 // Current sparkle age in frames
        };
    }

    // Helper function to draw a star shape
    function drawStar(context, cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        let step = Math.PI / spikes;

        context.beginPath();
        context.moveTo(cx, cy - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            context.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            context.lineTo(x, y);
            rot += step;
        }
        context.lineTo(cx, cy - outerRadius);
        context.closePath();
    }

    // Initialize sparkles
    for (let i = 0; i < SPARKLE_COUNT; i++) {
        sparkles.push(createSparkle());
    }
    // Shooting stars are not created initially; the first one will be generated
    // immediately in the first frame since timeToNextShootingStar is 0.

    // Function to draw all effects
    function drawEffects() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas every frame

        // Draw sparkles
        for (let s of sparkles) {
            const t = s.age / s.life;
            let sparkleAlpha = Math.sin(Math.PI * t);
            sparkleAlpha = Math.max(sparkleAlpha, 0.01); // Ensure alpha doesn't go to zero
            ctx.globalAlpha = s.alpha * sparkleAlpha;

            const actualX = s.x * canvas.width;
            const actualY = s.y * canvas.height;
            // Increased base size and multiplier for more visible sparkles
            const actualSize = s.size * (0.8 + sparkleAlpha * 0.9);

            // Draw star shape instead of circle
            drawStar(ctx, actualX, actualY, 5, actualSize, actualSize / 2); // 5 points, inner radius half of outer
            
            ctx.fillStyle = s.color;
            ctx.shadowColor = s.color;
            // Increased shadow blur for more prominent glow
            ctx.shadowBlur = 10 + 20 * sparkleAlpha;
            ctx.fill();
            ctx.shadowBlur = 0; // Reset shadow blur

            s.age++;
            if (s.age > s.life) {
                Object.assign(s, createSparkle()); // Recreate sparkle if its life is over
            }
        }
        ctx.globalAlpha = 1; // Reset globalAlpha for other drawings

        // Draw and manage shooting stars (iterate backwards to avoid index issues when removing)
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const ss = shootingStars[i];
            ss.x += ss.dx;
            ss.y += ss.dy;
            ss.age++;

            const lifeRatio = ss.age / ss.life;
            let currentOpacity;
            if (lifeRatio < 0.15) { // Fade in at the beginning
                currentOpacity = (lifeRatio / 0.15) * ss.opacity;
            } else if (lifeRatio > 0.75) { // Fade out at the end
                currentOpacity = (1 - (lifeRatio - 0.75) / 0.25) * ss.opacity;
            } else { // Full opacity in the middle
                currentOpacity = ss.opacity;
            }
            currentOpacity = Math.max(0, Math.min(1, currentOpacity)); // Clamp opacity between 0 and 1

            // Draw tail with gradient for tapering and fading effect
            const gradient = ctx.createLinearGradient(
                ss.x - ss.dx * ss.tailLength, ss.y - ss.dy * ss.tailLength, // Start of gradient (tail end)
                ss.x, ss.y                                                  // End of gradient (shooting star head)
            );
            gradient.addColorStop(0, ss.color.replace(/[\d\.]+(?=\))/, '0')); // Tail end: fully transparent
            gradient.addColorStop(0.7, ss.color.replace(/[\d\.]+(?=\))/, currentOpacity.toFixed(2))); // 70% of tail: full opacity
            gradient.addColorStop(1, ss.color.replace(/[\d\.]+(?=\))/, currentOpacity.toFixed(2))); // Head: full opacity

            ctx.strokeStyle = gradient;
            ctx.lineWidth = ss.size * 0.3; // Tail line width made thinner for more tapered look
            ctx.lineCap = 'round'; // Round cap makes the end slightly smoother but still pointy due to gradient
            ctx.beginPath();
            ctx.moveTo(ss.x - ss.dx * ss.tailLength, ss.y - ss.dy * ss.tailLength);
            ctx.lineTo(ss.x, ss.y);
            ctx.stroke();

            // Draw head
            const headOpacity = Math.min(1, currentOpacity * 1.2); // Slightly brighter head
            const headColor = ss.color.replace(/[\d\.]+(?=\))/, headOpacity.toFixed(2));
            ctx.fillStyle = headColor;
            ctx.shadowColor = ss.color.replace(/[\d\.]+(?=\))/, (headOpacity * 0.7).toFixed(2));
            ctx.shadowBlur = 8 + ss.size * 3;
            ctx.beginPath();
            ctx.arc(ss.x, ss.y, ss.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0; // Reset shadow blur

            // Check if shooting star is out of bounds
            let outOfBounds = false;
            const buffer = ss.tailLength * Math.max(Math.abs(ss.dx), Math.abs(ss.dy)) + 50; // Buffer zone for removal
            if (ss.dx > 0 && ss.x > canvas.width + buffer) outOfBounds = true;
            else if (ss.dx < 0 && ss.x < -buffer) outOfBounds = true;
            if (ss.dy > 0 && ss.y > canvas.height + buffer) outOfBounds = true;

            // Remove shooting star if its life is over or it's out of bounds
            if (ss.age > ss.life || outOfBounds) {
                shootingStars.splice(i, 1); // Remove shooting star
                // Set new countdown for next shooting star (0.5 to 2 seconds)
                timeToNextShootingStar = Math.floor(Math.random() * (1.5 * 60)) + (0.5 * 60);
            }
        }

        // Create a new shooting star if none exist and timer is up
        if (shootingStars.length === 0) {
            if (timeToNextShootingStar <= 0) {
                shootingStars.push(createShootingStar());
            } else {
                timeToNextShootingStar--;
            }
        }
        requestAnimationFrame(drawEffects); // Request next animation frame
    }

    drawEffects(); // Start the animation loop
});
