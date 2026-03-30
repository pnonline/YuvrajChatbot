	// Candidate Information Database

const candidateInfo = {

    name: "Yuvraj Gokul",

    party: "Bharatiya Janata Party",

    constituency: "Nedumangad",

    state: "Keralam",

    

    profile: {

        age: 37,

        education: "BTech, Cusat",

        profession: "Social Entrepreneur, BJP intellectual cell state co convenor and National Prize winning director",

        experience: "15 years in public service and community development"

    },

    

    background: `Yuvraj Gokul is a dedicated public servant with a strong background in grassroots social work. He is also an award winning Director.`,

    

    politicalExperience: [

        "Member of District Committee of BJP Thiruvananthapuram",

        "BJP Intellectual cell state co convenor ",

        "Led multiple community development initiatives",

        "Worked with 10+ NGOs for social welfare"

    ],

    

    keyPromises: [

        {

            title: "Drinking Water & Irrigation",

            description: "Under the Jal Jeevan Mission's Har Ghar Jal scheme, piped water will be provided to all houses in the constituency to solve drinking water issues."

        },

        {

            title: "Railway Infrastructure",

            description: "A Hill Highway Railway project will be implemented in cooperation with the Central Government."

        },

        {

            title: "Social Welfare",

            description: "Public crematoriums will be established in Vembayam, Pothencode, Manikkal, and Karakulam panchayats."

        },

        {

            title: "Infrastructure Development",

            description: "A comprehensive Road Network Project will be implemented across the constituency."

        },

        {

            title: "Health & Medicine",

            description: "Nedumangad Taluk Hospital will be upgraded with modern facilities to ensure critical care for common people and guarantee life safety."

        },

        {

            title: "Vizhinjam Gateway",

            description: "Nedumangad will be strategically developed as the primary gateway to the transshipment Vizhinjam port."

        }

    ],

    

    achievements: [

        "Successfully led many campaigns for the common man causes",

        "Organized free medical camps serving 10,000+ patients"

    ],

    

    contact: {

        phone: "+91 9037424146",

        email: "yuvrajgokul@gmail.com",

        office: "Campaign Office: Nedumangad, Thiruvananthapuram  - 671 001",

        website: "https://yuvrajgokul.com/",

        social: {

            twitter: "@yuvrajsays",

            facebook: "facebook.com/yuvrajgokulpage",

            instagram: "@yuvrajgokul"

        }

    },

    

    vision: "To build a progressive, inclusive, and prosperous constituency where every citizen has access to quality education, healthcare, and employment opportunities. My vision is to make Nedumangad a model constituency that other regions can emulate."

};



// Chatbot Response Logic

class ElectionChatbot {

    constructor() {

        this.messagesContainer = document.getElementById('chatbot-messages');

        this.userInput = document.getElementById('user-input');

        this.sendBtn = document.getElementById('send-btn');

        this.toggleBtn = document.getElementById('chatbot-toggle');

        this.closeBtn = document.getElementById('chatbot-close');

        this.chatWindow = document.getElementById('chatbot-window');

        this.quickBtns = document.querySelectorAll('.quick-btn');

        

        this.initializeEventListeners();

    }

    

    initializeEventListeners() {

        // Toggle chatbot

        this.toggleBtn.addEventListener('click', () => this.openChat());

        this.closeBtn.addEventListener('click', () => this.closeChat());

        

        // Send message

        this.sendBtn.addEventListener('click', () => this.handleUserMessage());

        this.userInput.addEventListener('keypress', (e) => {

            if (e.key === 'Enter') this.handleUserMessage();

        });

        

        // Quick question buttons

        this.quickBtns.forEach(btn => {

            btn.addEventListener('click', () => {

                const question = btn.getAttribute('data-question');

                this.handleUserMessage(question);

            });

        });

    }

    

    openChat() {

        this.chatWindow.classList.add('active');

        this.toggleBtn.classList.add('hidden');

        this.userInput.focus();

    }

    

    closeChat() {

        this.chatWindow.classList.remove('active');

        this.toggleBtn.classList.remove('hidden');

    }

    

    handleUserMessage(predefinedMessage = null) {

        const message = predefinedMessage || this.userInput.value.trim();

        

        if (!message) return;

        

        // Display user message

        this.addMessage(message, 'user');

        

        // Clear input

        if (!predefinedMessage) {

            this.userInput.value = '';

        }

        

        // Show typing indicator

        this.showTypingIndicator();

        

        // Generate and display bot response

        setTimeout(() => {

            this.removeTypingIndicator();

            const response = this.generateResponse(message);

            this.addMessage(response, 'bot');

        }, 1000);

    }

    

