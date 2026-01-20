// ========== STIMULUS DATA FROM PDF ==========
const stimulusData = [
    // Strikes
    { id: 1, name: "Jab", type: "strike", color: "#dc2626", text: "JAB", icon: "fas fa-hand-point-right", audio: "beep1", category: "punch" },
    { id: 2, name: "Cross", type: "strike", color: "#2563eb", text: "CROSS", icon: "fas fa-fist-raised", audio: "beep2", category: "punch" },
    { id: 3, name: "Hook Left", type: "strike", color: "#f59e0b", text: "HOOK L", icon: "fas fa-redo", audio: "beep3", category: "punch" },
    { id: 4, name: "Hook Right", type: "strike", color: "#f59e0b", text: "HOOK R", icon: "fas fa-redo", audio: "beep4", category: "punch" },
    { id: 5, name: "Uppercut Left", type: "strike", color: "#10b981", text: "UPPER L", icon: "fas fa-arrow-up", audio: "beep5", category: "punch" },
    { id: 6, name: "Uppercut Right", type: "strike", color: "#10b981", text: "UPPER R", icon: "fas fa-arrow-up", audio: "beep6", category: "punch" },
    { id: 7, name: "Overhand Right", type: "strike", color: "#f97316", text: "OVERHAND", icon: "fas fa-hand-rock", audio: "beep7", category: "punch" },
    
    // Elbows
    { id: 8, name: "Forward Elbow", type: "elbow", color: "#dc2626", text: "ELBOW F", icon: "fas fa-hand-sparkles", audio: "clap1", category: "elbow" },
    { id: 9, name: "Horizontal Elbow L", type: "elbow", color: "#2563eb", text: "ELBOW H L", icon: "fas fa-hand-sparkles", audio: "clap2", category: "elbow" },
    { id: 10, name: "Horizontal Elbow R", type: "elbow", color: "#f59e0b", text: "ELBOW H R", icon: "fas fa-hand-sparkles", audio: "clap3", category: "elbow" },
    { id: 11, name: "Downward Elbow", type: "elbow", color: "#10b981", text: "ELBOW D", icon: "fas fa-hand-sparkles", audio: "clap4", category: "elbow" },
    
    // Kicks
    { id: 12, name: "Front Kick", type: "kick", color: "#ec4899", text: "FRONT KICK", icon: "fas fa-running", audio: "beep8", category: "kick" },
    { id: 13, name: "Side Kick Left", type: "kick", color: "#06b6d4", text: "SIDE KICK L", icon: "fas fa-running", audio: "beep9", category: "kick" },
    { id: 14, name: "Side Kick Right", type: "kick", color: "#06b6d4", text: "SIDE KICK R", icon: "fas fa-running", audio: "beep10", category: "kick" },
    { id: 15, name: "Roundhouse Kick L", type: "kick", color: "#f97316", text: "ROUNDHOUSE L", icon: "fas fa-running", audio: "beep11", category: "kick" },
    { id: 16, name: "Roundhouse Kick R", type: "kick", color: "#f97316", text: "ROUNDHOUSE R", icon: "fas fa-running", audio: "beep12", category: "kick" },
    { id: 17, name: "Back Kick", type: "kick", color: "#8b5cf6", text: "BACK KICK", icon: "fas fa-running", audio: "beep13", category: "kick" },
    { id: 18, name: "Low Kick Left", type: "kick", color: "#92400e", text: "LOW KICK L", icon: "fas fa-running", audio: "beep14", category: "kick" },
    { id: 19, name: "Low Kick Right", type: "kick", color: "#92400e", text: "LOW KICK R", icon: "fas fa-running", audio: "beep15", category: "kick" },
    
    // Knees
    { id: 20, name: "Straight Knee", type: "knee", color: "#dc2626", text: "STRAIGHT KNEE", icon: "fas fa-arrow-up", audio: "clap5", category: "knee" },
    { id: 21, name: "Diagonal Knee", type: "knee", color: "#2563eb", text: "DIAGONAL KNEE", icon: "fas fa-arrow-up", audio: "clap6", category: "knee" },
    { id: 22, name: "Flying Knee", type: "knee", color: "#f59e0b", text: "FLYING KNEE", icon: "fas fa-arrow-up", audio: "clap7", category: "knee" },
    
    // Defense
    { id: 23, name: "Slip Left", type: "defense", color: "#f97316", text: "SLIP L", icon: "fas fa-user-shield", audio: "clap8", category: "defense" },
    { id: 24, name: "Slip Right", type: "defense", color: "#f97316", text: "SLIP R", icon: "fas fa-user-shield", audio: "clap9", category: "defense" },
    { id: 25, name: "Bob & Weave", type: "defense", color: "#10b981", text: "BOB WEAVE", icon: "fas fa-user-shield", audio: "clap10", category: "defense" },
    { id: 26, name: "Pull Back", type: "defense", color: "#8b5cf6", text: "PULL BACK", icon: "fas fa-user-shield", audio: "clap11", category: "defense" },
    { id: 27, name: "Tilt/Lean Back", type: "defense", color: "#92400e", text: "TILT BACK", icon: "fas fa-user-shield", audio: "clap12", category: "defense" },
    { id: 28, name: "High Block", type: "defense", color: "#2563eb", text: "HIGH BLOCK", icon: "fas fa-shield-alt", audio: "beep16", category: "defense" },
    { id: 29, name: "Low Block", type: "defense", color: "#dc2626", text: "LOW BLOCK", icon: "fas fa-shield-alt", audio: "beep17", category: "defense" },
    { id: 30, name: "Parry Left", type: "defense", color: "#10b981", text: "PARRY L", icon: "fas fa-hand-paper", audio: "beep18", category: "defense" },
    { id: 31, name: "Parry Right", type: "defense", color: "#10b981", text: "PARRY R", icon: "fas fa-hand-paper", audio: "beep19", category: "defense" },
    { id: 32, name: "Cover Up", type: "defense", color: "#f59e0b", text: "COVER UP", icon: "fas fa-user-shield", audio: "beep20", category: "defense" },
    
    // Footwork
    { id: 33, name: "Step Forward", type: "footwork", color: "#10b981", text: "STEP FWD", icon: "fas fa-shoe-prints", audio: "beep21", category: "footwork" },
    { id: 34, name: "Step Backward", type: "footwork", color: "#dc2626", text: "STEP BACK", icon: "fas fa-shoe-prints", audio: "beep22", category: "footwork" },
    { id: 35, name: "Side Step Left", type: "footwork", color: "#f97316", text: "SIDE STEP L", icon: "fas fa-shoe-prints", audio: "beep23", category: "footwork" },
    { id: 36, name: "Side Step Right", type: "footwork", color: "#f97316", text: "SIDE STEP R", icon: "fas fa-shoe-prints", audio: "beep24", category: "footwork" },
    { id: 37, name: "Pivot Left", type: "footwork", color: "#92400e", text: "PIVOT L", icon: "fas fa-shoe-prints", audio: "beep25", category: "footwork" },
    { id: 38, name: "Pivot Right", type: "footwork", color: "#92400e", text: "PIVOT R", icon: "fas fa-shoe-prints", audio: "beep26", category: "footwork" },
    { id: 39, name: "Shuffle Forward", type: "footwork", color: "#10b981", text: "SHUFFLE FWD", icon: "fas fa-shoe-prints", audio: "beep27", category: "footwork" },
    { id: 40, name: "Shuffle Backward", type: "footwork", color: "#dc2626", text: "SHUFFLE BACK", icon: "fas fa-shoe-prints", audio: "beep28", category: "footwork" },
    { id: 41, name: "Circle Left", type: "footwork", color: "#06b6d4", text: "CIRCLE L", icon: "fas fa-compass", audio: "beep29", category: "footwork" },
    { id: 42, name: "Circle Right", type: "footwork", color: "#06b6d4", text: "CIRCLE R", icon: "fas fa-compass", audio: "beep30", category: "footwork" },
    { id: 43, name: "Quick Retreat", type: "footwork", color: "#8b5cf6", text: "QUICK RETREAT", icon: "fas fa-shoe-prints", audio: "clap13", category: "footwork" }
];

