![ItemSprite Forge](./docs/itemsprite_forge_title.png)
# ItemSprite Forge
Minecraft asset generation & refinement engine

![ItemSprite Forge in Action](./docs/isf-demo.gif) 

## 1. Product Overview

ItemSprite Forge is a dedicated 16x16 asset generation and editing environment designed for rapid prototyping of game-ready sprites. It enforces real "Vanilla" Minecraft pixel art best practices—strict color palettes, readable silhouettes, and consistent Jappa-style lighting rules—to produce authentic results.

### Core Value Proposition

Instead of struggling to place individual pixels, you step into the role of an **Art Director**. Through an iterative, version-controlled conversation, you provide a concept and receive a prototype. You then direct the process by deciding whether to pivot to a new variant, tweak specific details, or accept the piece. This conversational, human-in-the-loop pipeline reduces the asset prototyping cycle from hours to minutes.

---

## 2. Architecture & Tech Stack

The application is built on a client-side architecture using React and Tailwind CSS, leveraging the Gemini API for vision and text operations.

```mermaid
graph TD
    A[Client UI - React] -->|State Management| B(Session History)
    A -->|User Input| C[Prompt Compiler & Structuring]
    C -->|API Request| D(Gemini 2.5 Flash / Pro)
    D -->|Raw Image Output| E[Client Asset Processor]
    B -->|Image Ref| C
    E -->|Display| F[Artboard Preview]
    E -->|Context| G[Hotbar Preview Segment]
    F -->|Instant Actions| C
```

### Components
*   **React 18 & Vite**: Client-side rendering and module bundling.
*   **Tailwind CSS**: Strict styling system with custom CSS variables for bespoke aesthetic control.
*   **Motion**: State-driven layout animations.
*   **Gemini SDK (`@google/genai`)**: Core multimodal endpoint utilizing `gemini-2.5-flash` for rapid iteration and `gemini-2.5-pro` for complex logic reasoning.

---

## 3. Modder Workflow

The application enforces a non-linear but highly structured workflow.

1.  **Initialization**: 
    The **Modder** inputs a natural language (NL) prompt (e.g., "A raw emerald ore chunk with stone debris") describing the item they want to forge, or uploads an initial reference image.
2.  **Configuration (Settings)**: 
    The Modder configures structural and aesthetic settings from the sidebar (e.g., AI Model tier, overall complexity, orientation, outline style). These chosen settings automatically strictly format and condition the final prompt sent to the AI.
3.  **Generation (The Forge)**: 
    The request is compiled and sent. The resulting asset is loaded onto the primary Artboard as the first version in the item's history structure.
4.  **Refinement Loop (Iterative Versioning)**:
    After each render, the Modder assumes the role of an Art Director and is presented with four distinct options:
    *   **Keep / Revert (History)**: Stick with the current render if it's perfect, or scrub through the history timeline to revert back to an earlier, better iteration.
    *   **Start Over**: Discard the current exploration branch and start a new forge entirely from scratch.
    *   **Generate Variant**: You like the overall shape and vibe but want options. Request a variant (e.g., tweak the colors, swap the material, or simply roll a new AI seed based on the same concept).
    *   **Tweak & Polish**: You like the concept but the execution is slightly off. You issue a targeted directive (e.g., "Make the sword blade slightly larger", "Fix the left outline", or click one of the instant modifier buttons like *Symmetry* or *Simplify*).
5.  **Validation**:
    The active asset version is previewed dynamically in the "In-Game Hotbar" component against standard generic game backgrounds to verify contrast and readability.
6.  **Export**: 
    The finalized sprite is downloaded as a web-optimized, transparent `.png` ready for commercial or personal engine use.

---

## 4. Prompt Engineering Strategies

The core of ItemSprite Forge relies on heavily constrained system instructions rather than unstructured natural language. We take the Modder's base NL prompt and heavily augment it under the hood.

### A. Strict Typology Enforcement
The system prompt strictly demands a `16x16` pixel-art aesthetic. We use constraints like:
> *"Output strictly a 16x16 pixel art sprite on a pure white or pure black background. Use a strict, limited color palette."*

### B. The "Instant Action" Wrappers
Instead of relying on the Modder to understand pixel-art terminology, we map UI buttons to highly specific, under-the-hood instructional patches.
*   **Simplify**: *"Clean up noise. Reduce the total number of colors. Merge stray pixels into clusters. Do not increase detail level."*
*   **Maximize**: *"Increase the size of the item. Make it touch the edges of the 16x16 frame. Remove empty padding around the item."*
*   **Symmetry**: *"Enforce geometric symmetry on the silhouette. Ensure left and right sides match shape. Maintain top-left lighting."*
*   **Fix Outline**: *"Regenerate the outline using Jappa-style logic (darkened inner colors)."*

### C. Multi-Modal Context Passing (Variant/Touch-Up)
When a Modder requests a variant, the current sprite is passed explicitly as an `Image` part in the Gemini request alongside text detailing the delta.
*   **Refine Path**: We pass the current visual state and prompt the model to treat it as the absolute base, requiring it to calculate the delta based on the Modder's specific instruction (e.g., "Make the blade longer").
*   **Remix Path**: We pass the current visual state but instruct the model to treat it as a stylistic influence rather than a rigid structural base.

---

## 5. Development Setup

### Pragmatic Quickstart

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Environment Variables**:
    Create a `.env` file at the root. You must supply your own Gemini API key for local development.
    ```env
    VITE_GEMINI_API_KEY=your_api_key_here
    ```
3.  **Run the dev server**:
    ```bash
    npm run dev
    ```
4.  **Build for Production**:
    ```bash
    npm run build
    ```

---

## 6. License

Copyright (c) 2026 mfishma

This project is licensed under a custom **Attribution-NonCommercial** license based on the MIT License structure. 

This means that you are free to use, modify, and distribute the code for **personal or educational purposes** as long as you provide visible credit (attribution). However, you **may not use this code for commercial purposes** or monetary gain. 

See the [LICENSE.md](LICENSE.md) file for more details.
