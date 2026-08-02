// semiconductor-hub app.js

document.addEventListener("DOMContentLoaded", () => {
  // State variables
  let currentCategory = 0; // 0: All, 1~5: Categories
  let currentAudience = "ALL"; // ALL, "입문 필수", "투자 필수", "교수/학술"
  let searchQuery = "";
  let currentQuizIndex = 0;
  let quizScore = 0;

  // DOM Elements
  const glossaryGrid = document.getElementById("glossaryGrid");
  const searchInput = document.getElementById("searchInput");
  const catFilterContainer = document.getElementById("catFilterContainer");
  const audienceFilterBtns = document.querySelectorAll(".audience-chip-btn");
  const totalCountEl = document.getElementById("totalCount");
  
  // Modal DOM
  const modalOverlay = document.getElementById("modalOverlay");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalEng = document.getElementById("modalEng");
  const modalDesc = document.getElementById("modalDesc");
  const modalAnalogy = document.getElementById("modalAnalogy");
  const modalTags = document.getElementById("modalTags");

  // News DOM
  const newsGrid = document.getElementById("newsGrid");

  // Quiz DOM
  const quizQuestion = document.getElementById("quizQuestion");
  const quizOptions = document.getElementById("quizOptions");
  const quizFeedback = document.getElementById("quizFeedback");
  const quizScoreEl = document.getElementById("quizScore");

  // Contact Form DOM
  const contactForm = document.getElementById("contactForm");

  // 1. Initialize Glossary Cards
  function renderGlossary() {
    glossaryGrid.innerHTML = "";

    const filtered = GLOSSARY_DATA.filter((item) => {
      // Category Filter
      if (currentCategory !== 0 && item.category !== currentCategory) {
        return false;
      }
      // Audience Filter
      if (currentAudience !== "ALL" && !item.audienceTags.includes(currentAudience)) {
        return false;
      }
      // Search Filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchTerm = item.term.toLowerCase().includes(query);
        const matchEng = item.engTerm.toLowerCase().includes(query);
        const matchSum = item.summary.toLowerCase().includes(query);
        const matchDesc = item.desc.toLowerCase().includes(query);
        if (!matchTerm && !matchEng && !matchSum && !matchDesc) {
          return false;
        }
      }
      return true;
    });

    totalCountEl.textContent = filtered.length;

    if (filtered.length === 0) {
      glossaryGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
          <p style="font-size: 1.1rem;">검색 결과가 없습니다. 다른 검색어나 필터를 선택해 보세요.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className = "term-card";
      card.addEventListener("click", () => openTermModal(item));

      // Build Tags HTML
      const tagsHtml = item.audienceTags.map(tag => {
        let tagClass = "beginner";
        if (tag === "투자 필수") tagClass = "investor";
        if (tag === "교수/학술") tagClass = "academic";
        return `<span class="tag-badge ${tagClass}">${tag}</span>`;
      }).join("");

      card.innerHTML = `
        <div>
          <div class="term-header">
            <span class="term-number">NO. ${String(item.id).padStart(2, '0')}</span>
            <div class="term-tags">${tagsHtml}</div>
          </div>
          <h3 class="term-title">${item.term}</h3>
          <div class="term-eng">${item.engTerm}</div>
          <p class="term-summary">${item.summary}</p>
        </div>
        <div class="term-card-footer">
          <span>상세 원리 및 비유 보기</span>
          <span>→</span>
        </div>
      `;

      glossaryGrid.appendChild(card);
    });
  }

  // 2. Term Modal Handler
  function openTermModal(item) {
    modalCategory.textContent = item.categoryName;
    modalTitle.textContent = item.term;
    modalEng.textContent = item.engTerm;
    modalDesc.textContent = item.desc;
    modalAnalogy.textContent = item.analogy || "실생활 개념에 비유된 직관적 설명이 포함되어 있습니다.";

    // Modal Tags
    modalTags.innerHTML = item.audienceTags.map(tag => {
      let tagClass = "beginner";
      if (tag === "투자 필수") tagClass = "investor";
      if (tag === "교수/학술") tagClass = "academic";
      return `<span class="tag-badge ${tagClass}" style="font-size:0.8rem; padding: 0.25rem 0.6rem;">${tag}</span>`;
    }).join(" ");

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  modalCloseBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // 3. Setup Category & Audience Filter Listeners
  const catButtons = [
    { catId: 0, text: "전체 (50)" },
    { catId: 1, text: "1. 전기/재료" },
    { catId: 2, text: "2. 구조/소자" },
    { catId: 3, text: "3. 트랜지스터/회로" },
    { catId: 4, text: "4. 종류/응용" },
    { catId: 5, text: "5. 공정/산업" }
  ];

  catButtons.forEach(btnInfo => {
    const btn = document.createElement("button");
    btn.className = `cat-filter-btn ${btnInfo.catId === 0 ? 'active' : ''}`;
    btn.textContent = btnInfo.text;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cat-filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btnInfo.catId;
      renderGlossary();
    });
    catFilterContainer.appendChild(btn);
  });

  audienceFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      audienceFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentAudience = btn.dataset.audience;
      renderGlossary();
    });
  });

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderGlossary();
  });

  // 4. Render News Trends
  function renderNews() {
    newsGrid.innerHTML = "";
    NEWS_TRENDS.forEach(news => {
      const card = document.createElement("div");
      card.className = "glass-card news-card";

      const tagsHtml = news.tags.map(t => `<span class="news-tag">#${t}</span>`).join(" ");

      card.innerHTML = `
        <div>
          <div class="news-meta">
            <span class="news-cat">${news.category}</span>
            <span>${news.date} | ${news.source}</span>
          </div>
          <h3 class="news-title">${news.title}</h3>
          <p class="news-snippet">${news.snippet}</p>
          <div class="news-tags">${tagsHtml}</div>
        </div>
        <div style="margin-top: 1rem;">
          <a href="${news.link}" onclick="alert('신소재공학도 추천 동향 리포트입니다. 선택한 키워드가 용어집 50선에 자동 반영되어 있습니다.'); return false;" style="color: var(--primary-cyan); font-weight: 600; text-decoration: none; font-size: 0.9rem;">
            전체 분석 리포트 읽기 →
          </a>
        </div>
      `;

      newsGrid.appendChild(card);
    });
  }

  // 5. Quiz Logic
  function loadQuiz() {
    if (currentQuizIndex >= QUIZ_DATA.length) {
      quizQuestion.textContent = `🎉 퀴즈 완료! 최종 점수: ${quizScore} / ${QUIZ_DATA.length}`;
      quizOptions.innerHTML = `
        <button class="btn-submit" onclick="location.reload()" style="grid-column: 1/-1;">다시 도전하기</button>
      `;
      quizFeedback.style.display = "none";
      return;
    }

    const q = QUIZ_DATA[currentQuizIndex];
    quizQuestion.textContent = `Q${currentQuizIndex + 1}. ${q.question}`;
    quizOptions.innerHTML = "";
    quizFeedback.style.display = "none";

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-opt-btn";
      btn.textContent = `${idx + 1}. ${opt}`;
      btn.addEventListener("click", () => handleQuizAnswer(idx, q));
      quizOptions.appendChild(btn);
    });

    quizScoreEl.textContent = `점수: ${quizScore} / ${QUIZ_DATA.length}`;
  }

  function handleQuizAnswer(selectedIndex, questionObj) {
    const isCorrect = selectedIndex === questionObj.answer;
    quizFeedback.style.display = "block";

    if (isCorrect) {
      quizScore++;
      quizFeedback.style.background = "rgba(0, 245, 212, 0.15)";
      quizFeedback.style.color = "var(--primary-cyan)";
      quizFeedback.style.border = "1px solid var(--primary-cyan)";
      quizFeedback.innerHTML = `⭕ <strong>정답입니다!</strong><br>${questionObj.explanation}`;
    } else {
      quizFeedback.style.background = "rgba(239, 68, 68, 0.15)";
      quizFeedback.style.color = "#f87171";
      quizFeedback.style.border = "1px solid #ef4444";
      quizFeedback.innerHTML = `❌ <strong>아쉽네요!</strong><br>${questionObj.explanation}`;
    }

    // Disable option buttons
    document.querySelectorAll(".quiz-opt-btn").forEach(b => b.style.pointerEvents = "none");

    // Show Next Button
    setTimeout(() => {
      const nextBtn = document.createElement("button");
      nextBtn.className = "btn-nav-action";
      nextBtn.style.marginTop = "1rem";
      nextBtn.textContent = currentQuizIndex < QUIZ_DATA.length - 1 ? "다음 문제 →" : "결과 확인하기";
      nextBtn.addEventListener("click", () => {
        currentQuizIndex++;
        loadQuiz();
      });
      quizFeedback.appendChild(document.createElement("br"));
      quizFeedback.appendChild(nextBtn);
    }, 400);
  }

  // 6. Interactive Principle Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.dataset.tab;
      document.getElementById(targetId).classList.add("active");
    });
  });

  // 7. Contact Form Handling
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("senderName").value;
    const email = document.getElementById("senderEmail").value;
    const role = document.getElementById("senderRole").value;
    const msg = document.getElementById("senderMessage").value;

    if (!name || !email || !msg) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    // Interactive Submission Success Dialog
    alert(`📧 [SemiLab 메일 발송 성공]\n\n보내신 분: ${name} (${role})\n답장 받으실 이메일: ${email}\n\n신소재공학도 제작자에게 메시지가 성공적으로 전송되었습니다! 정성껏 검토 후 답장드리겠습니다.`);
    contactForm.reset();
  });

  // Initial Load Call
  renderGlossary();
  renderNews();
  loadQuiz();
});