// ========== 30-DAY BOXING PLAN DATA ==========
const boxingPlan = {
    1: {
        title: "JAB + BASIC DEFENSE",
        focus: "Fundamentals",
        duration: "25-35 minutes",
        intensity: "Beginner",
        rounds: 5,
        roundDuration: 180,
        restBetweenRounds: 60,
        stimulusDuration: 1.2,
        delayBetween: 0.4,
        pattern: "random",
        techniques: ["jab", "cross", "slip-left", "slip-right", "high-block", "low-block"],
        exercises: [
            {
                name: "Jab Practice",
                description: "Shadow box focusing on perfect jab form",
                duration: "5 min",
                sets: "1",
                focus: "Form & Technique"
            },
            {
                name: "Basic Defense Drills",
                description: "Practice slipping and blocking",
                duration: "8 min",
                sets: "3",
                focus: "Reaction Time"
            },
            {
                name: "Jab-Cross Combos",
                description: "Practice 1-2 combinations",
                duration: "7 min",
                sets: "4",
                focus: "Combination"
            },
            {
                name: "Footwork Basics",
                description: "Step forward/backward with punches",
                duration: "5 min",
                sets: "2",
                focus: "Movement"
            }
        ]
    },
    2: {
        title: "CROSS + PULL-BACK DEFENSE",
        focus: "Power Punches",
        duration: "30-40 minutes",
        intensity: "Beginner",
        rounds: 6,
        roundDuration: 180,
        restBetweenRounds: 60,
        stimulusDuration: 1.2,
        delayBetween: 0.4,
        pattern: "alternating",
        techniques: ["jab", "cross", "slip-left", "slip-right", "pull-back", "bob-weave"],
        exercises: [
            {
                name: "Cross Power Practice",
                description: "Focus on generating power from hips",
                duration: "6 min",
                sets: "1",
                focus: "Power Generation"
            },
            {
                name: "Pull-back Defense",
                description: "Practice avoiding punches by pulling back",
                duration: "10 min",
                sets: "4",
                focus: "Distance Management"
            },
            {
                name: "Jab-Cross-Hook Combo",
                description: "Basic 3-punch combinations",
                duration: "8 min",
                sets: "4",
                focus: "Combination Flow"
            },
            {
                name: "Defensive Footwork",
                description: "Step back with defense",
                duration: "6 min",
                sets: "3",
                focus: "Defensive Movement"
            }
        ]
    },
    3: {
        title: "HOOKS + BOB & WEAVE",
        focus: "Angles & Head Movement",
        duration: "35-45 minutes",
        intensity: "Intermediate",
        rounds: 7,
        roundDuration: 180,
        restBetweenRounds: 45,
        stimulusDuration: 1.0,
        delayBetween: 0.3,
        pattern: "alternating",
        techniques: ["hook-left", "hook-right", "bob-weave", "slip-left", "slip-right", "pivot-left", "pivot-right"],
        exercises: [
            {
                name: "Hook Technique",
                description: "Perfect hook form from both sides",
                duration: "8 min",
                sets: "1",
                focus: "Form & Technique"
            },
            {
                name: "Bob & Weave Drills",
                description: "Practice ducking under imaginary punches",
                duration: "12 min",
                sets: "5",
                focus: "Head Movement"
            },
            {
                name: "Hook Combinations",
                description: "Incorporate hooks into combos",
                duration: "10 min",
                sets: "4",
                focus: "Combination"
            },
            {
                name: "Angular Footwork",
                description: "Pivot with hooks",
                duration: "5 min",
                sets: "3",
                focus: "Angles"
            }
        ]
    },
    4: {
        title: "UPPERCUTS + BODY SHOTS",
        focus: "Close Range",
        duration: "40-50 minutes",
        intensity: "Intermediate",
        rounds: 8,
        roundDuration: 180,
        restBetweenRounds: 45,
        stimulusDuration: 1.0,
        delayBetween: 0.3,
        pattern: "combo",
        techniques: ["uppercut-left", "uppercut-right", "slip-left", "slip-right", "high-block", "low-block"],
        exercises: [
            {
                name: "Uppercut Form",
                description: "Practice uppercuts from close range",
                duration: "10 min",
                sets: "1",
                focus: "Close Range"
            },
            {
                name: "Body Attack Combinations",
                description: "Practice body-head combinations",
                duration: "15 min",
                sets: "5",
                focus: "Body Shots"
            },
            {
                name: "Close Range Defense",
                description: "Blocking at close range",
                duration: "10 min",
                sets: "4",
                focus: "Close Defense"
            },
            {
                name: "Inside Fighting",
                description: "Footwork for infighting",
                duration: "5 min",
                sets: "3",
                focus: "Inside Movement"
            }
        ]
    },
    5: {
        title: "COMBOS + FOOTWORK",
        focus: "Integration",
        duration: "45-55 minutes",
        intensity: "Intermediate",
        rounds: 8,
        roundDuration: 210,
        restBetweenRounds: 45,
        stimulusDuration: 0.9,
        delayBetween: 0.3,
        pattern: "combo",
        techniques: ["jab", "cross", "hook-left", "hook-right", "step-forward", "step-backward", "side-step-left", "side-step-right"],
        exercises: [
            {
                name: "Combo Mastery",
                description: "Practice 4-5 punch combinations",
                duration: "15 min",
                sets: "1",
                focus: "Combo Flow"
            },
            {
                name: "Advanced Footwork",
                description: "Footwork patterns with punches",
                duration: "20 min",
                sets: "6",
                focus: "Movement Integration"
            },
            {
                name: "Defense & Counter",
                description: "Defend then counter attack",
                duration: "10 min",
                sets: "5",
                focus: "Counter-punching"
            },
            {
                name: "Speed Drills",
                description: "Fast combinations",
                duration: "5 min",
                sets: "3",
                focus: "Speed"
            }
        ]
    },
    6: {
        title: "REVIEW WEEK 1",
        focus: "Fundamentals Review",
        duration: "50-60 minutes",
        intensity: "Intermediate",
        rounds: 10,
        roundDuration: 180,
        restBetweenRounds: 30,
        stimulusDuration: 0.9,
        delayBetween: 0.3,
        pattern: "random",
        techniques: ["jab", "cross", "slip-left", "slip-right", "high-block", "low-block", "hook-left", "hook-right", "uppercut-left", "uppercut-right"],
        exercises: [
            {
                name: "Week 1 Review",
                description: "All techniques from days 1-5",
                duration: "25 min",
                sets: "1",
                focus: "Review"
            },
            {
                name: "Combo Integration",
                description: "Combine all learned techniques",
                duration: "15 min",
                sets: "5",
                focus: "Integration"
            },
            {
                name: "Stamina Building",
                description: "Longer rounds with basics",
                duration: "10 min",
                sets: "3",
                focus: "Stamina"
            }
        ]
    },
    7: {
        title: "ADVANCED DEFENSE",
        focus: "Defensive Mastery",
        duration: "55-65 minutes",
        intensity: "Advanced",
        rounds: 10,
        roundDuration: 180,
        restBetweenRounds: 30,
        stimulusDuration: 0.8,
        delayBetween: 0.2,
        pattern: "alternating",
        techniques: ["slip-left", "slip-right", "bob-weave", "pull-back", "parry-left", "parry-right", "cover-up"],
        exercises: [
            {
                name: "Advanced Slip Drills",
                description: "Multiple punch slipping",
                duration: "20 min",
                sets: "6",
                focus: "Multiple Defense"
            },
            {
                name: "Parry & Counter",
                description: "Practice parrying attacks",
                duration: "15 min",
                sets: "5",
                focus: "Parry Technique"
            },
            {
                name: "Defensive Footwork",
                description: "Movement while defending",
                duration: "10 min",
                sets: "4",
                focus: "Movement"
            },
            {
                name: "Counter Combinations",
                description: "Defend then attack",
                duration: "10 min",
                sets: "4",
                focus: "Counter-attack"
            }
        ]
    },
    8: {
        title: "FOOTWORK MASTERY",
        focus: "Movement & Angles",
        duration: "60-70 minutes",
        intensity: "Advanced",
        rounds: 12,
        roundDuration: 180,
        restBetweenRounds: 30,
        stimulusDuration: 0.8,
        delayBetween: 0.2,
        pattern: "alternating",
        techniques: ["step-forward", "step-backward", "side-step-left", "side-step-right", "pivot-left", "pivot-right", "circle-left", "circle-right"],
        exercises: [
            {
                name: "Footwork Fundamentals",
                description: "Master all basic movements",
                duration: "20 min",
                sets: "1",
                focus: "Movement Precision"
            },
            {
                name: "Angular Movement",
                description: "Create angles with footwork",
                duration: "15 min",
                sets: "5",
                focus: "Angle Creation"
            },
            {
                name: "Movement Combinations",
                description: "Combine different footwork patterns",
                duration: "15 min",
                sets: "5",
                focus: "Flow"
            },
            {
                name: "Footwork & Striking",
                description: "Integrate movement with punches",
                duration: "10 min",
                sets: "4",
                focus: "Integration"
            }
        ]
    },
    9: {
        title: "POWER DEVELOPMENT",
        focus: "Power Punches",
        duration: "65-75 minutes",
        intensity: "Advanced",
        rounds: 10,
        roundDuration: 210,
        restBetweenRounds: 45,
        stimulusDuration: 0.8,
        delayBetween: 0.2,
        pattern: "combo",
        techniques: ["cross", "hook-left", "hook-right", "uppercut-left", "uppercut-right", "overhand-right"],
        exercises: [
            {
                name: "Power Generation",
                description: "Focus on hip rotation and weight transfer",
                duration: "20 min",
                sets: "1",
                focus: "Power Mechanics"
            },
            {
                name: "Power Combinations",
                description: "Practice powerful combos",
                duration: "20 min",
                sets: "5",
                focus: "Power Flow"
            },
            {
                name: "Heavy Bag Simulation",
                description: "Imagine hitting heavy bag",
                duration: "15 min",
                sets: "4",
                focus: "Power Delivery"
            },
            {
                name: "Recovery & Reset",
                description: "Reset after power shots",
                duration: "10 min",
                sets: "3",
                focus: "Recovery"
            }
        ]
    },
    10: {
        title: "SPEED & ACCURACY",
        focus: "Precision Striking",
        duration: "60-70 minutes",
        intensity: "Advanced",
        rounds: 12,
        roundDuration: 180,
        restBetweenRounds: 30,
        stimulusDuration: 0.7,
        delayBetween: 0.2,
        pattern: "random",
        techniques: ["jab", "cross", "hook-left", "hook-right", "uppercut-left", "uppercut-right"],
        exercises: [
            {
                name: "Speed Drills",
                description: "Max speed punches with perfect form",
                duration: "20 min",
                sets: "1",
                focus: "Speed"
            },
            {
                name: "Accuracy Training",
                description: "Focus on hitting specific targets",
                duration: "20 min",
                sets: "5",
                focus: "Accuracy"
            },
            {
                name: "Speed Combinations",
                description: "Fast combos with precision",
                duration: "15 min",
                sets: "5",
                focus: "Speed & Accuracy"
            },
            {
                name: "Recovery",
                description: "Light shadow boxing",
                duration: "5 min",
                sets: "1",
                focus: "Active Recovery"
            }
        ]
    },
    11: getDefaultPlan(11),
    12: getDefaultPlan(12),
    13: getDefaultPlan(13),
    14: getDefaultPlan(14),
    15: getDefaultPlan(15),
    16: getDefaultPlan(16),
    17: getDefaultPlan(17),
    18: getDefaultPlan(18),
    19: getDefaultPlan(19),
    20: getDefaultPlan(20),
    21: getDefaultPlan(21),
    22: getDefaultPlan(22),
    23: getDefaultPlan(23),
    24: getDefaultPlan(24),
    25: getDefaultPlan(25),
    26: getDefaultPlan(26),
    27: getDefaultPlan(27),
    28: getDefaultPlan(28),
    29: getDefaultPlan(29),
    30: {
        title: "GRADUATION DAY - COMPLETE MMA",
        focus: "Full Integration",
        duration: "75-90 minutes",
        intensity: "Elite",
        rounds: 15,
        roundDuration: 180,
        restBetweenRounds: 30,
        stimulusDuration: 0.6,
        delayBetween: 0.1,
        pattern: "random",
        techniques: getTechniquesForDay(30),
        exercises: [
            {
                name: "Warm-up",
                description: "Complete full-body warm-up",
                duration: "15 min",
                sets: "1",
                focus: "Preparation"
            },
            {
                name: "Striking Mastery",
                description: "All punch combinations",
                duration: "20 min",
                sets: "1",
                focus: "Striking"
            },
            {
                name: "Defensive Excellence",
                description: "Full defensive repertoire",
                duration: "15 min",
                sets: "1",
                focus: "Defense"
            },
            {
                name: "Footwork Symphony",
                description: "Advanced movement patterns",
                duration: "15 min",
                sets: "1",
                focus: "Movement"
            },
            {
                name: "Fight Simulation",
                description: "Free-form shadow boxing",
                duration: "15 min",
                sets: "1",
                focus: "Integration"
            },
            {
                name: "Cool Down",
                description: "Reflection and stretch",
                duration: "10 min",
                sets: "1",
                focus: "Recovery"
            }
        ]
    }
};

