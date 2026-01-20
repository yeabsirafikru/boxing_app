// app.js - Triple Threat Training App

// ========== COMBINED PROGRAM DATA ==========

// Boxing Program Data
const boxingProgram = {
    name: "30-Day Boxing Mastery",
    phases: {
        1: {
            name: "Foundation",
            week: 1,
            goal: "Learn basics, clean technique, control",
            days: {
                1: {
                    title: "DAY 1 — JAB + BASIC DEFENSE",
                    duration: "25-40 minutes",
                    exercises: [
                        { name: "Footwork warmup", duration: "5 min", description: "Basic stance, forward/backward movement, side steps" },
                        { name: "Jab technique", sets: "4×2 min", description: "Focus on form: extension, snap, return to guard" },
                        { name: "High guard block drill", reps: "3×15", description: "Practice blocking imaginary punches with high guard" },
                        { name: "Slip left/right", reps: "3×10", description: "Avoid punches by moving head" },
                        { name: "Shadowboxing (jab + guard + slip)", sets: "3×2 min", description: "Combine all techniques fluidly" }
                    ],
                    techniqueTip: "Keep your lead hand up at all times. The jab should be straight and snappy, returning to guard immediately after throwing."
                },
                2: {
                    title: "DAY 2 — CROSS + PULL-BACK",
                    duration: "25-40 minutes",
                    exercises: [
                        { name: "Warmup footwork", duration: "5 min", description: "Focus on pivot and weight transfer" },
                        { name: "Cross technique", sets: "4×2 min", description: "Power punch from rear hand, rotate hips" },
                        { name: "Pull-back drill", reps: "3×10", description: "Lean back to avoid punches, maintain balance" },
                        { name: "Pull-back + jab", reps: "3×8", description: "Defensive move followed by counter" },
                        { name: "Shadowboxing", sets: "3×2 min", description: "Practice cross and pull-back combinations" }
                    ],
                    techniqueTip: "The cross gets power from rear foot pivot and hip rotation. Pull-back should be minimal - just enough to avoid the punch."
                },
                3: {
                    title: "DAY 3 — HOOK + BOB & WEAVE",
                    duration: "25-40 minutes",
                    exercises: [
                        { name: "Warmup", duration: "5 min", description: "Dynamic stretching and footwork" },
                        { name: "Lead hook technique", reps: "4×15", description: "Short, tight arc, elbow at 90 degrees" },
                        { name: "Bob & weave", reps: "3×10", description: "Duck under imaginary punches" },
                        { name: "Weave + hook", reps: "3×8", description: "Defensive move into counter attack" },
                        { name: "Shadowboxing", sets: "3×2 min", description: "Hook variations with head movement" }
                    ],
                    techniqueTip: "Hooks should be thrown with a bent elbow, using body rotation rather than arm strength. Keep the other hand up while throwing."
                },
                4: {
                    title: "DAY 4 — UPPERCUT + BODY SHOTS",
                    duration: "25-40 minutes",
                    exercises: [
                        { name: "Warmup", duration: "5 min", description: "Focus on bending knees and torso rotation" },
                        { name: "Uppercut technique", reps: "3×15", description: "Upward punch from crouch position" },
                        { name: "Body jab", reps: "3×10", description: "Aim for floating ribs, protect chin" },
                        { name: "Body cross", reps: "3×10", description: "Power body shot with rotation" },
                        { name: "Shadowboxing", sets: "3×2 min", description: "Mix head and body attacks" }
                    ],
                    techniqueTip: "For body shots, drop your level slightly but keep your eyes on the target. Uppercuts work best at close range."
                },
                5: {
                    title: "DAY 5 — COMBOS + FOOTWORK",
                    duration: "25-40 minutes",
                    exercises: [
                        { name: "Warmup", duration: "5 min", description: "Advanced footwork patterns" },
                        { name: "1–2 combo", sets: "4×2 min", description: "Jab-cross combination drilling" },
                        { name: "Side-step + jab", reps: "3×10", description: "Move off center line and attack" },
                        { name: "Pivot hook", reps: "3×8", description: "Pivot and throw hook from new angle" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Free flow with all techniques" }
                    ],
                    techniqueTip: "Always move after throwing combos. Don't stay in the same spot where you just punched."
                }
            }
        },
        2: {
            name: "Combination & Counter",
            week: 2,
            goal: "Chain attacks + defense",
            days: {
                6: {
                    title: "DAY 6 — SLIP COUNTERS",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Slip + jab", reps: "3×10", description: "Slip outside then counter with jab" },
                        { name: "Slip + cross", reps: "3×10", description: "Slip inside then counter with cross" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Focus on defensive counters" }
                    ],
                    techniqueTip: "Slip just enough to make the punch miss - don't over-move. Counter immediately."
                },
                7: {
                    title: "DAY 7 — PULL-BACK COUNTERS",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Pull-back + cross", reps: "3×10", description: "Avoid then counter with power" },
                        { name: "Pull-back + combo", reps: "3×8", description: "Defense into multiple punches" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Master the pull-back rhythm" }
                    ],
                    techniqueTip: "Pull-back should be quick and return you to perfect position to counter."
                },
                8: {
                    title: "DAY 8 — BODY COMBO DAY",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Jab body + cross head", reps: "3×10", description: "Classic high-low combination" },
                        { name: "Hook body + hook head", reps: "3×10", description: "Double hook variation" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Body attack focus" }
                    ],
                    techniqueTip: "When going to the body, keep your chin tucked and other hand high."
                },
                9: {
                    title: "DAY 9 — ANGLE ATTACKS",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Side-step + cross", reps: "3×10", description: "Create angle then attack" },
                        { name: "Pivot + hook", reps: "3×8", description: "Spin opponent and counter" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Angle creation drills" }
                    ],
                    techniqueTip: "Move your feet first, then punch. Angles win fights."
                },
                10: {
                    title: "DAY 10 — DEFENSE CHAINS",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Slip → pull-back → counter", reps: "3×8", description: "Multiple defensive moves" },
                        { name: "Bob & weave → hook", reps: "3×10", description: "Duck under into counter" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Defensive combinations" }
                    ],
                    techniqueTip: "Chain your defensive moves - don't just do one and stop."
                }
            }
        },
        3: {
            name: "Pressure & Feints",
            week: 3,
            goal: "Fight IQ, trap opponent",
            days: {
                11: {
                    title: "DAY 11 — JAB PRESSURE",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Double jab", sets: "4×2 min", description: "Jab-jab combination" },
                        { name: "Step jab", reps: "3×10", description: "Step in with jab" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Jab pressure drilling" }
                    ],
                    techniqueTip: "Use the jab to control distance and set up everything else."
                },
                12: {
                    title: "DAY 12 — FEINT ATTACKS",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Jab feint + cross", reps: "3×10", description: "Fake jab then cross" },
                        { name: "Shoulder feint + hook", reps: "3×10", description: "Shoulder dip then hook" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Feint and react" }
                    ],
                    techniqueTip: "Make your feints look real - opponent should react to them."
                },
                13: {
                    title: "DAY 13 — INSIDE FIGHTING",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Short hook", reps: "3×12", description: "Compact hooks at close range" },
                        { name: "Short uppercut", reps: "3×12", description: "Tight uppercuts" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Close quarters work" }
                    ],
                    techniqueTip: "Inside fighting requires tighter punches and better head movement."
                },
                14: {
                    title: "DAY 14 — CUTTING ANGLES",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Diagonal step + jab", reps: "3×10", description: "Cut off the ring" },
                        { name: "Pivot trap combo", reps: "3×8", description: "Force opponent into corner" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Angle control" }
                    ],
                    techniqueTip: "Control where your opponent can move before you attack."
                },
                15: {
                    title: "DAY 15 — PRESSURE COMBOS",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "1–2–3 combo", sets: "4×2 min", description: "Jab-cross-hook combination" },
                        { name: "Corner combo simulation", sets: "3×30 sec", description: "Attack when opponent is trapped" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Pressure fighting" }
                    ],
                    techniqueTip: "When you have opponent hurt or cornered, don't let them recover."
                }
            }
        },
        4: {
            name: "Speed + Mastery",
            week: 4,
            goal: "Speed, reflex, fight flow",
            days: {
                16: {
                    title: "DAY 16 — SPEED JAB",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Fast jab rounds", sets: "5×1 min", description: "Maximum speed jabs" },
                        { name: "Slip + jab", reps: "3×12", description: "Quick defensive counter" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Speed focus" }
                    ],
                    techniqueTip: "Speed comes from relaxation - don't tense up."
                },
                17: {
                    title: "DAY 17 — COUNTER SPEED",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Pull-back + cross", reps: "4×10", description: "Quick pull-back counter" },
                        { name: "Roll + hook", reps: "3×10", description: "Shoulder roll into hook" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Counter punching" }
                    ],
                    techniqueTip: "The best counter is one they don't see coming."
                },
                18: {
                    title: "DAY 18 — POWER DAY",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Cross power sets", reps: "4×10", description: "Focus on power generation" },
                        { name: "Hook power sets", reps: "4×10", description: "Power hooks with rotation" },
                        { name: "Shadowboxing", sets: "4×2 min", description: "Power combinations" }
                    ],
                    techniqueTip: "Power comes from the ground up - feet, legs, hips, torso, arm."
                },
                19: {
                    title: "DAY 19 — FULL COMBO FLOW",
                    duration: "30-45 minutes",
                    exercises: [
                        { name: "Long combo drills", sets: "4×2 min", description: "6-8 punch combinations" },
                        { name: "Angle exit drill", reps: "3×10", description: "Attack then move to safe angle" },
                        { name: "Shadowboxing", sets: "5×2 min", description: "Free flow everything" }
                    ],
                    techniqueTip: "Combinations should flow naturally - don't force them."
                },
                20: {
                    title: "DAY 20 — FIGHT SIMULATION",
                    duration: "40-50 minutes",
                    exercises: [
                        { name: "Shadowboxing (full tactics)", sets: "6×2 min", description: "Simulate full fight" },
                        { name: "Defense reaction drill", reps: "4×15", description: "React to imaginary attacks" }
                    ],
                    techniqueTip: "Fight with your brain, not just your hands."
                },
                21: { title: "REST DAY", rest: true },
                22: { title: "REST DAY", rest: true },
                23: { title: "REVIEW DAY - JAB MASTERY", rest: false, review: true },
                24: { title: "REVIEW DAY - DEFENSE MASTERY", rest: false, review: true },
                25: { title: "REVIEW DAY - COMBOS", rest: false, review: true },
                26: { title: "REVIEW DAY - FOOTWORK", rest: false, review: true },
                27: { title: "REVIEW DAY - FIGHT SIMULATION", rest: false, review: true },
                28: { title: "REST DAY", rest: true },
                29: { title: "REST DAY", rest: true },
                30: { title: "GRADUATION DAY", rest: false, graduation: true }
            }
        }
    },
    
    techniques: [
        {
            id: 1,
            name: "Jab",
            category: "Punch",
            difficulty: "Beginner",
            description: "The most important punch in boxing. A quick, straight punch thrown with the lead hand.",
            keyPoints: [
                "Keep your rear hand up to protect your chin",
                "Extend fully but don't overreach",
                "Snap the punch back quickly",
                "Use it to measure distance"
            ],
            videoUrl: "https://example.com/jab-technique"
        },
        {
            id: 2,
            name: "Cross",
            category: "Punch",
            difficulty: "Beginner",
            description: "A power punch thrown with the rear hand. Gets power from hip rotation.",
            keyPoints: [
                "Pivot your rear foot",
                "Rotate hips and shoulders",
                "Transfer weight forward",
                "Keep lead hand up for defense"
            ],
            videoUrl: "https://example.com/cross-technique"
        },
        {
            id: 3,
            name: "Hook",
            category: "Punch",
            difficulty: "Intermediate",
            description: "A curved punch thrown with either hand, targeting the side of the head or body.",
            keyPoints: [
                "Keep elbow at 90 degrees",
                "Rotate hips and shoulders",
                "Keep opposite hand up",
                "Follow through with the punch"
            ],
            videoUrl: "https://example.com/hook-technique"
        },
        {
            id: 4,
            name: "Slip",
            category: "Defense",
            difficulty: "Intermediate",
            description: "Moving your head off the centerline to avoid punches.",
            keyPoints: [
                "Move just enough to make punch miss",
                "Keep eyes on opponent",
                "Don't bend at waist - use neck",
                "Return to center immediately"
            ],
            videoUrl: "https://example.com/slip-technique"
        }
    ],
    
    achievements: [
        { id: 1, name: "First Jab", description: "Complete Day 1", icon: "fas fa-hand-rock", earned: false },
        { id: 2, name: "Week Warrior", description: "Complete Week 1", icon: "fas fa-calendar-week", earned: false },
        { id: 3, name: "Defense Master", description: "Complete all defense drills", icon: "fas fa-shield-alt", earned: false },
        { id: 4, name: "Combo King", description: "Execute 50+ combinations", icon: "fas fa-bolt", earned: false },
        { id: 5, name: "30-Day Champion", description: "Complete the full program", icon: "fas fa-trophy", earned: false }
    ]
};

