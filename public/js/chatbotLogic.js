export const initializeChatbot = () => {
    if (window.wedEaseChatbotLoaded) return;
    window.wedEaseChatbotLoaded = true;
  
    const API_CONFIG = {
      url: "https://abxzotpg31.execute-api.ap-south-1.amazonaws.com/prod",
      fallbackUrl: "https://abxzotpg31.execute-api.ap-south-1.amazonaws.com/prod",
      timeout: 15000, 
      retries: 2
    };
    
    const userData = {
      name: '',
      phone: '',
      email: '',
      userQuery: '',
      eventType: ''
    };
  
    let step = 0;
    let isProcessing = false;
  
    const steps = [
      { question: "Hi! 😊 You've landed at WedEase! Are you planning a wedding, a fab birthday bash, or an anniversary surprise?", placeholder: "E.g. Wedding, Birthday, Anniversary....", key: "eventType", type: "input", button: "Next" },
      { question: "💌 Before we dive into the fun stuff — drop your name, number & email so we can stay in touch with fab ideas!", key: "contactInfo", type: "multi-input", button: "Next" },
      { question: "Tell us what's on your mind – venue, budget, or anything that needs a little wedding sparkle! 💌", placeholder: "Type your query here...", key: "userQuery", type: "input", button: "Send" }
    ];
  
    function logError(error, context) {
      console.error(`WedEase Chatbot Error [${context}]:`, error);
    }
  
    async function fetchWithRetry(url, options, retries = API_CONFIG.retries) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);
  
      try {
        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers
          }
        });
  
        clearTimeout(timeoutId);
  
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
  
        return await response.json();
      } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
          throw new Error('Request timed out. Please check your connection.');
        }
  
        if (retries > 0) {
          logError(error, `Retrying... ${retries} attempts left`);
          await new Promise(resolve => setTimeout(resolve, 1000));
          return fetchWithRetry(url, options, retries - 1);
        }
  
        throw error;
      }
    }
  
    function setupEventListeners() {
      const chatbotIcon = document.getElementById('chatbot-icon');
      const chatbox = document.getElementById('chatbox');
      const closeBtn = document.getElementById('chatbox-close-btn');
      
      if (!chatbotIcon || !chatbox || !closeBtn) {
        logError('Chatbot elements not found', 'Event Listeners Setup');
        return;
      }
  
      chatbotIcon.addEventListener('click', openChat);
      closeBtn.addEventListener('click', closeChat);
    }
  
    function openChat() {
      const chatbox = document.getElementById('chatbox');
      const chatbotIcon = document.getElementById('chatbot-icon');
      
      if (chatbox && chatbotIcon) {
        chatbox.classList.add('open');
        chatbotIcon.style.display = 'none';
        if (step === 0) {
          askQuestion();
        }
      }
    }
  
    function closeChat() {
      const chatbox = document.getElementById('chatbox');
      const chatbotIcon = document.getElementById('chatbot-icon');
      
      if (chatbox && chatbotIcon) {
        chatbox.classList.remove('open');
        chatbotIcon.style.display = 'flex';
      }
    }
  
    function addMessage(text, isBot, isError = false) {
      const messages = document.getElementById('chatbox-messages');
      if (!messages) return;
  
      const p = document.createElement('p');
      p.textContent = text;
      
      if (isError) {
        p.className = 'error';
      } else {
        p.className = isBot ? 'bot' : 'user';
      }
      
      messages.appendChild(p);
      messages.scrollTop = messages.scrollHeight;
    }
  
    function setInput({ type, placeholder, button }) {
      const inputs = document.getElementById('chatbox-inputs');
      if (!inputs) return;
  
      if (type === 'multi-input') {
        inputs.innerHTML = `
          <input id="nameInput" placeholder="Your name" class="chat-input" autocomplete="name" />
          <input id="phoneInput" placeholder="Phone number" class="chat-input" autocomplete="tel" />
          <input id="emailInput" placeholder="Email address" class="chat-input" autocomplete="email" />
          <button id="sendBtn" disabled>${button}</button>
        `;
  
        const nameInput = document.getElementById('nameInput');
        const phoneInput = document.getElementById('phoneInput');
        const emailInput = document.getElementById('emailInput');
        const sendBtn = document.getElementById('sendBtn');
  
        const checkFields = () => {
          const hasName = nameInput.value.trim().length >= 2;
          const hasPhone = phoneInput.value.trim().length >= 10;
          const hasEmail = /^[^@]+@[^@]+\.[^@]+$/.test(emailInput.value.trim());
          sendBtn.disabled = !(hasName && hasPhone && hasEmail) || isProcessing;
        };
  
        nameInput.addEventListener('input', checkFields);
        phoneInput.addEventListener('input', checkFields);
        emailInput.addEventListener('input', checkFields);
  
        nameInput.focus();
        sendBtn.onclick = handleNext;
      } else {
        const inputType = type === 'textarea' ? 'textarea' : 'input';
        inputs.innerHTML = `
          <${inputType} id="answer" placeholder="${placeholder}" class="chat-input" ${inputType === 'input' ? 'autocomplete="off"' : ''}></${inputType}>
          <button id="sendBtn" disabled>${button}</button>
        `;
  
        const answerInput = document.getElementById('answer');
        const sendBtn = document.getElementById('sendBtn');
        
        answerInput.addEventListener('input', () => {
          sendBtn.disabled = !answerInput.value.trim() || isProcessing;
        });
        
        answerInput.focus();
        
        answerInput.addEventListener('keydown', (e) => {
          if (type === 'textarea') {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleNext();
            }
          } else {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleNext();
            }
          }
        });
        
        sendBtn.onclick = handleNext;
      }
    }
  
    function askQuestion() {
      const current = steps[step];
      addMessage(current.question, true);
      setInput(current);
    }
  
    function validateField(key, value) {
      switch (key) {
        case 'name':
          return value.length >= 2;
        case 'phone':
          return /^\d{10}$/.test(value.replace(/\D/g, ''));
        case 'email':
          return /^[^@]+@[^@]+\.[^@]+$/.test(value);
        default:
          return value.length > 0;
      }
    }
  
    async function handleNext() {
      if (isProcessing) return;
  
      const current = steps[step];
  
      if (current.type === 'multi-input') {
        const nameInput = document.getElementById('nameInput');
        const phoneInput = document.getElementById('phoneInput');
        const emailInput = document.getElementById('emailInput');
  
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();
  
        const isNameValid = validateField('name', name);
        const isPhoneValid = validateField('phone', phone);
        const isEmailValid = validateField('email', email);
  
        if (!isNameValid || !isPhoneValid || !isEmailValid) {
          addMessage("Please check your details and try again. Make sure all fields are valid.", true, true);
          return;
        }
  
        userData.name = name;
        userData.phone = phone;
        userData.email = email;
  
        addMessage(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}`, false);
  
      } else {
        const answerEl = document.getElementById('answer');
        const answer = answerEl.value.trim();
        
        if (!answer) return;
  
        const isValid = validateField(current.key, answer);
  
        addMessage(answer, false);
        answerEl.value = '';
  
        if (!isValid) {
          addMessage(`Invalid ${current.key}. Please enter again:`, true, true);
          setInput(current);
          return;
        }
  
        userData[current.key] = answer;
      }
  
      if (step === steps.length - 1) {
        await sendToServer();
        return;
      }
  
      step++;
      askQuestion();
    }
  
    async function sendToServer() {
      isProcessing = true;
      
      const sendBtn = document.getElementById('sendBtn');
      if (sendBtn) sendBtn.disabled = true;
  
      const messages = document.getElementById('chatbox-messages');
      const processingP = document.createElement('p');
      processingP.textContent = 'Processing your request... ⏳';
      processingP.className = 'bot';
      messages.appendChild(processingP);
      messages.scrollTop = messages.scrollHeight;
  
      try {
        let data;
        try {
          data = await fetchWithRetry(API_CONFIG.url, {
            method: 'POST',
            body: JSON.stringify(userData)
          });
        } catch (httpsError) {
          logError(httpsError, 'HTTPS request failed, trying HTTP');
          data = await fetchWithRetry(API_CONFIG.fallbackUrl, {
            method: 'POST',
            body: JSON.stringify(userData)
          });
        }
  
        messages.removeChild(processingP);
        
        if (data && data.reply) {
          addMessage(data.reply, true);
        } else {
          addMessage('Thank you for your inquiry! We\'ll get back to you soon.', true);
        }
  
      } catch (error) {
        logError(error, 'Server communication');
        messages.removeChild(processingP);
        
        let errorMessage = 'Unable to connect to our servers. ';
        
        if (error.message.includes('timed out')) {
          errorMessage += 'The request timed out. Please check your internet connection and try again.';
        } else if (error.message.includes('CORS')) {
          errorMessage += 'There\'s a configuration issue. Please contact support.';
        } else if (error.message.includes('HTTP 5')) {
          errorMessage += 'Our server is experiencing issues. Please try again later.';
        } else {
          errorMessage += 'Please try again or contact us directly.';
        }
        
        addMessage(errorMessage, true, true);
        
        setTimeout(() => {
          addMessage('You can also reach us directly via email or phone for immediate assistance.', true);
        }, 1000);
        
      } finally {
        isProcessing = false;
        if (sendBtn) sendBtn.disabled = false;
      }
    }
  
    // Initialize the chatbot when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupEventListeners);
    } else {
      setupEventListeners();
    }
  
    // Return cleanup function
    return () => {
      window.wedEaseChatbotLoaded = false;
    };
  };