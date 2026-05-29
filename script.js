/* =====================================================================
   НАСТРОЙКИ — поменяй под себя (это единственное, что нужно править)
   ===================================================================== */
const CONFIG = {
  herName: "Моля",            // имя твоей девушки
  myName: "Я",                 // твоё имя (как подписать "от кого")

  // --- Куда придут её ответы автоматически (заполни ОДИН из вариантов) ---
  // Вариант 1 (рекомендую): Telegram-бот. Ответы прилетят тебе в личку мгновенно.
  //   1) В Telegram напиши @BotFather → /newbot → получишь ТОКЕН
  //   2) Напиши своему боту любое сообщение, затем узнай свой chat id у @userinfobot
  telegramBotToken: "8720804911:AAH75P16WwkGedi45shrkEP0O1H0lG2ppRQ",
  telegramChatId: "5252350949",

  // Вариант 2: Formspree (ответы придут тебе на e-mail). Зарегистрируйся на formspree.io,
  //   создай форму и вставь её ID (часть после /f/ в ссылке вида formspree.io/f/abcwxyz)
  formspreeId: "",             // напр. "mzzbqwer"

  // --- Запасные кнопки "поделиться" (если автоотправка не настроена) ---
  telegramUsername: "",        // твой ник в Telegram без @, напр. "ivan"
  whatsappNumber: "",          // твой номер для WhatsApp в формате 79991234567 (без +, пробелов)

  // --- Романтическая фоновая музыка ---
  music: true,                 // true — играет нежная мелодия (с кнопкой вкл/выкл)
};

/* =====================================================================
   ВОПРОСЫ. Можно свободно добавлять / убирать / менять.
   Типы полей: "text", "textarea", "chips" (multi), "single" (один вариант), "slider"
   ===================================================================== */