// Handstand Program Data
const handstandProgram = {
    name: "30-Day Handstand Progression",
    phases: {
        1: {
            name: "Balance & Endurance",
            days: "1-5",
            goal: "Build foundational strength and balance",
            exercises: [
                { name: "Heel-Up Chest-to-Wall Handstand", sets: "3×50 sec", description: "Focus on shoulder engagement and straight body line" },
                { name: "Heel-Up Back-to-Wall Handstand", sets: "4×30 sec", description: "Improve balance and control against wall" },
                { name: "Frog Stand", sets: "4×20 sec", description: "Develop arm balance foundation" },
                { name: "Free Kick-Up", reps: "3×8", description: "Practice entering handstand with control" },
                { name: "Full L-Sit Hold", sets: "4×15 sec", description: "Build core strength for handstand" },
                { name: "One-Leg / Alternating L-Sit", reps: "3×8", description: "Progress core strength and control" }
            ],
            restTime: "45-90 seconds between sets",
            focus: "Form and endurance"
        },
        2: {
            name: "Skill Transfer",
            days: "6-10",
            goal: "Transfer skills to freestanding practice",
            exercises: [
                { name: "Heel-Up Chest-to-Wall Handstand", sets: "2×60 sec", description: "Focus: straight line, shoulders open" },
                { name: "Heel-Up Back-to-Wall Handstand", sets: "4×40 sec", description: "Increase hold time with control" },
                { name: "Frog Stand", sets: "5×30 sec", description: "Longer holds for better balance" },
                { name: "Free Kick-Up", reps: "4×10", description: "More repetitions for muscle memory" },
                { name: "Full L-Sit Hold", sets: "5×20 sec", description: "Increased hold time" },
                { name: "One-Leg / Alternating L-Sit", reps: "4×10", description: "More reps for endurance" }
            ],
            restTime: "45-90 seconds between sets",
            focus: "Quality over quantity, last reps should be hard but clean"
        },
        3: {
            name: "Consolidation",
            days: "11-20",
            goal: "Increase hold times and consistency",
            exercises: [
                { name: "Chest-to-Wall Handstand", sets: "3×60-75 sec", description: "Focus on perfect form" },
                { name: "Back-to-Wall Handstand", sets: "4×45-60 sec", description: "Build endurance" },
                { name: "Frog Stand to Handstand", reps: "5×attempts", description: "Practice transition" },
                { name: "Freestanding Kick-Up Practice", reps: "10×attempts", description: "Work on entries" },
                { name: "L-Sit Variations", sets: "4×max hold", description: "Build core endurance" }
            ],
            restTime: "60-120 seconds between sets",
            focus: "Consistency and form refinement"
        },
        4: {
            name: "Mastery",
            days: "21-30",
            goal: "Achieve consistent freestanding handstands",
            exercises: [
                { name: "Freestanding Handstand Practice", sets: "10×max hold", description: "Focus on balance and corrections" },
                { name: "Wall Runs for Correction", reps: "5×each side", description: "Practice balance corrections" },
                { name: "Handstand Push-Up Prep", reps: "3×5-8", description: "Build strength for advanced moves" },
                { name: "Straddle Handstand Practice", sets: "5×attempts", description: "Work on shape variations" }
            ],
            restTime: "90-180 seconds between attempts",
            focus: "Freestanding consistency and advanced prep"
        }
    },
    
    techniques: [
        {
            id: 101,
            name: "Chest-to-Wall Handstand",
            category: "Foundation",
            difficulty: "Beginner",
            description: "Starting position for learning proper alignment with wall support.",
            keyPoints: [
                "Fingers facing forward, shoulder width apart",
                "Walk feet up wall until body is straight",
                "Shoulders fully open, ribs pulled in",
                "Look at hands through eyebrows"
            ]
        },
        {
            id: 102,
            name: "Back-to-Wall Handstand",
            category: "Balance",
            difficulty: "Intermediate",
            description: "Advanced wall drill that teaches balance and control.",
            keyPoints: [
                "Start with back to wall, kick up gently",
                "Minimize contact with wall",
                "Engage core to pull away from wall",
                "Practice small balance corrections"
            ]
        },
        {
            id: 103,
            name: "Frog Stand",
            category: "Strength",
            difficulty: "Beginner",
            description: "Foundation arm balance that builds wrist strength and balance.",
            keyPoints: [
                "Knees on elbows, weight forward",
                "Look forward, not down",
                "Fingers spread wide for stability",
                "Start with short holds, build gradually"
            ]
        },
        {
            id: 104,
            name: "Handstand Kick-Up",
            category: "Entry",
            difficulty: "Intermediate",
            description: "Method for entering handstand from standing position.",
            keyPoints: [
                "Start in lunge position",
                "Kick with control, not momentum",
                "Stack shoulders over wrists",
                "Practice both legs equally"
            ]
        }
    ],
    
    achievements: [
        { id: 101, name: "First Wall Hold", description: "Complete Day 1 handstand training", icon: "fas fa-hands", earned: false },
        { id: 102, name: "Balance Builder", description: "Complete 5 consecutive handstand days", icon: "fas fa-balance-scale", earned: false },
        { id: 103, name: "30-Second Hold", description: "Hold any handstand for 30+ seconds", icon: "fas fa-clock", earned: false },
        { id: 104, name: "Freestanding Breakthrough", description: "Achieve first freestanding handstand", icon: "fas fa-star", earned: false },
        { id: 105, name: "Handstand Master", description: "Complete full 30-day program", icon: "fas fa-award", earned: false }
    ]
};

// Strength Program Data
const strengthProgram = {
    name: "30-Day Strength & Conditioning",
    phases: {
        1: {
            name: "Foundation Strength",
            days: "1-7",
            goal: "Build basic strength patterns and proper form",
            exercises: [
                { name: "Bodyweight Squats", sets: "3×15", description: "Focus on depth and form" },
                { name: "Push-ups", sets: "3×max", description: "Full range of motion" },
                { name: "Plank Hold", sets: "3×30 sec", description: "Core stabilization" },
                { name: "Assisted Pull-ups", sets: "3×5-8", description: "Back strength foundation" },
                { name: "Dumbbell Rows", sets: "3×10", description: "Upper back development" }
            ],
            focus: "Master movement patterns, light weights"
        },
        2: {
            name: "Hypertrophy Phase",
            days: "8-14",
            goal: "Muscle growth and endurance",
            exercises: [
                { name: "Goblet Squats", sets: "4×12", description: "Weighted squats with dumbbell" },
                { name: "Incline Push-ups", sets: "4×max", description: "Chest emphasis" },
                { name: "Dumbbell Shoulder Press", sets: "3×10", description: "Shoulder development" },
                { name: "Romanian Deadlifts", sets: "3×12", description: "Hamstring and glute focus" },
                { name: "Bicep Curls", sets: "3×12", description: "Arm development" }
            ],
            focus: "Moderate weights, higher reps"
        },
        3: {
            name: "Strength Building",
            days: "15-21",
            goal: "Increase max strength and power",
            exercises: [
                { name: "Barbell Squats", sets: "4×8", description: "Heavy compound movement" },
                { name: "Bench Press", sets: "4×8", description: "Upper body strength" },
                { name: "Deadlifts", sets: "3×6", description: "Full body power" },
                { name: "Pull-ups", sets: "3×max", description: "Bodyweight strength" },
                { name: "Overhead Press", sets: "3×8", description: "Shoulder strength" }
            ],
            focus: "Heavy weights, lower reps, progressive overload"
        },
        4: {
            name: "Peak & Power",
            days: "22-30",
            goal: "Explosive power and athletic performance",
            exercises: [
                { name: "Power Cleans", sets: "4×5", description: "Explosive full body movement" },
                { name: "Box Jumps", sets: "4×8", description: "Plyometric power" },
                { name: "Kettlebell Swings", sets: "3×15", description: "Hip power and endurance" },
                { name: "Medicine Ball Slams", sets: "3×10", description: "Rotational power" },
                { name: "Sled Pushes", sets: "3×30m", description: "Full body power endurance" }
            ],
            focus: "Explosive movements, power development"
        }
    },
    
    techniques: [
        {
            id: 201,
            name: "Proper Squat Form",
            category: "Foundation",
            difficulty: "Beginner",
            description: "Fundamental lower body exercise for strength and mobility.",
            keyPoints: [
                "Feet shoulder-width apart",
                "Keep chest up and back straight",
                "Hips back as you descend",
                "Knees track over toes"
            ]
        },
        {
            id: 202,
            name: "Deadlift Technique",
            category: "Strength",
            difficulty: "Intermediate",
            description: "Full body compound lift for posterior chain development.",
            keyPoints: [
                "Hinge at hips, not waist",
                "Keep bar close to body",
                "Engage lats and core",
                "Drive through heels"
            ]
        },
        {
            id: 203,
            name: "Push-up Progression",
            category: "Bodyweight",
            difficulty: "Beginner",
            description: "Fundamental upper body strength exercise.",
            keyPoints: [
                "Hands under shoulders",
                "Body in straight line",
                "Lower chest to floor",
                "Full extension at top"
            ]
        },
        {
            id: 204,
            name: "Pull-up Mastery",
            category: "Bodyweight",
            difficulty: "Intermediate",
            description: "Upper body pulling strength development.",
            keyPoints: [
                "Hands slightly wider than shoulders",
                "Engage back muscles",
                "Chin over bar",
                "Control descent"
            ]
        }
    ],
    
    achievements: [
        { id: 201, name: "Strength Foundations", description: "Complete Week 1 strength training", icon: "fas fa-dumbbell", earned: false },
        { id: 202, name: "Muscle Builder", description: "Complete Hypertrophy Phase", icon: "fas fa-weight", earned: false },
        { id: 203, name: "Strength Milestone", description: "Increase all lifts by 20%", icon: "fas fa-chart-line", earned: false },
        { id: 204, name: "Power Athlete", description: "Complete Power Phase", icon: "fas fa-bolt", earned: false },
        { id: 205, name: "Strength Master", description: "Complete full 30-day program", icon: "fas fa-award", earned: false }
    ]
};

