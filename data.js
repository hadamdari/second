// semiconductor-hub data.js

const DEFAULT_CREATOR_PROFILE = {
  name: "권지연",
  engName: "JIYEON KWON",
  dept: "신소재공학과 반도체재료 전공",
  phone: "010-8273-9481",
  email: "jiyeon.kwon@semilab.ac.kr",
  bioHeadline: "\"어려운 전자 재료학 원리를 누구나 직관적으로 이해할 수 있도록!\"",
  bioParagraph1: "안녕하세요, <strong>신소재공학과 권지연(JIYEON KWON)</strong>입니다. 반도체의 미세 결정 구조와 전하 이동 원리에 매료되어 반도체 재료 및 소자 공정을 탐구하고 있습니다.",
  bioParagraph2: "반도체에 입문하는 학생, 밸류체인을 분석하는 투자자, 그리고 학술 연구 및 강의를 하시는 교수님 모두가 한눈에 원리와 용어 50선, 최신 동향을 파악하고 쉽게 소통할 수 있도록 지식 공유 웹 플랫폼을 제작하였습니다.",
  research1Title: "🔬 관심 영역 1",
  research1Desc: "Extreme UV (EUV) 노광 공정용 포토레지스트 신소재 개발",
  research2Title: "⚡ 관심 영역 2",
  research2Desc: "GAA (Gate-All-Around) 트랜지스터 및 3D HBM 패키징 기술"
};