const SECTIONS = [
  {
    id: "welcome",
    type: "intro",
    emoji: "💌",
    title: "Наши 3 дня вдвоём",
    text: `Привет, <span class="name">${CONFIG.herName}</span>! 🥰\nЯ хочу подарить тебе идеальные три дня — только для нас двоих. Ответь, пожалуйста, на пару тёплых вопросов: что тебе хочется, о чём мечтаешь и что сделает тебя счастливой.\n\nЗдесь нет правильных ответов — только твои желания. В конце просто отправь мне результат 💕`,
    button: "Начать ✨",
  },

  {
    id: "day1",
    eyebrow: "День 1",
    emoji: "🌅",
    title: "Первый день — как начнём?",
    hint: "Представь самое начало нашего маленького путешествия.",
    questions: [
      { key: "d1_mood", type: "chips", q: "Какое настроение хочешь в первый день?",
        options: ["Романтика и нежность", "Активный отдых", "Полный релакс", "Приключения", "Уют дома"] },
      { key: "d1_place", type: "text", q: "Куда бы хотела сходить или чем заняться?", placeholder: "кафе, прогулка, кино, спа..." },
      { key: "d1_dream", type: "textarea", q: "Опиши свой идеальный первый день вдвоём ✨", placeholder: "как тебе мечтается..." },
    ],
  },

  {
    id: "day2",
    eyebrow: "День 2",
    emoji: "🎈",
    title: "Второй день — наш разгар",
    hint: "Середина свидания, когда хочется чего-то особенного.",
    questions: [
      { key: "d2_mood", type: "chips", q: "Чего хочется во второй день?",
        options: ["Сюрприз от меня", "Поездка / смена обстановки", "Спокойствие вдвоём", "Веселье и драйв", "Что-то новое вместе"] },
      { key: "d2_activity", type: "text", q: "Какое занятие сделало бы день особенным?", placeholder: "что угодно..." },
      { key: "d2_surprise", type: "textarea", q: "О каком сюрпризе ты тайно мечтаешь? 🎁", placeholder: "не стесняйся, я постараюсь :)" },
    ],
  },

  {
    id: "day3",
    eyebrow: "День 3",
    emoji: "🌙",
    title: "Третий день — финал, который запомнится",
    hint: "Завершение наших трёх дней.",
    questions: [
      { key: "d3_mood", type: "chips", q: "Каким хочешь видеть последний день?",
        options: ["Нежно и трогательно", "Ярко и празднично", "Тихо и уютно", "Романтический ужин", "На природе / у воды"] },
      { key: "d3_place", type: "text", q: "Где хотела бы провести финальный день?", placeholder: "дома, ресторан, природа, поездка..." },
      { key: "d3_feeling", type: "text", q: "С каким чувством хочешь, чтобы закончились эти 3 дня?", placeholder: "одно-два слова" },
    ],
  },

  {
    id: "food",
    eyebrow: "Вкусняшки",
    emoji: "🍓",
    title: "Что хочешь кушать?",
    hint: "Чтобы все три дня были ещё и вкусными.",
    questions: [
      { key: "f_breakfast", type: "text", q: "Завтрак мечты — что приготовить утром?", placeholder: "блинчики, круассаны, омлет..." },
      { key: "f_main", type: "textarea", q: "Любимые блюда на обед и ужин?", placeholder: "перечисли всё, что любишь" },
      { key: "f_sweet", type: "chips", q: "Что из сладкого порадует тебя больше всего?",
        options: ["Торт", "Мороженое", "Шоколад", "Клубника", "Пирожные", "Маршмеллоу", "Фрукты"] },
      { key: "f_drinks", type: "chips", q: "Напитки для нашего настроения 🥂",
        options: ["Вино", "Шампанское", "Коктейли", "Кофе", "Чай", "Какао", "Просто вода/сок"] },
      { key: "f_cook", type: "single", q: "Готовим дома или заказываем / идём в ресторан?",
        options: ["Приготовь сам(а) для меня", "Готовим вместе", "Закажем доставку", "Идём в ресторан", "Как получится"] },
      { key: "f_no", type: "text", q: "Есть аллергии или то, что точно не любишь?", placeholder: "важно для меня <3" },
    ],
  },

  {
    id: "intimate",
    eyebrow: "Только для нас 🔒",
    emoji: "💞",
    title: "Наши близкие пожелания",
    hint: "Честно и без стеснения — это только между нами. Главное, чтобы тебе было хорошо и комфортно.",
    questions: [
      { key: "i_mood", type: "chips", q: "Какая атмосфера тебе ближе?",
        options: ["Нежно и медленно", "Страстно", "Игриво", "Романтично при свечах", "Спонтанно", "С музыкой"] },
      { key: "i_intensity", type: "slider", q: "Настроение на эти дни:", min: 0, max: 100, leftLabel: "Очень нежно 🕊️", rightLabel: "Очень страстно 🔥" },
      { key: "i_wish", type: "textarea", q: "О чём бы тебе хотелось — что попробовать или повторить?", placeholder: "твои желания, я внимательно прочту" },
      { key: "i_like", type: "textarea", q: "Что тебе особенно приятно и от чего ты таешь?", placeholder: "прикосновения, слова, обстановка..." },
      { key: "i_setting", type: "text", q: "Идеальная обстановка: музыка, свет, место?", placeholder: "свечи, плейлист, отель..." },
      { key: "i_limits", type: "textarea", q: "А есть то, чего точно не хочется? (твои границы важны)", placeholder: "напиши честно, я буду бережным" },
    ],
  },

  {
    id: "bonus",
    eyebrow: "От меня для тебя",
    emoji: "⭐",
    title: "Несколько вопросов от меня",
    hint: "Чтобы я узнал тебя ещё чуть лучше.",
    questions: [
      { key: "b_playlist", type: "text", q: "Какую музыку / песню включить для нашего настроения?", placeholder: "артист или трек" },
      { key: "b_loved", type: "textarea", q: "Что заставляет тебя чувствовать себя по-настоящему любимой?", placeholder: "..." },
      { key: "b_word", type: "text", q: "Одно слово: какой ты хочешь чувствовать себя эти 3 дня?", placeholder: "счастливой, желанной, спокойной..." },
      { key: "b_little", type: "text", q: "Маленькая мелочь, которая бы тебя приятно удивила?", placeholder: "цветы, записка, любимая еда..." },
      { key: "b_message", type: "textarea", q: "И напоследок — что хочешь сказать или пожелать мне? 💌", placeholder: "от души" },
    ],
  },

  {
    id: "finish",
    type: "outro",
    emoji: "🎉",
    title: "Готово, любимая!",
    button: "Отправить мои ответы 💕",
  },
];