// Weekly Structure Data
const weeklySchedule = [
    { day: 1, focus: "Boxing + Skill", description: "Boxing training followed by handstand skill work" },
    { day: 2, focus: "Strength + Skill", description: "Strength training with handstand practice" },
    { day: 3, focus: "Boxing + Skill", description: "Boxing focus with handstand technique" },
    { day: 4, focus: "Strength + Skill", description: "Strength development and handstand progressions" },
    { day: 5, focus: "Boxing + Skill", description: "Intense boxing with handstand skill work" },
    { day: 6, focus: "Light skill + Mobility", description: "Recovery day with light practice and mobility" },
    { day: 7, focus: "FULL REST", description: "Complete rest and recovery" }
];

// ========== APP STATE ==========

let currentProgram = "boxing"; // "boxing", "handstand", or "strength"
let currentDay = 1;
let currentPhase = 1;
let currentHandstandDay = 1;
let currentHandstandPhase = 1;
let currentStrengthDay = 1;
let currentStrengthPhase = 1;

let completedBoxingDays = new Set();
let completedHandstandDays = new Set();
let completedStrengthDays = new Set();
let combinedHistory = [];

let userStats = {
    boxing: {
        streak: 0,
        totalWorkouts: 0,
        totalTime: 0,
        caloriesBurned: 0
    },
    handstand: {
        streak: 0,
        totalSessions: 0,
        totalTime: 0,
        bestHoldTime: 0
    },
    strength: {
        streak: 0,
        totalWorkouts: 0,
        totalTime: 0,
        maxLifts: {}
    },
    combinedStreak: 0
};

// Timer State
let timerInterval;
let timerSeconds = 180;
let timerRunning = false;
let currentRound = 0;
let totalRounds = 5;
let isRestPeriod = false;
let roundDuration = 180;
let restDuration = 60;

// Enhanced User Profile
let userProfile = {
    name: "Yeabsira Fikru",
    goals: ["boxing-technique", "handstand-balance", "strength-gains"],
    frequency: "5",
    weight: 70,
    height: 175,
    boxingStance: "orthodox",
    level: "intermediate",
    trainingGoals: ["technique", "conditioning", "defense", "speed", "power", "footwork"],
    settings: {
        reminders: true,
        sound: true,
        darkMode: true,
        backup: false,
        sharing: true
    },
    combinedLevel: "🥊 Boxer • 🤸 Handstand • 💪 Strength"
};

// ========== DOM ELEMENTS ==========

const currentDayElement = document.getElementById('current-day');
const completionRateElement = document.getElementById('completion-rate');
const streakDaysElement = document.getElementById('streak-days');
const overallProgressElement = document.getElementById('overall-progress');
const overallPercentElement = document.getElementById('overall-percent');
const boxingDaysDoneElement = document.getElementById('boxing-days-done');
const handstandDaysDoneElement = document.getElementById('handstand-days-done');
const strengthDaysDoneElement = document.getElementById('strength-days-done');
const workoutContentElement = document.getElementById('workout-content');
const calendarElement = document.getElementById('calendar');
const historyListElement = document.getElementById('history-list');
const techniqueGridElement = document.getElementById('technique-grid');
const achievementsGridElement = document.getElementById('achievements-grid');
const rulesTitleElement = document.getElementById('rules-title');
const rulesListElement = document.getElementById('rules-list');

// Timer Elements
const mainTimerElement = document.getElementById('main-timer');
const startTimerBtn = document.getElementById('start-timer');
const pauseTimerBtn = document.getElementById('pause-timer');
const resetTimerBtn = document.getElementById('reset-timer');
const roundDurationInput = document.getElementById('round-duration');
const restDurationInput = document.getElementById('rest-duration');
const roundCountInput = document.getElementById('round-count');
const currentRoundElement = document.getElementById('current-round');
const totalRoundsElement = document.getElementById('total-rounds');

// Modal Elements
const completionModal = document.getElementById('completion-modal');
const closeModalBtn = document.getElementById('close-modal');
const cancelCompletionBtn = document.getElementById('cancel-completion');
const confirmCompletionBtn = document.getElementById('confirm-completion');
const workoutFeelingSelect = document.getElementById('workout-feeling');
const workoutNotesTextarea = document.getElementById('workout-notes');

const handstandCompletionModal = document.getElementById('handstand-completion-modal');
const closeHandstandModalBtn = document.getElementById('close-handstand-modal');
const cancelHandstandBtn = document.getElementById('cancel-handstand');
const confirmHandstandBtn = document.getElementById('confirm-handstand');
const handstandFeelingSelect = document.getElementById('handstand-feeling');
const holdTimeInput = document.getElementById('hold-time');
const handstandNotesTextarea = document.getElementById('handstand-notes');

const strengthCompletionModal = document.getElementById('strength-completion-modal');
const closeStrengthModalBtn = document.getElementById('close-strength-modal');
const cancelStrengthBtn = document.getElementById('cancel-strength');
const confirmStrengthBtn = document.getElementById('confirm-strength');
const strengthFeelingSelect = document.getElementById('strength-feeling');
const strengthNotesTextarea = document.getElementById('strength-notes');

// Notification Elements
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');

// Profile Elements
const profileNameElement = document.getElementById('profile-name');
const profileRankElement = document.getElementById('profile-rank');
const statBoxingWorkoutsElement = document.getElementById('stat-boxing-workouts');
const statHandstandSessionsElement = document.getElementById('stat-handstand-sessions');
const statStrengthWorkoutsElement = document.getElementById('stat-strength-workouts');
const statCurrentStreakElement = document.getElementById('stat-current-streak');
const boxingPercentageElement = document.getElementById('boxing-percentage');
const boxingProgressElement = document.getElementById('boxing-progress');
const handstandPercentageElement = document.getElementById('handstand-percentage');
const handstandProgressElement = document.getElementById('handstand-progress');
const strengthPercentageElement = document.getElementById('strength-percentage');
const strengthProgressElement = document.getElementById('strength-progress');
const saveProfileBtn = document.getElementById('save-profile');

// Settings Elements
const settingReminders = document.getElementById('setting-reminders');
const settingSound = document.getElementById('setting-sound');
const settingDarkmode = document.getElementById('setting-darkmode');
const settingBackup = document.getElementById('setting-backup');
const settingSharing = document.getElementById('setting-sharing');
const exportDataBtn = document.getElementById('export-data');
const resetDataBtn = document.getElementById('reset-data');

// ========== INITIALIZATION ==========

function init() {
    loadUserData();
    setupEventListeners();
    setupProfileEventListeners();
    updateUI();
    updateProfileDisplay();
    setupTimerListeners();
    updateCalendar();
    updateHistory();
    updateTechniques();
    updateAchievements();
    
    // Check online status
    updateOnlineStatus();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    // Setup service worker for PWA
    setupServiceWorker();
}

function loadUserData() {
    const savedData = localStorage.getItem('tripleThreatTrainingData');
    if (savedData) {
        const data = JSON.parse(savedData);
        
        currentProgram = data.currentProgram || "boxing";
        currentDay = data.currentDay || 1;
        currentHandstandDay = data.currentHandstandDay || 1;
        currentStrengthDay = data.currentStrengthDay || 1;
        
        completedBoxingDays = new Set(data.completedBoxingDays || []);
        completedHandstandDays = new Set(data.completedHandstandDays || []);
        completedStrengthDays = new Set(data.completedStrengthDays || []);
        
        combinedHistory = data.combinedHistory || [];
        userStats = data.userStats || userStats;
        userProfile = data.userProfile || userProfile;
        
        // Update achievements if saved
        if (data.boxingAchievements) boxingProgram.achievements = data.boxingAchievements;
        if (data.handstandAchievements) handstandProgram.achievements = data.handstandAchievements;
        if (data.strengthAchievements) strengthProgram.achievements = data.strengthAchievements;
        
        // Set current phases based on days
        currentPhase = Math.ceil(currentDay / 5);
        currentHandstandPhase = Math.ceil(currentHandstandDay / 5);
        currentStrengthPhase = Math.ceil(currentStrengthDay / 7);
        
        if (currentHandstandPhase > 4) currentHandstandPhase = 4;
        if (currentStrengthPhase > 4) currentStrengthPhase = 4;
    }
}