// ========== APP STATE ==========
let currentSession = {
    running: false,
    currentRound: 1,
    totalRounds: 5,
    roundDuration: 180,
    roundTimeLeft: 180,
    stimulusDuration: 1.0,
    delayBetween: 0.3,
    selectedTechniques: ['jab', 'cross', 'hook-left', 'hook-right', 'slip-left', 'slip-right'],
    pattern: 'random',
    customCombo: [],
    techniqueCount: 0,
    sessionStartTime: null,
    sessionTimer: null,
    roundTimer: null,
    stimulusTimer: null,
    delayTimer: null,
    currentTechniqueIndex: 0,
    techniqueSequence: [],
    stats: {
        techniquesDisplayed: 0,
        totalDisplayTime: 0,
        sessionStartTime: null,
        techniqueDistribution: {}
    }
};

// ========== 30-DAY PLAN STATE ==========
let currentDay = 1;
let completedDays = new Set();

// DOM Elements
const techniqueNameLarge = document.getElementById('technique-name-large');
const techniqueIconLarge = document.getElementById('technique-icon-large');
const techniqueCategory = document.getElementById('technique-category');
const mainStimulusCircle = document.getElementById('main-stimulus-circle');
const countdownRing = document.getElementById('countdown-ring').querySelector('.countdown-fill');
const techniqueNumber = document.getElementById('technique-number');
const totalTechniquesDisplay = document.getElementById('total-techniques-display');
const nextTechnique = document.getElementById('next-technique');
const roundTimer = document.getElementById('round-timer');
const currentRound = document.getElementById('current-round');
const sequenceCircles = document.getElementById('sequence-circles');
const sequencePosition = document.getElementById('sequence-position');
const sequenceTotal = document.getElementById('sequence-total');
const nextTimer = document.getElementById('next-timer');
const sequenceProgress = document.getElementById('sequence-progress');
const roundProgress = document.getElementById('round-progress');
const roundPercent = document.getElementById('round-percent');
const sessionProgress = document.getElementById('session-progress');
const sessionPercent = document.getElementById('session-percent');
const techniquesDisplayed = document.getElementById('techniques-displayed');
const avgDisplayTime = document.getElementById('avg-display-time');
const sessionIntensity = document.getElementById('session-intensity');
const intensityTrend = document.getElementById('intensity-trend');
const caloriesBurned = document.getElementById('calories-burned');
const caloriesRate = document.getElementById('calories-rate');
const techniquesRate = document.getElementById('techniques-rate');
const distributionChart = document.getElementById('distribution-chart');
const distributionLegend = document.getElementById('distribution-legend');
const currentTechniqueHeader = document.getElementById('current-technique');
const totalTechniques = document.getElementById('total-techniques');
const sessionTime = document.getElementById('session-time');

// Audio Elements
const beepSound = document.getElementById('beep-sound');
const roundBellSound = document.getElementById('round-bell-sound');
const countdownSound = document.getElementById('countdown-sound');

// ========== UTILITY FUNCTIONS ==========
function getDefaultPlan(day) {
    const focusAreas = [
        "Striking Precision",
        "Defensive Reflexes",
        "Footwork Mastery",
        "Combo Creativity",
        "Power Development",
        "Speed Training",
        "Endurance Building",
        "Fight Simulation"
    ];
    
    const intensityLevels = ["Intermediate", "Advanced", "Elite"];
    const intensity = day < 15 ? "Intermediate" : day < 25 ? "Advanced" : "Elite";
    
    // Calculate rounds based on day progression
    const baseRounds = 8;
    const additionalRounds = Math.floor((day - 1) / 3);
    const totalRounds = Math.min(12, baseRounds + additionalRounds);
    
    // Calculate stimulus speed based on day
    const baseStimulus = 1.0;
    const stimulusReduction = Math.min(0.4, Math.floor((day - 1) / 7) * 0.1);
    const stimulusDuration = Math.max(0.6, baseStimulus - stimulusReduction);
    
    return {
        title: `DAY ${day} - ${focusAreas[(day - 1) % focusAreas.length].toUpperCase()}`,
        focus: focusAreas[(day - 1) % focusAreas.length],
        duration: `${50 + day * 2}-${60 + day * 2} minutes`,
        intensity: intensity,
        rounds: totalRounds,
        roundDuration: 180,
        restBetweenRounds: 45,
        stimulusDuration: stimulusDuration,
        delayBetween: Math.max(0.1, 0.3 - (Math.floor((day - 1) / 10) * 0.1)),
        pattern: "random",
        techniques: getTechniquesForDay(day),
        exercises: [
            {
                name: "Warm-up & Fundamentals",
                description: "Review basic techniques",
                duration: "10 min",
                sets: "1",
                focus: "Fundamentals"
            },
            {
                name: "Focus Area Drills",
                description: "Specific focus training",
                duration: "20 min",
                sets: "5",
                focus: "Specialization"
            },
            {
                name: "Combo Development",
                description: "Create and practice new combinations",
                duration: "15 min",
                sets: "4",
                focus: "Creativity"
            },
            {
                name: "Conditioning",
                description: "Stamina and endurance work",
                duration: "10 min",
                sets: "3",
                focus: "Conditioning"
            },
            {
                name: "Cool Down",
                description: "Light technique review",
                duration: "5 min",
                sets: "1",
                focus: "Recovery"
            }
        ]
    };
}

