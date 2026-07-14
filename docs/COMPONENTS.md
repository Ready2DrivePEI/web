# Component Catalog

This document answers the core question: **"Does this component already exist in this project?"** 

Before writing any new UI elements, check the catalog below to avoid duplicate work and preserve design consistency.

---

## 1. Quick Decision Guide
1. **Is it a basic structural UI element (Button, Modal, Input, Dialog, etc.)?**
   - Check the **shadcn/ui base primitives** section. If installed, import from `@/components/ui/<name>`.
   - If not installed, install it using `npx shadcn@latest add <component-name>`.
2. **Is it an application-level custom component (Logo, Sidebar, Contact Form)?**
   - Check the **Custom Application Components** directory list below. If there is a match, import it directly.
   - Do not write new forms, sidebar headers, or company brand markings.

---

## 2. shadcn/ui Base Primitives (Installed)
These base UI elements are ready to import from `@/components/ui/`:

* **`button.tsx`**: Standard button styled with OKLCH theme tokens.
* **`collapsible.tsx`**: Accordion/collapsible wrapper used for list expansion.
* **`dialog.tsx`**: Dialog and modal frame wrappers.
* **`progress.tsx`**: Standard progress bars.
* **`scroll-area.tsx`**: Scroll containment wrapper that uses standard browser scrolling.
  * *Note: For custom styled scrollbars inside panels, consider using the `.custom-scrollbar` class selector instead.*

---

## 3. Custom Application Components
If your task involves the following features, **use these existing components**:

### Company Branding
* **Brand Logo ([brand-logo.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/components/brand-logo.tsx))**:
  - Renders the company's SVG mark.
  - *Usage*: `<BrandLogo className="h-8 w-auto" />`

### Enrollment Actions
* **Enroll Button ([enroll-button.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/components/enroll-button.tsx))**:
  - A trigger button styled to initiate course signup actions.
* **Enroll Modal ([enroll-modal.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/components/enroll-modal.tsx))**:
  - Renders a multi-step modal dialog with course registration forms.

### Contact Forms
* **Contact Form ([contact-form.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/components/contact-form.tsx))**:
  - Renders the "Contact Us" form with schema validations. 
  - Submits queries directly via server actions under `app/actions/contact.ts`.

### LMS Sidebar Navigation
* **LMS Sidebar Wrapper ([components/lms-sidebar/](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/components/lms-sidebar/))**:
  - Renders the left sidebar inside the course learning interface (`index.tsx`).
  - Contains **`nav-item.tsx`** (collapsible modules) and **`progress-section.tsx`** (percentage trackers).