function saveUserData() {
    const data = {
        currentProgram,
        currentDay,
        currentHandstandDay,
        currentStrengthDay,
        completedBoxingDays: Array.from(completedBoxingDays),
        completedHandstandDays: Array.from(completedHandstandDays),
        completedStrengthDays: Array.from(completedStrengthDays),
        combinedHistory,
        userStats,
        userProfile,
        boxingAchievements: boxingProgram.achievements,
        handstandAchievements: handstandProgram.achievements,
        strengthAchievements: strengthProgram.achievements,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('tripleThreatTrainingData', JSON.stringify(data));
}

// ========== UI UPDATES ==========

function updateUI() {
    updateProgramDisplay();
    updateWorkoutContent();
    updateProgressStats();
    updatePhaseDisplays();
    updateDisciplineRules();
    updateProfileStats();
}

function updateProgramDisplay() {
    // Update active program toggle buttons
    document.querySelectorAll('.program-toggle-btn').forEach(btn => {
        const program = btn.getAttribute('data-program');
        btn.classList.toggle('active', program === currentProgram);
    });
    
    // Show/hide phase sections
    document.querySelectorAll('.program-section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(`${currentProgram}-phases`).classList.add('active');
    
    // Update current day display
    let currentDayValue = currentDay;
    if (currentProgram === "handstand") currentDayValue = currentHandstandDay;
    if (currentProgram === "strength") currentDayValue = currentStrengthDay;
    
    currentDayElement.textContent = `${getProgramDisplayName()} Day ${currentDayValue}`;
}

function getProgramDisplayName() {
    switch(currentProgram) {
        case "boxing": return "🥊";
        case "handstand": return "🤸";
        case "strength": return "💪";
        default: return "🥊";
    }
}

function updateWorkoutContent() {
    let content = '';
    
    if (currentProgram === "boxing") {
        const dayData = getCurrentBoxingDayData();
        const isCompleted = completedBoxingDays.has(currentDay);
        
        content = `
            <div class="day-header">
                <div class="day-title">
                    <i class="fas fa-fist-raised"></i>
                    <span>${dayData.title}</span>
                </div>
                <div class="day-status ${isCompleted ? '' : (dayData.rest ? 'skipped' : 'pending')}">
                    ${isCompleted ? "COMPLETED" : (dayData.rest ? "REST DAY" : "PENDING")}
                </div>
            </div>

            <div class="exercise-list">
                ${dayData.rest ? 
                    `<div class="exercise-item">
                        <div class="exercise-info">
                            <div class="exercise-name">Rest & Recovery</div>
                            <div class="exercise-details">
                                <span class="exercise-duration">
                                    <i class="fas fa-bed"></i>
                                    Active Recovery Recommended
                                </span>
                            </div>
                            <div style="margin-top: 10px; color: var(--gray-light);">
                                Take this day to recover. Light walking, stretching, or mobility work is recommended.
                            </div>
                        </div>
                    </div>` : 
                    dayData.exercises.map((ex, index) => `
                        <div class="exercise-item ${isCompleted ? 'completed' : ''}">
                            <div class="exercise-info">
                                <div class="exercise-name">${ex.name}</div>
                                <div class="exercise-details">
                                    ${ex.sets ? `<span>${ex.sets}</span>` : ''}
                                    ${ex.reps ? `<span>${ex.reps} reps</span>` : ''}
                                    ${ex.duration ? `<span class="exercise-duration"><i class="fas fa-clock"></i> ${ex.duration}</span>` : ''}
                                </div>
                                ${ex.description ? `<div style="margin-top: 8px; font-size: 0.9rem; color: var(--gray);">${ex.description}</div>` : ''}
                            </div>
                        </div>
                    `).join('')
                }
            </div>

            ${dayData.techniqueTip ? `
                <div class="technique-tips">
                    <h4><i class="fas fa-lightbulb"></i> Technique Focus Today</h4>
                    <p>${dayData.techniqueTip}</p>
                </div>
            ` : ''}

            <div class="workout-summary">
                <h4><i class="fas fa-chart-pie"></i> Workout Summary</h4>
                <div class="summary-grid">
                    <div class="summary-item">
                        <div class="summary-value">${dayData.duration ? dayData.duration.split('-')[0] : '30'}</div>
                        <div class="summary-label">Minutes</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-value">${dayData.rest ? '0' : (dayData.exercises ? dayData.exercises.length : '5')}</div>
                        <div class="summary-label">Exercises</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-value">${dayData.rest ? '0' : '150-250'}</div>
                        <div class="summary-label">Calories</div>
                    </div>
                </div>
            </div>

            <div class="controls">
                <button class="btn btn-secondary" id="prev-workout" ${getCurrentDay() <= 1 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left"></i> Previous Day
                </button>
                <button class="btn ${isCompleted ? 'btn-success' : (dayData.rest ? 'btn-secondary' : 'btn-primary')}" 
                        id="complete-workout" ${isCompleted || dayData.rest ? 'disabled' : ''}>
                    <i class="fas ${isCompleted ? 'fa-check' : (dayData.rest ? 'fa-bed' : 'fa-check-circle')}"></i>
                    ${isCompleted ? 'Completed' : (dayData.rest ? 'Rest Day' : 'Complete Workout')}
                </button>
                <button class="btn btn-secondary" id="next-workout" ${getCurrentDay() >= 30 ? 'disabled' : ''}>
                    Next Day <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
    } else if (currentProgram === "handstand") {
        const phaseData = handstandProgram.phases[currentHandstandPhase];
        const isCompleted = completedHandstandDays.has(currentHandstandDay);
        
        content = `
            <div class="day-header">
                <div class="day-title">
                    <i class="fas fa-hands"></i>
                    <span>Handstand Day ${currentHandstandDay} — ${phaseData.name}</span>
                </div>
                <div class="day-status ${isCompleted ? '' : 'pending'}">
                    ${isCompleted ? "COMPLETED" : "PENDING"}
                </div>
            </div>

            <div class="exercise-list">
                ${phaseData.exercises.map((ex, index) => `
                    <div class="exercise-item ${isCompleted ? 'completed' : ''}">
                        <div class="exercise-info">
                            <div class="exercise-name">${ex.name}</div>
                            <div class="exercise-details">
                                ${ex.sets ? `<span>${ex.sets}</span>` : ''}
                                ${ex.reps ? `<span>${ex.reps} reps</span>` : ''}
                            </div>
                            ${ex.description ? `<div style="margin-top: 8px; font-size: 0.9rem; color: var(--gray);">${ex.description}</div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="technique-tips">
                <h4><i class="fas fa-lightbulb"></i> Focus for This Phase</h4>
                <p><strong>${phaseData.focus}</strong>. Rest: ${phaseData.restTime}</p>
                <p style="margin-top: 8px;">${phaseData.goal}</p>
            </div>

            <div class="workout-summary">
                <h4><i class="fas fa-chart-pie"></i> Session Summary</h4>
                <div class="summary-grid">
                    <div class="summary-item">
                        <div class="summary-value">${phaseData.exercises.length}</div>
                        <div class="summary-label">Exercises</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-value">${currentHandstandDay}</div>
                        <div class="summary-label">Day</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-value">${userStats.handstand.bestHoldTime || 0}</div>
                        <div class="summary-label">Best Hold (sec)</div>
                    </div>
                </div>
            </div>

            <div class="controls">
                <button class="btn btn-secondary" id="prev-workout" ${currentHandstandDay <= 1 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left"></i> Previous Day
                </button>
                <button class="btn ${isCompleted ? 'btn-success' : 'btn-primary'}" 
                        id="complete-workout" ${isCompleted ? 'disabled' : ''}>
                    <i class="fas ${isCompleted ? 'fa-check' : 'fa-check-circle'}"></i>
                    ${isCompleted ? 'Completed' : 'Complete Handstand Session'}
                </button>
                <button class="btn btn-secondary" id="next-workout" ${currentHandstandDay >= 30 ? 'disabled' : ''}>
                    Next Day <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
    } else if (currentProgram === "strength") {
        const phaseData = strengthProgram.phases[currentStrengthPhase];
        const isCompleted = completedStrengthDays.has(currentStrengthDay);
        
        content = `
            <div class="day-header">
                <div class="day-title">
                    <i class="fas fa-dumbbell"></i>
                    <span>Strength Day ${currentStrengthDay} — ${phaseData.name}</span>
                </div>
                <div class="day-status ${isCompleted ? '' : 'pending'}">
                    ${isCompleted ? "COMPLETED" : "PENDING"}
                </div>
            </div>

            <div class="exercise-list">
                ${phaseData.exercises.map((ex, index) => `
                    <div class="exercise-item ${isCompleted ? 'completed' : ''}">
                        <div class="exercise-info">
                            <div class="exercise-name">${ex.name}</div>
                            <div class="exercise-details">
                                <span>${ex.sets}</span>
                            </div>
                            ${ex.description ? `<div style="margin-top: 8px; font-size: 0.9rem; color: var(--gray);">${ex.description}</div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="technique-tips">
                <h4><i class="fas fa-lightbulb"></i> Training Focus</h4>
                <p><strong>${phaseData.focus}</strong></p>
                <p style="margin-top: 8px;">${phaseData.goal}</p>
            </div>

            <div class="workout-summary">
                <h4><i class="fas fa-chart-pie"></i> Workout Summary</h4>
                <div class="summary-grid">
                    <div class="summary-item">
                        <div class="summary-value">${phaseData.exercises.length}</div>
                        <div class="summary-label">Exercises</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-value">${currentStrengthPhase}</div>
                        <div class="summary-label">Phase</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-value">45-60</div>
                        <div class="summary-label">Minutes</div>
                    </div>
                </div>
            </div>

            <div class="controls">
                <button class="btn btn-secondary" id="prev-workout" ${currentStrengthDay <= 1 ? 'disabled' : ''}>
                    <i class="fas fa-arrow-left"></i> Previous Day
                </button>
                <button class="btn ${isCompleted ? 'btn-success' : 'btn-primary'}" 
                        id="complete-workout" ${isCompleted ? 'disabled' : ''}>
                    <i class="fas ${isCompleted ? 'fa-check' : 'fa-check-circle'}"></i>
                    ${isCompleted ? 'Completed' : 'Complete Strength Workout'}
                </button>
                <button class="btn btn-secondary" id="next-workout" ${currentStrengthDay >= 30 ? 'disabled' : ''}>
                    Next Day <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
    }
    
    workoutContentElement.innerHTML = content;
    
    // Re-attach event listeners after content update
    setTimeout(() => {
        document.getElementById('prev-workout')?.addEventListener('click', goToPreviousDay);
        document.getElementById('next-workout')?.addEventListener('click', goToNextDay);
        document.getElementById('complete-workout')?.addEventListener('click', completeWorkout);
    }, 100);
}

function getCurrentDay() {
    switch(currentProgram) {
        case "boxing": return currentDay;
        case "handstand": return currentHandstandDay;
        case "strength": return currentStrengthDay;
        default: return currentDay;
    }
}

function getCurrentBoxingDayData() {
    let phase = 1;
    let dayInPhase = currentDay;
    
    if (currentDay <= 5) {
        phase = 1;
        dayInPhase = currentDay;
    } else if (currentDay <= 10) {
        phase = 2;
        dayInPhase = currentDay - 5;
    } else if (currentDay <= 15) {
        phase = 3;
        dayInPhase = currentDay - 10;
    } else {
        phase = 4;
        dayInPhase = currentDay - 15;
    }
    
    currentPhase = phase;
    return boxingProgram.phases[phase].days[dayInPhase];
}

function updateProgressStats() {
    const totalDays = 30;
    const boxingCompleted = completedBoxingDays.size;
    const handstandCompleted = completedHandstandDays.size;
    const strengthCompleted = completedStrengthDays.size;
    
    const totalCompleted = boxingCompleted + handstandCompleted + strengthCompleted;
    const maxPossible = totalDays * 3; // 30 days × 3 programs
    const combinedPercent = Math.round((totalCompleted / maxPossible) * 100);
    
    // Update overall progress
    overallProgressElement.style.width = `${combinedPercent}%`;
    overallPercentElement.textContent = `${combinedPercent}%`;
    completionRateElement.textContent = `${combinedPercent}%`;
    
    // Update individual program stats
    boxingDaysDoneElement.textContent = boxingCompleted;
    handstandDaysDoneElement.textContent = handstandCompleted;
    strengthDaysDoneElement.textContent = strengthCompleted;
    
    // Calculate streaks
    calculateStreaks();
    streakDaysElement.textContent = `${userStats.combinedStreak} days`;
}

function calculateStreaks() {
    // Simplified streak calculation - in a real app, you'd check consecutive days
    userStats.boxing.streak = completedBoxingDays.size;
    userStats.handstand.streak = completedHandstandDays.size;
    userStats.strength.streak = completedStrengthDays.size;
    
    // Combined streak is the maximum of individual streaks
    userStats.combinedStreak = Math.max(
        userStats.boxing.streak,
        userStats.handstand.streak,
        userStats.strength.streak
    );
}

function updatePhaseDisplays() {
    // Update boxing phases
    document.querySelectorAll('.boxing-phase').forEach(card => {
        const phase = parseInt(card.getAttribute('data-phase'));
        card.classList.toggle('active', phase === currentPhase);
    });
    
    // Update handstand phases
    document.querySelectorAll('.handstand-phase').forEach(card => {
        const phase = parseInt(card.getAttribute('data-hphase'));
        card.classList.toggle('active', phase === currentHandstandPhase);
    });
    
    // Update strength phases
    document.querySelectorAll('.strength-phase').forEach(card => {
        const phase = parseInt(card.getAttribute('data-sphase'));
        card.classList.toggle('active', phase === currentStrengthPhase);
    });
}

function updateDisciplineRules() {
    if (currentProgram === "boxing") {
        rulesTitleElement.textContent = "Boxing Discipline Rules";
        rulesListElement.innerHTML = `
            <li class="rule-item"><i class="fas fa-hand-paper"></i><span>Hands always up</span></li>
            <li class="rule-item"><i class="fas fa-user"></i><span>Chin down</span></li>
            <li class="rule-item"><i class="fas fa-wind"></i><span>Breathe properly</span></li>
            <li class="rule-item"><i class="fas fa-running"></i><span>Move after punching</span></li>
            <li class="rule-item"><i class="fas fa-brain"></i><span>No ego — clean technique first</span></li>
        `;
    } else if (currentProgram === "handstand") {
        rulesTitleElement.textContent = "Handstand Principles";
        rulesListElement.innerHTML = `
            <li class="rule-item"><i class="fas fa-hands"></i><span>Fingers spread wide for stability</span></li>
            <li class="rule-item"><i class="fas fa-user"></i><span>Shoulders fully open and engaged</span></li>
            <li class="rule-item"><i class="fas fa-wind"></i><span>Breathe steadily throughout holds</span></li>
            <li class="rule-item"><i class="fas fa-running"></i><span>Quality over quantity - perfect form</span></li>
            <li class="rule-item"><i class="fas fa-brain"></i><span>Focus on body alignment and balance</span></li>
        `;
    } else {
        rulesTitleElement.textContent = "Strength Training Principles";
        rulesListElement.innerHTML = `
            <li class="rule-item"><i class="fas fa-dumbbell"></i><span>Proper form before heavy weight</span></li>
            <li class="rule-item"><i class="fas fa-user"></i><span>Engage core on every lift</span></li>
            <li class="rule-item"><i class="fas fa-wind"></i><span>Breathe out on exertion</span></li>
            <li class="rule-item"><i class="fas fa-running"></i><span>Full range of motion</span></li>
            <li class="rule-item"><i class="fas fa-brain"></i><span>Mind-muscle connection</span></li>
        `;
    }
}

// ========== ENHANCED PROFILE FUNCTIONS ==========

function updateProfileDisplay() {
    // Update profile name
    profileNameElement.textContent = userProfile.name;
    
    // Update rank display
    profileRankElement.textContent = userProfile.combinedLevel || "🥊 Boxer • 🤸 Handstand • 💪 Strength";
    
    // Update goals checkboxes
    document.querySelectorAll('.goal-checkbox input').forEach(checkbox => {
        checkbox.checked = userProfile.goals.includes(checkbox.value);
    });
    
    // Update stats from userStats
    updateProfileStats();
    
    // Update settings
    if (settingReminders) settingReminders.checked = userProfile.settings.reminders;
    if (settingSound) settingSound.checked = userProfile.settings.sound;
    if (settingDarkmode) settingDarkmode.checked = userProfile.settings.darkMode;
    if (settingBackup) settingBackup.checked = userProfile.settings.backup;
    if (settingSharing) settingSharing.checked = userProfile.settings.sharing;
}

function updateProfileStats() {
    // Update individual program stats
    statBoxingWorkoutsElement.textContent = userStats.boxing.totalWorkouts;
    statHandstandSessionsElement.textContent = userStats.handstand.totalSessions;
    statStrengthWorkoutsElement.textContent = userStats.strength.totalWorkouts;
    statCurrentStreakElement.textContent = userStats.combinedStreak;
    
    // Update progress bars
    const boxingPercent = Math.round((completedBoxingDays.size / 30) * 100);
    const handstandPercent = Math.round((completedHandstandDays.size / 30) * 100);
    const strengthPercent = Math.round((completedStrengthDays.size / 30) * 100);
    
    boxingPercentageElement.textContent = `${boxingPercent}%`;
    boxingProgressElement.style.width = `${boxingPercent}%`;
    
    handstandPercentageElement.textContent = `${handstandPercent}%`;
    handstandProgressElement.style.width = `${handstandPercent}%`;
    
    strengthPercentageElement.textContent = `${strengthPercent}%`;
    strengthProgressElement.style.width = `${strengthPercent}%`;
}

function saveProfile() {
    // Get name from profile element
    userProfile.name = profileNameElement.textContent || "Yeabsira Fikru";
    
    // Get goals from checkboxes
    const selectedGoals = [];
    document.querySelectorAll('.goal-checkbox input').forEach(checkbox => {
        if (checkbox.checked) {
            selectedGoals.push(checkbox.value);
        }
    });
    userProfile.goals = selectedGoals;
    
    // Get settings
    if (settingReminders) userProfile.settings.reminders = settingReminders.checked;
    if (settingSound) userProfile.settings.sound = settingSound.checked;
    if (settingDarkmode) userProfile.settings.darkMode = settingDarkmode.checked;
    if (settingBackup) userProfile.settings.backup = settingBackup.checked;
    if (settingSharing) userProfile.settings.sharing = settingSharing.checked;
    
    // Update rank based on progress
    updateCombinedLevel();
    
    // Save data
    saveUserData();
    
    // Show notification
    showNotification('Profile saved successfully!', 'success');
}

function updateCombinedLevel() {
    const boxingLevel = getBoxingLevel();
    const handstandLevel = getHandstandLevel();
    const strengthLevel = getStrengthLevel();
    
    userProfile.combinedLevel = `${boxingLevel} • ${handstandLevel} • ${strengthLevel}`;
    
    // Update display
    profileRankElement.textContent = userProfile.combinedLevel;
}

function getBoxingLevel() {
    const completedPercent = (completedBoxingDays.size / 30) * 100;
    if (completedPercent >= 80) return "🥊🥊🥊 Advanced Boxer";
    if (completedPercent >= 50) return "🥊🥊 Intermediate Boxer";
    return "🥊 Beginner Boxer";
}

function getHandstandLevel() {
    const completedPercent = (completedHandstandDays.size / 30) * 100;
    if (completedPercent >= 80) return "🤸🤸🤸 Handstand Master";
    if (completedPercent >= 50) return "🤸🤸 Intermediate";
    return "🤸 Beginner";
}

function getStrengthLevel() {
    const completedPercent = (completedStrengthDays.size / 30) * 100;
    if (completedPercent >= 80) return "💪💪💪 Strength Athlete";
    if (completedPercent >= 50) return "💪💪 Intermediate";
    return "💪 Beginner";
}

function exportUserData() {
    const data = {
        profile: userProfile,
        progress: {
            currentProgram,
            currentDay,
            currentHandstandDay,
            currentStrengthDay,
            completedBoxingDays: Array.from(completedBoxingDays),
            completedHandstandDays: Array.from(completedHandstandDays),
            completedStrengthDays: Array.from(completedStrengthDays),
            combinedHistory,
            userStats,
            boxingAchievements: boxingProgram.achievements,
            handstandAchievements: handstandProgram.achievements,
            strengthAchievements: strengthProgram.achievements
        },
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `triple-threat-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Data exported successfully!', 'success');
}

function resetAllData() {
    if (confirm('Are you sure you want to reset all data? This will delete all your progress and cannot be undone.')) {
        // Reset all data
        currentProgram = "boxing";
        currentDay = 1;
        currentHandstandDay = 1;
        currentStrengthDay = 1;
        currentPhase = 1;
        currentHandstandPhase = 1;
        currentStrengthPhase = 1;
        
        completedBoxingDays = new Set();
        completedHandstandDays = new Set();
        completedStrengthDays = new Set();
        combinedHistory = [];
        
        userStats = {
            boxing: {
                streak: 0,
                totalWorkouts: 0,
                totalTime: 0,
                caloriesBurned: 0
            },
            handstand: {
                streak: 0,
                totalSessions: 0,
                totalTime: 0,
                bestHoldTime: 0
            },
            strength: {
                streak: 0,
                totalWorkouts: 0,
                totalTime: 0,
                maxLifts: {}
            },
            combinedStreak: 0
        };
        
        // Reset achievements
        boxingProgram.achievements.forEach(achievement => achievement.earned = false);
        handstandProgram.achievements.forEach(achievement => achievement.earned = false);
        strengthProgram.achievements.forEach(achievement => achievement.earned = false);
        
        // Keep profile settings but reset progress
        userProfile = {
            ...userProfile,
            goals: ["boxing-technique", "handstand-balance", "strength-gains"]
        };
        
        // Save and reload
        saveUserData();
        updateUI();
        updateHistory();
        updateTechniques();
        updateAchievements();
        updateProfileDisplay();
        
        showNotification('All data has been reset.', 'warning');
    }
}

// ========== TECHNIQUES ==========

function updateTechniques() {
    const activeTechType = document.querySelector('.technique-tab-btn.active')?.getAttribute('data-tech-type') || 'boxing';
    let techniques = [];
    let programName = '';
    
    if (activeTechType === "boxing") {
        techniques = boxingProgram.techniques;
        programName = "Boxing";
    } else if (activeTechType === "handstand") {
        techniques = handstandProgram.techniques;
        programName = "Handstand";
    } else if (activeTechType === "strength") {
        techniques = strengthProgram.techniques;
        programName = "Strength";
    }
    
    // Update technique counter
    document.getElementById('technique-count').textContent = techniques.length;
    
    // Generate techniques HTML
    techniqueGridElement.innerHTML = techniques.map(technique => `
        <div class="technique-card" onclick="showTechniqueModal('${activeTechType}', ${technique.id})">
            <div class="technique-card-header ${activeTechType}-header">
                <div class="technique-name">${technique.name}</div>
                <div class="technique-difficulty">${technique.difficulty}</div>
            </div>
            <div class="technique-card-body">
                <div class="technique-category">${technique.category}</div>
                <p class="technique-description">${technique.description}</p>
                <div class="technique-key-points">
                    <strong>Key Points:</strong>
                    <ul>
                        ${technique.keyPoints.slice(0, 2).map(point => `<li>${point}</li>`).join('')}
                        ${technique.keyPoints.length > 2 ? '<li>...and more</li>' : ''}
                    </ul>
                </div>
                <button class="btn btn-primary">
                    <i class="fas fa-info-circle"></i>
                    View Details
                </button>
            </div>
        </div>
    `).join('');
}

function addTechniqueCardStyles() {
    // Check if styles are already added
    if (document.getElementById('technique-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'technique-styles';
    style.textContent = `
        .technique-card {
            background: rgba(30, 41, 59, 0.7);
            border-radius: var(--radius);
            overflow: hidden;
            cursor: pointer;
            transition: all 0.3s;
            border: 1px solid rgba(100, 116, 139, 0.3);
        }
        
        .technique-card:hover {
            transform: translateY(-5px);
            border-color: var(--primary);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .technique-card-header {
            padding: 20px;
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .technique-card-header.boxing-header {
            background: linear-gradient(135deg, var(--boxing-color), #b91c1c);
        }
        
        .technique-card-header.handstand-header {
            background: linear-gradient(135deg, var(--handstand-color), #7c3aed);
        }
        
        .technique-card-header.strength-header {
            background: linear-gradient(135deg, var(--strength-color), #1d4ed8);
        }
        
        .technique-name {
            font-size: 1.2rem;
            font-weight: 700;
        }
        
        .technique-difficulty {
            background: rgba(255, 255, 255, 0.2);
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }
        
        .technique-card-body {
            padding: 20px;
        }
        
        .technique-category {
            color: var(--primary);
            font-weight: 600;
            margin-bottom: 10px;
            font-size: 0.9rem;
        }
        
        .technique-description {
            color: var(--gray-light);
            margin-bottom: 15px;
            line-height: 1.5;
        }
        
        .technique-key-points {
            color: var(--gray-light);
            font-size: 0.9rem;
        }
        
        .technique-key-points ul {
            padding-left: 20px;
            margin-top: 5px;
        }
        
        .technique-key-points li {
            margin-bottom: 5px;
        }
        
        @media (max-width: 768px) {
            .technique-card-header {
                padding: 15px;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
            
            .technique-card-body {
                padding: 15px;
            }
        }
    `;
    document.head.appendChild(style);
}

function showTechniqueModal(program, techniqueId) {
    let technique;
    let programData;
    
    if (program === "boxing") {
        technique = boxingProgram.techniques.find(t => t.id === techniqueId);
        programData = boxingProgram;
    } else if (program === "handstand") {
        technique = handstandProgram.techniques.find(t => t.id === techniqueId);
        programData = handstandProgram;
    } else if (program === "strength") {
        technique = strengthProgram.techniques.find(t => t.id === techniqueId);
        programData = strengthProgram;
    }
    
    if (!technique) return;
    
    // Create modal dynamically
    const modalId = 'technique-detail-modal';
    let modal = document.getElementById(modalId);
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = modalId;
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="technique-modal-title"></h2>
                    <button class="close-modal" onclick="closeTechniqueModal()">&times;</button>
                </div>
                <div id="technique-modal-content"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    // Set modal title
    const titleElement = document.getElementById('technique-modal-title');
    let icon = '🥊';
    if (program === "handstand") icon = '🤸';
    if (program === "strength") icon = '💪';
    
    titleElement.innerHTML = `${icon} ${technique.name}`;
    
    // Set modal content
    const contentElement = document.getElementById('technique-modal-content');
    contentElement.innerHTML = `
        <div style="margin-bottom: 25px;">
            <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 15px;">
                <div style="background: rgba(30, 41, 59, 0.7); padding: 10px 15px; border-radius: var(--radius);">
                    <div style="font-size: 0.9rem; color: var(--gray);">Category</div>
                    <div style="font-weight: 600; color: var(--light);">${technique.category}</div>
                </div>
                <div style="background: rgba(30, 41, 59, 0.7); padding: 10px 15px; border-radius: var(--radius);">
                    <div style="font-size: 0.9rem; color: var(--gray);">Difficulty</div>
                    <div style="font-weight: 600; color: var(--light);">${technique.difficulty}</div>
                </div>
            </div>
            
            <div style="background: rgba(30, 41, 59, 0.7); padding: 20px; border-radius: var(--radius); margin-bottom: 20px;">
                <h3 style="color: var(--primary); margin-bottom: 10px; font-size: 1.1rem;">Description</h3>
                <p style="color: var(--gray-light); line-height: 1.6;">${technique.description}</p>
            </div>
            
            <div style="background: rgba(30, 41, 59, 0.7); padding: 20px; border-radius: var(--radius); margin-bottom: 20px;">
                <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 1.1rem;">Key Points</h3>
                <ul style="padding-left: 20px;">
                    ${technique.keyPoints.map(point => `
                        <li style="margin-bottom: 12px; color: var(--gray-light); display: flex; align-items: flex-start; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: var(--success); margin-top: 3px;"></i>
                            <span>${point}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            ${technique.videoUrl ? `
                <div style="text-align: center; margin-top: 25px;">
                    <button class="btn btn-primary" onclick="window.open('${technique.videoUrl}', '_blank')">
                        <i class="fas fa-play-circle"></i>
                        Watch Video Tutorial
                    </button>
                </div>
            ` : ''}
            
            ${getRelatedTechniques(program, techniqueId)}
        </div>
    `;
    
    // Show modal
    modal.style.display = 'flex';
    
    // Add close event
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeTechniqueModal();
        }
    };
}

function getRelatedTechniques(program, currentId) {
    let techniques = [];
    
    if (program === "boxing") {
        techniques = boxingProgram.techniques.filter(t => t.id !== currentId);
    } else if (program === "handstand") {
        techniques = handstandProgram.techniques.filter(t => t.id !== currentId);
    } else if (program === "strength") {
        techniques = strengthProgram.techniques.filter(t => t.id !== currentId);
    }
    
    if (techniques.length === 0) return '';
    
    return `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(100, 116, 139, 0.3);">
            <h3 style="color: var(--primary); margin-bottom: 15px; font-size: 1.1rem;">Related Techniques</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
                ${techniques.slice(0, 3).map(tech => `
                    <div class="related-technique" onclick="showTechniqueModal('${program}', ${tech.id})" 
                         style="background: rgba(30, 41, 59, 0.7); padding: 12px; border-radius: var(--radius); cursor: pointer; transition: all 0.3s;">
                        <div style="font-weight: 600; color: var(--light); margin-bottom: 5px;">${tech.name}</div>
                        <div style="font-size: 0.8rem; color: var(--gray);">${tech.category}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function closeTechniqueModal() {
    const modal = document.getElementById('technique-detail-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ========== ACHIEVEMENTS ==========

function updateAchievements() {
    const activeTechType = document.querySelector('.achievement-tab-btn.active')?.getAttribute('data-tech-type') || 'boxing';
    let achievements = [];
    let programName = '';
    
    if (activeTechType === "boxing") {
        achievements = boxingProgram.achievements;
        programName = "Boxing";
    } else if (activeTechType === "handstand") {
        achievements = handstandProgram.achievements;
        programName = "Handstand";
    } else if (activeTechType === "strength") {
        achievements = strengthProgram.achievements;
        programName = "Strength";
    }
    
    // Calculate earned achievements
    const earnedCount = achievements.filter(a => a.earned).length;
    const totalCount = achievements.length;
    
    // Update counter
    document.getElementById('earned-count').textContent = earnedCount;
    document.getElementById('total-count').textContent = totalCount;
    
    // Generate achievements HTML
    achievementsGridElement.innerHTML = achievements.map(achievement => `
        <div class="achievement-badge ${achievement.earned ? 'earned' : ''}" 
             data-category="${activeTechType}"
             onclick="${achievement.earned ? 'showAchievementDetail(\'' + activeTechType + '\', ' + achievement.id + ')' : ''}">
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <div class="achievement-info">
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
                <div class="achievement-status">
                    <i class="fas ${achievement.earned ? 'fa-award' : 'fa-lock'}"></i>
                    ${achievement.earned ? 'Earned' : 'Locked'}
                </div>
            </div>
        </div>
    `).join('');
}

// Optional: Function to show achievement details
function showAchievementDetail(program, achievementId) {
    // Your code to show achievement details modal
}

function addAchievementStyles() {
    if (document.getElementById('achievement-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'achievement-styles';
    style.textContent = `
        .achievement-badge {
            background: rgba(30, 41, 59, 0.7);
            border-radius: var(--radius);
            padding: 20px;
            text-align: center;
            transition: all 0.3s;
            border: 2px solid transparent;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
        
        .achievement-badge:hover {
            transform: translateY(-5px);
            border-color: var(--warning);
        }
        
        .achievement-badge.earned {
            border-color: var(--warning);
            background: rgba(245, 158, 11, 0.1);
        }
        
        .achievement-icon {
            width: 60px;
            height: 60px;
            background: rgba(245, 158, 11, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .achievement-badge.earned .achievement-icon {
            background: rgba(245, 158, 11, 0.3);
        }
        
        .achievement-icon i {
            font-size: 1.8rem;
            color: var(--warning);
        }
        
        .achievement-info {
            width: 100%;
        }
        
        .achievement-name {
            font-weight: 600;
            color: var(--light);
            margin-bottom: 5px;
            font-size: 1rem;
        }
        
        .achievement-description {
            color: var(--gray-light);
            font-size: 0.85rem;
            margin-bottom: 10px;
            line-height: 1.4;
        }
        
        .achievement-status {
            color: var(--success);
            font-size: 0.8rem;
            font-weight: 600;
        }
        
        .achievement-badge:not(.earned) .achievement-status {
            color: var(--gray);
        }
        
        @media (max-width: 768px) {
            .achievement-badge {
                padding: 15px;
                gap: 10px;
            }
            
            .achievement-icon {
                width: 50px;
                height: 50px;
            }
            
            .achievement-icon i {
                font-size: 1.5rem;
            }
        }
    `;
    document.head.appendChild(style);
}

function checkBoxingAchievements() {
    // First Jab
    if (completedBoxingDays.has(1) && !boxingProgram.achievements[0].earned) {
        boxingProgram.achievements[0].earned = true;
        showNotification('Achievement unlocked: First Jab! 🥊');
    }
    
    // Week Warrior
    const week1Complete = [1, 2, 3, 4, 5].every(day => completedBoxingDays.has(day));
    if (week1Complete && !boxingProgram.achievements[1].earned) {
        boxingProgram.achievements[1].earned = true;
        showNotification('Achievement unlocked: Week Warrior! 📅');
    }
    
    // 30-Day Champion
    if (completedBoxingDays.size >= 20 && !boxingProgram.achievements[4].earned) {
        boxingProgram.achievements[4].earned = true;
        showNotification('Achievement unlocked: 30-Day Champion! 🏆');
    }
    
    saveUserData();
    updateAchievements();
}

function checkHandstandAchievements() {
    // First Wall Hold
    if (completedHandstandDays.has(1) && !handstandProgram.achievements[0].earned) {
        handstandProgram.achievements[0].earned = true;
        showNotification('Achievement unlocked: First Wall Hold! 🤸');
    }
    
    // Balance Builder
    if (completedHandstandDays.size >= 5 && !handstandProgram.achievements[1].earned) {
        handstandProgram.achievements[1].earned = true;
        showNotification('Achievement unlocked: Balance Builder! ⚖️');
    }
    
    // 30-Second Hold
    if (userStats.handstand.bestHoldTime >= 30 && !handstandProgram.achievements[2].earned) {
        handstandProgram.achievements[2].earned = true;
        showNotification('Achievement unlocked: 30-Second Hold! ⏱️');
    }
    
    saveUserData();
    updateAchievements();
}

function checkStrengthAchievements() {
    // Strength Foundations
    if (completedStrengthDays.size >= 7 && !strengthProgram.achievements[0].earned) {
        strengthProgram.achievements[0].earned = true;
        showNotification('Achievement unlocked: Strength Foundations! 💪');
    }
    
    // Muscle Builder
    const week2Complete = [8, 9, 10, 11, 12, 13, 14].every(day => completedStrengthDays.has(day));
    if (week2Complete && !strengthProgram.achievements[1].earned) {
        strengthProgram.achievements[1].earned = true;
        showNotification('Achievement unlocked: Muscle Builder! 🏋️');
    }
    
    saveUserData();
    updateAchievements();
}

// ========== WORKOUT COMPLETION ==========

function completeWorkout() {
    if (currentProgram === "boxing") {
        showBoxingCompletionModal();
    } else if (currentProgram === "handstand") {
        showHandstandCompletionModal();
    } else if (currentProgram === "strength") {
        showStrengthCompletionModal();
    }
}

function showBoxingCompletionModal() {
    const modalTitle = document.getElementById('modal-title');
    const feelingLabel = document.getElementById('feeling-label');
    const notesLabel = document.getElementById('notes-label');
    const confirmButton = document.getElementById('confirm-button');
    
    modalTitle.innerHTML = `<i class="fas fa-fist-raised"></i> Boxing Workout Complete!`;
    feelingLabel.textContent = "How was your boxing workout?";
    notesLabel.textContent = "Any notes about today's boxing session?";
    confirmButton.textContent = "Save Boxing Workout";
    
    completionModal.style.display = 'flex';
    
    // Set up completion handler
    confirmCompletionBtn.onclick = confirmBoxingCompletion;
}

function confirmBoxingCompletion() {
    const feeling = workoutFeelingSelect.value;
    const notes = workoutNotesTextarea.value;
    const dayData = getCurrentBoxingDayData();
    
    // Mark day as completed
    completedBoxingDays.add(currentDay);
    
    // Update stats
    userStats.boxing.totalWorkouts++;
    userStats.boxing.totalTime += 30; // 30 minutes estimate
    userStats.boxing.caloriesBurned += 200; // 200 calories estimate
    
    // Add to history
    combinedHistory.push({
        type: "boxing",
        day: currentDay,
        title: dayData.title,
        date: new Date().toISOString(),
        feeling,
        notes,
        duration: dayData.duration
    });
    
    // Reset modal
    workoutFeelingSelect.value = "great";
    workoutNotesTextarea.value = "";
    completionModal.style.display = "none";
    
    // Update UI
    updateUI();
    
    // Check achievements
    checkBoxingAchievements();
    
    // Save data
    saveUserData();
    
    // Show notification
    showNotification(`Boxing Day ${currentDay} completed! Great work! 🥊`);
    
    // Auto-advance to next day if not the last day
    if (currentDay < 30) {
        currentDay++;
        currentPhase = Math.ceil(currentDay / 5);
        updateUI();
    }
}

function showHandstandCompletionModal() {
    handstandCompletionModal.style.display = 'flex';
}

function confirmHandstandCompletion() {
    const feeling = handstandFeelingSelect.value;
    const holdTime = parseInt(holdTimeInput.value) || 0;
    const notes = handstandNotesTextarea.value;
    
    // Mark day as completed
    completedHandstandDays.add(currentHandstandDay);
    
    // Update stats
    userStats.handstand.totalSessions++;
    userStats.handstand.totalTime += 20; // 20 minutes estimate
    if (holdTime > userStats.handstand.bestHoldTime) {
        userStats.handstand.bestHoldTime = holdTime;
    }
    
    // Add to history
    combinedHistory.push({
        type: "handstand",
        day: currentHandstandDay,
        title: `Handstand Day ${currentHandstandDay}`,
        date: new Date().toISOString(),
        feeling,
        holdTime,
        notes,
        phase: currentHandstandPhase
    });
    
    // Reset modal
    handstandFeelingSelect.value = "excellent";
    holdTimeInput.value = "";
    handstandNotesTextarea.value = "";
    handstandCompletionModal.style.display = "none";
    
    // Update UI
    updateUI();
    
    // Check achievements
    checkHandstandAchievements();
    
    // Save data
    saveUserData();
    
    // Show notification
    showNotification(`Handstand Day ${currentHandstandDay} completed! 🤸`);
    
    // Auto-advance to next day if not the last day
    if (currentHandstandDay < 30) {
        currentHandstandDay++;
        currentHandstandPhase = Math.ceil(currentHandstandDay / 5);
        if (currentHandstandPhase > 4) currentHandstandPhase = 4;
        updateUI();
    }
}

function showStrengthCompletionModal() {
    strengthCompletionModal.style.display = 'flex';
}

function confirmStrengthCompletion() {
    const feeling = strengthFeelingSelect.value;
    const notes = strengthNotesTextarea.value;
    
    // Mark day as completed
    completedStrengthDays.add(currentStrengthDay);
    
    // Update stats
    userStats.strength.totalWorkouts++;
    userStats.strength.totalTime += 45; // 45 minutes estimate
    
    // Add to history
    combinedHistory.push({
        type: "strength",
        day: currentStrengthDay,
        title: `Strength Day ${currentStrengthDay}`,
        date: new Date().toISOString(),
        feeling,
        notes,
        phase: currentStrengthPhase
    });
    
    // Reset modal
    strengthFeelingSelect.value = "powerful";
    strengthNotesTextarea.value = "";
    strengthCompletionModal.style.display = "none";
    
    // Update UI
    updateUI();
    
    // Check achievements
    checkStrengthAchievements();
    
    // Save data
    saveUserData();
    
    // Show notification
    showNotification(`Strength Day ${currentStrengthDay} completed! 💪`);
    
    // Auto-advance to next day if not the last day
    if (currentStrengthDay < 30) {
        currentStrengthDay++;
        currentStrengthPhase = Math.ceil(currentStrengthDay / 7);
        if (currentStrengthPhase > 4) currentStrengthPhase = 4;
        updateUI();
    }
}

// ========== NAVIGATION ==========

function goToPreviousDay() {
    if (currentProgram === "boxing" && currentDay > 1) {
        currentDay--;
        currentPhase = Math.ceil(currentDay / 5);
    } else if (currentProgram === "handstand" && currentHandstandDay > 1) {
        currentHandstandDay--;
        currentHandstandPhase = Math.ceil(currentHandstandDay / 5);
        if (currentHandstandPhase > 4) currentHandstandPhase = 4;
    } else if (currentProgram === "strength" && currentStrengthDay > 1) {
        currentStrengthDay--;
        currentStrengthPhase = Math.ceil(currentStrengthDay / 7);
        if (currentStrengthPhase > 4) currentStrengthPhase = 4;
    }
    updateUI();
}

function goToNextDay() {
    if (currentProgram === "boxing" && currentDay < 30) {
        currentDay++;
        currentPhase = Math.ceil(currentDay / 5);
    } else if (currentProgram === "handstand" && currentHandstandDay < 30) {
        currentHandstandDay++;
        currentHandstandPhase = Math.ceil(currentHandstandDay / 5);
        if (currentHandstandPhase > 4) currentHandstandPhase = 4;
    } else if (currentProgram === "strength" && currentStrengthDay < 30) {
        currentStrengthDay++;
        currentStrengthPhase = Math.ceil(currentStrengthDay / 7);
        if (currentStrengthPhase > 4) currentStrengthPhase = 4;
    }
    updateUI();
}

// ========== CALENDAR ==========

function updateCalendar() {
    calendarElement.innerHTML = '';
    
    // Add header
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-header';
        dayElement.textContent = day;
        calendarElement.appendChild(dayElement);
    });
    
    // Add days 1-30
    for (let day = 1; day <= 30; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        const hasBoxing = completedBoxingDays.has(day);
        const hasHandstand = completedHandstandDays.has(day);
        const hasStrength = completedStrengthDays.has(day);
        
        let isCurrent = false;
        if (currentProgram === "boxing" && day === currentDay) isCurrent = true;
        if (currentProgram === "handstand" && day === currentHandstandDay) isCurrent = true;
        if (currentProgram === "strength" && day === currentStrengthDay) isCurrent = true;
        
        // Determine completion status
        let completionClass = '';
        if (hasBoxing && hasHandstand && hasStrength) {
            completionClass = 'completed';
        } else if (hasBoxing || hasHandstand || hasStrength) {
            completionClass = 'partial';
        }
        
        // Add classes
        if (completionClass) dayElement.classList.add(completionClass);
        if (isCurrent) dayElement.classList.add('current');
        
        // Check if it's a rest day in boxing program
        const boxingDayData = boxingProgram.phases[Math.ceil(day/5)]?.days[day % 5 === 0 ? 5 : day % 5];
        if (boxingDayData?.rest) {
            dayElement.classList.add('rest');
        }
        
        // Create indicator dots
        let dots = '';
        if (hasBoxing) dots += '<div style="width: 6px; height: 6px; background: var(--boxing-color); border-radius: 50%; margin: 2px;"></div>';
        if (hasHandstand) dots += '<div style="width: 6px; height: 6px; background: var(--handstand-color); border-radius: 50%; margin: 2px;"></div>';
        if (hasStrength) dots += '<div style="width: 6px; height: 6px; background: var(--strength-color); border-radius: 50%; margin: 2px;"></div>';
        
        dayElement.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-label">Day ${day}</div>
            <div style="display: flex; justify-content: center; margin-top: 5px;">
                ${dots}
            </div>
        `;
        
        // Add click event
        dayElement.addEventListener('click', () => {
            if (currentProgram === "boxing") {
                currentDay = day;
            } else if (currentProgram === "handstand") {
                currentHandstandDay = day;
                currentHandstandPhase = Math.ceil(day / 5);
                if (currentHandstandPhase > 4) currentHandstandPhase = 4;
            } else if (currentProgram === "strength") {
                currentStrengthDay = day;
                currentStrengthPhase = Math.ceil(day / 7);
                if (currentStrengthPhase > 4) currentStrengthPhase = 4;
            }
            updateUI();
        });
        
        calendarElement.appendChild(dayElement);
    }
}

// ========== HISTORY ==========

function updateHistory() {
    historyListElement.innerHTML = '';
    
    if (combinedHistory.length === 0) {
        historyListElement.innerHTML = `
            <div class="exercise-item">
                <div class="exercise-info">
                    <div class="exercise-name">No training history yet</div>
                    <div class="exercise-details">Complete your first session to see it here!</div>
                </div>
            </div>
        `;
        return;
    }
    
    // Show last 10 entries
    const recentHistory = combinedHistory.slice(-10).reverse();
    
    recentHistory.forEach(entry => {
        const date = new Date(entry.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
        
        let icon = '🏋️';
        let color = 'var(--primary)';
        let duration = '30-45 min';
        
        if (entry.type === "boxing") {
            icon = '🥊';
            color = 'var(--boxing-color)';
            duration = entry.duration || '25-40 min';
        } else if (entry.type === "handstand") {
            icon = '🤸';
            color = 'var(--handstand-color)';
            duration = '15-25 min';
        } else if (entry.type === "strength") {
            icon = '💪';
            color = 'var(--strength-color)';
            duration = '45-60 min';
        }
        
        const historyItem = document.createElement('div');
        historyItem.className = 'exercise-item';
        historyItem.style.borderLeftColor = color;
        
        historyItem.innerHTML = `
            <div class="exercise-info">
                <div class="exercise-name">${icon} ${entry.title}</div>
                <div class="exercise-details">
                    <span>${formattedDate}</span>
                    <span class="exercise-duration">
                        <i class="fas fa-clock"></i>
                        ${duration}
                    </span>
                </div>
                ${entry.feeling ? `<div style="margin-top: 8px; color: var(--gray);">Feeling: <strong>${entry.feeling}</strong></div>` : ''}
                ${entry.holdTime ? `<div style="margin-top: 8px; color: var(--handstand-color);">Best Hold: <strong>${entry.holdTime} seconds</strong></div>` : ''}
                ${entry.notes ? `<div style="margin-top: 8px; font-size: 0.85rem; color: var(--gray-light);">${entry.notes}</div>` : ''}
            </div>
        `;
        
        historyListElement.appendChild(historyItem);
    });
}

// ========== TIMER FUNCTIONS ==========

function setupTimerListeners() {
    startTimerBtn.addEventListener('click', startTimer);
    pauseTimerBtn.addEventListener('click', pauseTimer);
    resetTimerBtn.addEventListener('click', resetTimer);
    
    roundDurationInput.addEventListener('change', updateTimerSettings);
    restDurationInput.addEventListener('change', updateTimerSettings);
    roundCountInput.addEventListener('change', updateTimerSettings);
    
    updateTimerSettings();
}

function startTimer() {
    if (timerRunning) return;
    
    timerRunning = true;
    currentRound++;
    isRestPeriod = false;
    
    updateTimerDisplay();
    updateRoundInfo();
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        
        if (timerSeconds <= 0) {
            if (!isRestPeriod) {
                // Round ended, start rest period
                isRestPeriod = true;
                timerSeconds = restDuration;
                showNotification(`Round ${currentRound} complete! Rest period started.`);
            } else {
                // Rest period ended
                if (currentRound < totalRounds) {
                    currentRound++;
                    isRestPeriod = false;
                    timerSeconds = roundDuration;
                    showNotification(`Rest period over! Round ${currentRound} starting.`);
                } else {
                    // All rounds complete
                    clearInterval(timerInterval);
                    timerRunning = false;
                    showNotification("Workout complete! Great job! 🥊", "success");
                    return;
                }
            }
        }
        
        updateTimerDisplay();
        updateRoundInfo();
    }, 1000);
}

function pauseTimer() {
    if (!timerRunning) return;
    
    clearInterval(timerInterval);
    timerRunning = false;
    showNotification("Timer paused", "warning");
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    currentRound = 0;
    timerSeconds = roundDuration;
    isRestPeriod = false;
    updateTimerDisplay();
    updateRoundInfo();
    showNotification("Timer reset", "warning");
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    mainTimerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color based on state
    if (isRestPeriod) {
        mainTimerElement.style.color = "var(--success)";
    } else {
        mainTimerElement.style.color = "var(--primary)";
    }
}

function updateRoundInfo() {
    currentRoundElement.textContent = currentRound;
    totalRoundsElement.textContent = totalRounds;
}

function updateTimerSettings() {
    roundDuration = parseInt(roundDurationInput.value) * 60;
    restDuration = parseInt(restDurationInput.value);
    totalRounds = parseInt(roundCountInput.value);
    
    if (!timerRunning) {
        timerSeconds = isRestPeriod ? restDuration : roundDuration;
        updateTimerDisplay();
        updateRoundInfo();
    }
}

// ========== NOTIFICATION SYSTEM ==========

function showNotification(message, type = "success") {
    notificationText.textContent = message;
    notification.className = "notification";
    
    if (type === "warning") {
        notification.classList.add("warning");
    } else if (type === "error") {
        notification.classList.add("error");
    }
    
    notification.classList.add("show");
    
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}

// ========== PROFILE EVENT LISTENERS ==========

function setupProfileEventListeners() {
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', saveProfile);
    }
    
    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', exportUserData);
    }
    
    if (resetDataBtn) {
        resetDataBtn.addEventListener('click', resetAllData);
    }
    
    // Settings change listeners
    if (settingReminders) {
        settingReminders.addEventListener('change', () => {
            userProfile.settings.reminders = settingReminders.checked;
            saveUserData();
        });
    }
    
    if (settingSound) {
        settingSound.addEventListener('change', () => {
            userProfile.settings.sound = settingSound.checked;
            saveUserData();
        });
    }
    
    if (settingDarkmode) {
        settingDarkmode.addEventListener('change', () => {
            userProfile.settings.darkMode = settingDarkmode.checked;
            // Apply dark mode theme
            if (userProfile.settings.darkMode) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
            saveUserData();
        });
    }
    
    if (settingBackup) {
        settingBackup.addEventListener('change', () => {
            userProfile.settings.backup = settingBackup.checked;
            saveUserData();
        });
    }
    
    if (settingSharing) {
        settingSharing.addEventListener('change', () => {
            userProfile.settings.sharing = settingSharing.checked;
            saveUserData();
        });
    }
}

// ========== EVENT LISTENERS ==========

function setupEventListeners() {
    // Program toggle buttons
    document.querySelectorAll('.program-toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentProgram = btn.getAttribute('data-program');
            updateUI();
        });
    });
    
    // Phase cards
    document.querySelectorAll('.boxing-phase').forEach(card => {
        card.addEventListener('click', () => {
            const phase = parseInt(card.getAttribute('data-phase'));
            currentDay = (phase - 1) * 5 + 1;
            currentPhase = phase;
            currentProgram = "boxing";
            updateUI();
        });
    });
    
    document.querySelectorAll('.handstand-phase').forEach(card => {
        card.addEventListener('click', () => {
            const phase = parseInt(card.getAttribute('data-hphase'));
            currentHandstandDay = (phase - 1) * 5 + 1;
            currentHandstandPhase = phase;
            currentProgram = "handstand";
            updateUI();
        });
    });
    
    document.querySelectorAll('.strength-phase').forEach(card => {
        card.addEventListener('click', () => {
            const phase = parseInt(card.getAttribute('data-sphase'));
            currentStrengthDay = (phase - 1) * 7 + 1;
            currentStrengthPhase = phase;
            currentProgram = "strength";
            updateUI();
        });
    });
    
    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-tab`) {
                    content.classList.add('active');
                }
            });
            
            // Update content if needed
            if (tabId === 'techniques' || tabId === 'achievements') {
                updateTechniques();
                updateAchievements();
            }
        });
    });
    
    // Technique type tabs
    document.querySelectorAll('[data-tech-type]').forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Prevent default if it's a button
            e.preventDefault();
            
            // Remove active class from all tabs
            document.querySelectorAll('[data-tech-type]').forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Update techniques display
            updateTechniques();
            
            // Also update achievements if they're visible
            if (document.getElementById('achievements-tab').classList.contains('active')) {
                updateAchievements();
            }
        });
    });
    
    // Modal controls
    closeModalBtn.addEventListener('click', () => {
        completionModal.style.display = 'none';
    });
    
    cancelCompletionBtn.addEventListener('click', () => {
        completionModal.style.display = 'none';
    });
    
    closeHandstandModalBtn.addEventListener('click', () => {
        handstandCompletionModal.style.display = 'none';
    });
    
    cancelHandstandBtn.addEventListener('click', () => {
        handstandCompletionModal.style.display = 'none';
    });
    
    closeStrengthModalBtn.addEventListener('click', () => {
        strengthCompletionModal.style.display = 'none';
    });
    
    cancelStrengthBtn.addEventListener('click', () => {
        strengthCompletionModal.style.display = 'none';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === completionModal) {
            completionModal.style.display = 'none';
        }
        if (event.target === handstandCompletionModal) {
            handstandCompletionModal.style.display = 'none';
        }
        if (event.target === strengthCompletionModal) {
            strengthCompletionModal.style.display = 'none';
        }
    });
}

// ========== UTILITY FUNCTIONS ==========

function updateOnlineStatus() {
    const indicator = document.getElementById('offline-indicator');
    if (navigator.onLine) {
        indicator.classList.remove('show');
    } else {
        indicator.classList.add('show');
    }
}

function setupServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('ServiceWorker registered:', registration);
            }).catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
        });
    }
}

// ========== GLOBAL FUNCTIONS ==========

// Make some functions available globally for HTML onclick events
window.closeTechniqueModal = closeTechniqueModal;
window.showTechniqueModal = showTechniqueModal;
window.init = init;

// Add initial active class to boxing tab if not present
document.addEventListener('DOMContentLoaded', function() {
    const techniqueTabs = document.querySelectorAll('[data-tech-type]');
    if (techniqueTabs.length > 0 && !document.querySelector('[data-tech-type].active')) {
        techniqueTabs[0].classList.add('active');
    }
});

// Initialize the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}