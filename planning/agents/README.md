# Agent Quick Start Guide

## 🚀 Getting Started

This directory contains specifications for 5 specialized agents to implement the Digital Signboard App.

## 📋 Agent Overview

| Agent | Phase | Primary Tools | Purpose |
|-------|-------|--------------|---------|
| **CMS Setup** | 1-2 | Agility CMS MCP | Create content models & structure |
| **Component Development** | 1-2 | Agility CMS MCP | Build React components |
| **Content Population** | 2-3 | Agility CMS MCP | Create test content |
| **Styling & Display** | 3 | File Editing + Playwright MCP + Chrome DevTools MCP | Optimize for large displays |
| **Testing & QA** | 3-4 | Agility CMS MCP + Playwright MCP + Chrome DevTools MCP | Quality assurance |

## 🎯 Recommended Workflow

### Phase 1-2: Foundation
1. **Start with CMS Setup Agent**
   - Creates all Agility CMS content models
   - Sets up containers and component models
   - Establishes content structure

2. **Then Component Development Agent**
   - Builds React components
   - Registers components in Agility
   - Maps CMS fields to components

3. **Finally Content Population Agent**
   - Creates test content
   - Sets up example pages/signs
   - Validates everything works

### Phase 3: Optimization
1. **Styling & Display Agent**
   - Optimizes for large displays
   - Applies typography and spacing
   - Tests on target resolutions

2. **Testing & QA Agent**
   - Validates all functionality
   - Tests error handling
   - Performance testing

### Phase 4: Polish
1. **Testing & QA Agent**
   - Final validation
   - Documentation
   - Production readiness

## 🛠️ MCP Server Setup

### Required
- **Agility CMS MCP Server** - All agents need this
- **Playwright MCP** - ✅ Installed - Used by Styling & Display and Testing & QA agents
- **Chrome DevTools MCP** - ✅ Installed - Used by Styling & Display and Testing & QA agents

### Usage by Agent
- **CMS Setup Agent**: Agility CMS MCP only
- **Component Development Agent**: Agility CMS MCP only
- **Content Population Agent**: Agility CMS MCP only
- **Styling & Display Agent**: Agility CMS MCP + **Playwright MCP** + **Chrome DevTools MCP**
- **Testing & QA Agent**: Agility CMS MCP + **Playwright MCP** + **Chrome DevTools MCP**

## 📖 Using the Agents

Each agent has a detailed specification file:
- `cms-setup-agent.md` - Complete checklist and steps
- `component-development-agent.md` - Component specs and implementation
- `content-population-agent.md` - Content examples and scenarios
- `styling-display-agent.md` - Design specifications
- `testing-qa-agent.md` - Test scenarios and criteria

## 🔗 Related Documentation

- [Agent Specifications](../agent-specifications.md) - Complete agent overview
- [Development Phases](../development-phases.md) - Phase timeline
- [Content Strategy](../content-strategy.md) - Content model details
- [Component Inventory](../component-inventory.md) - Component requirements

---

**Next Steps:** Start with the [CMS Setup Agent](./cms-setup-agent.md) to establish the Agility CMS structure.