/* =====================================================================
   ЛОГИКА
   ===================================================================== */
const STORAGE_KEY = "formolly_answers_v1";
const answers = loadAnswers();
let current = 0;

const app = document.getElementById("app");
const progressWrap = document.getElementById("progressWrap");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

function loadAnswers() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch (e) { return {}; }
}
function saveAnswers() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(answers)); } catch (e) {}
}

function totalQuestionSteps() {
  return SECTIONS.filter(s => s.questions).length;
}

function render() {
  const section = SECTIONS[current];
  app.innerHTML = "";
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Прогресс показываем только на вопросах
  if (section.questions) {
    const idx = SECTIONS.slice(0, current).filter(s => s.questions).length + 1;
    const total = totalQuestionSteps();
    progressWrap.hidden = false;
    progressFill.style.width = (idx / total) * 100 + "%";
    progressText.textContent = `Шаг ${idx} из ${total}`;
  } else {
    progressWrap.hidden = true;
  }

  if (section.type === "intro") return renderIntro(section);
  if (section.type === "outro") return renderOutro(section);
  return renderQuestions(section);
}

function renderIntro(section) {
  const card = el("div", "card hero");
  card.innerHTML = `
    <span class="big-emoji">${section.emoji}</span>
    <h1>${section.title}</h1>
    <p>${section.text.replace(/\n/g, "<br>")}</p>
  `;
  const btn = el("button", "btn btn-primary");
  btn.textContent = section.button;
  btn.style.marginTop = "22px";
  btn.onclick = () => go(1);
  card.appendChild(btn);
  app.appendChild(card);
}

function renderQuestions(section) {
  const card = el("div", "card");
  card.innerHTML = `
    <span class="eyebrow">${section.eyebrow}</span>
    <h2>${section.emoji} ${section.title}</h2>
    ${section.hint ? `<p class="hint">${section.hint}</p>` : ""}
  `;

  section.questions.forEach(qd => card.appendChild(renderField(qd)));

  // Навигация
  const nav = el("div", "nav");
  if (current > 0) {
    const back = el("button", "btn btn-ghost");
    back.textContent = "Назад";
    back.onclick = () => go(-1);
    nav.appendChild(back);
  }
  const next = el("button", "btn btn-primary");
  next.textContent = isLastQuestionSection() ? "Дальше 💞" : "Дальше →";
  next.onclick = () => go(1);
  nav.appendChild(next);
  card.appendChild(nav);

  // Точки-индикаторы
  card.appendChild(renderDots());
  app.appendChild(card);
}

