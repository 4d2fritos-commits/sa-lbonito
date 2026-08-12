const lessonsData = [
    { title: "Box and Whisker Plots", summary: "Know the different methods of representing data. Define box and whisker plot, and the steps involved in constructing a box and whisker plot. Define dot plot, and describe how to construct it. Explain the method of representing data using histograms. Explain how to interpret data from dot plot, box and whisker plot, and histogram." },
    { title: "Measures of Central Tendency (Mean, Median, and Mode)", summary: "Define measures of central tendency. Define mean and find the mean of a set of data. Define the median and find the median for the given data. Explain mode and range and find it in the given set of data." },
    { title: "Percentiles and Quartiles", summary: "Determine percentiles and quartiles of a given data set." },
    { title: "Mean, Standard Deviation and Variance", summary: "Find the mean of the given data. Explain how to find variance and standard deviation from the given data. Explain the process of comparing two different data sets using statistics measures." },
    { title: "Interpreting and Comparing Data Distributions", summary: "Define spread and center of data, and explain how to measure them. Define the shape of the data and classify its type. Know the difference between the symmetric and skewed distribution of data. Interpret the possible effects of the extreme data points (outliers) on the data set." },
    { title: "Normal Distribution", summary: "Define normal distribution. Find area or probability using the normal curve and cumulative distribution table. Discuss the different technologies used to determine the area under normal curve. Apply standard deviation to create a normal distribution that models a real-world scenario. Interpret data given in a graphic display." },
    { title: "Construct and Interpret Two-Way Frequency Tables", summary: "Define data and its type. Describe the two-way frequency table. Construct and interpret the two-way frequency table. Find conditional probabilities using a two-way frequency table." },
    { title: "Fitting of a Curve", summary: "Define scatter plot, correlation, regression, and line of best fit. Identify the type of relationship between the two variables. Determine the best type of function to fit the given data. Find the missing values using the function fitted to the given data." },
    { title: "Interpret Rate of Change", summary: "Explain that the slope of a line is its rate of change. Recognize situations in which one quantity changes at a constant rate with respect to the other quantity." },
    { title: "Interpreting Linear Functions", summary: "Determine a linear function from the given data. Interpret slope and y-intercept from the linear function. Predict the reasonable measure from the linear function." },
    { title: "Linear Regression", summary: "Define scatter plot, correlation, and its types. Define correlation coefficient. Explain the different methods used to find the correlation coefficient. List down the steps used in finding correlation coefficient using spreadsheet and TI calculator." },
    { title: "Correlation and Causation", summary: "Define correlation and causation. Differentiate correlation and causation. Find correlation and causation from a given data." },
    { title: "Valid Claims", summary: "Define the population and sample. Identify the sample, population, and sample statistics from the given situation. Make inferences about population parameters based on the given random sample from the population." },
    { title: "Fair Games", summary: "Define fair game. Calculate the expected value of a random variable. Check the fairness of a game. Decide if a specified model is consistent using simulation." },
    { title: "Probability Using Simulation", summary: "Define experimental probability. Use simulation to estimate probabilities. Define odds. Find odds of an event. Find odds of an event from given probability." },
    { title: "Sample Surveys, Experiments, and Observational Studies", summary: "Define sample surveys, experiments, and observational studies. Discuss how randomization occurs in sample surveys, experiments, and observational studies. Identify the difference(s) among sample surveys, experiments, and observational studies." },
    { title: "Confidence Interval for Population Mean", summary: "Explain the confidence interval. Find the confidence interval for population mean using z distribution. Determine the margin of error." },
    { title: "Compare Two Treatments of a Randomized Experiment", summary: "List down the steps involved in z-test using p-value approach and critical value approach. Conduct z-test for the equality of two population means and two population proportions using both the methods. Solve problems based on the equality of two population means and two population proportions." },
    { title: "Evaluate Reports Based on Data", summary: "Know the different types of graphical representation. Evaluate reports from graphical representations. Interpret data from graphical representations." },
    { title: "Sample Space and Operations", summary: "Define sample space, subsets, and events. Describe events as subsets of a sample space. Perform set operations on sample space." },
    { title: "Probability of Independent and Dependent Events", summary: "Define probability. Explain dependent and independent events with examples. Find the probability of independent and dependent events." },
    { title: "Conditional Probability", summary: "Define conditional probability. Find the conditional probability of an event. Interpret the problems on conditional probability in terms of a model." },
    { title: "Addition Rule in Probability", summary: "Define mutually exclusive events and overlapping events. Know the addition rule of probability. Explain the addition rule of probability for mutually exclusive and mutually non-exclusive events. Use Ven diagrams to interpret the answer in terms of mode." },
    { title: "Probability with Permutations and Combinations", summary: "Explain permutation and combination. Find the probability of compound events using permutation. Find the probability of compound events using combination." },
    { title: "Constructing Probability Distributions", summary: "Define a random variable. Determine and graph the probability distribution of an each event in a sample space." },
    { title: "Making Decisions with Expected Values", summary: "Create probability distribution for a random variable defined for a sample space. Calculate expected value." },
    { title: "Making Decisions Using Probability", summary: "Analyze decisions using the concepts of probability. Make decisions using probability." }
];

