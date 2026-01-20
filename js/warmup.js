// warmup.js - Warmup & Cooldown System - ACTIVATED

// Exercise Database
const warmupCooldownData = {
    boxing: {
        warmup: {
            title: "Boxing Warmup Routine",
            description: "Dynamic warmup to prepare for boxing training. Focus on shoulder mobility, footwork, and core activation.",
            totalTime: "15-20",
            exercises: [
                {
                    id: 1,
                    name: "Jump Rope",
                    description: "Light jumping rope to increase heart rate",
                    duration: 180, // 3 minutes
                    icon: "fas fa-ribbon",
                    category: "Cardio",
                    instructions: "Start slow, maintain steady rhythm, focus on light feet"
                },
                {
                    id: 2,
                    name: "Arm Circles",
                    description: "Forward and backward arm rotations",
                    duration: 60,
                    icon: "fas fa-redo",
                    category: "Shoulders",
                    instructions: "Start small circles, gradually increase size, keep controlled"
                },
                {
                    id: 3,
                    name: "Torso Twists",
                    description: "Rotational warmup for core",
                    duration: 60,
                    icon: "fas fa-sync",
                    category: "Core",
                    instructions: "Keep feet planted, rotate from torso, engage core"
                },
                {
                    id: 4,
                    name: "Shadow Boxing",
                    description: "Light technique practice",
                    duration: 180,
                    icon: "fas fa-fist-raised",
                    category: "Technique",
                    instructions: "Focus on form, light intensity, visualize movements"
                },
                {
                    id: 5,
                    name: "Neck Rotations",
                    description: "Important for boxing defense",
                    duration: 60,
                    icon: "fas fa-head-side-virus",
                    category: "Neck",
                    instructions: "Slow controlled movements, no jerking"
                },
                {
                    id: 6,
                    name: "Leg Swings",
                    description: "Forward and lateral leg swings",
                    duration: 90,
                    icon: "fas fa-walking",
                    category: "Legs",
                    instructions: "Hold onto support, controlled swings, increase range gradually"
                },
                {
                    id: 7,
                    name: "Shoulder Rotations with Band",
                    description: "Band resistance for shoulder mobility",
                    duration: 90,
                    icon: "fas fa-compress-arrows-alt",
                    category: "Shoulders",
                    instructions: "Light resistance, focus on smooth movement"
                }
            ],
            intensity: "Moderate",
            focus: ["Shoulder mobility", "Footwork", "Core activation"]
        },
        cooldown: {
            title: "Boxing Cooldown Routine",
            description: "Static stretches and recovery exercises for post-boxing training.",
            totalTime: "10-15",
            exercises: [
                {
                    id: 8,
                    name: "Static Shoulder Stretch",
                    description: "Hold across body stretch",
                    duration: 90,
                    icon: "fas fa-hands-helping",
                    category: "Shoulders",
                    instructions: "Gentle pull, no pain, hold steady"
                },
                {
                    id: 9,
                    name: "Quad Stretch",
                    description: "Standing quad stretch",
                    duration: 60,
                    icon: "fas fa-running",
                    category: "Legs",
                    instructions: "Hold onto support, keep knees together"
                },
                {
                    id: 10,
                    name: "Hamstring Stretch",
                    description: "Seated forward bend",
                    duration: 60,
                    icon: "fas fa-procedures",
                    category: "Legs",
                    instructions: "Keep back straight, reach forward gently"
                },
                {
                    id: 11,
                    name: "Wrist Flexor Stretch",
                    description: "Important for punching recovery",
                    duration: 90,
                    icon: "fas fa-hand-paper",
                    category: "Wrists",
                    instructions: "Gentle pressure, alternate directions"
                },
                {
                    id: 12,
                    name: "Deep Breathing",
                    description: "Recovery breathing exercises",
                    duration: 180,
                    icon: "fas fa-wind",
                    category: "Recovery",
                    instructions: "4-second inhale, 4-second hold, 6-second exhale"
                }
            ],
            intensity: "Light",
            focus: ["Shoulder recovery", "Leg stretching", "Wrist mobility"]
        }
    },
    handstand: {
        warmup: {
            title: "Handstand Warmup Routine",
            description: "Prepare wrists, shoulders, and core for hand balancing.",
            totalTime: "10-15",
            exercises: [
                {
                    id: 13,
                    name: "Wrist Circles",
                    description: "Clockwise and counter-clockwise rotations",
                    duration: 90,
                    icon: "fas fa-hand-rock",
                    category: "Wrists",
                    instructions: "Slow controlled circles, both directions"
                },
                {
                    id: 14,
                    name: "Cat-Cow Stretch",
                    description: "Spinal mobility exercise",
                    duration: 90,
                    icon: "fas fa-cat",
                    category: "Spine",
                    instructions: "Flow between arch and round positions"
                },
                {
                    id: 15,
                    name: "Shoulder Wall Slides",
                    description: "Wall slides for shoulder mobility",
                    duration: 120,
                    icon: "fas fa-arrows-alt-v",
                    category: "Shoulders",
                    instructions: "Keep back against wall, slow movement"
                },
                {
                    id: 16,
                    name: "Plank Hold",
                    description: "Core activation",
                    duration: 60,
                    icon: "fas fa-vector-square",
                    category: "Core",
                    instructions: "Engage core, keep body straight"
                },
                {
                    id: 17,
                    name: "Pike Stretch",
                    description: "Hamstring and shoulder stretch",
                    duration: 90,
                    icon: "fas fa-angle-double-up",
                    category: "Flexibility",
                    instructions: "Keep legs straight, gentle forward fold"
                }
            ],
            intensity: "Moderate",
            focus: ["Wrist prep", "Shoulder mobility", "Core activation"]
        },
        cooldown: {
            title: "Handstand Cooldown Routine",
            description: "Recovery stretches for wrists and shoulders after handstand training.",
            totalTime: "8-12",
            exercises: [
                {
                    id: 18,
                    name: "Wrist Flexor Massage",
                    description: "Self-massage for wrist flexors",
                    duration: 120,
                    icon: "fas fa-hand-sparkles",
                    category: "Wrists",
                    instructions: "Gentle pressure, circular motions"
                },
                {
                    id: 19,
                    name: "Child's Pose",
                    description: "Gentle back and shoulder stretch",
                    duration: 120,
                    icon: "fas fa-baby",
                    category: "Back",
                    instructions: "Arms extended forward, relax into stretch"
                },
                {
                    id: 20,
                    name: "Overhead Triceps Stretch",
                    description: "Stretch for triceps and shoulders",
                    duration: 60,
                    icon: "fas fa-hand-point-up",
                    category: "Arms",
                    instructions: "Gentle pull on elbow, both sides"
                },
                {
                    id: 21,
                    name: "Neck Release",
                    description: "Gentle neck stretches",
                    duration: 90,
                    icon: "fas fa-head-side",
                    category: "Neck",
                    instructions: "Slow controlled movements, no jerking"
                }
            ],
            intensity: "Light",
            focus: ["Wrist recovery", "Shoulder relaxation", "Spine decompression"]
        }
    },
    strength: {
        warmup: {
            title: "Strength Training Warmup",
            description: "Comprehensive warmup for heavy lifting and strength training.",
            totalTime: "20-25",
            exercises: [
                {
                    id: 22,
                    name: "Foam Rolling",
                    description: "Myofascial release for major muscle groups",
                    duration: 300,
                    icon: "fas fa-roll",
                    category: "Recovery",
                    instructions: "Slow rolling, pause on tight spots"
                },
                {
                    id: 23,
                    name: "Dynamic Leg Swings",
                    description: "Forward, backward, and lateral swings",
                    duration: 120,
                    icon: "fas fa-exchange-alt",
                    category: "Legs",
                    instructions: "Controlled swings, increase range gradually"
                },
                {
                    id: 24,
                    name: "Hip Circles",
                    description: "Hip mobility exercise",
                    duration: 90,
                    icon: "fas fa-sync-alt",
                    category: "Hips",
                    instructions: "Large circles, both directions"
                },
                {
                    id: 25,
                    name: "Bodyweight Squats",
                    description: "Movement pattern practice",
                    duration: 90,
                    icon: "fas fa-user",
                    category: "Legs",
                    instructions: "Focus on form, full range of motion"
                },
                {
                    id: 26,
                    name: "Push-up Position Plank",
                    description: "Shoulder and core activation",
                    duration: 60,
                    icon: "fas fa-hands",
                    category: "Upper Body",
                    instructions: "Engage shoulders, maintain straight line"
                },
                {
                    id: 27,
                    name: "Band Pull-aparts",
                    description: "Upper back activation",
                    duration: 90,
                    icon: "fas fa-expand-arrows-alt",
                    category: "Back",
                    instructions: "Light band, squeeze shoulder blades"
                },
                {
                    id: 28,
                    name: "Light Cardio",
                    description: "5 minutes of light cardio",
                    duration: 300,
                    icon: "fas fa-heartbeat",
                    category: "Cardio",
                    instructions: "Treadmill, bike, or rower at light pace"
                }
            ],
            intensity: "Moderate-High",
            focus: ["Joint mobility", "Muscle activation", "Movement patterns"]
        },
        cooldown: {
            title: "Strength Training Cooldown",
            description: "Essential stretches for recovery after strength training.",
            totalTime: "15-20",
            exercises: [
                {
                    id: 29,
                    name: "Quad Foam Rolling",
                    description: "Foam rolling for quadriceps",
                    duration: 120,
                    icon: "fas fa-roll",
                    category: "Legs",
                    instructions: "Slow rolling from hip to knee"
                },
                {
                    id: 30,
                    name: "Hamstring Stretch",
                    description: "Seated or lying stretch",
                    duration: 90,
                    icon: "fas fa-procedures",
                    category: "Legs",
                    instructions: "Keep knee slightly bent if needed"
                },
                {
                    id: 31,
                    name: "Pec Stretch",
                    description: "Doorway chest stretch",
                    duration: 90,
                    icon: "fas fa-expand",
                    category: "Chest",
                    instructions: "Gentle lean forward, both sides"
                },
                {
                    id: 32,
                    name: "Lat Stretch",
                    description: "Overhead lat stretch",
                    duration: 90,
                    icon: "fas fa-arrows-alt-h",
                    category: "Back",
                    instructions: "Lean to side, gentle pull"
                },
                {
                    id: 33,
                    name: "Glute Stretch",
                    description: "Figure-4 stretch",
                    duration: 90,
                    icon: "fas fa-crosshairs",
                    category: "Hips",
                    instructions: "Pull knee toward chest, both sides"
                },
                {
                    id: 34,
                    name: "Calf Stretch",
                    description: "Wall calf stretch",
                    duration: 90,
                    icon: "fas fa-mountain",
                    category: "Legs",
                    instructions: "Keep heel on ground, both legs"
                }
            ],
            intensity: "Light",
            focus: ["Muscle recovery", "Flexibility", "Injury prevention"]
        }
    }
};

