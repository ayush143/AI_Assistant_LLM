# 🤖 NEXA — Intelligent Personal AI Assistant

> **An AI assistant that doesn't just answer questions — it understands, remembers, uses tools, and takes action.**

NEXA is an **AI-powered voice assistant and personal AI agent** designed to create a more natural and interactive human-AI experience through **voice interaction, intelligent tool calling, memory, web search, browser automation, content generation, and a 3D animated avatar**.

The project combines a modern web stack with **Ollama and local LLMs** to create an assistant capable of understanding user requests, retrieving relevant memory, selecting appropriate tools, executing tasks, and responding in real time.

> 🚧 **Status: Active Development**

---
## Sample of Assistant by watching this you can understand how it works in realtime 

https://lnkd.in/p/gQkYV52F

## 🌟 Overview

Traditional voice assistants are mostly limited to predefined commands and simple question answering.

NEXA is designed with a different goal: to evolve into a **true personal AI agent** that can understand a request, determine what needs to be done, select the appropriate tool, execute the task, and provide the result to the user.

### NEXA can:

* 🎙️ Understand voice commands
* 💬 Process text-based conversations
* 🧠 Maintain conversation context
* 💾 Store and retrieve persistent memory
* 🛠️ Decide when tools are required
* 🌐 Search the web for information
* 🌍 Automate browser-based tasks
* ✍️ Generate and improve content
* ⏰ Manage reminders
* 🤖 Interact through a 3D animated avatar
* ⚡ Provide real-time responses

---
---

# 📊 Current Capabilities

| Capability                    | Status            |
| ----------------------------- | ----------------- |
| 🎙️ Voice Recognition          | ✅ Implemented   |
| 🔊 Text-to-Speech             | ✅ Implemented   |
| 🤖 3D Avatar                  | ✅ Implemented   |
| 🎭 Avatar Animations          | ✅ Implemented   |
| 🧠 Session Memory             | ✅ Implemented   |
| 💾 Database Memory            | ✅ Implemented   |
| 💬 Chat History               | ✅ Implemented   |
| ⚡ Real-Time Responses        | ✅ Implemented   |
| 🌐 Web Search                 | ✅ Implemented   |
| 🛠️ Intelligent Tool Calling   | ✅ Implemented   |
| 🌍 Web Automation             | ✅ Implemented   |
| ✍️ Content Generation         | ✅ Implemented   |
| ⏰ Smart Reminders            | ✅ Implemented   |
| 🖥️ Application Control        | ✅ Implemented   |
| 🤖 Autonomous Task Automation |✅ Implemented    |
| 🔄 Multi-Step Task Execution  | 🚧 Planned       |
| 🧠 Advanced Long-Term Memory  | 🚧 Planned       |
| 📚 RAG                        | 🚧 Planned       |
---
# ✨ Features

## 🎙️ Voice Interaction

NEXA supports natural voice-based interaction using browser speech technologies.

### Voice Recognition

```text
🎤 User Speech
      ↓
Speech Recognition
      ↓
      Text
      ↓
AI Processing
```

### Text-to-Speech

```text
AI Response
      ↓
Text-to-Speech
      ↓
🔊 Voice Output
      ↓
🤖 Avatar Animation
```

This allows users to communicate with NEXA without relying entirely on a traditional text interface.

---

# 🧠 AI Processing

NEXA uses a local LLM through **Ollama** to understand user requests and determine the appropriate response or action.

The AI can determine whether a request requires:

* 💬 Normal conversation
* 🧠 Memory retrieval
* ✍️ Content generation
* 🛠️ Tool usage
* 🌐 Web search
* 🌍 Browser automation
* ⏰ Reminder functionality

This forms the foundation for the project's transition from a voice assistant toward an **agentic AI system**.

---

# 🛠️ Intelligent Tool Calling

Tool calling is one of the core capabilities of NEXA.

Instead of generating an answer for every request, the assistant can determine whether it needs to use an external tool.

### Example

```text
User:
"Search the web for the latest AI news."

                ↓

          🧠 AI Processing

                ↓

        Tool Required? ✅

                ↓

           🌐 Web Search

                ↓

        Retrieve Information

                ↓

        Generate Response

                ↓

           🔊 Voice Output
```

Another example:

```text
User:
"Open a website and search for Java tutorials."

                ↓

          🧠 AI Processing

                ↓

          Tool Selection

                ↓

            Puppeteer

                ↓

       🌍 Browser Automation

                ↓

          Return Result
```

The long-term goal is to make tool selection increasingly reliable as more capabilities are added.

---

# 🌐 Web Search & Information Retrieval

NEXA can use external tools to retrieve information from the web.

This allows the assistant to handle requests that require information beyond the model's internal knowledge.

Potential use cases include:

* 🔎 Web searches
* 📰 Current information retrieval
* 🌐 Website information
* 📚 Research assistance
* 🔗 Website-based tasks

---

# 🌍 Web Automation

NEXA uses **Puppeteer** to interact with web browsers programmatically.

Current and planned browser automation capabilities include:

* Open websites
* Navigate web pages
* Search websites
* Click page elements
* Interact with forms
* Extract information
* Automate browser workflows

Example:

```text
User Request
     ↓
AI Tool Selection
     ↓
Puppeteer
     ↓
Browser
     ↓
Website Interaction
     ↓
Result
     ↓
AI Response
```

---

# ✍️ Content Generation

NEXA can also act as a general-purpose AI writing assistant.

It can generate or assist with:

* 📧 Professional emails
* 💬 Messages
* 📝 Essays
* 📱 Social media captions
* 📄 Documents
* ✍️ Rewriting
* 📚 General content

### Example requests

```text
"Write a professional email requesting leave."

"Create an Instagram caption for my project."

"Write an essay about Artificial Intelligence."

"Rewrite this message professionally."
```

---

# 🧠 Memory System

Memory is an important part of NEXA's architecture.

The assistant uses memory to maintain context and retrieve useful information from previous interactions.

## Session Memory

Session memory maintains context during the current conversation.

```text
User Message
      ↓
Conversation Context
      ↓
Memory Retrieval
      ↓
AI Processing
      ↓
Context-Aware Response
```

## Database Memory

Persistent information can be stored using **MongoDB**.

```text
Conversation
      ↓
Memory Processing
      ↓
MongoDB
      ↓
Future Conversation
      ↓
Memory Retrieval
      ↓
Relevant Context
      ↓
AI
```

The long-term goal is to make memory more intelligent by retrieving only information relevant to the current task.

---

# 🤖 3D Animated Avatar

NEXA includes a **3D animated AI avatar** to make the interaction more immersive.

The avatar is created using **Blender** and integrated into the application using **Three.js** and **React Three Fiber**.

### Avatar capabilities

* 🤖 3D character
* 🎭 Multiple animations
* 🗣️ Voice interaction feedback
* ⚡ Real-time animation
* 🎙️ Integration with assistant responses

The avatar provides a visual representation of the assistant while it communicates with the user.

---

# 💬 Chat System

In addition to voice interaction, NEXA supports text-based conversations.

### Features

* 💬 Chat interface
* 🧠 Session context
* 💾 Persistent memory
* 📜 Chat history
* ⚡ Real-time responses

Users can therefore interact with the assistant through either **voice or text**.

---

# ⏰ Smart Reminders

NEXA supports reminder-based tasks.

Example:

```text
"Remind me to study DSA at 8 PM."
```

The assistant can process the request and schedule the reminder.

---

# ⚡ Performance & Local AI

NEXA currently uses **Ollama** to run an LLM locally.

The current setup uses:

```text
Model: Qwen3:8B
Runtime: Ollama
GPU: NVIDIA GTX 1650
VRAM: 4 GB
System RAM: 32 GB
```

Because the Qwen3 8B model requires more memory than the available GPU VRAM, Ollama uses a combination of CPU and GPU resources.

Example:

```text
Qwen3 8B
   │
   ├── CPU → ~61%
   │
   └── GPU → ~39%
```

Performance optimization is an ongoing part of the project.

Current optimization areas include:

* Reducing unnecessary context
* Controlling context length
* Reducing unnecessary tool descriptions
* Using non-thinking mode where appropriate
* Keeping the model loaded
* Evaluating smaller/faster models
* Improving tool routing

The goal is to achieve a balance between **intelligence, tool-calling reliability, and response speed**.

---

# 🏗️ System Architecture

```text
                         👤 USER
                           │
                    🎤 Voice / 💬 Chat
                           │
                           ▼
                  ┌─────────────────┐
                  │   React.js UI   │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │   Express.js    │
                  │     Backend     │
                  └────────┬────────┘
                           │
                  ┌────────┴────────┐
                  │                 │
                  ▼                 ▼
           ┌─────────────┐   ┌──────────────┐
           │   Memory    │   │  Ollama LLM  │
           │   System    │   │   Qwen3 8B   │
           └──────┬──────┘   └──────┬───────┘
                  │                 │
                  ▼                 ▼
             ┌─────────┐     ┌──────────────┐
             │ MongoDB │     │ Tool Calling │
             └─────────┘     └───────┬──────┘
                                     │
                         ┌───────────┼───────────┐
                         │           │           │
                         ▼           ▼           ▼
                    🌐 Web      🌍 Puppeteer   🛠️ Other
                    Search       Automation     Tools
                         │           │
                         └─────┬─────┘
                               │
                               ▼
                       📝 Final Response
                               │
                               ▼
                       🔊 Text-to-Speech
                               │
                               ▼
                       🤖 3D Avatar
```

---

# 🔄 Complete Workflow

```text
🎤 Voice Input
      ↓
📝 Speech → Text
      ↓
🧠 Memory Retrieval
      ↓
🤖 AI Processing
      ↓
🛠️ Tool Selection
      ↓
      ┌───────────────────────────┐
      │     Tool Required?        │
      └─────────────┬─────────────┘
                    │
          ┌─────────┴─────────┐
          │                   │
         YES                  NO
          │                   │
          ▼                   ▼
   🌐 Web Search        🤖 Generate
   🌍 Automation          Response
   🛠️ Other Tools
          │                   │
          └─────────┬─────────┘
                    ↓
             📝 Final Response
                    ↓
             🔊 Text-to-Speech
                    ↓
             🤖 Avatar Animation
                    ↓
                   👤 User
```