// Configuration
const startDate = new Date("2026-08-17T00:00:00"); // Monday, Aug 17, 2026
const classDays = [1, 3]; // 1 = Monday, 3 = Wednesday

// State
let completedLessons = JSON.parse(localStorage.getItem('statsLessonsProgress')) || [];
let expandedLessons = []; // To keep track of expanded cards

// Calculate dates for lessons
function calculateLessonDates() {
    const dates = [];
    let currentDate = new Date(startDate);
    
    while (dates.length < lessonsData.length) {
        const dayOfWeek = currentDate.getDay();
        if (classDays.includes(dayOfWeek)) {
            dates.push(new Date(currentDate));
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}

const lessonDates = calculateLessonDates();

// Format date nicely in Spanish
function formatDate(date) {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formatted = date.toLocaleDateString('es-ES', options);
    // Capitalize first letter
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

// Render DOM
function renderLessons() {
    const grid = document.getElementById('lessons-grid');
    grid.innerHTML = '';
    
    lessonsData.forEach((lesson, index) => {
        const isCompleted = completedLessons.includes(index);
        const isExpanded = expandedLessons.includes(index);
        const dateStr = formatDate(lessonDates[index]);
        
        const card = document.createElement('div');
        card.className = `lesson-card ${isCompleted ? 'completed' : ''} ${isExpanded ? 'expanded' : ''}`;
        card.onclick = () => toggleExpand(index);
        
        card.innerHTML = `
            <div class="lesson-check" onclick="toggleLesson(event, ${index})">
                <div class="custom-checkbox">
                    <svg viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
            </div>
            <div class="lesson-content">
                <div class="lesson-date">${dateStr}</div>
                <h3 class="lesson-title">${lesson.title}</h3>
                <div class="lesson-summary">
                    <p>${lesson.summary}</p>
                </div>
            </div>
            <div class="lesson-number">${index + 1}</div>
        `;
        
        grid.appendChild(card);
    });
    
    updateProgress();
}

// Toggle Expand
function toggleExpand(index) {
    if (expandedLessons.includes(index)) {
        expandedLessons = expandedLessons.filter(id => id !== index);
    } else {
        expandedLessons.push(index);
    }
    renderLessons();
}

// Toggle Completion
function toggleLesson(event, index) {
    event.stopPropagation(); // Prevent expanding the card when clicking checkbox
    
    if (completedLessons.includes(index)) {
        completedLessons = completedLessons.filter(id => id !== index);
    } else {
        completedLessons.push(index);
    }
    
    // Save to local storage
    localStorage.setItem('statsLessonsProgress', JSON.stringify(completedLessons));
    
    // Re-render
    renderLessons();
}

// Update Header Progress
function updateProgress() {
    const total = lessonsData.length;
    const completed = completedLessons.length;
    const percentage = Math.round((completed / total) * 100);
    
    document.getElementById('progress-text').textContent = `${completed} / ${total} Completados`;
    document.getElementById('progress-percentage').textContent = `${percentage}%`;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderLessons();
});