// Quick Routines Database
const quickRoutines = {
    boxing: {
        warmup: {
            name: "Quick Boxing Warmup",
            description: "5-minute essential warmup for boxing sessions",
            exercises: [1, 2, 4, 6], // Jump rope, arm circles, shadow boxing, leg swings
            duration: 300, // 5 minutes
            intensity: "Light-Moderate",
            focus: ["Cardio", "Shoulder mobility", "Footwork"]
        }
    },
    handstand: {
        warmup: {
            name: "Quick Handstand Prep",
            description: "Essential wrist and shoulder warmup for handstand training",
            exercises: [13, 15, 16], // Wrist circles, shoulder wall slides, plank hold
            duration: 270, // 4.5 minutes
            intensity: "Light",
            focus: ["Wrist mobility", "Shoulder activation", "Core stability"]
        }
    },
    strength: {
        warmup: {
            name: "Quick Strength Warmup",
            description: "Fast full-body activation for strength training",
            exercises: [23, 25, 26, 27], // Leg swings, squats, plank, band pull-aparts
            duration: 360, // 6 minutes
            intensity: "Moderate",
            focus: ["Joint mobility", "Movement patterns", "Muscle activation"]
        }
    }
};

// Quick Cooldown Routines
const quickCooldowns = {
    boxing: {
        name: "Quick Boxing Cooldown",
        description: "3-minute essential cooldown for boxing",
        exercises: [8, 9, 12], // Shoulder stretch, quad stretch, breathing
        duration: 180,
        intensity: "Very Light",
        focus: ["Shoulder recovery", "Light stretching", "Breathing"]
    },
    handstand: {
        name: "Quick Handstand Recovery",
        description: "3-minute wrist and shoulder recovery",
        exercises: [18, 19], // Wrist massage, child's pose
        duration: 180,
        intensity: "Very Light",
        focus: ["Wrist recovery", "Shoulder relaxation"]
    },
    strength: {
        name: "Quick Strength Cooldown",
        description: "4-minute essential cooldown for strength training",
        exercises: [30, 31, 33], // Hamstring stretch, pec stretch, glute stretch
        duration: 240,
        intensity: "Light",
        focus: ["Major muscle groups", "Flexibility", "Recovery"]
    }
};