function renderField(qd) {
  const wrap = el("label", "field");
  const q = el("span", "q");
  q.textContent = qd.q;
  wrap.appendChild(q);

  if (qd.type === "text") {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = qd.placeholder || "";
    input.value = answers[qd.key] || "";
    input.oninput = () => { answers[qd.key] = input.value; saveAnswers(); };
    wrap.appendChild(input);
  }

  else if (qd.type === "textarea") {
    const ta = document.createElement("textarea");
    ta.placeholder = qd.placeholder || "";
    ta.value = answers[qd.key] || "";
    ta.oninput = () => { answers[qd.key] = ta.value; saveAnswers(); };
    wrap.appendChild(ta);
  }

  else if (qd.type === "chips" || qd.type === "single") {
    const box = el("div", "chips");
    const isSingle = qd.type === "single";
    let selected = isSingle
      ? (answers[qd.key] ? [answers[qd.key]] : [])
      : (Array.isArray(answers[qd.key]) ? answers[qd.key] : []);
    qd.options.forEach(opt => {
      const chip = el("button", "chip");
      chip.type = "button";
      chip.textContent = opt;
      if (selected.includes(opt)) chip.classList.add("selected");
      chip.onclick = () => {
        if (isSingle) {
          selected = [opt];
          box.querySelectorAll(".chip").forEach(c => c.classList.remove("selected"));
          chip.classList.add("selected");
          answers[qd.key] = opt;
        } else {
          if (selected.includes(opt)) {
            selected = selected.filter(o => o !== opt);
            chip.classList.remove("selected");
          } else {
            selected.push(opt);
            chip.classList.add("selected");
          }
          answers[qd.key] = selected;
        }
        saveAnswers();
      };
      box.appendChild(chip);
    });
    wrap.appendChild(box);
  }

  else if (qd.type === "slider") {
    const sw = el("div", "slider-wrap");
    const range = document.createElement("input");
    range.type = "range";
    range.min = qd.min; range.max = qd.max;
    range.value = answers[qd.key] != null ? answers[qd.key] : 50;
    const val = el("div", "slider-value");
    const labels = el("div", "slider-labels");
    labels.innerHTML = `<span>${qd.leftLabel}</span><span>${qd.rightLabel}</span>`;
    const setVal = () => { val.textContent = range.value + "%"; };
    setVal();
    range.oninput = () => { answers[qd.key] = Number(range.value); setVal(); saveAnswers(); };
    sw.appendChild(range);
    sw.appendChild(labels);
    sw.appendChild(val);
    wrap.appendChild(sw);
  }

  return wrap;
}

function renderDots() {
  const dots = el("div", "dots");
  const questionSections = SECTIONS.filter(s => s.questions);
  const activeIdx = SECTIONS.slice(0, current).filter(s => s.questions).length;
  questionSections.forEach((_, i) => {
    const d = el("div", "dot" + (i === activeIdx ? " active" : ""));
    dots.appendChild(d);
  });
  return dots;
}

function renderOutro(section) {
  const card = el("div", "card hero");
  const hasAuto = !!(CONFIG.telegramBotToken && CONFIG.telegramChatId) || !!CONFIG.formspreeId;
  card.innerHTML = `
    <span class="big-emoji">${section.emoji}</span>
    <h1>${section.title}</h1>
    <p>Спасибо, что заполнила 💕 ${hasAuto
      ? "Нажми кнопку ниже — и твои ответы сразу прилетят мне."
      : "Осталось отправить мне твои ответы — выбери удобный способ ниже."}</p>
  `;

  const summary = buildSummary();

  // --- Автоматическая отправка (если настроена) ---
  if (hasAuto) {
    const sendBtn = el("button", "btn btn-primary");
    sendBtn.textContent = "Отправить мои ответы 💕";
    sendBtn.style.width = "100%";
    sendBtn.style.marginBottom = "12px";

    const status = el("div", "send-status");

    sendBtn.onclick = async () => {
      sendBtn.disabled = true;
      sendBtn.textContent = "Отправляю... 💌";
      status.className = "send-status";
      status.textContent = "";
      try {
        await sendAnswers(summary);
        status.classList.add("ok");
        status.textContent = "Готово! Твои ответы отправлены 💖 Спасибо, любимая.";
        sendBtn.textContent = "Отправлено ✓";
        burst();
      } catch (e) {
        sendBtn.disabled = false;
        sendBtn.textContent = "Попробовать ещё раз 🔁";
        status.classList.add("err");
        status.textContent = "Не получилось отправить автоматически 😔 Воспользуйся кнопками ниже — они точно сработают.";
      }
    };

    card.appendChild(sendBtn);
    card.appendChild(status);

    const orline = el("div", "or-line");
    orline.textContent = "или отправь вручную";
    card.appendChild(orline);
  }

  const share = el("div", "share-buttons");

  if (CONFIG.telegramUsername) {
    const tg = el("button", "btn btn-tg");
    tg.textContent = "Отправить в Telegram 💙";
    tg.onclick = () => window.open(`https://t.me/${CONFIG.telegramUsername}?text=${encodeURIComponent(summary)}`, "_blank");
    share.appendChild(tg);
  } else {
    const tg = el("button", "btn btn-tg");
    tg.textContent = "Поделиться в Telegram 💙";
    tg.onclick = () => window.open(`https://t.me/share/url?url=${encodeURIComponent(" ")}&text=${encodeURIComponent(summary)}`, "_blank");
    share.appendChild(tg);
  }

  const wa = el("button", "btn btn-wa");
  wa.textContent = "Отправить в WhatsApp 💚";
  const waBase = CONFIG.whatsappNumber
    ? `https://wa.me/${CONFIG.whatsappNumber}?text=`
    : `https://wa.me/?text=`;
  wa.onclick = () => window.open(waBase + encodeURIComponent(summary), "_blank");
  share.appendChild(wa);

  const copy = el("button", "btn btn-copy");
  copy.textContent = "Скопировать ответы 📋";
  copy.onclick = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      toast("Скопировано! Вставь и отправь мне 💌");
    } catch (e) {
      // запасной вариант
      const ta = document.createElement("textarea");
      ta.value = summary; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); document.body.removeChild(ta);
      toast("Скопировано! 💌");
    }
  };
  share.appendChild(copy);

  card.appendChild(share);

  // Предпросмотр ответов
  card.appendChild(buildPreview());

  // Кнопка назад
  const back = el("button", "btn btn-ghost");
  back.style.marginTop = "16px";
  back.style.width = "100%";
  back.style.flex = "none";
  back.textContent = "← Вернуться и поправить";
  back.onclick = () => go(-1);
  card.appendChild(back);

  app.appendChild(card);
}