const DEFAULT_GLOSSARY_DATA = [
  // 1. 전기와 재료의 기초
  {
    id: 1,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "반도체",
    engTerm: "Semiconductor",
    summary: "전기가 흐르는 성질을 자유롭게 조절할 수 있는 물질",
    desc: "전기가 아주 잘 흐르는 도체와 거의 흐르지 않는 부도체의 중간 성질을 가진 물질이다. 온도나 불순물의 양을 조절하면 전기의 흐름을 원하는 방식으로 바꿀 수 있다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "수도꼭지의 손잡이처럼 전자의 흐름을 세밀하게 켜고 끌 수 있는 조절 장치"
  },
  {
    id: 2,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "도체",
    engTerm: "Conductor",
    summary: "전기가 매우 잘 통하는 물질",
    desc: "구리나 알루미늄처럼 전기가 쉽게 흐르는 물질이다. 전선을 만들 때 주로 사용하며, 자유롭게 움직일 수 있는 전자가 많다.",
    audienceTags: ["입문 필수"],
    analogy: "물이 막힘없이 콸콸 흐르는 탁 트인 넓은 파이프"
  },
  {
    id: 3,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "부도체 (절연체)",
    engTerm: "Insulator",
    summary: "전기가 거의 흐르지 않는 물질",
    desc: "고무나 유리처럼 전기가 거의 흐르지 않는 물질이다. 전기가 새거나 감전되는 일을 막기 위한 절연 재료로 사용된다.",
    audienceTags: ["입문 필수"],
    analogy: "물이 전혀 통과할 수 없는 꽉 닫힌 고무 밸브"
  },
  {
    id: 4,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "전압",
    engTerm: "Voltage (V)",
    summary: "전하를 움직이게 하는 전기적 압력 차이",
    desc: "전하를 움직이게 하는 힘의 차이를 뜻한다. 물을 흐르게 하는 수압에 비유할 수 있으며, 단위는 볼트(V)를 사용한다.",
    audienceTags: ["입문 필수"],
    analogy: "수도관 끝과 끝의 수압 차이"
  },
  {
    id: 5,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "전류",
    engTerm: "Current (A)",
    summary: "전하가 일정한 방향으로 흐르는 이동",
    desc: "전하가 일정한 방향으로 이동하는 흐름이다. 전선을 따라 흐르는 물의 양에 비유할 수 있으며, 단위는 암페어(A)를 사용한다.",
    audienceTags: ["입문 필수"],
    analogy: "파이프 내부를 지나가는 물의 유량"
  },
  {
    id: 6,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "저항",
    engTerm: "Resistance (Ω)",
    summary: "전류의 흐름을 방해하는 전기적 방해 요소",
    desc: "전류의 흐름을 방해하는 정도를 말한다. 저항이 크면 같은 전압에서도 전류가 적게 흐르며, 단위는 옴(Ω)을 사용한다.",
    audienceTags: ["입문 필수"],
    analogy: "물길 내부에 깔린 자갈이나 좁아진 관"
  },
  {
    id: 7,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "전자",
    engTerm: "Electron",
    summary: "음(-)전하를 띠며 전류를 만드는 아주 작은 입자",
    desc: "원자를 이루는 아주 작은 입자 중 하나로 음전하를 띤다. 반도체 안에서 이동하면서 전류를 만드는 중요한 역할을 한다.",
    audienceTags: ["입문 필수", "교수/학술"],
    analogy: "전기 회로라는 도로 위를 달리는 수많은 작은 자동차들"
  },
  {
    id: 8,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "정공",
    engTerm: "Hole",
    summary: "전자가 빠져나간 빈자리가 양(+)전하를 띤 것처럼 보이는 개념",
    desc: "전자가 빠져나간 빈자리를 양전하를 가진 입자처럼 표현한 개념이다. 실제 입자는 아니지만, 반도체 내부의 전류 흐름을 설명할 때 매우 유용하다.",
    audienceTags: ["입문 필수", "교수/학술"],
    analogy: "주차장에서 차가 이동할 때 비어있는 주차 공간이 반대로 움직이는 것처럼 보이는 현상"
  },
  {
    id: 9,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "실리콘",
    engTerm: "Silicon (Si)",
    summary: "반도체 칩 제조에 가장 광범위하게 쓰이는 기판 원소",
    desc: "현재 반도체 칩을 만드는 데 가장 널리 사용되는 원소이다. 자연에 풍부하고 가공하기 쉬우며, 전기적 성질을 안정적으로 조절할 수 있다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "반도체라는 정밀 건축물을 짓기 위한 가장 완벽하고 풍부한 모래 기반의 흙"
  },
  {
    id: 10,
    category: 1,
    categoryName: "1. 전기와 재료의 기초",
    term: "웨이퍼",
    engTerm: "Wafer",
    summary: "고순도 실리콘을 얇게 썬 원판 모양 기판",
    desc: "고순도 실리콘을 얇고 둥근 원판 모양으로 만든 것이다. 웨이퍼 위에 여러 공정을 반복해 수많은 반도체 칩을 동시에 만든다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "수십 개의 맛있는 칩을 구워내는 둥근 피자 도우"
  },

  // 2. 반도체의 구조와 기본 소자
  {
    id: 11,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "도핑",
    engTerm: "Doping",
    summary: "순수한 반도체에 불순물을 넣어 전기적 성질을 조절하는 과정",
    desc: "순수한 반도체에 아주 적은 양의 다른 원소를 넣어 전기적 성질을 바꾸는 과정이다. 도핑을 통해 N형 또는 P형 반도체를 만든다.",
    audienceTags: ["입문 필수", "교수/학술"],
    analogy: "맹물에 소금을 살짝 넣어 전기가 통하게 만드는 스파이스 조미료 처방"
  },
  {
    id: 12,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "불순물",
    engTerm: "Dopant / Impurity",
    summary: "전기 성질 조절을 위해 의도적으로 첨가하는 원소",
    desc: "반도체의 전기적 성질을 조절하기 위해 의도적으로 넣는 소량의 원소이다. 이름은 불순물이지만, 반도체 제조에서는 꼭 필요한 재료이다.",
    audienceTags: ["입문 필수"],
    analogy: "요리의 맛을 극대화하는 마법의 양념 소금"
  },
  {
    id: 13,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "N형 반도체",
    engTerm: "N-type Semiconductor",
    summary: "자유 전자가 많아서 전류를 잘 전달하는 반도체",
    desc: "전자가 주로 전류를 운반하도록 만든 반도체이다. 실리콘에 전자를 하나 더 제공할 수 있는 원소를 넣어 만든다.",
    audienceTags: ["입문 필수", "교수/학술"],
    analogy: "음전하(-) 전자가 풍부한 시원한 스피드 드라이브 코스"
  },
  {
    id: 14,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "P형 반도체",
    engTerm: "P-type Semiconductor",
    summary: "정공(빈자리)이 많아서 전류를 전달하는 반도체",
    desc: "정공이 주로 전류를 운반하도록 만든 반도체이다. 실리콘에서 전자가 부족한 상태를 만들 수 있는 원소를 넣어 만든다.",
    audienceTags: ["입문 필수", "교수/학술"],
    analogy: "양전하(+) 빈자리가 이어져서 이동을 돕는 주차장 정체 구간"
  },
  {
    id: 15,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "캐리어",
    engTerm: "Carrier",
    summary: "반도체 내부에서 전하를 운반하는 존재 (전자/정공)",
    desc: "반도체 안에서 전하를 옮겨 전류를 만드는 존재를 뜻한다. N형에서는 전자, P형에서는 정공이 주요 캐리어이다.",
    audienceTags: ["교수/학술"],
    analogy: "승객(전하)을 싣고 달리는 택시와 버스"
  },
  {
    id: 16,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "PN 접합",
    engTerm: "PN Junction",
    summary: "P형과 N형 반도체를 붙여 일방통행 성질을 만든 접합부",
    desc: "P형 반도체와 N형 반도체를 맞붙인 구조이다. 전류를 한쪽 방향으로 흐르게 하거나 막는 기능의 기초가 된다.",
    audienceTags: ["입문 필수", "교수/학술"],
    analogy: "한쪽으로만 열리는 일방통행 회전문"
  },
  {
    id: 17,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "공핍층",
    engTerm: "Depletion Region",
    summary: "PN 접합 경계면에 형성되는 캐리어 결핍 장벽 영역",
    desc: "PN 접합의 경계에서 움직일 수 있는 전자와 정공이 거의 사라진 영역이다. 이 층은 전류의 흐름을 조절하는 장벽 역할을 한다.",
    audienceTags: ["교수/학술"],
    analogy: "양쪽에 사람이 통과하지 못하도록 차단막이 서 있는 비무장지대"
  },
  {
    id: 18,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "순방향 바이어스",
    engTerm: "Forward Bias",
    summary: "전류가 쉽게 흐르도록 PN 접합에 걸어주는 전압 방향",
    desc: "PN 접합에 전류가 쉽게 흐르는 방향으로 전압을 거는 상태이다. 장벽이 낮아져 다이오드가 켜진 것처럼 동작한다.",
    audienceTags: ["교수/학술"],
    analogy: "차단막을 열어 톨게이트를 뚫어주는 정방향 신호"
  },
  {
    id: 19,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "역방향 바이어스",
    engTerm: "Reverse Bias",
    summary: "전류 흐름을 막도록 PN 접합에 걸어주는 전압 방향",
    desc: "PN 접합에 전류가 거의 흐르지 않는 방향으로 전압을 거는 상태이다. 장벽이 커져 다이오드가 꺼진 것처럼 동작한다.",
    audienceTags: ["교수/학술"],
    analogy: "차단막을 더 높이 올려 도로를 완전히 막는 역방향 신호"
  },
  {
    id: 20,
    category: 2,
    categoryName: "2. 반도체의 구조와 기본 소자",
    term: "다이오드",
    engTerm: "Diode",
    summary: "전류를 주로 한 방향으로만 흐르게 하는 기초 소자",
    desc: "전류를 주로 한 방향으로만 흐르게 하는 반도체 소자이다. 전류의 방향을 바로잡거나 회로를 보호하는 데 사용된다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "배에서 물이 거꾸로 들어오지 못하게 막는 체크 밸브"
  },

  // 3. 트랜지스터와 디지털 회로
  {
    id: 21,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "트랜지스터",
    engTerm: "Transistor",
    summary: "전기 신호로 전류를 켜고 끄거나 증폭하는 전자 스위치",
    desc: "작은 전기 신호로 더 큰 전류를 조절하는 반도체 소자이다. 스위치와 증폭기 역할을 하며, 모든 디지털 칩의 핵심 구성 요소이다.",
    audienceTags: ["입문 필수", "투자 필수", "교수/학술"],
    analogy: "모든 컴퓨터 계산의 원동력이 되는 초고속 전자 수도꼭지"
  },
  {
    id: 22,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "BJT",
    engTerm: "Bipolar Junction Transistor",
    summary: "전류 기반으로 또 다른 전류를 제어하는 트랜지스터",
    desc: "전류를 이용해 다른 전류를 조절하는 트랜지스터의 한 종류이다. 신호를 증폭하는 회로와 전력 제어 회로에서 널리 사용된다.",
    audienceTags: ["교수/학술"],
    analogy: "작은 전류 레버를 당겨 큰 전류를 조절하는 아날로그 증폭기"
  },
  {
    id: 23,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "MOSFET",
    engTerm: "Metal-Oxide-Semiconductor FET",
    summary: "전압으로 전류를 온/오프하는 현대 첨단 칩의 주력 스위치",
    desc: "전압을 이용해 전류의 흐름을 켜고 끄는 트랜지스터이다. 전력 소비가 적고 작게 만들기 쉬워 현대 반도체 칩에서 가장 많이 쓰인다.",
    audienceTags: ["입문 필수", "투자 필수", "교수/학술"],
    analogy: "스마트폰과 초고성능 AI 칩에 수십억 개씩 집적되는 초미세 디지털 스위치"
  },
  {
    id: 24,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "게이트",
    engTerm: "Gate (G)",
    summary: "MOSFET의 전류 흐름 문을 열고 닫는 제어 단자",
    desc: "MOSFET에서 전류의 흐름을 조절하는 단자이다. 게이트에 일정한 전압을 가하면 소스와 드레인 사이에 전류가 흐를 수 있다.",
    audienceTags: ["입문 필수", "교수/학술"],
    analogy: "수도꼭지 물길을 열어주는 상단 손잡이 레버"
  },
  {
    id: 25,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "소스",
    engTerm: "Source (S)",
    summary: "MOSFET에서 전하가 들어오는 유입 단자",
    desc: "MOSFET에서 전하가 이동을 시작하는 쪽의 단자이다. 수도관에서 물이 들어오는 입구와 비슷하게 이해할 수 있다.",
    audienceTags: ["교수/학술"],
    analogy: "수도관으로 깨끗한 물이 들어오는 입구 파이프"
  },
  {
    id: 26,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "드레인",
    engTerm: "Drain (D)",
    summary: "MOSFET에서 전하가 빠져나가는 배출 단자",
    desc: "MOSFET에서 전하가 빠져나가는 쪽의 단자이다. 소스와 드레인 사이의 전류는 게이트 전압에 의해 조절된다.",
    audienceTags: ["교수/학술"],
    analogy: "조절된 물이 최종적으로 빠져나가는 출구 파이프"
  },
  {
    id: 27,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "문턱전압",
    engTerm: "Threshold Voltage (Vth)",
    summary: "트랜지스터 스위치가 켜지기 시작하는 경계 전압",
    desc: "MOSFET이 본격적으로 켜지기 시작하는 최소한의 게이트 전압이다. 이 값보다 낮으면 전류가 거의 흐르지 않는다.",
    audienceTags: ["교수/학술"],
    analogy: "문이 덜컥 열리기 위해 필요한 최소한의 수압 세기"
  },
  {
    id: 28,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "집적회로 (IC)",
    engTerm: "Integrated Circuit",
    summary: "하나의 칩에 수억~수십억 개의 소자를 모아 만든 회로",
    desc: "많은 트랜지스터와 회로 부품을 하나의 작은 칩 안에 모아 만든 전자 회로이다. 계산, 저장, 통신 등 특정한 기능을 수행한다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "수천 개의 전자 부품을 손톱만한 공간에 축소한 고밀도 도시"
  },
  {
    id: 29,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "논리 게이트",
    engTerm: "Logic Gate",
    summary: "0과 1의 논리 연산을 처리하는 연산 회로 단편",
    desc: "0과 1의 입력을 받아 정해진 규칙에 따라 결과를 내는 기본 디지털 회로이다. AND, OR, NOT 등이 있으며 복잡한 계산의 바탕이 된다.",
    audienceTags: ["입문 필수"],
    analogy: "‘조건 A와 B가 모두 맞을 때만 문을 열라’는 판단 연산기"
  },
  {
    id: 30,
    category: 3,
    categoryName: "3. 트랜지스터와 디지털 회로",
    term: "클록",
    engTerm: "Clock",
    summary: "디지털 회로의 동작 속도와 타이밍을 맞추는 박자 신호",
    desc: "디지털 회로가 일정한 순서와 속도로 동작하도록 제공하는 반복 신호이다. 클록 주파수가 높을수록 초당 더 많은 동작을 수행할 수 있다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "오케스트라 지휘자의 일정한 지휘봉 박자"
  },

  // 4. 반도체의 종류와 응용
  {
    id: 31,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "CPU",
    engTerm: "Central Processing Unit",
    summary: "컴퓨터 명령 해석 및 전반적 연산을 총괄하는 두뇌",
    desc: "컴퓨터의 명령을 해석하고 계산을 수행하는 중심 처리 장치이다. 프로그램 실행, 데이터 처리, 장치 제어 등 전체 시스템의 핵심 작업을 담당한다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "다양한 분야를 정밀하게 판단하고 지시하는 명석한 총괄 지휘관"
  },
  {
    id: 32,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "GPU",
    engTerm: "Graphics Processing Unit",
    summary: "대규모 연산을 동시 병렬 처리하는 AI·그래픽 특화 칩",
    desc: "많은 계산을 동시에 처리하는 데 특화된 반도체이다. 그래픽 처리뿐 아니라 인공지능 학습과 과학 계산에도 널리 사용된다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "수천 명의 인원이 동시에 일제히 똑같은 작업을 해치우는 매시브 작업반"
  },
  {
    id: 33,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "메모리 반도체",
    engTerm: "Memory Semiconductor",
    summary: "정보를 저장하고 기억하는 역할을 담당하는 반도체",
    desc: "데이터와 프로그램을 저장하는 역할을 하는 반도체이다. 대표적으로 DRAM과 NAND 플래시가 있다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "필요한 정보를 적어두고 꺼내보는 고속 서류함과 책상"
  },
  {
    id: 34,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "시스템 반도체",
    engTerm: "System / Logic Semiconductor",
    summary: "연산, 연쇄 제어, 센싱 등 정보를 가공·처리하는 반도체",
    desc: "계산, 통신, 제어, 센싱처럼 정보를 처리하는 기능을 담당하는 반도체이다. CPU, GPU, 통신 칩, 센서 칩 등이 여기에 포함된다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "생각하고 논리적으로 판단하는 전문 연산 프로세서"
  },
  {
    id: 35,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "DRAM",
    engTerm: "Dynamic RAM",
    summary: "전원이 켜진 동안 초고속 작업을 돕는 임시 작업용 메모리",
    desc: "전원이 켜져 있는 동안 데이터를 임시로 저장하는 메모리이다. 속도가 빠르기 때문에 컴퓨터와 스마트폰의 작업 공간으로 사용된다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "작업할 서류를 넓게 펼쳐두고 바로바로 처리하는 깨끗한 책상 상판"
  },
  {
    id: 36,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "NAND 플래시",
    engTerm: "NAND Flash",
    summary: "전원이 꺼져도 데이터를 영구 보관하는 비휘발성 메모리",
    desc: "전원이 꺼져도 데이터를 보관할 수 있는 메모리이다. 스마트폰 저장 공간, USB 메모리, SSD 등에 사용된다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "전기가 꺼져도 내용이 지워지지 않는 튼튼한 캐비닛 창고"
  },
  {
    id: 37,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "아날로그 반도체",
    engTerm: "Analog IC",
    summary: "빛, 소리 등 자연계의 연속적 신호를 처리하는 반도체",
    desc: "빛, 소리, 온도처럼 연속적으로 변하는 실제 신호를 다루는 반도체이다. 신호를 증폭하거나 디지털 정보로 바꾸는 역할을 한다.",
    audienceTags: ["투자 필수", "교수/학술"],
    analogy: "사람의 음성이나 온도 변화를 디지털 신호로 옮겨주는 번역기"
  },
  {
    id: 38,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "센서",
    engTerm: "Sensor",
    summary: "물리적 자극(빛, 움직임, 압력)을 전기 신호로 변환하는 소자",
    desc: "빛, 온도, 압력, 움직임 같은 주변의 변화를 감지해 전기 신호로 바꾸는 장치이다. 스마트폰 카메라와 자동차 안전 장치 등에 사용된다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "외부의 감각을 뇌로 전달하는 사람의 시각/촉각 신경망"
  },
  {
    id: 39,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "전력 반도체",
    engTerm: "Power Semiconductor (PMIC)",
    summary: "고전압·대전류를 효율적으로 변환하고 제어하는 반도체",
    desc: "큰 전압과 전류를 효율적으로 바꾸거나 제어하는 반도체이다. 전기자동차, 충전기, 태양광 발전 장치, 가전제품 등에 쓰인다.",
    audienceTags: ["투자 필수"],
    analogy: "전기차와 가전기기의 에너지 낭비를 막아주는 고효율 변전소"
  },
  {
    id: 40,
    category: 4,
    categoryName: "4. 반도체의 종류와 응용",
    term: "LED",
    engTerm: "Light Emitting Diode",
    summary: "전류가 흐르면 빛을 발산하는 발광 반도체 소자",
    desc: "전류가 흐를 때 빛을 내는 반도체 소자이다. 조명, 전광판, 신호등, 디스플레이의 광원 등에 널리 사용된다.",
    audienceTags: ["입문 필수"],
    analogy: "전기 에너지를 열 낭비 없이 직접 빛으로 발산하는 에코 조명"
  },

  // 5. 제조 공정과 산업 구조
  {
    id: 41,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "팹 (Fab)",
    engTerm: "Fabrication Facility",
    summary: "극도의 청결도가 유지되는 반도체 제조 전용 공장",
    desc: "반도체 웨이퍼를 실제로 가공해 칩을 만드는 생산 공장이다. 먼지와 온도를 엄격하게 관리하는 클린룸과 정밀 장비를 갖춘다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "먼지 하나도 허용하지 않는 수조 원 규모의 첨단 청정 첨단 공장"
  },
  {
    id: 42,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "팹리스",
    engTerm: "Fabless",
    summary: "생산 공장 없이 칩 설계에만 집중하는 반도체 기업",
    desc: "반도체 설계에 집중하고 생산 공장은 직접 운영하지 않는 기업 형태이다. 완성된 설계는 주로 파운드리 회사에 맡겨 생산한다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "건물 시공 대신 멋진 설계도만 그리는 건축 설계 사무소 (예: 엔비디아, 퀄컴)"
  },
  {
    id: 43,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "파운드리",
    engTerm: "Foundry",
    summary: "팹리스 기업의 설계도를 위탁받아 위탁 생산하는 전문 기업",
    desc: "다른 회사가 설계한 반도체를 대신 생산해 주는 전문 기업 또는 사업을 뜻한다. 다양한 고객의 칩을 같은 생산 시설에서 만든다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "고객이 가져온 도면대로 첨단 건물이나 칩을 완벽히 지어주는 위탁 건설사 (예: TSMC)"
  },
  {
    id: 44,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "IDM",
    engTerm: "Integrated Device Manufacturer",
    summary: "설계부터 제조, 조립, 판매까지 전 과정을 직접 수행하는 종합 반도체 기업",
    desc: "반도체 설계부터 제조, 조립, 판매까지 대부분의 과정을 직접 수행하는 기업 형태이다. 제품 개발과 생산 기술을 함께 관리한다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "기획, 디자인, 공장 생산, 판매까지 모두 해내는 원스톱 종합 브랜드 (예: 삼성전자, SK하이닉스)"
  },
  {
    id: 45,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "포토리소그래피",
    engTerm: "Photolithography",
    summary: "빛을 이용하여 웨이퍼에 초미세 회로 패턴을 그리는 노광 공정",
    desc: "빛을 이용해 웨이퍼 위에 매우 작은 회로 무늬를 그려내는 공정이다. 사진을 인화하는 과정과 비슷하며, 미세한 회로를 만드는 핵심 기술이다.",
    audienceTags: ["투자 필수", "교수/학술"],
    analogy: "빔프로젝터로 빛을 쏘아 필름의 미세한 그림을 인화지에 그리는 사진 인화술"
  },
  {
    id: 46,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "포토레지스트 (PR)",
    engTerm: "Photoresist",
    summary: "빛을 쬐면 성질이 변하는 감광성 화학 물질",
    desc: "빛을 받으면 성질이 변하는 감광성 재료이다. 웨이퍼 위에 바른 뒤 빛을 쬐어 필요한 회로 모양을 남긴다.",
    audienceTags: ["교수/학술"],
    analogy: "빛을 받은 부분만 화학적으로 녹거나 굳는 스페셜 필름 페인트"
  },
  {
    id: 47,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "식각",
    engTerm: "Etching",
    summary: "회로 패턴 이외의 불필요한 부분을 깎아내는 찰깎 공정",
    desc: "웨이퍼 표면에서 필요 없는 부분을 선택적으로 깎아 내는 공정이다. 포토리소그래피로 만든 무늬를 실제 구조로 옮길 때 사용한다.",
    audienceTags: ["투자 필수", "교수/학술"],
    analogy: "조각가가 스케치선을 따라 찰흙의 불필요한 면을 조심스럽게 파내는 밑작업"
  },
  {
    id: 48,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "증착",
    engTerm: "Deposition",
    summary: "웨이퍼 위에 미세한 단열막 및 금속 분자막을 얇게 씌우는 공정",
    desc: "웨이퍼 위에 절연막이나 금속막 같은 아주 얇은 물질층을 쌓는 공정이다. 여러 층을 정밀하게 쌓아 트랜지스터와 배선을 만든다.",
    audienceTags: ["교수/학술"],
    analogy: "아파트 건물을 올리기 위해 한 층 한 층 고른 시멘트 레이어를 깔아주는 작업"
  },
  {
    id: 49,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "패키징",
    engTerm: "Packaging / OSAT",
    summary: "완성 칩을 보호 포장하고 전기 기판과 연결해 유닛화하는 공정",
    desc: "완성된 반도체 칩을 외부 충격과 열로부터 보호하고 기판과 연결하는 과정이다. 칩이 전자제품에서 안정적으로 작동하도록 돕는다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "갓 생산된 미세 칩을 방수·방열 옷으로 입히고 전선을 달아 스마트폰에 꽂을 수 있게 만드는 최종 포장"
  },
  {
    id: 50,
    category: 5,
    categoryName: "5. 제조 공정과 산업 구조",
    term: "수율",
    engTerm: "Yield (%)",
    summary: "웨이퍼 하나에서 얻어내는 정상 작동 양품 칩의 비중",
    desc: "생산한 칩 가운데 정상적으로 작동하는 제품의 비율이다. 수율이 높을수록 같은 웨이퍼에서 더 많은 양품을 얻어 생산 비용을 줄일 수 있다.",
    audienceTags: ["입문 필수", "투자 필수"],
    analogy: "붕어빵 100개를 구웠을 때 타지 않고 예쁘게 성형된 진짜 붕어빵의 성공 비율"
  }
];

