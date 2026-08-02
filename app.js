// semiconductor-hub app.js

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  let currentCategory = 0; // 0: All, 1~5: Categories
  let currentAudience = "ALL"; // ALL, "입문 필수", "투자 필수", "교수/학술"
  let searchQuery = "";
  let currentQuizIndex = 0;
  let quizScore = 0;
  let isAdminLoggedIn = false;

  // Main Page DOM Elements
  const glossaryGrid = document.getElementById("glossaryGrid");
  const searchInput = document.getElementById("searchInput");
  const catFilterContainer = document.getElementById("catFilterContainer");
  const audienceFilterBtns = document.querySelectorAll(".audience-chip-btn");
  const totalCountEl = document.getElementById("totalCount");
  const newsGrid = document.getElementById("newsGrid");

  // Term Modal DOM
  const modalOverlay = document.getElementById("modalOverlay");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalEng = document.getElementById("modalEng");
  const modalDesc = document.getElementById("modalDesc");
  const modalAnalogy = document.getElementById("modalAnalogy");
  const modalTags = document.getElementById("modalTags");

  // Quiz DOM
  const quizQuestion = document.getElementById("quizQuestion");
  const quizOptions = document.getElementById("quizOptions");
  const quizFeedback = document.getElementById("quizFeedback");
  const quizScoreEl = document.getElementById("quizScore");

  // Contact Form DOM
  const contactForm = document.getElementById("contactForm");

  // Admin Elements
  const openAdminLoginBtn = document.getElementById("openAdminLoginBtn");
  const adminLoginModal = document.getElementById("adminLoginModal");
  const closeAdminLoginBtn = document.getElementById("closeAdminLoginBtn");
  const adminLoginForm = document.getElementById("adminLoginForm");
  const adminLoginError = document.getElementById("adminLoginError");

  const adminDashboardModal = document.getElementById("adminDashboardModal");
  const closeAdminDashboardBtn = document.getElementById("closeAdminDashboardBtn");
  const adminLogoutBtn = document.getElementById("adminLogoutBtn");
  const resetDataBtn = document.getElementById("resetDataBtn");

  const adminTabBtns = [
    document.getElementById("adminTabBtn1"),
    document.getElementById("adminTabBtn2"),
    document.getElementById("adminTabBtn3")
  ];
  const adminTabContents = [
    document.getElementById("adminProfileTab"),
    document.getElementById("adminGlossaryTab"),
    document.getElementById("adminTrendsTab")
  ];

  // 1. Render Creator Profile Section from DataManager
  async function renderCreatorProfile() {
    const profile = await DataManager.getCreator();
    const creatorContainer = document.querySelector("#creator .creator-container");
    if (!creatorContainer) return;

    creatorContainer.innerHTML = `
      <div class="creator-card">
        <div class="creator-avatar">👩‍🔬</div>
        <h3 class="creator-name">${profile.name} <span style="font-size: 1rem; color: var(--text-muted); font-weight: 500;">(${profile.engName})</span></h3>
        <div class="creator-dept">${profile.dept}</div>
        <div class="creator-badges" style="margin-top: 0.75rem;">
          <span class="creator-badge-item">반도체 재료 연구</span>
          <span class="creator-badge-item">포토리소그래피 공정</span>
          <span class="creator-badge-item">지식 공유자</span>
        </div>

        <div style="margin-top: 1.5rem; text-align: left; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
          <div style="font-size: 0.85rem; color: var(--text-dim); margin-bottom: 0.5rem; font-weight: 600;">📱 Contact Details</div>
          <div style="font-size: 0.9rem; color: var(--text-main); margin-bottom: 0.4rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📞 전화번호:</span> <strong>${profile.phone}</strong>
          </div>
          <div style="font-size: 0.9rem; color: var(--text-main); display: flex; align-items: center; gap: 0.5rem;">
            <span>📧 이메일:</span> <strong>${profile.email}</strong>
          </div>
        </div>
      </div>

      <div class="creator-bio">
        <h3 style="font-size:1.6rem; margin-bottom:1rem; color:var(--primary-cyan);">
          ${profile.bioHeadline}
        </h3>
        <p>${profile.bioParagraph1}</p>
        <p>${profile.bioParagraph2}</p>

        <div class="research-list">
          <div class="research-item">
            <h5>${profile.research1Title}</h5>
            <p>${profile.research1Desc}</p>
          </div>
          <div class="research-item">
            <h5>${profile.research2Title}</h5>
            <p>${profile.research2Desc}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Render Glossary Section from DataManager
  async function renderGlossary() {
    glossaryGrid.innerHTML = "";
    const glossaryList = await DataManager.getGlossary();

    const filtered = glossaryList.filter((item) => {
      if (currentCategory !== 0 && item.category !== currentCategory) return false;
      if (currentAudience !== "ALL" && !item.audienceTags.includes(currentAudience)) return false;
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchTerm = item.term.toLowerCase().includes(query);
        const matchEng = item.engTerm.toLowerCase().includes(query);
        const matchSum = item.summary.toLowerCase().includes(query);
        const matchDesc = item.desc.toLowerCase().includes(query);
        if (!matchTerm && !matchEng && !matchSum && !matchDesc) return false;
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

  // 3. Term Modal Handler
  function openTermModal(item) {
    modalCategory.textContent = item.categoryName || `카테고리 ${item.category}`;
    modalTitle.textContent = item.term;
    modalEng.textContent = item.engTerm;
    modalDesc.textContent = item.desc;
    modalAnalogy.textContent = item.analogy || "실생활 개념에 비유된 직관적 설명이 포함되어 있습니다.";

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

  // 4. Setup Category & Audience Filter Listeners
  const catButtons = [
    { catId: 0, text: "전체" },
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

  // 5. Render News Trends Section from DataManager
  async function renderNews() {
    newsGrid.innerHTML = "";
    const newsList = await DataManager.getNews();

    newsList.forEach(news => {
      const card = document.createElement("div");
      card.className = "glass-card news-card";

      const tagsHtml = (news.tags || []).map(t => `<span class="news-tag">#${t}</span>`).join(" ");

      card.innerHTML = `
        <div>
          <div class="news-meta">
            <span class="news-cat">${news.category || "산업 동향"}</span>
            <span>${news.date} | <strong>${news.mediaOutlet || "언론사"}</strong></span>
          </div>
          <h3 class="news-title">${news.title}</h3>
          <p class="news-snippet">${news.snippet}</p>
          <div class="news-tags">${tagsHtml}</div>
        </div>
        <div style="margin-top: 1rem;">
          <a href="${news.articleLink || '#'}" target="_blank" rel="noopener noreferrer" style="color: var(--primary-cyan); font-weight: 600; text-decoration: none; font-size: 0.9rem;">
            원문 기사 읽기 & 분석 리포트 →
          </a>
        </div>
      `;

      newsGrid.appendChild(card);
    });
  }

  // 6. Quiz Logic
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

    document.querySelectorAll(".quiz-opt-btn").forEach(b => b.style.pointerEvents = "none");

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

  // 7. Interactive Principle Tabs
  const tabButtons = document.querySelectorAll(".tab-btn[data-tab]");
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

  // 8. Contact Form Handling
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

    alert(`📧 [SemiLab 메일 발송 성공]\n\n보내신 분: ${name} (${role})\n답장 받으실 이메일: ${email}\n\n권지연 제작자에게 메시지가 성공적으로 전송되었습니다! 정성껏 검토 후 답장드리겠습니다.`);
    contactForm.reset();
  });

  // ==========================================================================
  // 9. ADMIN PANEL & LOCAL STORAGE LOGIC
  // ==========================================================================

  // Open / Close Admin Login Modal
  openAdminLoginBtn.addEventListener("click", () => {
    if (isAdminLoggedIn) {
      openAdminDashboard();
    } else {
      adminLoginModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });

  closeAdminLoginBtn.addEventListener("click", () => {
    adminLoginModal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Admin Login Verification
  adminLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("adminUsername").value.trim();
    const pw = document.getElementById("adminPassword").value.trim();

    if (id === DataManager.getAdminUsername() && pw === DataManager.getAdminPassword()) {
      isAdminLoggedIn = true;
      adminLoginError.style.display = "none";
      adminLoginModal.classList.remove("active");
      openAdminLoginBtn.textContent = "⚙️ 관리자 패널";
      openAdminDashboard();
    } else {
      adminLoginError.style.display = "block";
    }
  });

  // Open Admin Dashboard
  async function openAdminDashboard() {
    await populateAdminProfileForm();
    await renderAdminGlossaryTable();
    await renderAdminNewsTable();
    adminDashboardModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeAdminDashboardBtn.addEventListener("click", () => {
    adminDashboardModal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  adminLogoutBtn.addEventListener("click", () => {
    isAdminLoggedIn = false;
    openAdminLoginBtn.textContent = "🔒 관리자";
    adminDashboardModal.classList.remove("active");
    document.body.style.overflow = "auto";
    alert("관리자 계정에서 로그아웃되었습니다.");
  });

  // Change Password Button
  const changePwBtn = document.getElementById("changePwBtn");
  if (changePwBtn) {
    changePwBtn.addEventListener("click", () => {
      const currentPw = prompt("보안을 위해 현재 비밀번호를 입력해주세요:");
      if (currentPw === null) return; // Cancelled
      if (currentPw !== DataManager.getAdminPassword()) {
        alert("⚠️ 현재 비밀번호가 일치하지 않습니다.");
        return;
      }

      const newPw = prompt("새로운 관리자 비밀번호를 입력해주세요:");
      if (!newPw || newPw.trim() === "") {
        alert("비밀번호는 공백일 수 없습니다.");
        return;
      }

      DataManager.saveAdminPassword(newPw.trim());
      alert(`🔑 관리자 비밀번호가 성공적으로 변경되었습니다!\n다음 로그인부터 새 비밀번호로 접속하세요.`);
    });
  }

  // Reset Data Button
  resetDataBtn.addEventListener("click", async () => {
    if (confirm("정말로 모든 추가/수정된 데이터를 초기화하고 기본 데이터로 되돌리시겠습니까? (비밀번호도 1234로 초기화됩니다)")) {
      await DataManager.resetAllToDefault();
      await renderCreatorProfile();
      await renderGlossary();
      await renderNews();
      await populateAdminProfileForm();
      await renderAdminGlossaryTable();
      await renderAdminNewsTable();
      alert("모든 데이터가 기본값으로 성공적으로 초기화되었습니다.");
    }
  });

  // Admin Tab Navigation
  adminTabBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      adminTabBtns.forEach(b => b.classList.remove("active"));
      adminTabContents.forEach(c => c.style.display = "none");

      btn.classList.add("active");
      const targetId = btn.dataset.admintab;
      document.getElementById(targetId).style.display = "block";
    });
  });

  // --- Admin Tab 1: Creator Profile Edit Form ---
  async function populateAdminProfileForm() {
    const profile = await DataManager.getCreator();
    document.getElementById("editCreatorName").value = profile.name;
    document.getElementById("editCreatorEngName").value = profile.engName;
    document.getElementById("editCreatorDept").value = profile.dept;
    document.getElementById("editCreatorPhone").value = profile.phone;
    document.getElementById("editCreatorEmail").value = profile.email;
    document.getElementById("editCreatorHeadline").value = profile.bioHeadline;
    document.getElementById("editCreatorBio1").value = profile.bioParagraph1;
    document.getElementById("editCreatorBio2").value = profile.bioParagraph2;
    document.getElementById("editCreatorResearch1Title").value = profile.research1Title;
    document.getElementById("editCreatorResearch1Desc").value = profile.research1Desc;
    document.getElementById("editCreatorResearch2Title").value = profile.research2Title;
    document.getElementById("editCreatorResearch2Desc").value = profile.research2Desc;
  }

  document.getElementById("adminProfileForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const updatedProfile = {
      name: document.getElementById("editCreatorName").value,
      engName: document.getElementById("editCreatorEngName").value,
      dept: document.getElementById("editCreatorDept").value,
      phone: document.getElementById("editCreatorPhone").value,
      email: document.getElementById("editCreatorEmail").value,
      bioHeadline: document.getElementById("editCreatorHeadline").value,
      bioParagraph1: document.getElementById("editCreatorBio1").value,
      bioParagraph2: document.getElementById("editCreatorBio2").value,
      research1Title: document.getElementById("editCreatorResearch1Title").value,
      research1Desc: document.getElementById("editCreatorResearch1Desc").value,
      research2Title: document.getElementById("editCreatorResearch2Title").value,
      research2Desc: document.getElementById("editCreatorResearch2Desc").value
    };

    await DataManager.saveCreator(updatedProfile);
    await renderCreatorProfile();
    alert("💾 제작자 프로필 정보가 성공적으로 수정되어 Supabase DB에 저장되었습니다!");
  });

  // --- Admin Tab 2: Glossary Management ---
  async function renderAdminGlossaryTable() {
    const glossaryList = await DataManager.getGlossary();
    document.getElementById("adminGlossaryCount").textContent = glossaryList.length;
    const tableBody = document.getElementById("adminGlossaryTableBody");
    tableBody.innerHTML = "";

    glossaryList.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid var(--border-glass)";
      tr.innerHTML = `
        <td style="padding: 0.75rem;">${item.id}</td>
        <td style="padding: 0.75rem; color: var(--primary-cyan);">${item.category}장</td>
        <td style="padding: 0.75rem; font-weight: 600;">${item.term}</td>
        <td style="padding: 0.75rem; color: var(--text-dim);">${item.engTerm}</td>
        <td style="padding: 0.75rem; text-align: center;">
          <button class="admin-action-btn delete" onclick="deleteGlossaryItem(${item.id})">삭제</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Add Term Form Submit
  document.getElementById("addTermForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const glossaryList = await DataManager.getGlossary();
    const newId = glossaryList.length > 0 ? Math.max(...glossaryList.map(t => t.id)) + 1 : 1;

    const catValue = parseInt(document.getElementById("addCategory").value, 10);
    const catNames = [
      "",
      "1. 전기와 재료의 기초",
      "2. 반도체의 구조와 기본 소자",
      "3. 트랜지스터와 디지털 회로",
      "4. 반도체의 종류와 응용",
      "5. 제조 공정과 산업 구조"
    ];

    const audienceTags = [];
    if (document.getElementById("tagBeginner").checked) audienceTags.push("입문 필수");
    if (document.getElementById("tagInvestor").checked) audienceTags.push("투자 필수");
    if (document.getElementById("tagAcademic").checked) audienceTags.push("교수/학술");

    const newTermObj = {
      id: newId,
      category: catValue,
      categoryName: catNames[catValue],
      term: document.getElementById("addTerm").value.trim(),
      engTerm: document.getElementById("addEngTerm").value.trim(),
      summary: document.getElementById("addSummary").value.trim(),
      desc: document.getElementById("addDesc").value.trim(),
      audienceTags: audienceTags.length > 0 ? audienceTags : ["입문 필수"],
      analogy: document.getElementById("addAnalogy").value.trim()
    };

    glossaryList.push(newTermObj);
    await DataManager.saveGlossary(glossaryList);

    await renderGlossary();
    await renderAdminGlossaryTable();

    document.getElementById("addTermForm").reset();
    alert(`➕ 신규 용어 '${newTermObj.term}'(NO.${newId})가 성공적으로 등록 및 DB 저장되었습니다!`);
  });

  // Global Delete Glossary Function
  window.deleteGlossaryItem = async function(id) {
    if (confirm(`정말로 ID ${id}번 용어를 삭제하시겠습니까?`)) {
      await DataManager.deleteGlossaryItem(id);
      await renderGlossary();
      await renderAdminGlossaryTable();
    }
  };

  // --- Admin Tab 3: Trends Management ---
  async function renderAdminNewsTable() {
    const newsList = await DataManager.getNews();
    document.getElementById("adminNewsCount").textContent = newsList.length;
    const tableBody = document.getElementById("adminNewsTableBody");
    tableBody.innerHTML = "";

    newsList.forEach((news) => {
      const tr = document.createElement("tr");
      tr.style.borderBottom = "1px solid var(--border-glass)";
      tr.innerHTML = `
        <td style="padding: 0.75rem; color: var(--text-dim);">${news.date}</td>
        <td style="padding: 0.75rem; color: var(--accent-gold);">${news.mediaOutlet || "언론사"}</td>
        <td style="padding: 0.75rem; font-weight: 600;">${news.title}</td>
        <td style="padding: 0.75rem;"><a href="${news.articleLink || '#'}" target="_blank" style="color: var(--secondary-blue);">링크</a></td>
        <td style="padding: 0.75rem; text-align: center; white-space: nowrap;">
          <button class="admin-action-btn edit" onclick="editNewsItem(${news.id})">수정</button>
          <button class="admin-action-btn delete" onclick="deleteNewsItem(${news.id})">삭제</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Edit / Add News Submit
  document.getElementById("adminNewsForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    let newsList = await DataManager.getNews();
    const editIdStr = document.getElementById("editNewsId").value;

    const tagsArr = document.getElementById("newsTags").value.split(",").map(t => t.trim()).filter(t => t.length > 0);

    if (editIdStr !== "") {
      // Edit Existing
      const editId = parseInt(editIdStr, 10);
      newsList = newsList.map(item => {
        if (item.id === editId) {
          return {
            ...item,
            title: document.getElementById("newsTitle").value,
            category: document.getElementById("newsCategory").value,
            date: document.getElementById("newsDate").value,
            mediaOutlet: document.getElementById("newsMediaOutlet").value,
            articleLink: document.getElementById("newsArticleLink").value,
            snippet: document.getElementById("newsSnippet").value,
            tags: tagsArr
          };
        }
        return item;
      });
      alert("📰 동향 기사 및 분석 내용이 Supabase DB에 수정 저장되었습니다!");
    } else {
      // Add New
      const newId = newsList.length > 0 ? Math.max(...newsList.map(n => n.id)) + 1 : 1;
      const newNewsObj = {
        id: newId,
        title: document.getElementById("newsTitle").value,
        category: document.getElementById("newsCategory").value,
        date: document.getElementById("newsDate").value,
        mediaOutlet: document.getElementById("newsMediaOutlet").value,
        articleLink: document.getElementById("newsArticleLink").value,
        snippet: document.getElementById("newsSnippet").value,
        tags: tagsArr
      };
      newsList.push(newNewsObj);
      alert(`📰 신규 동향 기사 '${newNewsObj.title}'가 등록 및 DB 저장되었습니다!`);
    }

    await DataManager.saveNews(newsList);
    resetNewsForm();
    await renderNews();
    await renderAdminNewsTable();
  });

  window.editNewsItem = async function(id) {
    const newsList = await DataManager.getNews();
    const target = newsList.find(n => n.id === id);
    if (!target) return;

    document.getElementById("editNewsId").value = target.id;
    document.getElementById("newsTitle").value = target.title;
    document.getElementById("newsCategory").value = target.category || "";
    document.getElementById("newsDate").value = target.date || "";
    document.getElementById("newsMediaOutlet").value = target.mediaOutlet || "";
    document.getElementById("newsArticleLink").value = target.articleLink || "";
    document.getElementById("newsSnippet").value = target.snippet;
    document.getElementById("newsTags").value = (target.tags || []).join(", ");

    document.getElementById("newsFormHeader").textContent = `✏️ 동향 기사 수정 (ID: ${target.id})`;
    document.getElementById("newsFormSubmitText").textContent = "💾 동향 기사 수정 저장";
    document.getElementById("cancelNewsEditBtn").style.display = "inline-block";
  };

  document.getElementById("cancelNewsEditBtn").addEventListener("click", resetNewsForm);

  function resetNewsForm() {
    document.getElementById("adminNewsForm").reset();
    document.getElementById("editNewsId").value = "";
    document.getElementById("newsFormHeader").textContent = "➕ 신규 동향 기사 작성 / 수정";
    document.getElementById("newsFormSubmitText").textContent = "➕ 동향 기사 추가 저장";
    document.getElementById("cancelNewsEditBtn").style.display = "none";
  }

  window.deleteNewsItem = async function(id) {
    if (confirm(`정말로 기사 ID ${id}번 항목을 삭제하시겠습니까?`)) {
      await DataManager.deleteNewsItem(id);
      await renderNews();
      await renderAdminNewsTable();
    }
  };

  // Initial Data Render Calls
  (async () => {
    await renderCreatorProfile();
    await renderGlossary();
    await renderNews();
    loadQuiz();
  })();
});