function getTechniquesForDay(day) {
    if (day <= 5) {
        return ["jab", "cross", "hook-left", "hook-right", "slip-left", "slip-right", "high-block", "low-block"];
    } else if (day <= 10) {
        return ["jab", "cross", "hook-left", "hook-right", "uppercut-left", "uppercut-right", 
                "slip-left", "slip-right", "bob-weave", "pull-back", "parry-left", "parry-right"];
    } else if (day <= 20) {
        return stimulusData
            .filter(t => ['strike', 'defense', 'footwork'].includes(t.type))
            .map(t => t.name.toLowerCase().replace(/ /g, '-'))
            .slice(0, 15 + Math.floor(day / 2));
    } else {
        return stimulusData.map(t => t.name.toLowerCase().replace(/ /g, '-'));
    }
}

function getTechniqueByName(name) {
    return stimulusData.find(t => t.name === name);
}

function getSelectedStimulusData() {
    return stimulusData.filter(technique => {
        const techniqueKey = technique.name.toLowerCase().replace(/ /g, '-');
        return currentSession.selectedTechniques.includes(techniqueKey);
    });
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('🥊 Auto Stimulus System Initializing...');
    
    // Load saved settings
    loadSettings();
    
    // Initialize 30-day plan
    initializeThirtyDayPlan();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize technique selection
    initializeTechniqueSelection();
    
    // Generate initial sequence
    generateTechniqueSequence();
    
    // Update displays
    updateAllDisplays();
    
    console.log('✅ Auto Stimulus System Ready!');
});

// ========== SETTINGS MANAGEMENT ==========
function loadSettings() {
    const savedSettings = localStorage.getItem('stimulusSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        // Apply settings to sliders
        document.getElementById('stimulus-duration').value = settings.stimulusDuration || 1.0;
        document.getElementById('stimulus-delay').value = settings.delayBetween || 0.3;
        document.getElementById('total-rounds').value = settings.totalRounds || 5;
        document.getElementById('round-duration').value = settings.roundDuration || 180;
        document.getElementById('beep-volume').value = settings.beepVolume || 70;
        document.getElementById('text-size').value = settings.textSize || 32;
        
        // Apply toggles
        document.getElementById('round-bell').checked = settings.roundBell !== false;
        document.getElementById('visual-pulse').checked = settings.visualPulse !== false;
        
        // Update current session
        currentSession.stimulusDuration = settings.stimulusDuration || 1.0;
        currentSession.delayBetween = settings.delayBetween || 0.3;
        currentSession.totalRounds = settings.totalRounds || 5;
        currentSession.roundDuration = settings.roundDuration || 180;
        currentSession.roundTimeLeft = settings.roundDuration || 180;
        
        // Update display values
        updateSettingDisplays();
        
        // Load selected techniques if available
        if (settings.selectedTechniques) {
            currentSession.selectedTechniques = settings.selectedTechniques;
        }
        
        // Load pattern if available
        if (settings.pattern) {
            currentSession.pattern = settings.pattern;
        }
    }
}

