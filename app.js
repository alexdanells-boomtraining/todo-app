const STORAGE_KEY = 'habitTracker_habits';

function loadHabits() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function saveHabits(habits) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

function renderHabits(habits) {
  const list = document.getElementById('habit-list');
  list.innerHTML = '';

  habits.forEach((habit) => {
    const li = document.createElement('li');
    li.className = 'habit-item' + (habit.done ? ' done' : '');
    li.dataset.id = habit.id;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = habit.done;
    checkbox.addEventListener('change', () => toggleHabit(habit.id));

    const nameSpan = document.createElement('span');
    nameSpan.className = 'habit-name';
    nameSpan.textContent = habit.name;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = '×';
    removeBtn.setAttribute('aria-label', 'Remove habit');
    removeBtn.addEventListener('click', () => removeHabit(habit.id));

    li.append(checkbox, nameSpan, removeBtn);
    list.appendChild(li);
  });
}

function addHabit() {
  const input = document.getElementById('habit-input');
  const name = input.value.trim();
  if (!name) return;

  const habits = loadHabits();
  habits.push({ id: Date.now(), name, done: false });
  saveHabits(habits);
  renderHabits(habits);
  input.value = '';
  input.focus();
}

function toggleHabit(id) {
  const habits = loadHabits();
  const habit = habits.find(h => h.id === id);
  if (habit) habit.done = !habit.done;
  saveHabits(habits);
  renderHabits(habits);
}

function removeHabit(id) {
  const habits = loadHabits().filter(h => h.id !== id);
  saveHabits(habits);
  renderHabits(habits);
}

document.getElementById('add-btn').addEventListener('click', addHabit);

document.getElementById('habit-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addHabit();
});

renderHabits(loadHabits());