// App State
let currentProgram = "boxing";
let currentRoutine = "warmup";
let currentExerciseIndex = 0;
let timerRunning = false;
let timerInterval;
let totalSeconds = 0;
let exerciseSeconds = 0;
let currentExerciseDuration = 0;
let completedExercises = new Set();
let savedRoutines = JSON.parse(localStorage.getItem('savedWarmupRoutines')) || [];
let usingQuickRoutine = false;
let currentQuickRoutine = null;

// DOM Elements
const programCards = document.querySelectorAll('.program-card');
const tabBtns = document.querySelectorAll('.tab-btn');
const mainTimer = document.getElementById('main-timer');
const timerLabel = document.getElementById('timer-label');
const exerciseTime = document.getElementById('exercise-time');
const exerciseName = document.getElementById('exercise-name');
const exerciseDescription = document.getElementById('exercise-description');
const exerciseIcon = document.getElementById('exercise-icon');
const routineTitle = document.getElementById('routine-title');
const totalTime = document.getElementById('total-time');
const exerciseCount = document.getElementById('exercise-count');
const intensityLevel = document.getElementById('intensity-level');
const exercisesList = document.getElementById('exercises-list');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const skipBtn = document.getElementById('skip-btn');
const completionModal = document.getElementById('completion-modal');
const recentList = document.getElementById('recent-list');
const saveRoutineBtn = document.getElementById('save-routine');
const quickRoutineCards = document.querySelectorAll('.routine-card.quick');

// Quick Access Variables
let quickAccessEnabled = true;

// Initialize
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log("🔥 Warmup System Initializing...");
    loadUserData();
    setupEventListeners();
    updateUI();
    loadRecentRoutines();
    activateQuickRoutines();
    console.log("✅ Warmup System Ready!");
}

function loadUserData() {
    const savedData = localStorage.getItem('warmupSystemData');
    if (savedData) {
        const data = JSON.parse(savedData);
        currentProgram = data.currentProgram || "boxing";
        currentRoutine = data.currentRoutine || "warmup";
        savedRoutines = data.savedRoutines || [];
        quickAccessEnabled = data.quickAccessEnabled !== false; // Default to true
    }
}

function saveUserData() {
    const data = {
        currentProgram,
        currentRoutine,
        savedRoutines,
        quickAccessEnabled,
        lastUsed: new Date().toISOString()
    };
    localStorage.setItem('warmupSystemData', JSON.stringify(data));
}

