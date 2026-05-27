(() => {
  'use strict';

  const startup = document.getElementById('startup');
  const startupText = document.getElementById('startupText');
  const dataDisplay = document.getElementById('data');
  const sections = document.querySelectorAll('main section[id]');
  const navTabs = document.querySelectorAll('.tab[data-id]');
  const informationControls = document.querySelectorAll('[data-info]');
  const systemButtons = document.querySelectorAll('.system[data-system]');
  const diagnosticButton = document.getElementById('diag');
  const diagnosticResult = document.getElementById('result');
  const restartButton = document.getElementById('restart');

  const systemData = {
    core: {
      tag: 'PROPULSION SYSTEM // ONLINE',
      title: 'M/ARA WARP CORE',
      copy: 'Dynamic field control reshapes warp geometry electronically, removing the need for physically articulating nacelles while preserving sustained high-warp efficiency.',
      readouts: [
        ['FIELD STABILITY', '99.72%'],
        ['CORE OUTPUT', 'NOMINAL'],
        ['DILITHIUM', 'ALIGNED']
      ]
    },
    tactical: {
      tag: 'TACTICAL SYSTEM // ARMED STANDBY',
      title: 'DEFENSIVE GRID',
      copy: 'Continuous Type-X phaser strips provide wide firing arcs. Four pulse torpedo launchers support both photon and quantum ordnance, while regenerative shields replenish under load.',
      readouts: [
        ['PHASER CHARGE', '100%'],
        ['TORPEDO STATUS', 'READY'],
        ['SHIELDS', 'NOMINAL']
      ]
    },
    deflector: {
      tag: 'NAVIGATION SYSTEM // CONFIGURABLE',
      title: 'MAIN DEFLECTOR ARRAY',
      copy: 'A flush-mounted copper-amber deflector with auxiliary blue emitter ring may be retuned for exotic particle emissions, advanced scans and anomaly response.',
      readouts: [
        ['EMITTER ARRAY', 'ONLINE'],
        ['SCAN MODE', 'PASSIVE'],
        ['OUTPUT', '0.03%']
      ]
    }
  };

  function setDisplay(message) {
    if (!dataDisplay) return;
    dataDisplay.textContent = message;
    dataDisplay.animate(
      [{ opacity: 0.25, transform: 'translateX(4px)' }, { opacity: 1, transform: 'translateX(0)' }],
      { duration: 230, easing: 'ease-out' }
    );
  }

  function finishBoot() {
    if (!startup) return;
    startup.classList.add('done');
    document.body.classList.add('lcars-ready');
  }

  function runBootSequence() {
    if (!startup) return;
    startup.classList.remove('done');
    document.body.classList.remove('lcars-ready');
    const messages = [
      'ACCESSING VESSEL RECORD...',
      'VERIFYING COMMAND CLEARANCE...',
      'LCARS DATABASE ONLINE.'
    ];
    let index = 0;
    if (startupText) startupText.textContent = messages[0];
    const bootTimer = window.setInterval(() => {
      index += 1;
      if (startupText && messages[index]) startupText.textContent = messages[index];
      if (index === messages.length - 1) {
        window.clearInterval(bootTimer);
        window.setTimeout(finishBoot, 450);
      }
    }, 420);
  }

  function setActiveTab(id) {
    navTabs.forEach((tab) => {
      const selected = tab.dataset.id === id;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-current', selected ? 'true' : 'false');
    });
  }

  navTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.getElementById(tab.dataset.id);
      if (!target) return;
      setActiveTab(tab.dataset.id);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setDisplay(`NAVIGATION // DISPLAYING ${tab.textContent.trim()}`);
    });
  });

  informationControls.forEach((control) => {
    const message = control.dataset.info;
    control.addEventListener('mouseenter', () => setDisplay(message));
    control.addEventListener('focus', () => setDisplay(message));
    control.addEventListener('click', () => setDisplay(`SELECTED // ${message}`));
  });

  function renderSystem(key) {
    const record = systemData[key];
    if (!record) return;
    const tag = document.getElementById('systemTag');
    const title = document.getElementById('systemTitle');
    const copy = document.getElementById('systemCopy');
    const readouts = document.getElementById('readouts');
    if (tag) tag.textContent = record.tag;
    if (title) title.textContent = record.title;
    if (copy) copy.textContent = record.copy;
    if (readouts) {
      readouts.innerHTML = record.readouts
        .map(([label, value]) => `<b>${label}<strong>${value}</strong></b>`)
        .join('');
    }
    setDisplay(`SYSTEM QUERY // ${record.title} // RECORD LOADED`);
  }

  systemButtons.forEach((button) => {
    button.addEventListener('click', () => {
      systemButtons.forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
      renderSystem(button.dataset.system);
    });
  });

  if (diagnosticButton && diagnosticResult) {
    diagnosticButton.addEventListener('click', () => {
      diagnosticButton.disabled = true;
      diagnosticButton.textContent = 'DIAGNOSTIC RUNNING...';
      diagnosticResult.textContent = 'SCANNING MATTER / ANTIMATTER REACTION ASSEMBLY';
      const barOne = document.querySelector('.bar.one i');
      const barTwo = document.querySelector('.bar.two i');
      if (barOne) barOne.style.width = '100%';
      if (barTwo) barTwo.style.width = '100%';
      window.setTimeout(() => {
        diagnosticResult.textContent = 'CORE STATUS: NOMINAL // FIELD STABILITY 99.72%';
        diagnosticButton.textContent = 'RUN DRIVE DIAGNOSTIC';
        diagnosticButton.disabled = false;
        if (barOne) barOne.style.width = '88%';
        if (barTwo) barTwo.style.width = '97%';
      }, 1450);
    });
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveTab(entry.target.id);
      });
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: 0.05 }
  );
  sections.forEach((section) => navObserver.observe(section));

  if (restartButton) {
    restartButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      runBootSequence();
      setDisplay('LCARS LINK // REINITIALIZATION COMPLETE');
    });
  }

  runBootSequence();
})();