function saveSettings() {
    const settings = {
        stimulusDuration: currentSession.stimulusDuration,
        delayBetween: currentSession.delayBetween,
        totalRounds: currentSession.totalRounds,
        roundDuration: currentSession.roundDuration,
        beepVolume: document.getElementById('beep-volume').value,
        textSize: document.getElementById('text-size').value,
        roundBell: document.getElementById('round-bell').checked,
        visualPulse: document.getElementById('visual-pulse').checked,
        selectedTechniques: currentSession.selectedTechniques,
        pattern: currentSession.pattern,
        customCombo: currentSession.customCombo,
        lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem('stimulusSettings', JSON.stringify(settings));
}

function updateSettingDisplays() {
    document.getElementById('duration-value').textContent = `${currentSession.stimulusDuration}s`;
    document.getElementById('delay-value').textContent = `${currentSession.delayBetween}s`;
    document.getElementById('rounds-value').textContent = `${currentSession.totalRounds} Rounds`;
    
    const minutes = Math.floor(currentSession.roundDuration / 60);
    const seconds = currentSession.roundDuration % 60;
    document.getElementById('round-duration-value').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById('volume-value').textContent = `${document.getElementById('beep-volume').value}%`;
    document.getElementById('text-size-value').textContent = `${document.getElementById('text-size').value}px`;
}

// ========== 30-DAY PLAN FUNCTIONS ==========
function initializeThirtyDayPlan() {
    // Load saved progress
    const savedProgress = localStorage.getItem('boxingPlanProgress');
    if (savedProgress) {
        const progress = JSON.parse(savedProgress);
        currentDay = progress.currentDay || 1;
        completedDays = new Set(progress.completedDays || []);
    }
    
    // Setup event listeners for day navigation
    document.getElementById('prev-day').addEventListener('click', () => changeDay(-1));
    document.getElementById('next-day').addEventListener('click', () => changeDay(1));
    
    // Add complete day button listener
    const completeDayBtn = document.getElementById('complete-day');
    if (completeDayBtn) {
        completeDayBtn.addEventListener('click', completeDay);
    }
    
    // Add activate plan button listeners
    const activatePlanBtn = document.getElementById('activate-plan');
    const startWithPlanBtn = document.getElementById('start-with-plan');
    
    if (activatePlanBtn) {
        activatePlanBtn.addEventListener('click', activateDailyPlan);
    }
    
    if (startWithPlanBtn) {
        startWithPlanBtn.addEventListener('click', () => {
            activateDailyPlan();
            setTimeout(() => {
                if (!currentSession.running) {
                    startSession();
                }
            }, 500);
        });
    }
    
    // Load current day
    loadDay(currentDay);
}

function loadDay(day) {
    currentDay = Math.max(1, Math.min(30, day));
    
    // Get day plan
    const dayPlan = boxingPlan[currentDay] || getDefaultPlan(currentDay);
    
    // Update UI
    document.getElementById('current-day').textContent = currentDay;
    document.getElementById('day-title').textContent = dayPlan.title;
    
    // Update progress
    updatePlanProgress();
    
    // Update exercises list
    updateDayExercises(dayPlan.exercises);
    
    // Auto-select techniques for this day
    autoSelectTechniquesForDay(dayPlan.techniques);
    
    // Generate sequence with day's techniques
    generateTechniqueSequence();
    
    // Save progress
    savePlanProgress();
}

function changeDay(delta) {
    const newDay = currentDay + delta;
    if (newDay >= 1 && newDay <= 30) {
        loadDay(newDay);
    }
}

function updatePlanProgress() {
    const progressPercent = (currentDay / 30) * 100;
    const completedCount = completedDays.size;
    
    document.getElementById('plan-progress').style.width = `${progressPercent}%`;
    document.getElementById('days-completed').textContent = completedCount;
    document.getElementById('plan-percent').textContent = `${progressPercent.toFixed(1)}%`;
    
    // Update day number in header
    const subtitle = document.querySelector('.logo .subtitle');
    if (subtitle) {
        subtitle.textContent = `30-Day Boxing: Day ${currentDay}`;
    }
}

function updateDayExercises(exercises) {
    const exercisesContainer = document.getElementById('day-exercises');
    if (!exercisesContainer) return;
    
    exercisesContainer.innerHTML = '';
    
    exercises.forEach((exercise, index) => {
        const exerciseEl = document.createElement('div');
        exerciseEl.className = 'exercise-item-plan';
        exerciseEl.innerHTML = `
            <h5>
                <i class="fas fa-dumbbell"></i>
                ${exercise.name}
            </h5>
            <p>${exercise.description}</p>
            <div class="exercise-meta">
                <span><i class="fas fa-clock"></i> ${exercise.duration}</span>
                <span><i class="fas fa-redo"></i> ${exercise.sets} sets</span>
                <span><i class="fas fa-bullseye"></i> ${exercise.focus}</span>
            </div>
        `;
        
        // Mark as completed if in completed set
        const exerciseKey = `day${currentDay}-ex${index}`;
        if (completedDays.has(exerciseKey)) {
            exerciseEl.classList.add('completed');
        }
        
        // Add click to toggle completion
        exerciseEl.addEventListener('click', () => {
            toggleExerciseCompletion(exerciseKey, exerciseEl);
        });
        
        exercisesContainer.appendChild(exerciseEl);
    });
}

function toggleExerciseCompletion(exerciseKey, element) {
    if (completedDays.has(exerciseKey)) {
        completedDays.delete(exerciseKey);
        element.classList.remove('completed');
    } else {
        completedDays.add(exerciseKey);
        element.classList.add('completed');
    }
    savePlanProgress();
}

function autoSelectTechniquesForDay(techniques) {
    // Clear current selection
    currentSession.selectedTechniques = [];
    
    // Select techniques for this day
    techniques.forEach(technique => {
        if (!currentSession.selectedTechniques.includes(technique)) {
            currentSession.selectedTechniques.push(technique);
        }
    });
    
    // Update checkboxes
    document.querySelectorAll('.technique-checkboxes input').forEach(checkbox => {
        const techniqueKey = checkbox.dataset.technique;
        checkbox.checked = currentSession.selectedTechniques.includes(techniqueKey);
    });
    
    // Save settings
    saveSettings();
}

function savePlanProgress() {
    const progress = {
        currentDay: currentDay,
        completedDays: Array.from(completedDays),
        lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem('boxingPlanProgress', JSON.stringify(progress));
}

function completeDay() {
    // Mark all exercises for current day as completed
    const dayPlan = boxingPlan[currentDay] || getDefaultPlan(currentDay);
    dayPlan.exercises.forEach((_, index) => {
        const exerciseKey = `day${currentDay}-ex${index}`;
        completedDays.add(exerciseKey);
    });
    
    // Move to next day if not last day
    if (currentDay < 30) {
        loadDay(currentDay + 1);
        showNotification('Day completed! Moving to next day.', 'success');
    } else {
        showNotification('🎉 Congratulations! You completed the 30-Day Boxing Plan!', 'success');
    }
    
    savePlanProgress();
    updateDayExercises(dayPlan.exercises);
}

// ========== DAILY PLAN ACTIVATION ==========
function activateDailyPlan() {
    console.log(`🥊 Activating Day ${currentDay} Plan...`);
    
    // Get the day's plan
    const dayPlan = boxingPlan[currentDay] || getDefaultPlan(currentDay);
    
    // 1. Auto-select techniques for this day
    autoSelectTechniquesForDay(dayPlan.techniques);
    
    // 2. Apply exact plan settings if they exist
    if (dayPlan.rounds) {
        currentSession.totalRounds = dayPlan.rounds;
        document.getElementById('total-rounds').value = dayPlan.rounds;
        document.getElementById('rounds-value').textContent = `${dayPlan.rounds} Rounds`;
    }
    
    if (dayPlan.roundDuration) {
        currentSession.roundDuration = dayPlan.roundDuration;
        currentSession.roundTimeLeft = dayPlan.roundDuration;
        document.getElementById('round-duration').value = dayPlan.roundDuration;
        
        const minutes = Math.floor(dayPlan.roundDuration / 60);
        const seconds = dayPlan.roundDuration % 60;
        document.getElementById('round-duration-value').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    if (dayPlan.restBetweenRounds) {
        console.log(`Rest between rounds: ${dayPlan.restBetweenRounds}s`);
    }
    
    if (dayPlan.stimulusDuration) {
        currentSession.stimulusDuration = dayPlan.stimulusDuration;
        document.getElementById('stimulus-duration').value = dayPlan.stimulusDuration;
        document.getElementById('duration-value').textContent = `${dayPlan.stimulusDuration}s`;
    }
    
    if (dayPlan.delayBetween) {
        currentSession.delayBetween = dayPlan.delayBetween;
        document.getElementById('stimulus-delay').value = dayPlan.delayBetween;
        document.getElementById('delay-value').textContent = `${dayPlan.delayBetween}s`;
    }
    
    if (dayPlan.pattern) {
        currentSession.pattern = dayPlan.pattern;
        const patternRadio = document.querySelector(`input[value="${dayPlan.pattern}"]`);
        if (patternRadio) {
            patternRadio.checked = true;
        }
    }
    
    // 3. Update session title
    const sessionTitle = document.getElementById('session-title');
    if (sessionTitle) {
        sessionTitle.textContent = `Day ${currentDay}: ${dayPlan.title}`;
    }
    
    // 4. Generate sequence
    generateTechniqueSequence();
    
    // 5. Update all displays
    updateRoundTimerDisplay();
    updateSessionProgress();
    updateAllDisplays();
    
    // 6. Save settings
    saveSettings();
    
    // 7. Visual feedback
    const planCard = document.querySelector('.thirty-day-plan');
    if (planCard) {
        planCard.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            planCard.style.animation = '';
        }, 500);
    }
    
    // 8. Show notification with plan summary
    const summary = `
        <div style="text-align: left; margin-top: 10px;">
            <div><strong>Focus:</strong> ${dayPlan.focus}</div>
            <div><strong>Duration:</strong> ${dayPlan.duration}</div>
            <div><strong>Intensity:</strong> ${dayPlan.intensity}</div>
            <div><strong>Rounds:</strong> ${currentSession.totalRounds} × ${Math.floor(currentSession.roundDuration/60)}:${(currentSession.roundDuration%60).toString().padStart(2, '0')}</div>
            <div><strong>Techniques:</strong> ${currentSession.selectedTechniques.length}</div>
        </div>
    `;
    
    showNotification(`
        <div>
            <strong>✅ Day ${currentDay} Plan Activated!</strong>
            ${summary}
        </div>
    `, 'success');
    
    // 9. Log details
    console.log(`📋 Day ${currentDay} Plan Activated Successfully`);
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Session control buttons
    document.getElementById('start-session').addEventListener('click', startSession);
    document.getElementById('pause-session').addEventListener('click', pauseSession);
    document.getElementById('reset-session').addEventListener('click', resetSession);
    document.getElementById('next-round').addEventListener('click', nextRound);
    
    // Settings sliders
    document.getElementById('stimulus-duration').addEventListener('input', (e) => {
        currentSession.stimulusDuration = parseFloat(e.target.value);
        document.getElementById('duration-value').textContent = `${currentSession.stimulusDuration}s`;
        saveSettings();
    });
    
    document.getElementById('stimulus-delay').addEventListener('input', (e) => {
        currentSession.delayBetween = parseFloat(e.target.value);
        document.getElementById('delay-value').textContent = `${currentSession.delayBetween}s`;
        saveSettings();
    });
    
    document.getElementById('total-rounds').addEventListener('input', (e) => {
        currentSession.totalRounds = parseInt(e.target.value);
        document.getElementById('rounds-value').textContent = `${currentSession.totalRounds} Rounds`;
        updateSessionProgress();
        saveSettings();
    });
    
    document.getElementById('round-duration').addEventListener('input', (e) => {
        currentSession.roundDuration = parseInt(e.target.value);
        currentSession.roundTimeLeft = currentSession.roundDuration;
        const minutes = Math.floor(currentSession.roundDuration / 60);
        const seconds = currentSession.roundDuration % 60;
        document.getElementById('round-duration-value').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        updateRoundTimerDisplay();
        saveSettings();
    });
    
    // Audio controls
    document.getElementById('beep-volume').addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        beepSound.volume = volume;
        roundBellSound.volume = volume;
        countdownSound.volume = volume;
        document.getElementById('volume-value').textContent = `${e.target.value}%`;
        saveSettings();
    });
    
    document.getElementById('text-size').addEventListener('input', (e) => {
        techniqueNameLarge.style.fontSize = `${e.target.value}px`;
        document.getElementById('text-size-value').textContent = `${e.target.value}px`;
        saveSettings();
    });
    
    // Toggle switches
    document.getElementById('round-bell').addEventListener('change', saveSettings);
    document.getElementById('visual-pulse').addEventListener('change', saveSettings);
    
    // Technique selection
    document.getElementById('select-all').addEventListener('click', selectAllTechniques);
    document.getElementById('deselect-all').addEventListener('click', deselectAllTechniques);
    
    // Pattern selection
    document.querySelectorAll('input[name="pattern"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentSession.pattern = e.target.value;
            generateTechniqueSequence();
            saveSettings();
        });
    });
    
    // Combo builder
    const addTechniqueBtn = document.getElementById('add-technique');
    const clearComboBtn = document.getElementById('clear-combo');
    const saveComboBtn = document.getElementById('save-combo');
    
    if (addTechniqueBtn) {
        addTechniqueBtn.addEventListener('click', addToCombo);
    }
    
    if (clearComboBtn) {
        clearComboBtn.addEventListener('click', clearCombo);
    }
    
    if (saveComboBtn) {
        saveComboBtn.addEventListener('click', saveCombo);
    }
    
    // Reset stats button
    const resetStatsBtn = document.getElementById('reset-stats');
    if (resetStatsBtn) {
        resetStatsBtn.addEventListener('click', resetStats);
    }
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            if (currentSession.running) {
                pauseSession();
            } else {
                startSession();
            }
        }
        
        if (e.code === 'KeyR' && e.ctrlKey) {
            e.preventDefault();
            resetSession();
        }
        
        if (e.code === 'KeyN' && e.ctrlKey) {
            e.preventDefault();
            nextRound();
        }
        
        if (e.code === 'KeyA' && e.ctrlKey) {
            e.preventDefault();
            activateDailyPlan();
        }
        
        if (e.code === 'KeyS' && e.ctrlKey && e.shiftKey) {
            e.preventDefault();
            activateDailyPlan();
            setTimeout(() => {
                if (!currentSession.running) {
                    startSession();
                }
            }, 500);
        }
        
        if (e.code === 'Escape') {
            const modal = document.getElementById('settings-modal');
            if (modal) modal.style.display = 'none';
        }
    });
}