function setupEventListeners() {
    console.log("Setting up event listeners...");
    
    // Program selection
    programCards.forEach(card => {
        card.addEventListener('click', () => {
            console.log(`Program selected: ${card.dataset.program}`);
            programCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentProgram = card.dataset.program;
            currentExerciseIndex = 0;
            completedExercises.clear();
            usingQuickRoutine = false;
            currentQuickRoutine = null;
            updateUI();
            resetTimer();
        });
    });

    // Routine tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log(`Routine selected: ${btn.dataset.routine}`);
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentRoutine = btn.dataset.routine;
            currentExerciseIndex = 0;
            completedExercises.clear();
            usingQuickRoutine = false;
            currentQuickRoutine = null;
            updateUI();
            resetTimer();
        });
    });

    // Timer controls
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    skipBtn.addEventListener('click', skipExercise);

    // Save routine
    saveRoutineBtn.addEventListener('click', saveCurrentRoutine);

    // Modal controls
    document.querySelector('.close-modal').addEventListener('click', () => {
        completionModal.style.display = 'none';
    });

    document.querySelector('#modal-close').addEventListener('click', () => {
        completionModal.style.display = 'none';
        resetTimer();
    });

    document.querySelector('#modal-save').addEventListener('click', () => {
        const feeling = document.getElementById('routine-feeling').value;
        saveRoutineCompletion(feeling);
        completionModal.style.display = 'none';
        resetTimer();
    });

    // Close modal when clicking outside
    completionModal.addEventListener('click', (e) => {
        if (e.target === completionModal) {
            completionModal.style.display = 'none';
        }
    });

    console.log("✅ Event listeners setup complete");
}

function activateQuickRoutines() {
    console.log("Activating quick routines...");
    
    quickRoutineCards.forEach(card => {
        const program = card.dataset.program;
        const routine = card.dataset.routine;
        
        // Update button text and add event listener
        const button = card.querySelector('button');
        button.textContent = 'Start Now';
        
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log(`Quick ${routine} selected for ${program}`);
            
            // Set program and routine
            programCards.forEach(c => c.classList.remove('active'));
            document.querySelector(`.program-card[data-program="${program}"]`).classList.add('active');
            currentProgram = program;
            
            tabBtns.forEach(t => t.classList.remove('active'));
            document.querySelector(`.tab-btn[data-routine="${routine}"]`).classList.add('active');
            currentRoutine = routine;
            
            // Activate quick routine
            activateQuickMode();
        });
        
        // Also make entire card clickable
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') {
                console.log(`Quick ${routine} card selected for ${program}`);
                
                programCards.forEach(c => c.classList.remove('active'));
                document.querySelector(`.program-card[data-program="${program}"]`).classList.add('active');
                currentProgram = program;
                
                tabBtns.forEach(t => t.classList.remove('active'));
                document.querySelector(`.tab-btn[data-routine="${routine}"]`).classList.add('active');
                currentRoutine = routine;
                
                activateQuickMode();
            }
        });
    });
    
    console.log("✅ Quick routines activated");
}

function activateQuickMode() {
    console.log("Activating quick mode...");
    usingQuickRoutine = true;
    
    if (currentRoutine === 'warmup') {
        currentQuickRoutine = quickRoutines[currentProgram]?.warmup;
    } else if (currentRoutine === 'cooldown') {
        currentQuickRoutine = quickCooldowns[currentProgram];
    }
    
    if (currentQuickRoutine) {
        console.log(`Using quick routine: ${currentQuickRoutine.name}`);
        
        // Update UI for quick routine
        routineTitle.textContent = `${currentQuickRoutine.name} (Quick)`;
        totalTime.textContent = `${Math.floor(currentQuickRoutine.duration / 60)} min`;
        exerciseCount.textContent = `${currentQuickRoutine.exercises.length} exercises`;
        intensityLevel.textContent = currentQuickRoutine.intensity;
        
        // Get exercise details from main database
        const quickExercises = [];
        currentQuickRoutine.exercises.forEach(exerciseId => {
            // Find exercise in all programs
            let foundExercise = null;
            
            // Search in current program's routines
            if (warmupCooldownData[currentProgram].warmup) {
                foundExercise = warmupCooldownData[currentProgram].warmup.exercises.find(e => e.id === exerciseId);
            }
            if (!foundExercise && warmupCooldownData[currentProgram].cooldown) {
                foundExercise = warmupCooldownData[currentProgram].cooldown.exercises.find(e => e.id === exerciseId);
            }
            
            // Search in other programs if still not found
            if (!foundExercise) {
                for (const program in warmupCooldownData) {
                    if (warmupCooldownData[program].warmup) {
                        foundExercise = warmupCooldownData[program].warmup.exercises.find(e => e.id === exerciseId);
                        if (foundExercise) break;
                    }
                    if (!foundExercise && warmupCooldownData[program].cooldown) {
                        foundExercise = warmupCooldownData[program].cooldown.exercises.find(e => e.id === exerciseId);
                        if (foundExercise) break;
                    }
                }
            }
            
            if (foundExercise) {
                quickExercises.push(foundExercise);
            }
        });
        
        // Render quick exercises
        renderQuickExercisesList(quickExercises);
        
        // Reset state
        currentExerciseIndex = 0;
        completedExercises.clear();
        
        // Update current exercise display
        if (quickExercises.length > 0) {
            updateQuickCurrentExercise(quickExercises);
        }
        
        // Show notification
        showNotification(`Quick ${currentRoutine} activated! Starting in 3 seconds...`, 'success');
        
        // Auto-start after 3 seconds
        setTimeout(() => {
            startTimer();
        }, 3000);
    }
}

function updateUI() {
    console.log(`Updating UI for ${currentProgram} - ${currentRoutine}`);
    
    if (usingQuickRoutine && currentQuickRoutine) {
        // We're in quick mode, UI was already updated
        return;
    }
    
    const routineData = getCurrentRoutine();
    
    // Update titles and stats
    routineTitle.textContent = `${routineData.title}`;
    totalTime.textContent = `${routineData.totalTime} min`;
    exerciseCount.textContent = `${routineData.exercises.length} exercises`;
    intensityLevel.textContent = routineData.intensity;
    
    // Update exercise list
    renderExercisesList();
    
    // Update current exercise display
    if (routineData.exercises.length > 0) {
        updateCurrentExerciseDisplay();
    }
}

