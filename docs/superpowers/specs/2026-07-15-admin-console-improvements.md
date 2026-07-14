# Admin Console Improvements Design Specification

## Goal Description
Redesign the admin console interface to improve functionality, security, navigation safety, and mobile responsiveness. Specifically:
1. **Redesign the Navbar**: Physically separate the "Back to site" and "Logout" buttons (placing "Back to site" on the left, and "Logout" on the far right) to prevent accidental logout sessions.
2. **Add Delete User Feature**: Incorporate an inline trash button on each user row. Clicking delete will display a modal confirmation dialog.
3. **Delete User Confirmation Dialog**:
   - Displays a summary card of the selected user (Name, Email, Role) for quick identification.
   - Shows warnings details: "Remove database profile", "Delete authentication account", "Remove future login access".
   - Requires typing the user's email to confirm, with buttons disabled during a delete state.
4. **Add Search & Filters**: Add a search bar to filter users by name or email, dropdown filters for role and status, and active filter counts ("Showing X of Y users") with a "Clear Filters" button.
5. **Optimize for Mobile**: Make the table responsive with horizontal scroll, keeping the User name column sticky-left.
6. **Slightly Compact Status UI**: Make the Supabase Status card a compact, single-row diagnostic bar containing connection status badges and refresh options.

---

## Proposed Changes

### [Component: Admin Console Components](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/admin/_components)

#### [MODIFY] [admin-dashboard-client.tsx](file:///c:/GAMES%20G/Code/APP/Antigravity%20porjects/lms-ready2drive/app/admin/_components/admin-dashboard-client.tsx)
* **Navbar Redesign**:
  - Separate actions: Title + "Back to site" breadcrumb/link on the left, and "Logout" button on the far right.
* **Supabase Status**:
  - Convert into a single-row diagnostic bar using flexbox, grouping title/metrics together on the left and the sync actions on the right.
* **Search & Filters**:
  - Add search bar text input ("Search name or email...") and dropdown selects ("All Roles", "All Statuses").
  - Render a clear label: "Showing X of Y users" and a "Clear filters" link when active.
  - Implement client-side filtering on the `users` state.
* **Responsive User Table**:
  - Render as a horizontally scrollable container.
  - Style the first column (User Avatar + Name) as `sticky left-0 bg-white z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]` (with a matching sticky background on hover).
  - Add an inline Action column containing a gray trash button (`lucide-react` `Trash2`) that highlights red on hover, with `aria-label="Delete user"`.
* **Delete User Confirmation Dialog**:
  - State variables: `userToDelete` (user profile object) and `deleteConfirmEmail` (input text confirmation) and `isDeleting` (boolean).
  - Render Dialog Content:
    - Title: "Delete User Account"
    - User Summary Card: shows name, email, and role inside a light gray panel.
    - Warning details list.
    - Input text requiring typing the exact email.
    - Footer buttons: "Delete Account" (disabled unless confirmation email matches, shows "Deleting..." when loading) and "Cancel".

---

## Verification Plan

### Manual Verification
1. **Desktop Actions**:
   - Verify layout placement of navbar links.
   - Use search and dropdown filters. Confirm search resets and filters show active totals.
   - Open delete dialog. Confirm summary card is correct.
   - Verify typing incorrect email leaves delete button disabled.
   - Verify typing correct email enables delete button.
2. **Mobile Layout**:
   - Ensure User column remains sticky on horizontal scroll.