function initializeTechniqueSelection() {
    // Set initial checked state based on selected techniques
    document.querySelectorAll('.technique-checkboxes input').forEach(checkbox => {
        const technique = checkbox.dataset.technique;
        checkbox.checked = currentSession.selectedTechniques.includes(technique);
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                if (!currentSession.selectedTechniques.includes(technique)) {
                    currentSession.selectedTechniques.push(technique);
                }
            } else {
                const index = currentSession.selectedTechniques.indexOf(technique);
                if (index > -1) {
                    currentSession.selectedTechniques.splice(index, 1);
                }
            }
            generateTechniqueSequence();
            saveSettings();
        });
    });
}

function selectAllTechniques() {
    document.querySelectorAll('.technique-checkboxes input').forEach(checkbox => {
        checkbox.checked = true;
        const technique = checkbox.dataset.technique;
        if (!currentSession.selectedTechniques.includes(technique)) {
            currentSession.selectedTechniques.push(technique);
        }
    });
    generateTechniqueSequence();
    saveSettings();
}

function deselectAllTechniques() {
    document.querySelectorAll('.technique-checkboxes input').forEach(checkbox => {
        checkbox.checked = false;
    });
    currentSession.selectedTechniques = [];
    generateTechniqueSequence();
    saveSettings();
}

// ========== TECHNIQUE SEQUENCE FUNCTIONS ==========
function generateTechniqueSequence() {
    if (currentSession.selectedTechniques.length === 0) {
        currentSession.techniqueSequence = [];
        updateSequenceDisplay();
        return;
    }
    
    const techniques = getSelectedStimulusData();
    
    if (currentSession.pattern === 'random') {
        // Generate random sequence of 10 techniques
        currentSession.techniqueSequence = [];
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * techniques.length);
            currentSession.techniqueSequence.push(techniques[randomIndex]);
        }
    } else if (currentSession.pattern === 'alternating') {
        // Alternating left/right techniques
        const leftTechniques = techniques.filter(t => 
            t.text.includes(' L') || t.text.includes('LEFT') || 
            t.name.includes('Left') || t.name.includes('Slip Left')
        );
        const rightTechniques = techniques.filter(t => 
            t.text.includes(' R') || t.text.includes('RIGHT') || 
            t.name.includes('Right') || t.name.includes('Slip Right')
        );
        const otherTechniques = techniques.filter(t => 
            !leftTechniques.includes(t) && !rightTechniques.includes(t)
        );
        
        currentSession.techniqueSequence = [];
        for (let i = 0; i < 10; i++) {
            if (i % 2 === 0 && leftTechniques.length > 0) {
                currentSession.techniqueSequence.push(
                    leftTechniques[Math.floor(Math.random() * leftTechniques.length)]
                );
            } else if (rightTechniques.length > 0) {
                currentSession.techniqueSequence.push(
                    rightTechniques[Math.floor(Math.random() * rightTechniques.length)]
                );
            } else {
                currentSession.techniqueSequence.push(
                    otherTechniques[Math.floor(Math.random() * otherTechniques.length)]
                );
            }
        }
    } else if (currentSession.pattern === 'combo') {
        // Pre-set combos
        const combos = [
            [getTechniqueByName('Jab'), getTechniqueByName('Cross'), getTechniqueByName('Hook Left')],
            [getTechniqueByName('Jab'), getTechniqueByName('Jab'), getTechniqueByName('Cross')],
            [getTechniqueByName('Cross'), getTechniqueByName('Hook Left'), getTechniqueByName('Uppercut Right')],
            [getTechniqueByName('Slip Left'), getTechniqueByName('Cross'), getTechniqueByName('Hook Right')]
        ];
        
        currentSession.techniqueSequence = [];
        while (currentSession.techniqueSequence.length < 10) {
            const combo = combos[Math.floor(Math.random() * combos.length)];
            currentSession.techniqueSequence.push(...combo.filter(t => t));
        }
        currentSession.techniqueSequence = currentSession.techniqueSequence.slice(0, 10);
    } else if (currentSession.pattern === 'custom' && currentSession.customCombo.length > 0) {
        // Custom combo pattern
        currentSession.techniqueSequence = [];
        while (currentSession.techniqueSequence.length < 10) {
            currentSession.techniqueSequence.push(...currentSession.customCombo);
        }
        currentSession.techniqueSequence = currentSession.techniqueSequence.slice(0, 10);
    }
    
    currentSession.currentTechniqueIndex = 0;
    updateSequenceDisplay();
}

function updateSequenceDisplay() {
    if (!sequenceCircles) return;
    
    sequenceCircles.innerHTML = '';
    if (sequenceTotal) sequenceTotal.textContent = currentSession.techniqueSequence.length;
    
    currentSession.techniqueSequence.forEach((technique, index) => {
        const circle = document.createElement('div');
        circle.className = 'sequence-circle';
        circle.style.background = technique.color;
        circle.textContent = technique.text;
        circle.title = technique.name;
        
        if (index === currentSession.currentTechniqueIndex) {
            circle.classList.add('active');
        } else if (index < currentSession.currentTechniqueIndex) {
            circle.classList.add('completed');
        }
        
        sequenceCircles.appendChild(circle);
    });
    
    if (sequencePosition) sequencePosition.textContent = currentSession.currentTechniqueIndex + 1;
    
    if (currentSession.techniqueSequence.length > 0 && currentSession.currentTechniqueIndex < currentSession.techniqueSequence.length) {
        if (nextTechnique) {
            nextTechnique.textContent = currentSession.techniqueSequence[currentSession.currentTechniqueIndex].text;
        }
    }
}

// ========== SESSION CONTROL FUNCTIONS ==========
function startSession() {
    if (currentSession.running) return;
    
    if (currentSession.selectedTechniques.length === 0) {
        showNotification('Please select at least one technique!', 'warning');
        return;
    }
    
    console.log('Starting auto stimulus session...');
    currentSession.running = true;
    currentSession.sessionStartTime = Date.now();
    currentSession.stats.sessionStartTime = Date.now();
    currentSession.stats.techniquesDisplayed = 0;
    currentSession.stats.totalDisplayTime = 0;
    currentSession.stats.techniqueDistribution = {};
    
    // Update control buttons
    document.getElementById('start-session').disabled = true;
    document.getElementById('pause-session').disabled = false;
    document.getElementById('reset-session').disabled = false;
    document.getElementById('next-round').disabled = false;
    
    // Start timers
    startSessionTimer();
    startRoundTimer();
    
    // Show first stimulus
    showNextStimulus();
    
    // Update displays
    updateAllDisplays();
    
    showNotification('Session started!', 'success');
}