function getCurrentRoutine() {
    if (usingQuickRoutine && currentQuickRoutine) {
        return {
            title: currentQuickRoutine.name,
            description: currentQuickRoutine.description,
            totalTime: `${Math.floor(currentQuickRoutine.duration / 60)}`,
            exercises: getQuickExercises(),
            intensity: currentQuickRoutine.intensity,
            focus: currentQuickRoutine.focus || []
        };
    }
    
    if (currentRoutine === 'both') {
        return {
            title: `Full ${currentProgram.charAt(0).toUpperCase() + currentProgram.slice(1)} Session`,
            description: `${warmupCooldownData[currentProgram].warmup.description} Followed by ${warmupCooldownData[currentProgram].cooldown.description}`,
            totalTime: `${parseInt(warmupCooldownData[currentProgram].warmup.totalTime) + parseInt(warmupCooldownData[currentProgram].cooldown.totalTime)}`,
            exercises: [
                ...warmupCooldownData[currentProgram].warmup.exercises,
                ...warmupCooldownData[currentProgram].cooldown.exercises
            ],
            intensity: "Variable",
            focus: [...warmupCooldownData[currentProgram].warmup.focus, ...warmupCooldownData[currentProgram].cooldown.focus]
        };
    }
    
    return warmupCooldownData[currentProgram][currentRoutine];
}

function getQuickExercises() {
    if (!currentQuickRoutine) return [];
    
    const quickExercises = [];
    currentQuickRoutine.exercises.forEach(exerciseId => {
        // Search in all programs
        for (const program in warmupCooldownData) {
            if (warmupCooldownData[program].warmup) {
                const exercise = warmupCooldownData[program].warmup.exercises.find(e => e.id === exerciseId);
                if (exercise) {
                    quickExercises.push(exercise);
                    return;
                }
            }
            if (warmupCooldownData[program].cooldown) {
                const exercise = warmupCooldownData[program].cooldown.exercises.find(e => e.id === exerciseId);
                if (exercise) {
                    quickExercises.push(exercise);
                    return;
                }
            }
        }
    });
    
    return quickExercises;
}

function renderExercisesList() {
    const routineData = getCurrentRoutine();
    exercisesList.innerHTML = '';
    
    console.log(`Rendering ${routineData.exercises.length} exercises`);
    
    routineData.exercises.forEach((exercise, index) => {
        const isActive = index === currentExerciseIndex;
        const isCompleted = completedExercises.has(exercise.id);
        
        const exerciseItem = document.createElement('div');
        exerciseItem.className = `exercise-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
        exerciseItem.dataset.index = index;
        
        // Add animation for active exercise
        if (isActive) {
            exerciseItem.style.animation = 'pulse 2s infinite';
        }
        
        exerciseItem.innerHTML = `
            <div class="exercise-check">
                <i class="fas ${isCompleted ? 'fa-check' : 'fa-dumbbell'}"></i>
            </div>
            <div class="exercise-details">
                <h4>${exercise.name} ${usingQuickRoutine ? '⚡' : ''}</h4>
                <p>${exercise.description}</p>
                <div class="exercise-meta">
                    <span><i class="fas fa-tag"></i> ${exercise.category}</span>
                    <span><i class="fas fa-clock"></i> ${formatTime(exercise.duration)}</span>
                </div>
            </div>
            <div class="exercise-duration">${formatTime(exercise.duration)}</div>
        `;
        
        exercisesList.appendChild(exerciseItem);
    });
    
    // Add CSS for pulse animation if not already present
    if (!document.querySelector('#pulse-animation')) {
        const style = document.createElement('style');
        style.id = 'pulse-animation';
        style.textContent = `
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
                70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
                100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
            }
        `;
        document.head.appendChild(style);
    }
}

function renderQuickExercisesList(quickExercises) {
    exercisesList.innerHTML = '';
    
    console.log(`Rendering ${quickExercises.length} quick exercises`);
    
    quickExercises.forEach((exercise, index) => {
        const isActive = index === currentExerciseIndex;
        const isCompleted = completedExercises.has(exercise.id);
        
        const exerciseItem = document.createElement('div');
        exerciseItem.className = `exercise-item quick-exercise ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
        exerciseItem.dataset.index = index;
        
        // Add quick badge and animation
        if (isActive) {
            exerciseItem.style.animation = 'pulse 1.5s infinite';
        }
        
        exerciseItem.innerHTML = `
            <div class="exercise-check" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
                <i class="fas ${isCompleted ? 'fa-check' : 'fa-bolt'}"></i>
            </div>
            <div class="exercise-details">
                <h4>${exercise.name} ⚡</h4>
                <p>${exercise.description}</p>
                <div class="exercise-meta">
                    <span><i class="fas fa-tag"></i> ${exercise.category}</span>
                    <span><i class="fas fa-clock"></i> ${formatTime(exercise.duration)}</span>
                    <span style="color: #f59e0b;"><i class="fas fa-bolt"></i> Quick</span>
                </div>
            </div>
            <div class="exercise-duration" style="background: rgba(245, 158, 11, 0.2); color: #f59e0b;">
                ${formatTime(exercise.duration)}
            </div>
        `;
        
        exercisesList.appendChild(exerciseItem);
    });
}

