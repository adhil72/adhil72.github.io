const stages = {
  research: {
    screen: './assets/building.webp',
    alt: 'Edbard researching and building a course',
    description: 'AI agents gather sources and plan a personalized course around the topic you want to learn.',
  },
  roadmap: {
    screen: './assets/course.webp',
    alt: 'A personalized course outline in Edbard',
    description: 'Edbard organizes the material into a roadmap with lessons you can work through at your own pace.',
  },
  lesson: {
    screen: './assets/player.webp',
    alt: 'An Edbard lesson player showing a visual explanation of stack operations',
    description: 'Generated lessons explain a concept step by step with narration and visual examples.',
  },
};

const controls = document.querySelector('.stages');
const screen = document.querySelector('#stage-screen');
const backgroundScreen = document.querySelector('.back-screen');
const description = document.querySelector('#stage-description');
const buttons = controls.querySelectorAll('button');

controls.hidden = false;
description.setAttribute('aria-live', 'polite');

for (const button of buttons) {
  button.addEventListener('click', () => {
    const stage = stages[button.dataset.stage];
    screen.src = stage.screen;
    screen.alt = stage.alt;
    backgroundScreen.src = button.dataset.stage === 'roadmap' ? stages.research.screen : stages.roadmap.screen;
    description.textContent = stage.description;
    for (const item of buttons) {
      item.setAttribute('aria-pressed', String(item === button));
    }
  });
}