    addMessage(content, type) {

        const messageDiv = document.createElement('div');

        messageDiv.className = `message ${type}-message`;

        

        const contentDiv = document.createElement('div');

        contentDiv.className = 'message-content';

        contentDiv.innerHTML = content;

        

        messageDiv.appendChild(contentDiv);

        this.messagesContainer.appendChild(messageDiv);

        

        // Scroll to bottom

        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

    }

    

    showTypingIndicator() {

        const typingDiv = document.createElement('div');

        typingDiv.className = 'message bot-message typing-indicator-message';

        typingDiv.innerHTML = `

            <div class="message-content typing-indicator">

                <span></span>

                <span></span>

                <span></span>

            </div>

        `;

        this.messagesContainer.appendChild(typingDiv);

        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;

    }

    

    removeTypingIndicator() {

        const typingIndicator = this.messagesContainer.querySelector('.typing-indicator-message');

        if (typingIndicator) {

            typingIndicator.remove();

        }

    }

    

    generateResponse(userMessage) {

        const message = userMessage.toLowerCase();

        

        // Greetings

        if (this.matchKeywords(message, ['hello', 'hi', 'hey', 'namaste', 'namaskar'])) {

            return `<p>Namaste! 🙏 I'm here to help you learn about ${candidateInfo.name}. How can I assist you today?</p>`;

        }

        

        // About candidate / Profile

        if (this.matchKeywords(message, ['about', 'who', 'profile', 'candidate', 'tell me', 'introduce'])) {

            return `

                <p><strong>About ${candidateInfo.name}</strong></p>

                <p>${candidateInfo.background}</p>

                <p><strong>Education:</strong> ${candidateInfo.profile.education}</p>

                <p><strong>Age:</strong> ${candidateInfo.profile.age} years</p>

                <p><strong>Profession:</strong> ${candidateInfo.profile.profession}</p>

                <p><strong>Party:</strong> ${candidateInfo.party}</p>

                <p><strong>Constituency:</strong> ${candidateInfo.constituency}, ${candidateInfo.state}</p>

            `;

        }

        

        // Education

        if (this.matchKeywords(message, ['education', 'qualification', 'degree', 'study', 'studied'])) {

            return `

                <p><strong>Educational Qualifications:</strong></p>

                <p>${candidateInfo.profile.education}</p>

                <p>Yuvraj Gokul has a strong grass root level interactions with public, which has equipped him with analytical and leadership skills.</p>

            `;

        }

        

        // Political Experience

        if (this.matchKeywords(message, ['experience', 'political', 'background', 'work', 'career'])) {

            return `

                <p><strong>Political Experience:</strong></p>

                <ul>

                    ${candidateInfo.politicalExperience.map(exp => `<li>${exp}</li>`).join('')}

                </ul>

                <p>With ${candidateInfo.profile.experience}, Yuvraj Gokul has proven his commitment to public service.</p>

            `;

        }

        

        // Key Promises / Agenda / Manifesto

        if (this.matchKeywords(message, ['promise', 'agenda', 'manifesto', 'plan', 'will do', 'goals', 'objectives'])) {

            return `

                <p><strong>Key Promises & Agenda:</strong></p>

                ${candidateInfo.keyPromises.map(promise => `

                    <p><strong>${promise.title}:</strong><br>${promise.description}</p>

                `).join('')}

            `;

        }

        

        // Achievements

        if (this.matchKeywords(message, ['achievement', 'accomplish', 'done', 'success', 'work done'])) {

            return `

                <p><strong>Major Achievements:</strong></p>

                <ul>

                    ${candidateInfo.achievements.map(achievement => `<li>${achievement}</li>`).join('')}

                </ul>

            `;

        }

        

        // Vision

        if (this.matchKeywords(message, ['vision', 'future', 'dream', 'goal'])) {

            return `

                <p><strong>Vision for ${candidateInfo.constituency}:</strong></p>

                <p>${candidateInfo.vision}</p>

            `;

        }

        

        // Contact Information

        if (this.matchKeywords(message, ['contact', 'reach', 'phone', 'email', 'address', 'office', 'meet'])) {

            return `

                <p><strong>Contact Information:</strong></p>

                <p><strong>Phone:</strong> ${candidateInfo.contact.phone}</p>

                <p><strong>Email:</strong> ${candidateInfo.contact.email}</p>

                <p><strong>Office:</strong> ${candidateInfo.contact.office}</p>

                <p><strong>Website:</strong> ${candidateInfo.contact.website}</p>

                <p><strong>Social Media:</strong></p>

                <ul>

                    <li>Twitter: ${candidateInfo.contact.social.twitter}</li>

                    <li>Facebook: ${candidateInfo.contact.social.facebook}</li>

                    <li>Instagram: ${candidateInfo.contact.social.instagram}</li>

                </ul>

            `;

        }

        

        // Constituency

        if (this.matchKeywords(message, ['constituency', 'area', 'region', 'where', 'location'])) {

            return `

                <p><strong>Constituency Details:</strong></p>

                <p><strong>Constituency:</strong> ${candidateInfo.constituency}</p>

                <p><strong>State:</strong> ${candidateInfo.state}</p>

                <p>${candidateInfo.name} is contesting from ${candidateInfo.constituency} constituency in the upcoming Lok Sabha elections.</p>

            `;

        }

        

        // Party

        if (this.matchKeywords(message, ['party', 'political party', 'which party'])) {

            return `

                <p><strong>Political Party:</strong></p>

                <p>${candidateInfo.name} is representing the <strong>${candidateInfo.party}</strong> in the upcoming elections.</p>

            `;

        }

        

        // Education promises

        if (this.matchKeywords(message, ['education', 'school', 'student', 'learning'])) {

            const eduPromise = candidateInfo.keyPromises.find(p => p.title.includes('Education'));

            return `

                <p><strong>${eduPromise.title}:</strong></p>

                <p>${eduPromise.description}</p>

                <p>Education is a top priority in our agenda to ensure every child gets quality education.</p>

            `;

        }

        

        // Healthcare promises

        if (this.matchKeywords(message, ['health', 'healthcare', 'hospital', 'medical', 'doctor'])) {

            const healthPromise = candidateInfo.keyPromises.find(p => p.title.includes('Healthcare'));

            return `

                <p><strong>${healthPromise.title}:</strong></p>

                <p>${healthPromise.description}</p>

                <p>Accessible healthcare is a fundamental right, and we are committed to making it available to all.</p>

            `;

        }

        

        // Jobs / Employment

        if (this.matchKeywords(message, ['job', 'employment', 'work', 'unemployment', 'career'])) {

            const jobPromise = candidateInfo.keyPromises.find(p => p.title.includes('Job'));

            return `

                <p><strong>${jobPromise.title}:</strong></p>

                <p>${jobPromise.description}</p>

                <p>Creating employment opportunities is crucial for the economic development of our constituency.</p>

            `;

        }

        

        // Women empowerment

        if (this.matchKeywords(message, ['women', 'woman', 'female', 'ladies', 'girl'])) {

            const womenPromise = candidateInfo.keyPromises.find(p => p.title.includes('Women'));

            return `

                <p><strong>${womenPromise.title}:</strong></p>

                <p>${womenPromise.description}</p>

                <p>Women's empowerment and safety are paramount for building a progressive society.</p>

            `;

        }

        

        // Environment

        if (this.matchKeywords(message, ['environment', 'pollution', 'green', 'tree', 'clean'])) {

            const envPromise = candidateInfo.keyPromises.find(p => p.title.includes('Environmental'));

            return `

                <p><strong>${envPromise.title}:</strong></p>

                <p>${envPromise.description}</p>

                <p>Environmental protection is essential for the health and well-being of future generations.</p>

            `;

        }

        

        // Thank you

        if (this.matchKeywords(message, ['thank', 'thanks', 'appreciate'])) {

            return `<p>You're welcome! 🙏 Feel free to ask if you have any more questions about ${candidateInfo.name} or the election campaign.</p>`;

        }

        

        // Goodbye

        if (this.matchKeywords(message, ['bye', 'goodbye', 'see you', 'later'])) {

            return `<p>Thank you for your interest! Don't forget to vote on election day. Jai Hind! 🇮🇳</p>`;

        }

        

        // Default response

        return `

            <p>I can help you with information about ${candidateInfo.name}. You can ask me about:</p>

            <ul>

                <li>Candidate's background and education</li>

                <li>Political experience</li>

                <li>Key promises and agenda</li>

                <li>Achievements</li>

                <li>Contact information</li>

                <li>Constituency details</li>

                <li>Specific topics like education, healthcare, jobs, etc.</li>

            </ul>

            <p>What would you like to know?</p>

        `;

    }

    

    matchKeywords(message, keywords) {

        return keywords.some(keyword => message.includes(keyword));

    }

}



// Initialize chatbot when DOM is loaded

document.addEventListener('DOMContentLoaded', () => {

    new ElectionChatbot();

});