function pauseSession() {
    if (!currentSession.running) return;
    
    console.log('Pausing session...');
    currentSession.running = false;
    
    // Clear all timers
    clearInterval(currentSession.stimulusTimer);
    clearInterval(currentSession.delayTimer);
    clearInterval(currentSession.roundTimer);
    clearInterval(currentSession.sessionTimer);
    
    // Update control buttons
    document.getElementById('start-session').disabled = false;
    document.getElementById('pause-session').disabled = true;
    
    // Update displays
    updateAllDisplays();
    
    showNotification('Session paused', 'warning');
}

function resetSession() {
    console.log('Resetting session...');
    
    // Clear all timers
    clearInterval(currentSession.stimulusTimer);
    clearInterval(currentSession.delayTimer);
    clearInterval(currentSession.roundTimer);
    clearInterval(currentSession.sessionTimer);
    
    // Reset session state
    currentSession.running = false;
    currentSession.currentRound = 1;
    currentSession.roundTimeLeft = currentSession.roundDuration;
    currentSession.techniqueCount = 0;
    currentSession.currentTechniqueIndex = 0;
    currentSession.stats = {
        techniquesDisplayed: 0,
        totalDisplayTime: 0,
        sessionStartTime: null,
        techniqueDistribution: {}
    };
    
    // Generate new sequence
    generateTechniqueSequence();
    
    // Update control buttons
    document.getElementById('start-session').disabled = false;
    document.getElementById('pause-session').disabled = true;
    document.getElementById('reset-session').disabled = false;
    document.getElementById('next-round').disabled = false;
    
    // Reset display
    resetStimulusDisplay();
    
    // Update all displays
    updateAllDisplays();
    
    showNotification('Session reset', 'warning');
}

function nextRound() {
    if (currentSession.currentRound < currentSession.totalRounds) {
        currentSession.currentRound++;
        currentSession.roundTimeLeft = currentSession.roundDuration;
        currentSession.currentTechniqueIndex = 0;
        generateTechniqueSequence();
        
        // Play round bell if enabled
        if (document.getElementById('round-bell').checked) {
            roundBellSound.currentTime = 0;
            roundBellSound.play().catch(e => console.log("Audio error:", e));
        }
        
        // Update displays
        updateAllDisplays();
        
        // If session was running, continue
        if (currentSession.running) {
            clearInterval(currentSession.roundTimer);
            startRoundTimer();
            showNextStimulus();
        }
        
        showNotification(`Round ${currentSession.currentRound} started!`, 'success');
    } else {
        // End of session
        pauseSession();
        showNotification('Session complete! All rounds finished.', 'success');
    }
}

function startSessionTimer() {
    currentSession.sessionTimer = setInterval(() => {
        if (currentSession.stats.sessionStartTime) {
            const elapsedSeconds = Math.floor((Date.now() - currentSession.stats.sessionStartTime) / 1000);
            const minutes = Math.floor(elapsedSeconds / 60);
            const seconds = elapsedSeconds % 60;
            if (sessionTime) {
                sessionTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            
            // Update intensity based on pace
            updateIntensityStats();
        }
    }, 1000);
}

function startRoundTimer() {
    currentSession.roundTimer = setInterval(() => {
        currentSession.roundTimeLeft--;
        
        if (currentSession.roundTimeLeft <= 0) {
            clearInterval(currentSession.roundTimer);
            if (currentSession.currentRound < currentSession.totalRounds) {
                // Auto-next round
                nextRound();
            } else {
                // End session
                pauseSession();
                showNotification('Session complete!', 'success');
            }
        }
        
        updateRoundTimerDisplay();
        updateSessionProgress();
    }, 1000);
}

function updateRoundTimerDisplay() {
    const minutes = Math.floor(currentSession.roundTimeLeft / 60);
    const seconds = currentSession.roundTimeLeft % 60;
    if (roundTimer) {
        roundTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    // Update round display
    if (currentRound) {
        currentRound.textContent = `${currentSession.currentRound}/${currentSession.totalRounds}`;
    }
}

// ========== STIMULUS DISPLAY FUNCTIONS ==========
function showNextStimulus() {
    if (!currentSession.running || currentSession.techniqueSequence.length === 0) return;
    
    // Get current technique
    const technique = currentSession.techniqueSequence[currentSession.currentTechniqueIndex];
    
    // Update stimulus display
    updateStimulusDisplay(technique);
    
    // Play audio
    beepSound.currentTime = 0;
    beepSound.play().catch(e => console.log("Audio error:", e));
    
    // Update stats
    currentSession.stats.techniquesDisplayed++;
    currentSession.stats.totalDisplayTime += currentSession.stimulusDuration;
    
    // Update technique distribution
    const type = technique.type;
    currentSession.stats.techniqueDistribution[type] = (currentSession.stats.techniqueDistribution[type] || 0) + 1;
    
    // Update counters
    if (techniqueNumber) techniqueNumber.textContent = currentSession.currentTechniqueIndex + 1;
    if (totalTechniquesDisplay) totalTechniquesDisplay.textContent = currentSession.techniqueSequence.length;
    if (currentTechniqueHeader) currentTechniqueHeader.textContent = currentSession.currentTechniqueIndex + 1;
    if (totalTechniques) totalTechniques.textContent = currentSession.techniqueSequence.length;
    
    // Update sequence display
    updateSequenceDisplay();
    
    // Start stimulus countdown
    startStimulusCountdown(technique);
    
    // Schedule next stimulus
    currentSession.delayTimer = setTimeout(() => {
        if (currentSession.running) {
            // Move to next technique
            currentSession.currentTechniqueIndex++;
            
            if (currentSession.currentTechniqueIndex >= currentSession.techniqueSequence.length) {
                // End of sequence, generate new one
                generateTechniqueSequence();
            }
            
            // Show next stimulus
            showNextStimulus();
        }
    }, (currentSession.stimulusDuration + currentSession.delayBetween) * 1000);
}

function updateStimulusDisplay(technique) {
    // Update main circle
    if (mainStimulusCircle) {
        mainStimulusCircle.querySelector('.circle-inner').style.background = technique.color;
    }
    if (techniqueNameLarge) techniqueNameLarge.textContent = technique.text;
    if (techniqueIconLarge) techniqueIconLarge.innerHTML = `<i class="${technique.icon}"></i>`;
    if (techniqueCategory) techniqueCategory.textContent = technique.type.toUpperCase();
    
    // Apply visual pulse if enabled
    if (document.getElementById('visual-pulse').checked) {
        mainStimulusCircle.classList.add('pulse');
        setTimeout(() => {
            mainStimulusCircle.classList.remove('pulse');
        }, 300);
    }
    
    // Update upcoming sequence
    updateNextTimer();
}

function resetStimulusDisplay() {
    if (mainStimulusCircle) {
        mainStimulusCircle.querySelector('.circle-inner').style.background = 'rgba(30, 41, 59, 0.7)';
    }
    if (techniqueNameLarge) techniqueNameLarge.textContent = 'READY';
    if (techniqueIconLarge) techniqueIconLarge.innerHTML = '<i class="fas fa-play"></i>';
    if (techniqueCategory) techniqueCategory.textContent = 'START';
    if (countdownRing) countdownRing.style.width = '0%';
    if (techniqueNumber) techniqueNumber.textContent = '0';
    if (nextTechnique) nextTechnique.textContent = '---';
}

function startStimulusCountdown(technique) {
    let timeLeft = currentSession.stimulusDuration;
    const totalTime = currentSession.stimulusDuration * 1000;
    const startTime = Date.now();
    
    clearInterval(currentSession.stimulusTimer);
    
    currentSession.stimulusTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed / totalTime) * 100;
        
        // Update countdown ring
        if (countdownRing) {
            countdownRing.style.width = `${progress}%`;
        }
        
        // Update next timer
        const remaining = Math.max(0, currentSession.stimulusDuration - (elapsed / 1000));
        updateNextTimer(remaining);
        
        if (elapsed >= totalTime) {
            clearInterval(currentSession.stimulusTimer);
            if (countdownRing) countdownRing.style.width = '100%';
        }
    }, 50);
}

function updateNextTimer(remaining = null) {
    if (nextTimer && sequenceProgress) {
        if (remaining !== null) {
            nextTimer.textContent = `${remaining.toFixed(1)}s`;
            sequenceProgress.style.width = `${((currentSession.stimulusDuration - remaining) / currentSession.stimulusDuration) * 100}%`;
        } else {
            nextTimer.textContent = `${currentSession.delayBetween}s`;
            sequenceProgress.style.width = '0%';
        }
    }
}

// ========== DISPLAY UPDATE FUNCTIONS ==========
function updateAllDisplays() {
    updateRoundTimerDisplay();
    updateSessionProgress();
    updateStatsDisplay();
    updateDistributionChart();
}