function updateCurrentExerciseDisplay() {
    const routineData = getCurrentRoutine();
    
    if (routineData.exercises.length === 0) return;
    
    const currentExercise = routineData.exercises[currentExerciseIndex];
    
    exerciseName.textContent = `${currentExercise.name} ${usingQuickRoutine ? '⚡' : ''}`;
    exerciseDescription.textContent = `${currentExercise.description}. ${currentExercise.instructions}`;
    exerciseIcon.className = currentExercise.icon;
    exerciseTime.textContent = formatTime(currentExercise.duration);
    currentExerciseDuration = currentExercise.duration;
    exerciseSeconds = 0;
    
    // Update timer label
    timerLabel.textContent = usingQuickRoutine ? "Quick Routine" : "Ready to start";
}

function updateQuickCurrentExercise(quickExercises) {
    if (quickExercises.length === 0) return;
    
    const currentExercise = quickExercises[currentExerciseIndex];
    
    exerciseName.textContent = `${currentExercise.name} ⚡`;
    exerciseDescription.textContent = `${currentExercise.description}. ${currentExercise.instructions}`;
    exerciseIcon.className = currentExercise.icon;
    exerciseIcon.style.color = '#f59e0b'; // Yellow for quick routines
    exerciseTime.textContent = formatTime(currentExercise.duration);
    currentExerciseDuration = currentExercise.duration;
    exerciseSeconds = 0;
    
    // Update timer label
    timerLabel.textContent = "Quick Routine";
}

function startTimer() {
    if (timerRunning) return;
    
    console.log("Timer started");
    timerRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    skipBtn.disabled = false;
    
    // Update timer label based on mode
    timerLabel.textContent = usingQuickRoutine ? "Quick Routine in Progress" : "Routine in progress";
    
    timerInterval = setInterval(() => {
        totalSeconds++;
        exerciseSeconds++;
        
        updateTimerDisplay();
        
        // Check if current exercise is complete
        if (exerciseSeconds >= currentExerciseDuration) {
            completeCurrentExercise();
        }
    }, 1000);
}

function pauseTimer() {
    if (!timerRunning) return;
    
    console.log("Timer paused");
    clearInterval(timerInterval);
    timerRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    timerLabel.textContent = "Paused";
}

function resetTimer() {
    console.log("Timer reset");
    clearInterval(timerInterval);
    timerRunning = false;
    totalSeconds = 0;
    exerciseSeconds = 0;
    currentExerciseIndex = 0;
    completedExercises.clear();
    usingQuickRoutine = false;
    currentQuickRoutine = null;
    
    updateTimerDisplay();
    updateUI();
    
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    skipBtn.disabled = true;
    timerLabel.textContent = "Ready to start";
}

function skipExercise() {
    if (!timerRunning) return;
    
    console.log("Exercise skipped");
    completeCurrentExercise();
    showNotification("Exercise skipped", "warning");
}

function completeCurrentExercise() {
    const routineData = getCurrentRoutine();
    const currentExercise = routineData.exercises[currentExerciseIndex];
    
    // Mark as completed
    completedExercises.add(currentExercise.id);
    
    // Play completion sound (if enabled)
    playCompletionSound();
    
    // Show exercise completion notification
    if (currentExerciseIndex < routineData.exercises.length - 1) {
        showNotification(`${currentExercise.name} completed! Next: ${routineData.exercises[currentExerciseIndex + 1].name}`, 'success');
    }
    
    // Update UI
    if (usingQuickRoutine) {
        const quickExercises = getQuickExercises();
        renderQuickExercisesList(quickExercises);
    } else {
        renderExercisesList();
    }
    
    // Move to next exercise or complete routine
    if (currentExerciseIndex < routineData.exercises.length - 1) {
        currentExerciseIndex++;
        exerciseSeconds = 0;
        
        if (usingQuickRoutine) {
            const quickExercises = getQuickExercises();
            updateQuickCurrentExercise(quickExercises);
        } else {
            updateCurrentExerciseDisplay();
        }
    } else {
        // Routine complete
        completeRoutine();
    }
}

function completeRoutine() {
    console.log("Routine completed!");
    clearInterval(timerInterval);
    timerRunning = false;
    
    // Play completion sound
    playCompletionSound();
    
    // Show completion modal
    document.getElementById('completed-routine').textContent = 
        usingQuickRoutine ? `Quick ${currentRoutine}` : currentRoutine;
    document.getElementById('completed-time').textContent = formatTime(totalSeconds);
    document.getElementById('completed-exercises').textContent = completedExercises.size;
    document.getElementById('completed-calories').textContent = Math.round(totalSeconds / 60 * (usingQuickRoutine ? 3 : 5));
    
    completionModal.style.display = 'flex';
    
    // Save completion to recent
    saveRecentRoutine();
    
    // Show celebration
    showCelebration();
}

