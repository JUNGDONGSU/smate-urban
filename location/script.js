// JavaScript 부분

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

// DOM 콘텐츠가 완전히 로드되면 실행
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired."); // Debugging

  // --- Mobile Navigation (Hamburger Menu) Logic ---
  const hamburgerButton = document.querySelector('.hamburger-menu');
  const navigationMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu ul li a');

  if (hamburgerButton && navigationMenu) {
    console.log("Hamburger menu and navigation menu found."); // Debugging
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
      console.log(`Hamburger menu toggled. Nav open: ${isExpanded}`); // Debugging
    });

    // Close menu when a link is clicked in mobile navigation
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navigationMenu.classList.contains('nav-open')) {
          navigationMenu.classList.remove('nav-open');
          hamburgerButton.classList.remove('active');
          hamburgerButton.setAttribute('aria-expanded', 'false');
          hamburgerButton.setAttribute('aria-label', '메뉴 열기');
          console.log("Nav link clicked, closing mobile menu."); // Debugging
        }
      });
    });
  } else {
    console.log("Hamburger menu or navigation menu not found. Skipping mobile navigation logic."); // Debugging
  }
  // --- End of Mobile Navigation Logic ---

  // 전화번호 자동 하이픈 삽입 기능
  const userPhoneInput = document.getElementById('userPhone');

  if (userPhoneInput) {
    console.log("Phone input found. Adding auto-hyphen listener."); // Debugging
    userPhoneInput.addEventListener('input', function(event) {
      let phoneNumber = event.target.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거
      let formattedNumber = '';

      // 한국 전화번호 형식에 맞춰 하이픈 삽입
      if (phoneNumber.length < 4) {
        formattedNumber = phoneNumber;
      } else if (phoneNumber.length < 7) { // 010-123
        formattedNumber = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3);
      } else if (phoneNumber.length < 11) { // 010-123-4567
        formattedNumber = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3, 7) + '-' + phoneNumber.substring(7);
      } else { // 010-1234-5678 (최대 길이)
        formattedNumber = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3, 7) + '-' + phoneNumber.substring(7, 11);
      }
      event.target.value = formattedNumber;
    });
  } else {
    console.log("Phone input not found. Skipping auto-hyphen logic."); // Debugging
  }


  // 버튼 상태 업데이트 함수 (개인정보 동의 체크박스와 연결)
  function updateButtonState() {
    const inquiryForm = document.getElementById('inquiryForm'); // inquiryForm을 다시 가져와야 함
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const submitBtn = document.getElementById('submitBtn');

    if (agreeCheckbox && submitBtn) { // Check if elements exist
      if (agreeCheckbox.checked) {
        submitBtn.classList.remove('btn-disabled');
        submitBtn.disabled = false;
        console.log("Agree checkbox checked. Submit button enabled."); // Debugging
      } else {
        submitBtn.classList.add('btn-disabled');
        submitBtn.disabled = true;
        console.log("Agree checkbox unchecked. Submit button disabled."); // Debugging
      }
    } else {
      console.log("Agree checkbox or submit button not found for updateButtonState."); // Debugging
    }
  }

  // 폼 제출 이벤트 리스너 (Google Spreadsheet 연동 부분)
  const inquiryForm = document.getElementById('inquiryForm');
  const agreeCheckbox = document.getElementById('agreeCheckbox');
  const submitBtn = document.getElementById('submitBtn');

  // Apps Script URL (공통으로 사용)
  const APPS_SCRIPT_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxXIk69N_Qtbgw_HkXZAJDO1cesyupl6mz6V4jVs6IPhP-kwbh09nq9kNBoushrPbwtg/exec';

  console.log('Apps Script Web App URL:', APPS_SCRIPT_WEB_APP_URL); // URL이 제대로 로드되는지 확인


  if (inquiryForm && agreeCheckbox && submitBtn) {
    console.log("All inquiry form elements found. Initializing form submission logic."); // Debugging
    updateButtonState(); // 페이지 로드 시 초기 버튼 상태 설정
    agreeCheckbox.addEventListener('change', updateButtonState); // 체크박스 변경 시 버튼 상태 업데이트

    inquiryForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      console.log("Form submission initiated."); // Debugging

      const name = document.getElementById('userName').value.trim();
      const phone = document.getElementById('userPhone').value.trim();
      const address = document.getElementById('userAddress').value.trim();
      const inquiry = document.getElementById('inquiryType').value;
      const otherText = document.getElementById('otherInquiry').value.trim();

      // 필수 필드 및 유효성 검사 (기존 로직 유지)
      if (!name || !phone || !address) {
        displayMessage('성함, 연락처, 주소는 반드시 입력해야 합니다.');
        console.log("Form validation failed: Missing required fields."); // Debugging
        return;
      }

      const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
      if (!phoneRegex.test(phone)) {
        displayMessage('올바른 연락처 형식을 입력해주세요. (예: 010-1234-5678)');
        console.log("Form validation failed: Invalid phone format."); // Debugging
        return;
      }

      if (inquiry === '') {
        displayMessage('문의 유형을 선택해주세요.');
        console.log("Form validation failed: Inquiry type not selected."); // Debugging
        return;
      }
      if (inquiry === '기타' && !otherText) {
        displayMessage('기타 문의 내용을 입력해주세요.');
        console.log("Form validation failed: Other inquiry text missing."); // Debugging
        return;
      }

      if (!agreeCheckbox.checked) {
        displayMessage('개인정보 수집 및 이용에 동의해야 등록이 가능합니다.');
        console.log("Form validation failed: Privacy agreement not checked."); // Debugging
        return;
      }

      // 데이터 객체 생성 (Apps Script로 보낼 데이터)
      const formData = {
        userName: name,
        userPhone: phone,
        userAddress: address,
        inquiryType: inquiry,
        otherInquiry: otherText
      };
      console.log("Form data collected:", formData); // Debugging

      submitBtn.classList.add('btn-disabled'); // 제출 중 버튼 비활성화
      submitBtn.disabled = true;
      submitBtn.textContent = '등록 중...'; // 사용자에게 피드백 제공
      console.log("Submit button disabled, text changed to '등록 중...'."); // Debugging

      try {
        // Apps Script 웹 앱으로 데이터 전송
        const response = await fetch(APPS_SCRIPT_WEB_APP_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // JSON 형식으로 데이터 전송
          },
          body: JSON.stringify(formData) // 데이터 객체를 JSON 문자열로 변환하여 전송
        });
        console.log("Fetch request sent to Apps Script."); // Debugging

        const result = await response.json(); // Apps Script의 응답 (JSON) 파싱
        console.log("Response from Apps Script:", result); // Debugging

        if (response.ok && result.success) { // 서버 응답이 성공적일 경우
          displayMessage('정상적으로 등록되었습니다! 담당자가 곧 연락드릴 예정입니다.');
          inquiryForm.reset();
          document.getElementById('otherInquiry').value = '';
          updateButtonState(); // 폼 초기화 후 버튼 상태 업데이트
          console.log("Form submission successful."); // Debugging
        } else { // 서버 응답이 실패일 경우
          displayMessage(`상담 예약 실패: ${result.message || '알 수 없는 오류가 발생했습니다.'}`);
          console.error("Form submission failed:", result); // Debugging
        }
      } catch (error) {
        console.error('Error submitting form:', error); // Debugging
        displayMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
      } finally {
        submitBtn.classList.remove('btn-disabled'); // 완료 후 버튼 다시 활성화
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

  // 배터리 상태에 따른 애니메이션 제어
  if ('getBattery' in navigator) {
      navigator.getBattery().then(function(battery) {
          function updateAnimationState() {
              // Check if header is present before trying to access its ::before pseudo-element
              const header = document.querySelector('.business-table-bg .header');
              if (header) {
                  if (battery.level < 0.2 || !battery.charging) {
                      document.documentElement.style.setProperty('--animation-play-state', 'paused');
                  } else {
                      document.documentElement.style.setProperty('--animation-play-state', 'running');
                  }
              }
          }
          battery.addEventListener('chargingchange', updateAnimationState);
          battery.addEventListener('levelchange', updateAnimationState);
          updateAnimationState();
      });
  }
  // 키보드 접근성 향상
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
      }
  });
  document.addEventListener('mousedown', function() {
      document.body.classList.remove('keyboard-navigation');
  });

  // 하단 고정 배너 로직
  const bottomBanner = document.getElementById('bottomBanner');
  const closeBottomBannerBtn = document.querySelector('.close-bottom-banner');
  const consultationSection = document.getElementById('consultation-booking');

  if (bottomBanner) {
      // 페이지 로드 후 1초 뒤에 배너 표시 (애니메이션 적용)
      setTimeout(() => {
          bottomBanner.classList.add('show');
      }, 1000);

      // 배너 클릭 시 상담 예약 섹션으로 스크롤
      bottomBanner.addEventListener('click', (event) => {
          if (!event.target.classList.contains('close-bottom-banner')) {
              if (consultationSection) {
                  consultationSection.scrollIntoView({ behavior: 'smooth' });
              }
          }
      });

      // 닫기 버튼 클릭 시 배너 숨김
      if (closeBottomBannerBtn) {
          closeBottomBannerBtn.addEventListener('click', () => {
              bottomBanner.classList.remove('show');
          });
      }
  }

  // 스크롤 애니메이션 (premium_location_guide.html 에서 가져옴)
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, observerOptions);

  // 애니메이션 대상 요소들 관찰
  const animatedElements = document.querySelectorAll('.card, .premium-section');
  animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
  });
});