function buildSummary() {
  let lines = [`💕 Анкета «Наши 3 дня» — от ${CONFIG.herName} 💕`, ""];
  SECTIONS.filter(s => s.questions).forEach(section => {
    lines.push(`${section.emoji} ${section.title.toUpperCase()}`);
    section.questions.forEach(qd => {
      const a = formatAnswer(answers[qd.key]);
      if (a) lines.push(`• ${qd.q}\n  → ${a}`);
    });
    lines.push("");
  });
  lines.push("С любовью 💞");
  return lines.join("\n");
}

function buildPreview() {
  const box = el("div");
  box.style.marginTop = "20px";
  SECTIONS.filter(s => s.questions).forEach(section => {
    const answered = section.questions.filter(qd => formatAnswer(answers[qd.key]));
    if (!answered.length) return;
    const block = el("div", "result-block");
    const h = el("h3");
    h.textContent = `${section.emoji} ${section.title}`;
    block.appendChild(h);
    answered.forEach(qd => {
      const qa = el("div", "qa");
      const rq = el("div", "rq"); rq.textContent = qd.q;
      const ra = el("div", "ra"); ra.textContent = formatAnswer(answers[qd.key]);
      qa.appendChild(rq); qa.appendChild(ra);
      block.appendChild(qa);
    });
    box.appendChild(block);
  });
  return box;
}

function formatAnswer(val) {
  if (val == null || val === "") return "";
  if (Array.isArray(val)) return val.join(", ");
  if (typeof val === "number") return val + "%";
  return String(val).trim();
}

