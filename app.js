const mainCourseData = [
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

const usGovData = [
    { title: "Principles of Government", summary: "Identify the powers of the federal government. Understand the idea of sovereignty. Describe the social contract theory of the American political system. Differentiate between democracy and dictatorship. Analyze the basic concepts of democracy." },
    { title: "Origin of American Government", summary: "Learn about the origins of the American Government. Understand the types of governments -- ordered government, limited government, and representative government. Analyze the importance of the Magna Carta as a landmark English document. Understand the establishment and the importance of the Petition of Rights in the Constitution of the United States. Analyze the importance and the purpose of the Bill of Rights. Understand the formation of the 13 colonies on the Atlantic coast of North America. Learn about the role and the formation of the three kinds of colonies -- royal, proprietary and charter." },
    { title: "Creating the Constitution", summary: "Discuss the weaknesses of the Articles of Confederation. Compare and contrast plans proposed during the Constitutional Convention. Identify key characteristics of the Framers." },
    { title: "The Critical Period", summary: "Describe the structure of the government set up under the Articles of Confederation. Explain why the weaknesses of the Articles led to a critical period for the government in the 1780s. Describe how a growing need for a stronger national government led to plans for a Constitutional Convention." },
    { title: "Ratifying the Constitution", summary: "Identify major arguments in favor of and against the Constitution. Recognize important figures during the ratification process. Describe how the Constitution was ratified." },
    { title: "The Six Basic Principles", summary: "Recognize how the Constitution is structured. Identify the six guiding principles of the United States Constitution. Summarize the structure of the concept of federalism." },
    { title: "Formal Amendments to the Constitution", summary: "Identify the processes by which amendments to the Constitution can be made. Recognize the 27 Amendments that have been added to the Constitution." },
    { title: "Federalism", summary: "Explain the meaning of federalism. Explain the concept of division of powers. Describe powers granted to the federal government by the Constitution. Describe powers granted to the state government by the Constitution. Identify powers denied to the federal government by the Constitution. Describe powers that are shared by the national and state governments. Identify ways the federal government supports state government." },
    { title: "Political Parties", summary: "Analyze the structure of political parties and learn about the history of the two major political parties - Republican and Democratic. Understand the organization of the US Congress and the state legislatures on the basis of partisanship. Learn about the role of the opposition party as a watchdog. Understand the concept of a minority party and determine the reasons why America has continued to have a two-party system. Understand the factors of party membership patterns and learn about the history of the two-party system. Learn about the four major eras in American political parties." },
    { title: "Voters and Voter Behavior", summary: "Summarize the history of United States voting rights. Understand the state's power to set voting qualifications. Recognize the concepts of suffrage and civil rights. Identify the factors that influence voter turnout. Learn about the various factors that influence voters." },
    { title: "Electoral Process", summary: "Understand how the nominating process works and is critical in a democracy. Familiar with the five nominating methods in the United States, including the most widely used - the direct primary. Understand how elections in the United States helps make democracy work. Define the role of precincts and polling places in the electoral process. Describe the ways voters can cast ballots." },
    { title: "The Formation of Public Opinion", summary: "Understand and define the term public opinion. Analyze the role of family and education in the formation of public opinion. Identify and describe other factors which contribute to shape public opinion." },
    { title: "Interest Groups", summary: "Develop a clear understanding of interest groups and their roles in shaping political decisions. Learn and analyze the difference between political parties and interest groups. Analyze the role of the public interest groups in influencing public opinion. Understand the role of propaganda as a technique of persuasion and analyze the role of media. Analyze the importance of lobbying." },
    { title: "Congress", summary: "Understand why the United States has a bicameral legislature. Identify how legislative districts are set up. Summarize the structure of the United States Congress. Understand the requirements to run for each house. Understand the rolls that members of Congress fill." },
    { title: "Powers of Congress", summary: "Understanding the ways in which Congress derives its powers. Identify the two views of the role of the federal government, including the scope of Congressional powers. Understanding the key points relating to the Congress's power to tax. Describe how Congress borrows money. Identify the reasons that the Framers gave Congress the power to issue currency. Identify the sources of Congress's foreign relations powers. Describe the power sharing between Congress and the President on issue of war and national defense. Learn other key powers of Congress. Explain how the \"Necessary and Proper\" Clause gives Congress flexibility. Understand the pivotal developments in the battle over Congress's implied powers. Describe Congress's role in amending the Constitution and deciding elections. Learn Congress's power to impeach. Identify Congress's executive powers. Describe Congress's investigatory power." },
    { title: "Congress in Action", summary: "Describe how and when Congress convenes. Compare the roles of the leaders in the House and Senate. Identify the duties of party officials in Congress. Summarize how committee chairs are chosen and explain their role. Learn how the standing committees function. Explain the duties of the House Rules Committee. Compare the functions of the joint and conference committees. Learn the first steps in the introduction of a House bill. Describe what happens to a bill once it is referred to a committee. Learn how House leaders schedule a debate on a bill. Explain what happens to a bill on the House floor. Explain how a bill is introduced in the Senate. Compare rules for debate in the House and Senate. Describe conference committees. Explain actions the President may take after both houses have passed a bill. Discuss how a bill becomes a law." },
    { title: "The Presidency", summary: "Identify the roles of the president. Describe the process of presidential succession. Summarize the rise of political parties and their impact on presidential elections. Identify the importance of a national convention and the election of the president. Summarize the functions of the Electoral College and the various reform proposals." },
    { title: "Actions of the President", summary: "Identify the powers of the President. Describe the powers Congress may use to control actions of the President. Explain the message power of the President." },
    { title: "Government at Work, The Bureaucracy", summary: "Define a bureaucracy. Identify the major elements of the federal bureaucracy. Describe the difference between a staff agency and a line agency. Describe the Executive Office of the President. Learn the duties of the White House Office, the National Security Council and the Office of Homeland Security. Describe the Executive Office of the President. Describe the origin and work of the executive departments. Identify the role of the Cabinet in the President's decisions. Explain why Congress created independent agencies. Describe independent executive agencies and independent regulatory commissions. Describe government corporations. Describe the development of the civil service. Explain the activities of today's civil service. Analyze the restrictions on the political activities of civil service members." },
    { title: "Financing Government", summary: "Explain how and why the Constitution gives Congress the power to tax. Describe the most significant federal taxes that are collected. Explain why the Federal Government imposes taxes for non revenue purposes. List the non-tax sources of government revenues. Describe federal borrowing. Analyze the causes and effects of public debt. Identify the key elements of federal spending. Explain how the President and Congress work together to create the federal budget." },
    { title: "Demographics", summary: "Summarize the diverse backgrounds of people in the United States. Identify the first immigrants to settle in the United States. Identify the rights of citizens of the United States. List the various social institutions that exists in the United States. Describe the composition of the workforce in the United States." },
    { title: "The Federal Court System", summary: "Explain why the Constitution created a national judiciary, and describe its structure. Explain federal court jurisdiction. Outline the process for appointing federal judges; list their terms of office and salary structure. Examine the roles of federal court officers. Describe the structure and function of the federal district courts, the federal courts of appeals and the two other constitutional courts. Define the concept of judicial review. Outline the scope of the Supreme Court's jurisdiction. Describe how cases reach the Supreme Court. Describe how the High Court operates. Explain how a citizen may sue the government in the Court of Federal Claims. Examine territorial courts and the District of Columbia courts. Examine the differences in the Court of Appeals for the Armed Forces and the Court of Appeals for Veterans Claims. Explain the types of cases brought to the Tax Court." },
    { title: "First Amendment Freedoms", summary: "Explain what led to the Bill of Rights. Understand that the rights guaranteed by limited government are not absolute. Show how federalism affects individual rights. Describe how the 9th Amendment helps guarantee individual rights. Examine why a free society cannot exist without free expression. Describe the \"wall of separation between church and state\". Summarize the Supreme Court rulings on religion, education and other Establishment Clause cases. Explain how the Supreme Court has interpreted the Free Exercise Clause. Explain the two basic purposes of the guarantees of free expression. Summarize how the Supreme Court has limited seditious speech and obscenity. Examine the limits the Court has placed on the media. Define symbolic and commercial speech and the limits on their exercise. Explain the Constitution's guarantees of assembly and petition. Illustrate how the government can limit the time, place and manner of assembly. Explore the differences in freedom-of-assembly issues on public versus private property. Describe how the Supreme Court has interpreted freedom of association." },
    { title: "Civil Liberties: Protecting Individual Rights", summary: "Explain the meaning of due process of law as set out in the Fifth and 14th Amendments. Define police power and its relationship to civil rights. Describe the right of privacy and its origins in constitutional law. Outline Supreme Court decisions regarding slavery. Explain the intent and application of the Second Amendment's right to bear arms. Outline the provisions designed to secure the home and person. Define the writ of habeas corpus, bills of attainder, and ex post facto laws. Outline how the right to a grand jury and the guarantee against double jeopardy ensure the rights of the accused. Explain issues that pertain to the right of a speedy and public trial. Determine what constitutes a fair trial by jury. Examine the right to an adequate defense and against self incrimination. Explain the purpose of bail. Describe cruel and unusual punishment. Outline the Court's decisions on the death penalty. Define the crime of treason." },
    { title: "Equal Justice Under Law", summary: "Learn what it means to live in a heterogeneous society. Summarize the history of race-based discrimination in the United States. Examine discrimination against women. Explain the importance of the Equal Protection Clause. Describe the history of segregation in America. Examine how classification by sex relates to discrimination. Outline the history of civil rights legislation. Explore affirmative action. Describe how people become American citizens. Explain how an American can lose citizenship. Illustrate how the United States is a nation of immigrants. Analyze the status of undocumented aliens and legal immigrants." },
    { title: "Comparative Political Systems", summary: "Study the elements that make up Britain's unwritten constitution. Identify the role of the British monarchy. Examine the role of Parliament. Learn the recent changes in regional and local government in Britain. Describe the British court system. Learn about the early Japanese government and constitution. Summarize the structure of the National Diet. Explain how the prime minister and cabinet form the executive branch. Learn about Japanese bureaucracy, political parties and courts. Understand regional and local governments in Japan. Summarize Mexico's early political history. Examine Mexico's three branches of government. Describe recent changes in Mexico's national politics. Describe Mexico's regional and local government. Summarize Russia's political history after the Bolshevik Revolution. Outline the structure of the Russian government both before and after the fall of the Soviet Union. Describe Mikhail Gorbachev's reforms. Identify events leading up to the fall of the Soviet Union. Examine China's political background. Describe China's modern government." },
    { title: "Comparative Economic Systems", summary: "Identify the factors of production. Describe the free enterprise system and laissez-faire theory. Analyze the role of government in a mixed economy. Compare and contrast three types of business organizations. Explain the role of profit and loss in a free enterprise system. Define socialism and explain how its growth was spurred by the Industrial Revolution. Identify important characteristics of socialist economies. Summarize the theories of Karl Marx. Outline the characteristics of communist economies." },
    { title: "State and Local Government", summary: "Explain the powers of state government. Describe ways citizens influence laws that are created by state governments. Describe powers of local governments." },
    { title: "State Government", summary: "Learn the basic features of state constitutions. Understand the importance of constitutional amendments and revisions. Analyze and recognize the role of the state legislatures. Learn about the role and powers of the governor: executive, legislative and judicial. Recognize the various powers of the legislature. Learn about the various forms of law: constitutional law, statutory law, administrative law, common law and equity. Recognize the roles of the state courts in resolving issues between private parties and government. Analyze the various aspects of criminal and civil law. Learn about the role and functions of the State Supreme Court." },
    { title: "State and Local Government Finance", summary: "Describe the governmental structure of counties. Analyze the need for reform in county government. Summarize the governments of towns, townships, and special districts. Examine America's shift from a rural to an urban society. Describe the process of incorporation and the function of city charters. Explore the major forms of city government. List municipal functions and explain the need for planning. Describe challenges facing today's metropolitan areas. Explain why state governments have such an important role. Identify the services that states and local governments provide. Understand why services vary greatly from state to state. Describe limits on raising revenue. Learn four principles of sound taxation. Identify tax and other sources of state and local revenue. Explain the state budget process." }
];

// Configuration
const startDate = new Date("2026-08-17T00:00:00"); // Monday, Aug 17, 2026
const mainClassDays = [1, 3]; // 1 = Monday, 3 = Wednesday
const usGovClassDays = [2, 4]; // 2 = Tuesday, 4 = Thursday

// State
let activeTab = 'main'; // 'main' or 'usgov'
let completedLessonsMain = JSON.parse(localStorage.getItem('statsLessonsProgress')) || [];
let expandedLessonsMain = [];
let completedLessonsUsGov = JSON.parse(localStorage.getItem('usGovLessonsProgress')) || [];
let expandedLessonsUsGov = [];

// Calculate dates for lessons
function calculateLessonDates(data, daysArray) {
    const dates = [];
    let currentDate = new Date(startDate);
    
    while (dates.length < data.length) {
        const dayOfWeek = currentDate.getDay();
        if (daysArray.includes(dayOfWeek)) {
            dates.push(new Date(currentDate));
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}

const mainLessonDates = calculateLessonDates(mainCourseData, mainClassDays);
const usGovLessonDates = calculateLessonDates(usGovData, usGovClassDays);

// Format date nicely in Spanish
function formatDate(date) {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const formatted = date.toLocaleDateString('es-ES', options);
    // Capitalize first letter
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

// Get current state references based on active tab
function getActiveData() { return activeTab === 'main' ? mainCourseData : usGovData; }
function getActiveDates() { return activeTab === 'main' ? mainLessonDates : usGovLessonDates; }
function getActiveCompleted() { return activeTab === 'main' ? completedLessonsMain : completedLessonsUsGov; }
function getActiveExpanded() { return activeTab === 'main' ? expandedLessonsMain : expandedLessonsUsGov; }

function saveActiveCompleted(newCompleted) {
    if (activeTab === 'main') {
        completedLessonsMain = newCompleted;
        localStorage.setItem('statsLessonsProgress', JSON.stringify(completedLessonsMain));
    } else {
        completedLessonsUsGov = newCompleted;
        localStorage.setItem('usGovLessonsProgress', JSON.stringify(completedLessonsUsGov));
    }
}

function setActiveExpanded(newExpanded) {
    if (activeTab === 'main') {
        expandedLessonsMain = newExpanded;
    } else {
        expandedLessonsUsGov = newExpanded;
    }
}

// Switch tabs
function switchTab(tab) {
    activeTab = tab;
    
    // Update active tab button style
    document.getElementById('tab-main').classList.toggle('active', tab === 'main');
    document.getElementById('tab-usgov').classList.toggle('active', tab === 'usgov');
    
    renderLessons();
}

// Render DOM
function renderLessons() {
    const grid = document.getElementById('lessons-grid');
    grid.innerHTML = '';
    
    const lessonsData = getActiveData();
    const completedLessons = getActiveCompleted();
    const expandedLessons = getActiveExpanded();
    const lessonDates = getActiveDates();
    
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
    let expandedLessons = getActiveExpanded();
    if (expandedLessons.includes(index)) {
        expandedLessons = expandedLessons.filter(id => id !== index);
    } else {
        expandedLessons.push(index);
    }
    setActiveExpanded(expandedLessons);
    renderLessons();
}

// Toggle Completion
function toggleLesson(event, index) {
    event.stopPropagation(); // Prevent expanding the card when clicking checkbox
    
    let completedLessons = getActiveCompleted();
    if (completedLessons.includes(index)) {
        completedLessons = completedLessons.filter(id => id !== index);
    } else {
        completedLessons.push(index);
    }
    
    saveActiveCompleted(completedLessons);
    
    // Re-render
    renderLessons();
}

// Update Header Progress
function updateProgress() {
    const lessonsData = getActiveData();
    const completedLessons = getActiveCompleted();
    const total = lessonsData.length;
    const completed = completedLessons.length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    document.getElementById('progress-text').textContent = `${completed} / ${total} Completados`;
    document.getElementById('progress-percentage').textContent = `${percentage}%`;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    renderLessons();
});