const DEFAULT_NEWS_TRENDS = [
  {
    id: 1,
    title: "AI 반도체 붐과 HBM3E 수율 경쟁: 3D 패키징이 핵심 변수로",
    category: "AI & 차세대 메모리",
    date: "2026.08.01",
    mediaOutlet: "신소재 반도체 리포트",
    articleLink: "https://example.com/news/1",
    snippet: "인공지능 모델 학습에 필수적인 고대역폭 메모리(HBM) 시장에서 TSV 증착 기술과 Advanced Packaging 수율 개선이 글로벌 파운드리 및 IDM의 최대 화두로 떠오르고 있습니다.",
    tags: ["GPU", "HBM", "패키징", "수율", "IDM"]
  },
  {
    id: 2,
    title: "2나노 이하 미세공정 시대를 열다: GAA 트랜지스터와 High-NA EUV",
    category: "파운드리 & 미세공정",
    date: "2026.07.28",
    mediaOutlet: "신소재공학 기술 브리핑",
    articleLink: "https://example.com/news/2",
    snippet: "기존 FinFET 구조의 게이트 누설전류 한계를 극복하기 위해 Multi-Bridge-Channel GAA(Gate-All-Around) 트랜지스터와 포토리소그래피 신소재 노광기술 도입이 가속화되고 있습니다.",
    tags: ["MOSFET", "게이트", "포토리소그래피", "파운드리", "팹리스"]
  },
  {
    id: 3,
    title: "전기차와 우주항공을 위한 차세대 전력 반도체: SiC & GaN 와이드 밴드갭 재료",
    category: "신소재 & 전력 반도체",
    date: "2026.07.20",
    mediaOutlet: "글로벌 재료공학 저널",
    articleLink: "https://example.com/news/3",
    snippet: "기존 실리콘(Si) 기판 대비 고전압, 고온 환경에서 뛰어난 효율을 보이는 실리콘카바이드(SiC) 및 질화갈륨(GaN) 소재 도핑 기술 혁신이 전력 반도체 업계를 재편하고 있습니다.",
    tags: ["실리콘", "전력 반도체", "도핑", "센서"]
  }
];

