const unitData = {
    '64A / 26평형': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/64A.webp', // 카드에 보이는 이미지
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/64_A.webp', // 모달에 보이는 이미지 (다른 이미지)
        area: { dedicated: 64.98, supply: 85.92 },
        rooms: '3룸, 2욕실',
        features: ['4Bay 판상형 구조', '안방 드레스 룸', '주방 펜트리 공간'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '판상형',
        size: 64
    },
    '64B / 26평형': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/64B.webp',
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/64_B.webp',
        area: { dedicated: 64.43, supply: 84.50 },
        rooms: '3룸, 2욕실',
        features: ['타워형 구조', '개방감 있는 LDK 공간', '효율적인 공간 활용'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '타워형',
        size: 64
    },
    '64C / 26평형': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/64C.webp',
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/64_C.webp',
        area: { dedicated: 64.52, supply: 84.88 },
        rooms: '3룸, 2욕실',
        features: ['판상형 구조', '침실 배치 다양성', '실용적인 수납 공간'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '타워형',
        size: 64
    },
    '77A / 30평형': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/77A.webp',
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/77_A.webp',
        area: { dedicated: 77.80, supply: 100.19 },
        rooms: '3룸, 2욕실',
        features: ['4Bay 판상형 구조', '넓은 침실과 드레스룸', '가족을 위한 넉넉한 공간'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '판상형',
        size: 77
    },
    '77B / 30평형': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/77B.webp',
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/77_B.webp',
        area: { dedicated: 77.62, supply: 101.63 },
        rooms: '3룸, 2욕실',
        features: ['4Bay 판상형 구조', '조망권 확보에 유리', '세련된 공간 디자인'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '판상형',
        size: 77
    },
    '77C / 30평형': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/77C.webp',
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/77_C.webp',
        area: { dedicated: 77.94, supply: 101.64 },
        rooms: '3룸, 2욕실',
        features: ['타워형 구조', '효율적인 동선', '다양한 수납 옵션'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '타워형',
        size: 77
    },
    '84A / 34평형': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/84A.webp',
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/84_A.webp',
        area: { dedicated: 84.88, supply: 109.49 },
        rooms: '3룸, 2욕실',
        features: ['4Bay 판상형 구조', '현관에서 주방으로 이어지는 펜트리', '넓은 수납공간'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '판상형',
        size: 84
    },
    '84B /34평형': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/84B.webp',
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/84_B.webp',
        area: { dedicated: 84.92, supply: 111.11 },
        rooms: '3룸, 2욕실',
        features: ['4Bay 판상형 구조', '개방감 극대화', '다이닝 공간 강화'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '판상형',
        size: 84
    },
    '84C / 34평형': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/84C.webp',
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/84_C.webp',
        area: { dedicated: 84.93, supply: 110.50 },
        rooms: '3룸, 2욕실',
        features: ['타워형 구조', '침실 확장 옵션', '효율적인 가구 배치 가능'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '타워형',
        size: 84
    },
    '84D / 34평형 (세대분리형)': {
        cardImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/84D.webp',
        modalImg: 'https://raw.githubusercontent.com/JUNGDONGSU/smate-urban/refs/heads/main/84_D.webp',
        area: { dedicated: 84.92, supply: 111.36 },
        rooms: '4룸, 3욕실',
        features: ['4Bay 판상형 구조', '넓은 현관 수납', '다용도실 강화'],
        options: ['빌트인 가전(냉장고,오븐)', '천정형 시스템 에어컨', '중문'],
        structure: '판상형',
        size: 84
    }
};

let filters = {
    size: 'all',
    structure: 'all'
};
let typeDistributionChart, areaComparisonChart;

document.addEventListener('DOMContentLoaded', () => {
    renderUnits();
    setupEventListeners();
});

