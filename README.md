# ItemSprite Forge
> Asset Generation & Refinement Engine

![ItemSprite Forge in Action](./docs/placeholder.gif) *(Placeholder: Replace with GIF of generation and refinement loop)*

## 1. Product Overview

ItemSprite Forge is a dedicated 16x16 asset generation and editing environment. It enables technical artists and developers to rapidly prototype, refine, and export game-ready sprites through a deterministic human-in-the-loop AI pipeline.

### Core Value Proposition
Reduce the asset creation cycle from hours to minutes by blending text-to-image capabilities with strict structural constraints (pixelation, palette enforcement, scale framing). Instead of treating generation as a single shot, the tool acts as a version-controlled forge for iterative asset mutation.

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

## 3. User Flow

The application enforces a non-linear but highly structured workflow:

1.  **Initialization**: 
    The user inputs a base constraint (e.g., "A raw emerald ore chunk with stone debris") or uploads a reference image.
2.  **Configuration**: 
    The user selects model parameters (Model tier, Material & Type, Outline Style, View Angle).
3.  **Generation (The Forge)**: 
    The request is compiled and sent. The resulting asset is loaded onto the primary Artboard.
4.  **Refinement Loop**:
    *   **Variant Generation**: Create a sibling asset using the same prompt but an altered seed/temperature path.
    *   **Touch-Up**: The user specifies a corrective prompt (e.g., "Remove the stray pixels on the bottom left").
    *   **Instant Actions**: Deterministic operations (Simplify, Symmetry, Maximize, Fix Outline) are applied instantly via automated prompt wrappers.
5.  **Validation**:
    The asset is previewed dynamically in the "In-Game Hotbar" component against standard backgrounds.
6.  **Export**: 
    The finalized sprite is downloaded as a web-optimized, transparent `.png`.

---

## 4. Prompt Engineering Strategies

The core of ItemSprite Forge relies on heavily constrained system instructions rather than unstructured natural language.

### A. Strict Typology Enforcement
The system prompt strictly demands a `16x16` pixel-art aesthetic. We use constraints like:
> *"Output strictly a 16x16 pixel art sprite on a pure white or pure black background. Use a strict, limited color palette."*

### B. The "Instant Action" Wrappers
Instead of relying on the user to understand pixel-art terminology, we map UI buttons to highly specific, under-the-hood instructional patches.
*   **Simplify**: *"Clean up noise. Reduce the total number of colors. Merge stray pixels into clusters. Do not increase detail level."*
*   **Maximize**: *"Increase the size of the item. Make it touch the edges of the 16x16 frame. Remove empty padding around the item."*
*   **Symmetry**: *"Enforce geometric symmetry on the silhouette. Ensure left and right sides match shape. Maintain top-left lighting."*
*   **Fix Outline**: *"Regenerate the outline using Jappa-style logic (darkened inner colors)."*

### C. Multi-Modal Context Passing (Variant/Touch-Up)
When a user requests a variant, the current sprite is passed explicitly as an `Image` part in the Gemini request alongside text detailing the delta.
*   **Refine Path**: We pass the current visual state and prompt the model to treat it as the absolute base, requiring it to calculate the delta based on the user's specific instruction (e.g., "Make the blade longer").
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