const QUIZ_DATA = [
  {
    question: "전기가 흐르는 성질을 필요에 따라 자유롭게 조절할 수 있는 물질은 무엇일까요?",
    options: ["도체", "부도체", "반도체", "절연체"],
    answer: 2,
    explanation: "정답은 '반도체'입니다! 도체와 부도체의 중간 성질을 지니며 조건에 따라 전류를 제어합니다."
  },
  {
    question: "MOSFET 트랜지스터에서 전류의 흐름을 열고 닫는 스위치 조절 단자는?",
    options: ["소스 (Source)", "드레인 (Drain)", "게이트 (Gate)", "웨이퍼 (Wafer)"],
    answer: 2,
    explanation: "정답은 '게이트 (Gate)'입니다! 수도꼭지의 손잡이처럼 전압을 가해 소스-드레인 간 전류를 조절합니다."
  },
  {
    question: "빛을 이용하여 웨이퍼 위에 초미세 회로 무늬를 인화하듯 그리는 반도체 제조 공정은?",
    options: ["식각 (Etching)", "포토리소그래피 (Photolithography)", "증착 (Deposition)", "도핑 (Doping)"],
    answer: 1,
    explanation: "정답은 '포토리소그래피'입니다! 빛과 감광성 매질(PR)을 이용해 미세 회로 패턴을 형성합니다."
  },
  {
    question: "반도체 설계만 전담하고 생산 공장(팹)은 직접 소유하지 않는 기업 형태는?",
    options: ["IDM", "파운드리", "팹리스 (Fabless)", "OSAT"],
    answer: 2,
    explanation: "정답은 '팹리스'입니다! 엔비디아, 퀄컴처럼 칩 설계에 특화되고 생산은 파운드리에 위탁합니다."
  },
  {
    question: "전원이 꺼져도 저장된 데이터가 사라지지 않고 영구 보관되는 메모리는?",
    options: ["DRAM", "NAND 플래시", "SRAM", "캐시 메모리"],
    answer: 1,
    explanation: "정답은 'NAND 플래시'입니다! 전원이 꺼져도 보관되는 비휘발성 메모리로 SSD, 스마트폰 등에 쓰입니다."
  }
];