function createUnitCard(unitType, unitInfo, index) {
    const card = document.createElement('div');
    card.className = 'unit-card bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 unit-card-enter';
    card.style.animationDelay = `${index * 0.05}s`;
    
    card.innerHTML = `
        <div class="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 text-center">
            <h3 class="text-2xl font-bold">${unitType}</h3>
            <p class="text-sm opacity-90">전용 ${unitInfo.area.dedicated}㎡ / 공급 ${unitInfo.area.supply}㎡</p>
        </div>
        <div class="relative">
            <img src="${unitInfo.cardImg}" alt="${unitType} 평면도" class="w-full h-auto max-h-[320px] object-contain" onerror="this.parentElement.innerHTML = '<div class=\\'w-full h-48 bg-slate-200 flex items-center justify-center text-slate-500\\'>이미지 없음</div>'">
            <div class="absolute top-2 right-2 bg-slate-800 bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">${unitInfo.structure}</div>
        </div>
        <div class="p-6">
            <div class="flex flex-wrap justify-center items-center gap-4 mb-4">
                <div class="flex-shrink-0 bg-gradient-to-br from-fuchsia-400 to-rose-500 text-white text-center py-2 px-4 rounded-full font-semibold">
                    ${unitInfo.rooms}
                </div>
                ${unitInfo.size === 84 ? `
                    <div class="flex-shrink-0 text-center text-lg font-bold text-indigo-700 animate-blink py-2 px-4 rounded-full bg-yellow-100 whitespace-nowrap">✨ 시스템 에어컨 2대 무상 설치 ✨</div>
                ` : ''}
            </div>

            <div class="mb-4">
                <p class="font-semibold text-slate-700 text-sm mb-2">주요 특징:</p>
                <div class="flex flex-wrap gap-2">
                    ${unitInfo.features.map(f => `<span class="inline-block bg-sky-100 text-sky-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full">${f}</span>`).join('')}
                </div>
            </div>

            ${unitInfo.options && unitInfo.options.length > 0 ? `
            <div class="mb-4">
                <p class="font-semibold text-slate-700 text-sm mb-2">선택 옵션:</p>
                <div class="flex flex-wrap gap-2">
                ${unitInfo.options.map(opt => `<span class="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${opt}</span>`).join('')}
                </div>
            </div>
            ` : ''}
            <button class="open-modal-btn w-full bg-slate-700 text-white py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-colors" data-unit-type="${unitType}">상세 평면도 보기</button>
        </div>
    `;
    return card;
}

function renderUnits() {
    const grid = document.getElementById('unitsGrid');
    const noResults = document.getElementById('noResults');
    grid.innerHTML = '';
    
    const filteredData = Object.entries(unitData).filter(([_, unitInfo]) => {
        const sizeMatch = filters.size === 'all' || unitInfo.size == filters.size;
        const structureMatch = filters.structure === 'all' || unitInfo.structure === filters.structure;
        return sizeMatch && structureMatch;
    });

    if (filteredData.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
    
    filteredData.forEach(([unitType, unitInfo], index) => {
        const card = createUnitCard(unitType, unitInfo, index);
        grid.appendChild(card);
    });
}

function openModal(unitType) {
    const modal = document.getElementById('unitModal');
    const modalContent = modal.querySelector('.modal-content');
    const unitInfo = unitData[unitType];

    document.getElementById('modalTitle').textContent = `${unitType} 평면도`; // 제목 변경
    document.getElementById('modalBody').innerHTML = `
        <div class="flex justify-center items-center p-0">
            <img src="${unitInfo.modalImg}" alt="${unitType} 평면도" class="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-lg bg-slate-100" onerror="this.alt='평면도 이미지를 불러올 수 없습니다.'">
        </div>
    `;
    
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-95');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('unitModal');
    const modalContent = modal.querySelector('.modal-content');
    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('pointer-events-none');
        document.body.style.overflow = 'auto';
    }, 300);
}

function updateFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const group = btn.dataset.filterGroup;
        const value = btn.dataset.filterValue;
        if (filters[group] === value) {
            btn.classList.add('active', 'bg-slate-600', 'text-white');
            btn.classList.remove('bg-white', 'text-slate-600');
        } else {
            btn.classList.remove('active', 'bg-slate-600', 'text-white');
            btn.classList.add('bg-white', 'text-slate-600');
        }
    });
}

function setupEventListeners() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.dataset.filterGroup;
            const value = btn.dataset.filterValue;
            
            filters[group] = value;
            
            document.querySelectorAll(`.filter-btn[data-filter-group="${group}"]`).forEach(b => {
                b.classList.remove('active', 'bg-slate-600', 'text-white');
                b.classList.add('bg-white', 'text-slate-600');
            });

            btn.classList.add('active', 'bg-slate-600', 'text-white');
            btn.classList.remove('bg-white', 'text-slate-600');
            
            renderUnits();
        });
    });
    
    document.getElementById('unitsGrid').addEventListener('click', (e) => {
        const button = e.target.closest('.open-modal-btn');
        if (button) {
            openModal(button.dataset.unitType);
        }
    });

    document.getElementById('unitModal').addEventListener('click', (e) => {
        if (e.target.closest('.close-modal-btn') || e.target === e.currentTarget) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}