/* ---------- Автоматическая отправка ответов тебе ---------- */
async function sendAnswers(summary) {
  // 1) Telegram-бот (приоритетный способ)
  if (CONFIG.telegramBotToken && CONFIG.telegramChatId) {
    const url = `https://api.telegram.org/bot${CONFIG.telegramBotToken}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CONFIG.telegramChatId, text: summary }),
    });
    if (!res.ok) throw new Error("telegram failed");
    return true;
  }
  // 2) Formspree (ответы на e-mail)
  if (CONFIG.formspreeId) {
    const res = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ _subject: `Анкета: ${CONFIG.herName} 💕`, message: summary }),
    });
    if (!res.ok) throw new Error("formspree failed");
    return true;
  }
  throw new Error("no transport configured");
}

function isLastQuestionSection() {
  const next = SECTIONS[current + 1];
  return next && next.type === "outro";
}

function go(dir) {
  current = Math.max(0, Math.min(SECTIONS.length - 1, current + dir));
  render();
}

function el(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}

/* ---------- Плавающие сердечки (фон) ---------- */
function spawnHeart() {
  const hearts = document.getElementById("hearts");
  const h = el("div", "heart");
  const emojis = ["💕", "💗", "💖", "💞", "🌸", "✨"];
  h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 16 + Math.random() * 20 + "px";
  const dur = 7 + Math.random() * 6;
  h.style.animationDuration = dur + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), dur * 1000);
}
setInterval(spawnHeart, 900);
for (let i = 0; i < 6; i++) setTimeout(spawnHeart, i * 300);

/* ---------- Всплеск сердечек (при отправке) ---------- */
function burst() {
  const hearts = document.getElementById("hearts");
  const emojis = ["💖", "💕", "💗", "✨", "🎉", "💞"];
  for (let i = 0; i < 28; i++) {
    const h = el("div", "heart");
    h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 18 + Math.random() * 26 + "px";
    const dur = 4 + Math.random() * 3;
    h.style.animationDuration = dur + "s";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), dur * 1000);
  }
}

/* ---------- Романтическая фоновая музыка (Web Audio, без файлов) ---------- */
const Music = (function () {
  let ctx, master, filter, loopTimer, playing = false, step = 0;
  // Нежная прогрессия аккордов (C – G – Am – F), мягкое пианино-пэд
  const chords = [
    [261.63, 329.63, 392.00],   // C
    [196.00, 246.94, 392.00],   // G
    [220.00, 261.63, 329.63],   // Am
    [174.61, 220.00, 349.23],   // F
  ];

  function ensure() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.0;
    filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1600;
    filter.connect(master);
    master.connect(ctx.destination);
  }

  function voice(freq, t, dur, gain) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = freq;
    o.connect(g); g.connect(filter);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 1.4);          // мягкая атака
    g.gain.linearRampToValueAtTime(gain * 0.7, t + dur * 0.6);
    g.gain.linearRampToValueAtTime(0, t + dur);             // плавное затухание
    o.start(t);
    o.stop(t + dur + 0.1);
  }

  function tick() {
    const now = ctx.currentTime;
    const dur = 4.2;
    const chord = chords[step % chords.length];
    chord.forEach((f, i) => voice(f, now + 0.02, dur, i === 0 ? 0.10 : 0.07));
    // нежная мелодичная нота сверху
    voice(chord[2] * 2, now + 1.0, 2.4, 0.045);
    step++;
    loopTimer = setTimeout(tick, dur * 1000 - 200);
  }

  function play() {
    ensure();
    if (ctx.state === "suspended") ctx.resume();
    if (playing) return;
    playing = true;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 1.5);
    tick();
    updateBtn();
  }

  function pause() {
    if (!ctx || !playing) return;
    playing = false;
    clearTimeout(loopTimer);
    master.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    updateBtn();
  }

  function toggle() { playing ? pause() : play(); localStorage.setItem("formolly_music", playing ? "on" : "off"); }
  function isPlaying() { return playing; }

  let btn;
  function updateBtn() {
    if (!btn) return;
    btn.textContent = playing ? "🎵" : "🔇";
    btn.classList.toggle("muted", !playing);
  }
  function mountButton() {
    btn = el("button", "music-btn");
    btn.type = "button";
    btn.setAttribute("aria-label", "Музыка вкл/выкл");
    btn.onclick = toggle;
    document.body.appendChild(btn);
    updateBtn();
  }

  return { play, pause, toggle, isPlaying, mountButton };
})();

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) { t = el("div", "toast"); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- Старт ---------- */
if (CONFIG.music) {
  Music.mountButton();
  // Браузеры разрешают звук только после действия пользователя — запускаем на первом касании
  const startMusic = () => {
    if (localStorage.getItem("formolly_music") !== "off") Music.play();
    window.removeEventListener("pointerdown", startMusic);
    window.removeEventListener("click", startMusic);
  };
  window.addEventListener("pointerdown", startMusic, { once: false });
  window.addEventListener("click", startMusic, { once: false });
}

render();