function updateSessionProgress() {
    // Round progress
    const roundProgressPercent = ((currentSession.roundDuration - currentSession.roundTimeLeft) / currentSession.roundDuration) * 100;
    if (roundProgress) roundProgress.style.width = `${roundProgressPercent}%`;
    if (roundPercent) roundPercent.textContent = `${Math.round(roundProgressPercent)}%`;
    
    // Session progress
    const sessionProgressPercent = ((currentSession.currentRound - 1) / currentSession.totalRounds) * 100;
    if (sessionProgress) sessionProgress.style.width = `${sessionProgressPercent}%`;
    if (sessionPercent) sessionPercent.textContent = `${Math.round(sessionProgressPercent)}%`;
}

function updateStatsDisplay() {
    // Techniques displayed
    if (techniquesDisplayed) techniquesDisplayed.textContent = currentSession.stats.techniquesDisplayed;
    
    // Average display time
    const avgTime = currentSession.stats.techniquesDisplayed > 0 
        ? (currentSession.stats.totalDisplayTime / currentSession.stats.techniquesDisplayed).toFixed(1)
        : currentSession.stimulusDuration.toFixed(1);
    if (avgDisplayTime) avgDisplayTime.textContent = `${avgTime}s`;
    
    // Techniques per minute
    if (currentSession.stats.sessionStartTime && techniquesRate) {
        const elapsedMinutes = (Date.now() - currentSession.stats.sessionStartTime) / 60000;
        const rate = elapsedMinutes > 0 
            ? Math.round(currentSession.stats.techniquesDisplayed / elapsedMinutes)
            : 0;
        techniquesRate.textContent = `${rate}/min`;
    }
    
    // Calories burned (rough estimate)
    const calories = Math.round(currentSession.stats.techniquesDisplayed * 0.5);
    if (caloriesBurned) caloriesBurned.textContent = calories;
    
    if (currentSession.stats.sessionStartTime && caloriesRate) {
        const elapsedMinutes = (Date.now() - currentSession.stats.sessionStartTime) / 60000;
        const caloriesPerMin = elapsedMinutes > 0 
            ? Math.round(calories / elapsedMinutes)
            : 0;
        caloriesRate.textContent = `${caloriesPerMin}/min`;
    }
}

function updateIntensityStats() {
    if (currentSession.stats.sessionStartTime && sessionIntensity && intensityTrend) {
        const elapsedMinutes = (Date.now() - currentSession.stats.sessionStartTime) / 60000;
        const techniquesPerMin = elapsedMinutes > 0 
            ? Math.round(currentSession.stats.techniquesDisplayed / elapsedMinutes)
            : 0;
        
        if (techniquesPerMin > 40) {
            sessionIntensity.textContent = 'Very High';
            intensityTrend.textContent = 'Intense';
        } else if (techniquesPerMin > 30) {
            sessionIntensity.textContent = 'High';
            intensityTrend.textContent = 'Fast';
        } else if (techniquesPerMin > 20) {
            sessionIntensity.textContent = 'Medium';
            intensityTrend.textContent = 'Steady';
        } else if (techniquesPerMin > 10) {
            sessionIntensity.textContent = 'Low';
            intensityTrend.textContent = 'Slow';
        } else {
            sessionIntensity.textContent = 'Very Low';
            intensityTrend.textContent = 'Resting';
        }
    }
}

function updateDistributionChart() {
    if (!distributionChart || !distributionLegend) return;
    
    distributionChart.innerHTML = '';
    distributionLegend.innerHTML = '';
    
    const types = Object.keys(currentSession.stats.techniqueDistribution);
    const total = Object.values(currentSession.stats.techniqueDistribution).reduce((a, b) => a + b, 0);
    
    if (total === 0) return;
    
    const colors = {
        'strike': '#dc2626',
        'defense': '#10b981',
        'footwork': '#3b82f6',
        'kick': '#8b5cf6',
        'elbow': '#f59e0b',
        'knee': '#ec4899'
    };
    
    types.forEach(type => {
        const count = currentSession.stats.techniqueDistribution[type];
        const percentage = (count / total) * 100;
        
        // Create bar
        const bar = document.createElement('div');
        bar.className = 'distribution-bar';
        bar.style.background = colors[type] || '#666';
        bar.style.height = `${percentage}%`;
        bar.title = `${type}: ${count} (${percentage.toFixed(1)}%)`;
        distributionChart.appendChild(bar);
        
        // Create legend item
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        
        const colorBox = document.createElement('div');
        colorBox.className = 'legend-color';
        colorBox.style.background = colors[type] || '#666';
        
        const label = document.createElement('span');
        label.textContent = `${type}: ${count} (${percentage.toFixed(1)}%)`;
        
        legendItem.appendChild(colorBox);
        legendItem.appendChild(label);
        distributionLegend.appendChild(legendItem);
    });
}

// ========== COMBO BUILDER FUNCTIONS ==========
function addToCombo() {
    const techniqueSelect = document.createElement('select');
    techniqueSelect.className = 'combo-technique-select';
    
    getSelectedStimulusData().forEach(technique => {
        const option = document.createElement('option');
        option.value = technique.name;
        option.textContent = technique.name;
        techniqueSelect.appendChild(option);
    });
    
    const comboPreview = document.getElementById('combo-preview');
    if (!comboPreview) return;
    
    const techniqueDiv = document.createElement('div');
    techniqueDiv.className = 'combo-technique';
    techniqueDiv.appendChild(techniqueSelect);
    comboPreview.appendChild(techniqueDiv);
}

function clearCombo() {
    const comboPreview = document.getElementById('combo-preview');
    if (comboPreview) {
        comboPreview.innerHTML = '';
    }
    currentSession.customCombo = [];
}

function saveCombo() {
    const comboPreview = document.getElementById('combo-preview');
    if (!comboPreview) return;
    
    const selectedTechniques = [];
    
    comboPreview.querySelectorAll('select').forEach(select => {
        const techniqueName = select.value;
        const technique = getTechniqueByName(techniqueName);
        if (technique) {
            selectedTechniques.push(technique);
        }
    });
    
    if (selectedTechniques.length > 0) {
        currentSession.customCombo = selectedTechniques;
        currentSession.pattern = 'custom';
        const customRadio = document.querySelector('input[value="custom"]');
        if (customRadio) customRadio.checked = true;
        generateTechniqueSequence();
        saveSettings();
        showNotification('Combo saved!', 'success');
    } else {
        showNotification('Please add at least one technique to the combo.', 'warning');
    }
}

// ========== STATS FUNCTIONS ==========
function resetStats() {
    currentSession.stats = {
        techniquesDisplayed: 0,
        totalDisplayTime: 0,
        sessionStartTime: currentSession.running ? currentSession.stats.sessionStartTime : null,
        techniqueDistribution: {}
    };
    updateStatsDisplay();
    updateDistributionChart();
    showNotification('Statistics reset', 'info');
}

// ========== NOTIFICATION FUNCTION ==========
function showNotification(message, type = 'info') {
    // Create notification container if it doesn't exist
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add CSS for notification if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                padding: 15px 25px;
                border-radius: var(--radius);
                background: var(--primary);
                color: white;
                display: flex;
                align-items: center;
                gap: 10px;
                animation: slideIn 0.3s ease;
                box-shadow: var(--shadow-lg);
                max-width: 350px;
            }
            .notification.success { background: var(--success); }
            .notification.warning { background: var(--warning); }
            .notification.info { background: var(--secondary); }
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    container.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== EXPORT FOR DEBUGGING ==========
window.stimulusSystem = {
    currentSession,
    currentDay,
    boxingPlan,
    stimulusData,
    startSession,
    pauseSession,
    resetSession,
    nextRound,
    generateTechniqueSequence,
    updateAllDisplays,
    loadDay,
    completeDay,
    activateDailyPlan
};

console.log('🎯 Auto Stimulus System with 30-Day Boxing Plan Loaded Successfully!');
console.log('📋 Available Commands:');
console.log('- activateDailyPlan(): Activate current day\'s plan');
console.log('- startSession(): Start training session');
console.log('- pauseSession(): Pause session');
console.log('- resetSession(): Reset session');
console.log('- nextRound(): Go to next round');
console.log('- Keyboard Shortcuts:');
console.log('  • Space: Start/Pause');
console.log('  • Ctrl+R: Reset');
console.log('  • Ctrl+N: Next round');
console.log('  • Ctrl+A: Activate plan');
console.log('  • Ctrl+Shift+S: Activate & Start');