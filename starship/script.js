(() => {
  'use strict';

  const startup = document.getElementById('startup');
  const startupText = document.getElementById('startupText');
  const dataDisplay = document.getElementById('data');
  const sections = document.querySelectorAll('main section[id]');
  const navTabs = document.querySelectorAll('.tab[data-id]');
  const informationControls = document.querySelectorAll('[data-info]');
  const systemButtons = document.querySelectorAll('.system[data-system]');
  const roomOptions = document.querySelectorAll('.room-option[data-room]');
  const interiorImage = document.getElementById('interiorImage');
  const interiorCaption = document.getElementById('interiorCaption');
  const engineeringButtons = document.querySelectorAll('.eng-system[data-engineering]');
  const engineeringCaption = document.getElementById('engineeringCaption');
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

  const roomData = {
    bridge: {
      label: 'MAIN BRIDGE',
      src: 'assets/bridge.png',
      alt: 'Main bridge of the USS Townsend',
      caption: 'DECK 01 // MAIN BRIDGE // COMMAND OPERATIONS ACTIVE'
    },
    tenforward: {
      label: 'TEN-FORWARD',
      src: 'assets/ten-forward.png',
      alt: 'Ten-Forward lounge aboard the USS Townsend',
      caption: 'DECK 04 // TEN-FORWARD // LOUNGE OPERATIONS NORMAL'
    },
    accommodations: {
      label: 'ACCOMMODATIONS',
      src: 'assets/crew-accommodations.png',
      alt: 'Crew accommodations aboard the USS Townsend',
      caption: 'CREW DECK // ACCOMMODATIONS // LIFE SUPPORT STABLE'
    }
  };

  const engineeringData = {
    warp: 'M/ARA WARP CORE // PRIMARY REACTION CHAMBER ONLINE',
    plasma: 'EPS POWER NETWORK // PLASMA CONDUITS BALANCED AT 99.4%',
    defense: 'TACTICAL POWER GRID // SHIELD AND PHASER ROUTING VERIFIED'
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

  function renderInteriorRoom(key, options = {}) {
    const { persist = false, announce = false } = options;
    const record = roomData[key];
    if (!record || !interiorImage || !interiorCaption) return;
    interiorImage.src = record.src;
    interiorImage.alt = record.alt;
    interiorCaption.textContent = record.caption;
    if (persist) {
      roomOptions.forEach((room) => room.classList.toggle('selected', room.dataset.room === key));
    }
    if (announce) setDisplay(`INTERIOR FEED // ${record.label} // VISUAL CHANNEL OPEN`);
  }

  function renderEngineering(key) {
    const caption = engineeringData[key];
    if (!caption || !engineeringCaption) return;
    engineeringCaption.textContent = caption;
    setDisplay(`ENGINEERING QUERY // ${caption}`);
  }

  systemButtons.forEach((button) => {
    button.addEventListener('click', () => {
      systemButtons.forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
      renderSystem(button.dataset.system);
    });
  });

  if (roomOptions.length && interiorImage && interiorCaption) {
    let selectedRoom = 'bridge';
    renderInteriorRoom(selectedRoom, { persist: true });
    roomOptions.forEach((room) => {
      const roomKey = room.dataset.room;
      room.addEventListener('mouseenter', () => renderInteriorRoom(roomKey, { announce: true }));
      room.addEventListener('focus', () => renderInteriorRoom(roomKey, { announce: true }));
      room.addEventListener('mouseleave', () => renderInteriorRoom(selectedRoom));
      room.addEventListener('blur', () => renderInteriorRoom(selectedRoom));
      room.addEventListener('click', () => {
        selectedRoom = roomKey;
        renderInteriorRoom(roomKey, { persist: true, announce: true });
      });
      room.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectedRoom = roomKey;
          renderInteriorRoom(roomKey, { persist: true, announce: true });
        }
      });
    });
  }

  engineeringButtons.forEach((button) => {
    button.addEventListener('click', () => {
      engineeringButtons.forEach((item) => item.classList.remove('selected'));
      button.classList.add('selected');
      renderEngineering(button.dataset.engineering);
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