---

# 💻 Tech Stack

## Frontend

* ⚛️ React.js
* 🟨 JavaScript
* 🎨 Three.js
* 🧩 React Three Fiber
* 🎙️ Web Speech API

## Backend

* 🟢 Node.js
* 🚀 Express.js

## AI

* 🧠 Qwen3:8B
* 🦙 Ollama
* 🤖 AI APIs
* 🛠️ Tool Calling

## Database

* 🍃 MongoDB

## Browser Automation

* 🎭 Puppeteer

## 3D & Animation

* 🎨 Blender
* 🎨 Three.js
* 🧩 React Three Fiber



# 📂 Project Structure

A general structure for the project:

```text
NEXA/
│
├── client/
│   ├── src/
│   ├── components/
│   └── ...
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── tools/
│   └── ...
│
├── avatar/
│   ├── models/
│   └── animations/
│
├── .env
├── package.json
└── README.md
```

> The exact structure may vary depending on the current implementation.

---

# ⚙️ Getting Started

## Prerequisites

Make sure the following are installed:

* Node.js
* npm
* MongoDB
* Ollama
* Git

You may also need API credentials for external services used by the project.

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd NEXA
```

### 2. Install dependencies

```bash
npm install
```

If the project has separate frontend and backend applications:

```bash
cd client
npm install

cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file and add the required configuration.

Example:

```env
MONGODB_URI=your_mongodb_connection_string
AI_API_KEY=your_api_key
```

> ⚠️ Never commit your `.env` file or expose API keys publicly.

### 4. Install the Ollama model

Make sure Ollama is installed and running.

```bash
ollama pull qwen3:8b
```

Verify the model:

```bash
ollama list
```

### 5. Start the application

```bash
npm run dev
```

Or use the project's configured start command:

```bash
npm start
```

---

# 🚀 Roadmap

The current version is only the foundation.

The long-term goal is to evolve NEXA into a **fully capable personal AI agent**.

## 🧠 Intelligence

* [ ] Improve reasoning reliability
* [ ] Improve tool selection
* [ ] Multi-step reasoning
* [ ] Task planning
* [ ] Autonomous task execution

## 📚 RAG & Knowledge

* [ ] RAG (Retrieval-Augmented Generation)
* [ ] Document upload
* [ ] PDF/document processing
* [ ] Embeddings
* [ ] Vector database
* [ ] Semantic search
* [ ] Personal knowledge base

## 🛠️ Automation

* [ ] Advanced task automation
* [ ] Application control
* [ ] Computer interaction
* [ ] More advanced browser automation
* [ ] Multi-step workflows

## 🧠 Memory

* [ ] Advanced long-term memory
* [ ] Better memory retrieval
* [ ] Personalized knowledge
* [ ] Improved contextual memory
* [ ] More efficient memory storage

## 🤖 Agent Architecture

* [ ] Multi-agent systems
* [ ] Agent collaboration
* [ ] Autonomous planning
* [ ] Long-running tasks
* [ ] Self-directed workflows

---

# 🎯 Vision

The ultimate goal of NEXA is to follow this cycle:

```text
                Understand
                    ↓
                 Remember
                    ↓
                  Reason
                    ↓
                   Plan
                    ↓
              Select Tools
                    ↓
              Execute Tasks
                    ↓
                 Respond
                    ↓
             Learn From Context
                    │
                    └──────────► Repeat
```

Instead of simply saying:

> **"Here's how you can do it."**

The goal is for NEXA to eventually say:

> **"I'll take care of it."**

---

# 📈 Project Status

🚧 **Actively Under Development**

NEXA is continuously evolving as new AI capabilities, tools, memory systems, and automation features are added.

The current focus is improving:

* ⚡ Response speed
* 🤖 Agentic workflows

---

# 👨‍💻 About

NEXA is a personal project focused on exploring modern AI and agentic technologies.

The project explores:

* Generative AI
* Large Language Models
* Local LLMs
* AI Agents
* Tool Calling
* Voice AI
* AI Memory
* Browser Automation
* RAG
* Vector Databases
* 3D Interactive Interfaces

---

# ⭐ Support

If you find the project interesting, consider giving the repository a ⭐ on GitHub.

Feedback, suggestions, and ideas are always welcome.

---

# 🔮 The Goal

```text
                         NEXA
                          │
                          ▼
                   Understand User
                          │
                          ▼
                       Remember
                          │
                          ▼
                        Reason
                          │
                          ▼
                        Plan
                          │
                          ▼
                    Select Tools
                          │
                          ▼
                    Execute Tasks
                          │
                          ▼
                   Return Result
                          │
                          ▼
               Become a Personal AI Agent
```

> **NEXA — More than a voice assistant. A step toward a personal AI agent. 🚀**