function updateTimerDisplay() {
    mainTimer.textContent = formatTime(totalSeconds);
    
    if (currentExerciseDuration > 0) {
        const remaining = currentExerciseDuration - exerciseSeconds;
        exerciseTime.textContent = formatTime(remaining);
        
        // Change color based on time remaining
        if (remaining <= 10) {
            exerciseTime.style.color = '#ef4444'; // Red for last 10 seconds
            exerciseTime.style.animation = 'pulse 0.5s infinite';
        } else if (remaining <= 30) {
            exerciseTime.style.color = '#f59e0b'; // Yellow for last 30 seconds
        } else {
            exerciseTime.style.color = ''; // Reset
            exerciseTime.style.animation = '';
        }
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function saveCurrentRoutine() {
    const routineData = getCurrentRoutine();
    const routine = {
        id: Date.now(),
        program: currentProgram,
        routine: currentRoutine,
        name: routineData.title,
        exercises: routineData.exercises.map(e => e.id),
        savedAt: new Date().toISOString(),
        duration: routineData.totalTime,
        isQuick: usingQuickRoutine
    };
    
    savedRoutines.push(routine);
    saveUserData();
    
    showNotification('Routine saved successfully!', 'success');
}

function saveRecentRoutine() {
    const routineData = getCurrentRoutine();
    const recent = {
        program: currentProgram,
        routine: currentRoutine,
        name: routineData.title,
        completedAt: new Date().toISOString(),
        duration: totalSeconds,
        exerciseCount: completedExercises.size,
        isQuick: usingQuickRoutine
    };
    
    let recentRoutines = JSON.parse(localStorage.getItem('recentWarmupRoutines')) || [];
    recentRoutines.unshift(recent);
    
    // Keep only last 5 routines
    recentRoutines = recentRoutines.slice(0, 5);
    localStorage.setItem('recentWarmupRoutines', JSON.stringify(recentRoutines));
    
    loadRecentRoutines();
}

function loadRecentRoutines() {
    const recentRoutines = JSON.parse(localStorage.getItem('recentWarmupRoutines')) || [];
    recentList.innerHTML = '';
    
    if (recentRoutines.length === 0) {
        recentList.innerHTML = '<div class="recent-item">No recent routines yet</div>';
        return;
    }
    
    recentRoutines.forEach(routine => {
        const item = document.createElement('div');
        item.className = 'recent-item';
        
        const date = new Date(routine.completedAt);
        const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        item.innerHTML = `
            <div>
                <strong>${routine.name}</strong>
                ${routine.isQuick ? ' <span style="color: #f59e0b;">⚡</span>' : ''}
            </div>
            <div style="font-size: 0.8rem; color: var(--gray); margin-top: 5px;">
                ${routine.program.charAt(0).toUpperCase() + routine.program.slice(1)} • 
                ${formatTime(routine.duration)} • 
                ${routine.exerciseCount} exercises • 
                ${formattedDate}
            </div>
        `;
        
        recentList.appendChild(item);
    });
}

function saveRoutineCompletion(feeling) {
    const completion = {
        program: currentProgram,
        routine: currentRoutine,
        feeling: feeling,
        completedAt: new Date().toISOString(),
        totalTime: totalSeconds,
        exerciseCount: completedExercises.size,
        isQuick: usingQuickRoutine
    };
    
    let completions = JSON.parse(localStorage.getItem('routineCompletions')) || [];
    completions.push(completion);
    localStorage.setItem('routineCompletions', JSON.stringify(completions));
    
    showNotification('Routine completion saved!', 'success');
}

function playCompletionSound() {
    // Create a simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log("Audio not supported:", e);
    }
}

function showCelebration() {
    // Add celebration effects
    const celebration = document.createElement('div');
    celebration.id = 'celebration';
    celebration.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    
    celebration.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(139, 92, 246, 0.9));
            color: white;
            padding: 30px;
            border-radius: 20px;
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            animation: celebrate 2s ease;
        ">
            <i class="fas fa-trophy" style="font-size: 3rem; margin-bottom: 20px;"></i>
            <div>Routine Complete!</div>
            <div style="font-size: 1rem; margin-top: 10px;">Great work! 🎉</div>
        </div>
    `;
    
    document.body.appendChild(celebration);
    
    // Remove after animation
    setTimeout(() => {
        celebration.remove();
    }, 2000);
    
    // Add celebration animation
    if (!document.querySelector('#celebration-animation')) {
        const style = document.createElement('style');
        style.id = 'celebration-animation';
        style.textContent = `
            @keyframes celebrate {
                0% { transform: scale(0); opacity: 0; }
                50% { transform: scale(1.1); opacity: 1; }
                100% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#ef4444'};
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 300px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.1);
    `;
    
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Add notification animations if not already present
    if (!document.querySelector('#notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%) translateY(-20px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0) translateY(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0) translateY(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%) translateY(-20px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Spacebar to start/pause
    if (e.code === 'Space' && !e.target.matches('input, textarea, select')) {
        e.preventDefault();
        if (timerRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    }
    
    // 'R' to reset
    if (e.code === 'KeyR' && !e.target.matches('input, textarea, select')) {
        e.preventDefault();
        resetTimer();
    }
    
    // 'S' to skip
    if (e.code === 'KeyS' && !e.target.matches('input, textarea, select')) {
        e.preventDefault();
        if (timerRunning) {
            skipExercise();
        }
    }
    
    // Number keys 1-3 for quick routines
    if (e.code === 'Digit1' && !e.target.matches('input, textarea, select')) {
        e.preventDefault();
        activateQuickRoutineByIndex(0);
    }
    if (e.code === 'Digit2' && !e.target.matches('input, textarea, select')) {
        e.preventDefault();
        activateQuickRoutineByIndex(1);
    }
    if (e.code === 'Digit3' && !e.target.matches('input, textarea, select')) {
        e.preventDefault();
        activateQuickRoutineByIndex(2);
    }
});

function activateQuickRoutineByIndex(index) {
    const quickCards = Array.from(quickRoutineCards);
    if (index < quickCards.length) {
        const card = quickCards[index];
        const program = card.dataset.program;
        const routine = card.dataset.routine;
        
        programCards.forEach(c => c.classList.remove('active'));
        document.querySelector(`.program-card[data-program="${program}"]`).classList.add('active');
        currentProgram = program;
        
        tabBtns.forEach(t => t.classList.remove('active'));
        document.querySelector(`.tab-btn[data-routine="${routine}"]`).classList.add('active');
        currentRoutine = routine;
        
        activateQuickMode();
        
        showNotification(`Quick ${routine} activated with keyboard shortcut!`, 'success');
    }
}

// Initialize quick access on page load
console.log("🚀 Quick Warmup & Cooldown System ACTIVATED!");
console.log("Available Quick Routines:");
console.log("- Quick Boxing Warmup (5 min)");
console.log("- Quick Handstand Prep (4.5 min)");
console.log("- Quick Strength Warmup (6 min)");
console.log("- Quick Cooldowns for all programs");
console.log("\nKeyboard Shortcuts:");
console.log("- Space: Start/Pause timer");
console.log("- R: Reset timer");
console.log("- S: Skip exercise");
console.log("- 1/2/3: Activate quick routines");

// Add quick access button to header
function addQuickAccessButton() {
    const headerActions = document.querySelector('.header-actions');
    const quickAccessBtn = document.createElement('button');
    quickAccessBtn.className = 'btn btn-warning';
    quickAccessBtn.id = 'quick-access-btn';
    quickAccessBtn.innerHTML = `
        <i class="fas fa-bolt"></i>
        Quick Access
    `;
    
    quickAccessBtn.addEventListener('click', () => {
        // Toggle quick access menu
        toggleQuickAccessMenu();
    });
    
    headerActions.insertBefore(quickAccessBtn, headerActions.firstChild);
}

function toggleQuickAccessMenu() {
    // Create quick access menu
    let menu = document.getElementById('quick-access-menu');
    
    if (menu) {
        menu.remove();
        return;
    }
    
    menu = document.createElement('div');
    menu.id = 'quick-access-menu';
    menu.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: rgba(30, 41, 59, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 20px;
        z-index: 1000;
        border: 1px solid rgba(100, 116, 139, 0.3);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        min-width: 250px;
    `;
    
    menu.innerHTML = `
        <h4 style="color: var(--light); margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-bolt" style="color: #f59e0b;"></i>
            Quick Access
        </h4>
        <div style="display: flex; flex-direction: column; gap: 10px;">
            <button class="quick-access-item" data-program="boxing" data-routine="warmup">
                <i class="fas fa-fist-raised"></i>
                Quick Boxing Warmup (5 min)
            </button>
            <button class="quick-access-item" data-program="handstand" data-routine="warmup">
                <i class="fas fa-hands"></i>
                Quick Handstand Prep (4.5 min)
            </button>
            <button class="quick-access-item" data-program="strength" data-routine="warmup">
                <i class="fas fa-dumbbell"></i>
                Quick Strength Warmup (6 min)
            </button>
            <div style="border-top: 1px solid rgba(100, 116, 139, 0.3); margin: 10px 0; padding-top: 10px;">
                <button class="quick-access-item" data-program="boxing" data-routine="cooldown">
                    <i class="fas fa-snowflake"></i>
                    Quick Boxing Cooldown (3 min)
                </button>
                <button class="quick-access-item" data-program="handstand" data-routine="cooldown">
                    <i class="fas fa-snowflake"></i>
                    Quick Handstand Recovery (3 min)
                </button>
                <button class="quick-access-item" data-program="strength" data-routine="cooldown">
                    <i class="fas fa-snowflake"></i>
                    Quick Strength Cooldown (4 min)
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(menu);
    
    // Add event listeners to quick access items
    menu.querySelectorAll('.quick-access-item').forEach(item => {
        item.addEventListener('click', () => {
            const program = item.dataset.program;
            const routine = item.dataset.routine;
            
            programCards.forEach(c => c.classList.remove('active'));
            document.querySelector(`.program-card[data-program="${program}"]`).classList.add('active');
            currentProgram = program;
            
            tabBtns.forEach(t => t.classList.remove('active'));
            document.querySelector(`.tab-btn[data-routine="${routine}"]`).classList.add('active');
            currentRoutine = routine;
            
            activateQuickMode();
            menu.remove();
        });
    });
    
    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menu.contains(e.target) && e.target.id !== 'quick-access-btn') {
                menu.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}

// Add CSS for quick access
const quickAccessCSS = `
    .btn-warning {
        background: linear-gradient(135deg, #f59e0b, #d97706);
        color: white;
    }
    
    .btn-warning:hover {
        background: linear-gradient(135deg, #d97706, #b45309);
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
    }
    
    .quick-access-item {
        background: rgba(100, 116, 139, 0.1);
        border: 1px solid rgba(100, 116, 139, 0.2);
        color: var(--gray-light);
        padding: 12px 15px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: left;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.9rem;
        width: 100%;
    }
    
    .quick-access-item:hover {
        background: rgba(100, 116, 139, 0.3);
        color: var(--light);
        border-color: var(--primary);
    }
    
    .quick-exercise {
        border-left: 4px solid #f59e0b;
    }
`;

// Add the CSS to the document
const style = document.createElement('style');
style.textContent = quickAccessCSS;
document.head.appendChild(style);

// Initialize quick access button
setTimeout(() => {
    addQuickAccessButton();
    console.log("✅ Quick Access Button Added");
}, 1000);