// DataManager for LocalStorage Sync
const DataManager = {
  STORAGE_KEYS: {
    CREATOR: "semilab_creator_profile",
    GLOSSARY: "semilab_glossary_list",
    NEWS: "semilab_news_list",
    ADMIN_ID: "semilab_admin_id",
    ADMIN_PW: "semilab_admin_pw"
  },

  getAdminUsername() {
    return localStorage.getItem(this.STORAGE_KEYS.ADMIN_ID) || "kjy";
  },

  getAdminPassword() {
    return localStorage.getItem(this.STORAGE_KEYS.ADMIN_PW) || "1234";
  },

  saveAdminPassword(newPw) {
    localStorage.setItem(this.STORAGE_KEYS.ADMIN_PW, newPw);
  },

  getCreator() {
    const saved = localStorage.getItem(this.STORAGE_KEYS.CREATOR);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return DEFAULT_CREATOR_PROFILE;
  },

  saveCreator(profileObj) {
    localStorage.setItem(this.STORAGE_KEYS.CREATOR, JSON.stringify(profileObj));
  },

  getGlossary() {
    const saved = localStorage.getItem(this.STORAGE_KEYS.GLOSSARY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return DEFAULT_GLOSSARY_DATA;
  },

  saveGlossary(glossaryArray) {
    localStorage.setItem(this.STORAGE_KEYS.GLOSSARY, JSON.stringify(glossaryArray));
  },

  getNews() {
    const saved = localStorage.getItem(this.STORAGE_KEYS.NEWS);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return DEFAULT_NEWS_TRENDS;
  },

  saveNews(newsArray) {
    localStorage.setItem(this.STORAGE_KEYS.NEWS, JSON.stringify(newsArray));
  },

  resetAllToDefault() {
    localStorage.removeItem(this.STORAGE_KEYS.CREATOR);
    localStorage.removeItem(this.STORAGE_KEYS.GLOSSARY);
    localStorage.removeItem(this.STORAGE_KEYS.NEWS);
    localStorage.removeItem(this.STORAGE_KEYS.ADMIN_PW);
  }
};
