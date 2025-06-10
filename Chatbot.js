document.getElementById("sendBtn").addEventListener("click", function() {
  let userInput = document.getElementById("userInput").value;
  let chatbox = document.getElementById("chatbox");

  if (userInput.trim() === "") return;

  // Display user message
  chatbox.innerHTML += `<div class='user'><strong>You:</strong> ${userInput}</div>`;

  // Generate bot response
  let botResponse = getBotResponse(userInput);
  chatbox.innerHTML += `<div class='bot'><strong>Bot:</strong> ${botResponse}</div>`;

  document.getElementById("userInput").value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
});

function getBotResponse(input) {
    input = input.toLowerCase();
  
    // Greetings
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) return "Hi there! Welcome to VetFleet. How can I assist you today?";
    if (input.includes("how are you")) return "I'm doing great! Here to help with all your VetFleet questions.";
  
    // Company Info
    if (input.includes("what is vetfleet")) return "VetFleet is a driver screening and management platform that helps car owners find reliable drivers for ride-hailing services like Uber and Bolt.";
    if (input.includes("who owns vetfleet")) return "VetFleet was founded by a team passionate about safe and trustworthy ride-sharing partnerships.";
    if (input.includes("where are you located")) return "We are based in South Africa but operate online for nationwide service.";
  
    // Services
    if (input.includes("what services do you offer")) return "We offer driver vetting, background checks, professional matching, and ongoing monitoring for drivers working on Uber or Bolt.";
    if (input.includes("how does vetfleet work")) return "Car owners list their vehicles, and we screen and match vetted drivers. We ensure both parties meet legal, safety, and financial standards.";
    if (input.includes("do you provide drivers")) return "Yes, we match qualified, background-checked drivers with car owners looking to earn passively on Uber/Bolt.";
    if (input.includes("can i list my car")) return "Absolutely! You can register your vehicle with VetFleet, and we’ll help you find a suitable driver.";
    if (input.includes("can i apply as a driver")) return "Yes! If you have a valid license, PDP, and a clean record, you're welcome to apply via our driver onboarding form.";
  
    // Safety & Screening
    if (input.includes("how do you screen drivers") || input.includes("driver checks")) return "We run ID verification, criminal background checks, driving history analysis, and personality screening to ensure only trusted drivers join VetFleet.";
    if (input.includes("how do you ensure safety")) return "We ensure driver vetting, agreement enforcement, and offer periodic check-ins with both drivers and owners.";
  
    // Payments & Fees
    if (input.includes("how do i get paid")) return "Once your car is matched with a vetted driver, you'll receive weekly or monthly rental payments as per your agreement.";
    if (input.includes("how much does it cost")) return "We charge a small commission for managing the process. Pricing depends on the service level selected.";
    if (input.includes("is there a subscription")) return "We offer both once-off and subscription-based service packages depending on your needs.";
  
    // Support & Help
    if (input.includes("help") || input.includes("support")) return "We're here to help! You can reach out via email or our contact form for personalized support.";
    if (input.includes("contact") || input.includes("email")) return "You can contact us at support@vetfleet.co.za or through the contact form on our website.";
  
    // Exit
    if (input.includes("bye") || input.includes("goodbye")) return "Goodbye! Thanks for chatting with VetFleet. Reach out any time!";
    if (input.includes("thank you")) return "You're welcome! Let us know if you need anything else.";
  
    // Default
    return "I'm still learning. Please try asking about our services, drivers, or how VetFleet works.";
  }
  

