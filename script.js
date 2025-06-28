// Custom message box function (replaces alert)
function displayMessage(message) {
  const messageBox = document.createElement('div');
  messageBox.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 8px;
    z-index: 2000;
    text-align: center;
    font-size: 1.1em;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    max-width: 80%;
  `;
  messageBox.textContent = message;
  document.body.appendChild(messageBox);

  setTimeout(() => {
    messageBox.remove();
  }, 3000); // Message disappears after 3 seconds
  console.log(`Displaying message: ${message}`); // Debugging
}


// Execute when DOM content is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired."); // Debugging

  // --- Header Scroll Opacity Logic ---
  const header = document.querySelector('header');
  const promoBanner = document.getElementById('promoBanner'); // Get the promo banner element
  const leftSideBar = document.getElementById('leftSideBar'); // Get the left sidebar element

  if (header && promoBanner && leftSideBar) { // Ensure all elements exist
      window.addEventListener('scroll', () => {
          // 스크롤 위치가 10px 이상이면 'scrolled' 클래스 추가, 아니면 제거
          if (window.scrollY > 10) {
              header.classList.add('scrolled');
              // 스크롤 시 promoBanner와 leftSideBar를 숨김
              promoBanner.classList.add('hidden-on-scroll');
              leftSideBar.classList.add('hidden-on-scroll');
          } else {
              header.classList.remove('scrolled');
              // 스크롤이 없으면 promoBanner와 leftSideBar를 다시 표시
              promoBanner.classList.remove('hidden-on-scroll');
              leftSideBar.classList.remove('hidden-on-scroll');
          }
      });
  } else {
    console.log("Header, promoBanner, or leftSideBar element not found. Skipping scroll opacity logic."); // Debugging
  }
  // --- End of Header Scroll Opacity Logic ---


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
  } else {
    console.log("Hamburger menu or navigation menu not found. Skipping mobile navigation logic."); // Debugging
  }
  // --- End of Mobile Navigation Logic ---

  // Auto-hyphen insertion for phone number input (main form)
  const userPhoneInput = document.getElementById('userPhone');

  if (userPhoneInput) {
    console.log("Phone input found. Adding auto-hyphen listener."); // Debugging
    userPhoneInput.addEventListener('input', function(event) {
      let phoneNumber = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      let formattedNumber = '';

      // Format Korean phone numbers with hyphens
      if (phoneNumber.length < 4) {
        formattedNumber = phoneNumber;
      } else if (phoneNumber.length < 7) { // e.g., 010-123
        formattedNumber = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3);
      } else if (phoneNumber.length < 11) { // e.g., 010-1234-5678
        formattedNumber = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3, 7) + '-' + phoneNumber.substring(7);
      } else { // e.g., 010-1234-5678 (max length)
        formattedNumber = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3, 7) + '-' + phoneNumber.substring(7, 11);
      }
      event.target.value = formattedNumber;
    });
  } else {
    console.log("Phone input not found. Skipping auto-hyphen logic."); // Debugging
  }

  // Function to update button state (linked to privacy agreement checkbox)
  function updateButtonState() {
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const submitBtn = document.getElementById('submitBtn');

    if (agreeCheckbox && submitBtn) { // Check if elements exist
      if (agreeCheckbox.checked) {
        submitBtn.classList.remove('btn-disabled');
        submitBtn.disabled = false;
      } else {
        submitBtn.classList.add('btn-disabled');
        submitBtn.disabled = true;
      }
    }
  }

  // Form submission event listener (Google Spreadsheet integration)
  const inquiryForm = document.getElementById('inquiryForm');
  const agreeCheckbox = document.getElementById('agreeCheckbox');
  const submitBtn = document.getElementById('submitBtn');

  // Apps Script URL
  const APPS_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbx1OemkhMdjo7sXjOTt4xTRt8F6xuO4WgS-TfmsvBFvRu0_Bc7qCw7lvqQSIYeUEdfL/exec'; // Updated URL

  console.log('Apps Script Web App URL:', APPS_SCRIPT_WEB_APP_URL); // Verify URL is loaded correctly

  if (inquiryForm && agreeCheckbox && submitBtn) {
    console.log("All inquiry form elements found. Initializing form submission logic."); // Debugging
    updateButtonState(); // Set initial button state on page load
    agreeCheckbox.addEventListener('change', updateButtonState); // Update button state on checkbox change

    inquiryForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      console.log("Form submission initiated."); // Debugging

      const name = document.getElementById('userName').value.trim();
      const phone = document.getElementById('userPhone').value.trim();
      const address = document.getElementById('userAddress').value.trim();
      const inquiry = document.getElementById('inquiryType').value;
      const otherText = document.getElementById('otherInquiry').value.trim();

      // Required fields and validation
      if (!name || !phone || !address) {
        displayMessage('성함, 연락처, 주소는 반드시 입력해야 합니다.');
        return;
      }

      const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
      if (!phoneRegex.test(phone)) {
        displayMessage('올바른 연락처 형식을 입력해주세요. (예: 010-1234-5678)');
        return;
      }

      if (inquiry === '') {
        displayMessage('문의 유형을 선택해주세요.');
        return;
      }
      if (inquiry === '기타' && !otherText) {
        displayMessage('기타 문의 내용을 입력해주세요.');
        return;
      }

      if (!agreeCheckbox.checked) {
        displayMessage('개인정보 수집 및 이용에 동의해야 등록이 가능합니다.');
        return;
      }

      // Create data object for Apps Script - CHANGED KEYS TO MATCH APPS SCRIPT
      const formData = {
        name: name,         // 'userName' -> 'name'
        phone: phone,       // 'userPhone' -> 'phone'
        address: address,   // 'userAddress' -> 'address'
        visitType: inquiry, // 'inquiryType' -> 'visitType'
        message: otherText  // 'otherInquiry' -> 'message'
      };
      console.log("Form data collected:", formData); // Debugging

      submitBtn.classList.add('btn-disabled'); // Disable button during submission
      submitBtn.disabled = true;
      submitBtn.textContent = '등록 중...'; // Provide user feedback
      console.log("Submit button disabled, text changed to '등록 중...'."); // Debugging

      try {
        // Send data to Apps Script web app
        const response = await fetch(APPS_SCRIPT_WEB_APP_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        console.log("Fetch request sent to Apps Script."); // Debugging

        const result = await response.json();
        console.log("Response from Apps Script:", result); // Debugging

        if (response.ok && result.success) {
          displayMessage('정상적으로 등록되었습니다! 담당자가 곧 연락드릴 예정입니다.');
          inquiryForm.reset();
          document.getElementById('otherInquiry').value = '';
          updateButtonState();
          console.log("Form submission successful."); // Debugging
        } else {
          displayMessage(`상담 예약 실패: ${result.message || '알 수 없는 오류가 발생했습니다.'}`);
          console.error("Form submission failed:", result); // Debugging
        }
      } catch (error) {
        console.error('Error submitting form:', error); // Debugging
        displayMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
      } finally {
        submitBtn.classList.remove('btn-disabled');
        submitBtn.disabled = false;
        submitBtn.textContent = '상담 예약 등록';
        console.log("Submit button re-enabled, text reset."); // Debugging
      }
    });
  } else {
    console.log("One or more inquiry form elements not found. Skipping form submission logic."); // Debugging
  }

  // Sparkle and Shooting Star canvas animation
  const sparkleCanvas = document.getElementById('sparkle-canvas');
  if (sparkleCanvas) {
    console.log("Sparkle canvas found. Initializing animation."); // Debugging
    const ctx = sparkleCanvas.getContext('2d');

    function resizeCanvas() {
      sparkleCanvas.width = sparkleCanvas.parentElement.clientWidth;
      sparkleCanvas.height = sparkleCanvas.parentElement.clientHeight;
      console.log(`Canvas resized to: ${sparkleCanvas.width}x${sparkleCanvas.height}`); // Debugging
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const sparkles = [];
    const SPARKLE_COUNT = 50;

    const shootingStars = [];
    let timeToNextShootingStar = Math.floor(Math.random() * (1.5 * 60)) + (0.5 * 60);

    function createSparkle() {
      const hue = Math.floor(Math.random() * 360);
      const saturation = 70 + Math.random() * 30;
      const lightness = 70 + Math.random() * 30;
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      return {
        x: Math.random(),
        y: Math.random(),
        size: 2 + Math.random() * 5,
        alpha: 0.2 + Math.random() * 0.6,
        color: color,
        life: 300 + Math.random() * 500,
        age: 0
      };
    }

    function createShootingStar() {
      let startX, startY, angle;
      const edge = Math.floor(Math.random() * 3);

      if (edge === 0) {
        startX = Math.random() * sparkleCanvas.width;
        startY = -20;
        angle = Math.PI / 2 + (Math.random() - 0.5) * (Math.PI / 3.5);
      } else if (edge === 1) {
        startX = -20;
        startY = Math.random() * sparkleCanvas.height * 0.6;
        angle = (Math.random() * (Math.PI / 4)) + Math.PI / 8;
      } else {
        startX = sparkleCanvas.width + 20;
        startY = Math.random() * sparkleCanvas.height * 0.6;
        angle = Math.PI - ((Math.random() * (Math.PI / 4)) + Math.PI / 8);
      }

      const speed = (1.25 + Math.random() * 1.75) / 2;
      return {
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        size: (1.5 + Math.random() * 2),
        tailLength: 50 + Math.random() * 50,
        color: `rgba(255, 255, ${Math.floor(210 + Math.random() * 46)}, 1)`,
        opacity: 0.6 + Math.random() * 0.4,
        life: 150 + Math.random() * 150,
        age: 0
      };
    }

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

    for (let i = 0; i < SPARKLE_COUNT; i++) {
      sparkles.push(createSparkle());
    }

    function drawEffects() {
      ctx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);

      for (let s of sparkles) {
        const t = s.age / s.life;
        let sparkleAlpha = Math.sin(Math.PI * t);
        sparkleAlpha = Math.max(sparkleAlpha, 0.01);
        ctx.globalAlpha = s.alpha * sparkleAlpha;

        const actualX = s.x * sparkleCanvas.width;
        const actualY = s.y * sparkleCanvas.height;
        const actualSize = s.size * (0.8 + sparkleAlpha * 0.9);

        drawStar(ctx, actualX, actualY, 5, actualSize, actualSize / 2);

        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10 + 20 * sparkleAlpha;
        ctx.fill();
        ctx.shadowBlur = 0;

        s.age++;
        if (s.age > s.life) {
          Object.assign(s, createSparkle());
        }
      }
      ctx.globalAlpha = 1;

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.dx;
        ss.y += ss.dy;
        ss.age++;

        const lifeRatio = ss.age / ss.life;
        let currentOpacity;
        if (lifeRatio < 0.15) {
          currentOpacity = (lifeRatio / 0.15) * ss.opacity;
        } else if (lifeRatio > 0.75) {
          currentOpacity = (1 - (lifeRatio - 0.75) / 0.25) * ss.opacity;
        } else {
          currentOpacity = ss.opacity;
        }
        currentOpacity = Math.max(0, Math.min(1, currentOpacity));

        const gradient = ctx.createLinearGradient(
          ss.x - ss.dx * ss.tailLength, ss.y - ss.dy * ss.tailLength,
          ss.x, ss.y
        );
        gradient.addColorStop(0, ss.color.replace(/[\d\.]+(?=\))/, '0'));
        gradient.addColorStop(0.7, ss.color.replace(/[\d\.]+(?=\))/, currentOpacity.toFixed(2)));
        gradient.addColorStop(1, ss.color.replace(/[\d\.]+(?=\))/, currentOpacity.toFixed(2)));

        ctx.strokeStyle = gradient;
        ctx.lineWidth = ss.size * 0.3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(ss.x - ss.dx * ss.tailLength, ss.y - ss.dy * ss.tailLength);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();

        const headOpacity = Math.min(1, currentOpacity * 1.2);
        const headColor = ss.color.replace(/[\d\.]+(?=\))/, headOpacity.toFixed(2));
        ctx.fillStyle = headColor;
        ctx.shadowColor = ss.color.replace(/[\d\.]+(?=\))/, (headOpacity * 0.7).toFixed(2));
        ctx.shadowBlur = 8 + ss.size * 3;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, ss.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        let outOfBounds = false;
        const buffer = ss.tailLength * Math.max(Math.abs(ss.dx), Math.abs(ss.dy)) + 50;
        if (ss.dx > 0 && ss.x > sparkleCanvas.width + buffer) outOfBounds = true;
        else if (ss.dx < 0 && ss.x < -buffer) outOfBounds = true;
        if (ss.dy > 0 && ss.y > sparkleCanvas.height + buffer) outOfBounds = true;

        if (ss.age > ss.life || outOfBounds) {
          shootingStars.splice(i, 1);
          timeToNextShootingStar = Math.floor(Math.random() * (1.5 * 60)) + (0.5 * 60);
        }
      }

      if (shootingStars.length === 0) {
        if (timeToNextShootingStar <= 0) {
          shootingStars.push(createShootingStar());
        } else {
          timeToNextShootingStar--;
        }
      }
      requestAnimationFrame(drawEffects);
    }

    drawEffects(); // Start the animation loop
    console.log("Sparkle animation loop started."); // Debugging
  } else {
    console.log("Sparkle canvas not found. Skipping canvas animation."); // Debugging
  }

  // Reservation icon button logic: scroll to consultation booking form
  const reserveIconBtn = document.getElementById('reserveIconBtn');
  if (reserveIconBtn) {
    // 기존 상담 예약 폼이 숨겨졌으므로, 이 버튼의 기능도 잠정적으로 비활성화합니다.
    // 또는 다른 페이지로의 링크로 변경할 수도 있습니다.
    // 여기서는 클릭 이벤트를 제거하여 아무 동작도 하지 않도록 합니다.
    // reserveIconBtn.addEventListener('click', () => { ... });
    reserveIconBtn.style.display = 'none'; // 버튼 자체도 숨김
  }


  // 텍스트 줄 배열 (PC 버전)
  const linesPC = [
    '"살기 좋으니까 오르고,',
    '오르니까 사고 싶은 아파트"'
  ];

  // 텍스트 줄 배열 (모바일 버전)
  const linesMobile = [
    '"살기 좋으니까',
    '오르고, 오르니까',
    '사고 싶은 아파트"'
  ];

  // 각 글자별로 앞(컬러)+뒤(백드롭) 구성
  function createAnimatedText(lines) {
    let html = '';
    lines.forEach((line, idx) => {
      for (let ch of line) {
        if (ch === ' ') {
          html += `<span class="char-wrap">&nbsp;</span>`;
        } else {
          html += `
            <span class="char-wrap">
              <span class="char-back">${ch}</span>
              <span class="char">${ch}</span>
            </span>
          `;
        }
      }
      if (idx < lines.length - 1) html += '<br>';
    });
    return html;
  }

  // PC 버전 타이틀 생성 및 애니메이션 적용
  const animatedTitlePC = document.getElementById('animatedTitlePC');
  if (animatedTitlePC) {
    animatedTitlePC.innerHTML = createAnimatedText(linesPC);
    const charsPC = animatedTitlePC.querySelectorAll('.char');
    charsPC.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('reveal');
      }, i * 120);
    });
  }

  // 모바일 버전 타이틀 생성 및 애니메이션 적용
  const animatedTitleMobile = document.getElementById('animatedTitleMobile');
  if (animatedTitleMobile) {
    animatedTitleMobile.innerHTML = createAnimatedText(linesMobile);
    const charsMobile = animatedTitleMobile.querySelectorAll('.char');
    charsMobile.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('reveal');
      }, i * 120);
    });
  }

  // --- 이미지 슬라이더 기능 추가 ---
  /**
   * 이미지 슬라이더를 설정하는 함수
   * @param {string} sliderId 슬라이더 컨테이너의 ID
   * @param {string} imageClass 슬라이더 내 이미지들의 클래스 이름
   */
  function setupImageSlider(sliderId, imageClass) {
    const sliderContainer = document.getElementById(sliderId);
    if (!sliderContainer) {
      console.warn(`Slider container with ID "${sliderId}" not found.`);
      return;
    }

    const images = sliderContainer.querySelectorAll(`.${imageClass}`);
    if (images.length === 0) {
      console.warn(`No images found with class "${imageClass}" in slider "${sliderId}".`);
      return;
    }

    const prevButton = sliderContainer.querySelector('.slider-prev');
    const nextButton = sliderContainer.querySelector('.slider-next');
    let currentIndex = 0; // 현재 활성화된 이미지의 인덱스

    /**
     * 지정된 인덱스의 이미지를 표시하는 함수
     * @param {number} index 표시할 이미지의 인덱스
     */
    function showImage(index) {
      // 모든 이미지에서 'active' 클래스 제거
      images.forEach(img => img.classList.remove('active'));

      // 인덱스 유효성 검사 및 조정
      currentIndex = (index + images.length) % images.length;

      // 현재 이미지에 'active' 클래스 추가하여 표시
      images[currentIndex].classList.add('active');
      console.log(`Slider ${sliderId}: Showing image ${currentIndex + 1} of ${images.length}`);
    }

    // 이전 버튼 클릭 이벤트 리스너
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        showImage(currentIndex - 1);
      });
    }

    // 다음 버튼 클릭 이벤트 리스너
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        showImage(currentIndex + 1);
      });
    }

    // 초기 이미지 표시
    showImage(0);
    console.log(`Image slider "${sliderId}" initialized.`);
  }

  // 3. 유 니 트 (UNIT) 섹션 슬라이더 설정
  setupImageSlider('apartment-type-slider', 'apartment-slider-image');

  // 4. P R E M I U M 섹션 슬라이더 설정
  setupImageSlider('features-slider', 'slider-image');
  // --- 이미지 슬라이더 기능 추가 끝 ---

});

// 페이지 로드 후 서서히 안개 사라지게! (새로운 블러 로직)
window.onload = function(){
  setTimeout(()=>{
    const fogElement = document.getElementById('fog');
    if (fogElement) {
      fogElement.classList.add('hide');
    } else {
      console.warn("Fog element not found for blur fade-out.");
    }
  }, 2000); // 0.6초 뒤에 서서히 걷힌다
}
