// 유닛 정보 데이터
const unitData = {
    '64A': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/64A.jpg',
        area: '전용면적: 64.98㎡ / 공급면적: 85.92㎡',
        rooms: '3룸, 2욕실',
        features: ['4Bay 판상형 구조', '채광 및 통풍 우수', '넓은 거실과 주방 공간'],
        options: ['확장형', '시스템 에어컨 (선택)']
    },
    '64B': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/64B.jpg',
        area: '전용면적: 64.98㎡ / 공급면적: 85.92㎡',
        rooms: '3룸, 2욕실',
        features: ['타워형 구조', '개방감 있는 LDK(Living-Dining-Kitchen) 공간', '효율적인 공간 활용'],
        options: ['확장형', '빌트인 가구 (선택)']
    },
    '64C': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/unit64C.webp',
        area: '전용면적: 64.98㎡ / 공급면적: 85.92㎡',
        rooms: '3룸, 2욕실',
        features: ['판상형 구조', '침실 배치 다양성', '실용적인 수납 공간'],
        options: ['확장형', '붙박이장 (선택)']
    },
    '77A': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/unit77A.webp',
        area: '전용면적: 77.98㎡ / 공급면적: 102.92㎡',
        rooms: '4룸, 2욕실',
        features: ['4Bay 판상형 구조', '넓은 침실과 드레스룸', '가족을 위한 넉넉한 공간'],
        options: ['확장형', '시스템 에어컨 (선택)', '드레스룸 특화']
    },
    '77B': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/unit77B.webp',
        area: '전용면적: 77.98㎡ / 공급면적: 102.92㎡',
        rooms: '4룸, 2욕실',
        features: ['타워형 구조', '조망권 확보에 유리', '세련된 공간 디자인'],
        options: ['확장형', '빌트인 가구 (선택)', '알파룸 (선택)']
    },
    '77C': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/unit77C.webp',
        area: '전용면적: 77.98㎡ / 공급면적: 102.92㎡',
        rooms: '4룸, 2욕실',
        features: ['판상형 구조', '효율적인 동선', '다양한 수납 옵션'],
        options: ['확장형', '붙박이장 (선택)', '주방 팬트리']
    },
    '84A': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/unit84A.webp',
        area: '전용면적: 84.98㎡ / 공급면적: 112.92㎡',
        rooms: '4룸, 2욕실',
        features: ['4Bay 판상형 구조', '알파룸 제공', '넓은 수납공간과 여유로운 생활 공간'],
        options: ['확장형', '시스템 에어컨 (선택)', '주방 팬트리', '알파룸']
    },
    '84B': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/unit84B.webp',
        area: '전용면적: 84.98㎡ / 공급면적: 112.92㎡',
        rooms: '4룸, 2욕실',
        features: ['타워형 구조', '개방감 극대화', '다이닝 공간 강화'],
        options: ['확장형', '빌트인 가구 (선택)', '대형 드레스룸']
    },
    '84C': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/unit84C.webp',
        area: '전용면적: 84.98㎡ / 공급면적: 112.92㎡',
        rooms: '4룸, 2욕실',
        features: ['판상형 구조', '침실 확장 옵션', '효율적인 가구 배치 가능'],
        options: ['확장형', '붙박이장 (선택)', '현관 창고']
    },
    '84D': {
        img: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/main/unit84D.webp',
        area: '전용면적: 84.98㎡ / 공급면적: 112.92㎡',
        rooms: '4룸, 2욕실',
        features: ['판상형 구조', '넓은 현관 수납', '다용도실 강화'],
        options: ['확장형', '주방 아일랜드 (선택)', '알파룸']
    }
};

/**
 * 유닛 정보를 기반으로 HTML 카드 요소를 생성합니다.
 * @param {string} unitType - 유닛 타입 (예: '64A')
 * @param {object} unitInfo - 유닛의 상세 정보 객체
 * @returns {HTMLElement} 생성된 유닛 카드 요소
 */
function createUnitCard(unitType, unitInfo) {
    const card = document.createElement('div');
    card.className = 'unit-card loading-animation'; // 로딩 애니메이션 클래스 추가
    
    card.innerHTML = `
        <div class="unit-header">
            <div class="unit-type">${unitType}</div>
            <div class="unit-area">${unitInfo.area}</div>
        </div>
        <div class="unit-image-container">
            <img src="${unitInfo.img}" alt="${unitType} 평면도" class="unit-image" 
                 onload="this.style.display='block'; this.nextElementSibling.style.display='none';"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="image-placeholder">
                평면도 이미지<br>준비 중
            </div>
        </div>
        <div class="unit-content">
            <div class="unit-rooms">${unitInfo.rooms}</div>
            
            <div class="section">
                <div class="section-title">주요 특징</div>
                <ul class="features-list">
                    ${unitInfo.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="section">
                <div class="section-title">선택 옵션</div>
                <div class="options-tags">
                    ${unitInfo.options.map(option => `<span class="option-tag">${option}</span>`).join('')}
                </div>
            </div>
            
            <button class="view-detail-btn" onclick="openModal('${unitType}')">
                상세 평면도 보기
            </button>
        </div>
    `;
    
    return card;
}

/**
 * 특정 유닛의 상세 정보를 모달로 엽니다.
 * @param {string} unitType - 열람할 유닛 타입
 */
function openModal(unitType) {
    const modal = document.getElementById('unitModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const unitInfo = unitData[unitType];
    
    modalTitle.textContent = `${unitType} 세대 상세 정보`;
    
    modalBody.innerHTML = `
        <div class="modal-area-info">
            ${unitInfo.area} | ${unitInfo.rooms}
        </div>
        
        <div class="modal-image-container">
            <img src="${unitInfo.img}" alt="${unitType} 평면도" class="modal-image"
                 onload="this.style.display='block'; this.nextElementSibling.style.display='none';"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="modal-image-placeholder">
                평면도 이미지를 불러올 수 없습니다
            </div>
        </div>
        
        <div class="modal-info-grid">
            <div class="modal-info-section">
                <div class="modal-section-title">주요 특징</div>
                <ul class="modal-features-list">
                    ${unitInfo.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-info-section">
                <div class="modal-section-title">선택 옵션</div>
                <div class="modal-options-tags">
                    ${unitInfo.options.map(option => `<span class="modal-option-tag">${option}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block'; // 모달 표시
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
}

/**
 * 모달 창을 닫습니다.
 */
function closeModal() {
    const modal = document.getElementById('unitModal');
    modal.style.display = 'none'; // 모달 숨김
    document.body.style.overflow = 'auto'; // 배경 스크롤 허용
}

/**
 * unitData에 있는 모든 유닛 카드를 렌더링합니다.
 */
function renderUnits() {
    const container = document.getElementById('unitsGrid');
    
    Object.entries(unitData).forEach(([unitType, unitInfo], index) => {
        const card = createUnitCard(unitType, unitInfo);
        card.style.animationDelay = `${index * 0.1}s`; // 카드마다 애니메이션 지연 시간 설정
        container.appendChild(card);
    });
}

// 문서 로드 완료 시 이벤트 리스너 설정
document.addEventListener('DOMContentLoaded', function() {
    renderUnits(); // 유닛 카드 렌더링 시작
    
    const modal = document.getElementById('unitModal');
    const closeBtn = document.querySelector('.close');
    
    // X 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener('click', closeModal);
    
    // 모달 배경 클릭 시 모달 닫기
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // ESC 키 누를 시 모달 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
