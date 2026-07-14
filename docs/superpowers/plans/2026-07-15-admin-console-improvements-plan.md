# Admin Console Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Admin Console header/navbar layout, add a search/filter interface with status labels, optimize the student directory table for mobile/table viewport horizontal-scroll with a sticky identity column, make the status card a compact, single-row diagnostic bar, and incorporate a secure user deletion Dialog UI.

**Architecture:** Modifying `admin-dashboard-client.tsx` to handle navbar repositioning, single-row status panel styling, client-side filtering state, sticky CSS layouting, and integration of the Radix-based `Dialog` component showing user deletion validation and simulated actions.

**Tech Stack:** Next.js, React, Tailwind CSS, Lucide icons, Radix UI.

## Global Constraints
- Do not make direct database calls or backend API endpoints for account deletion in this task (UI/UX simulation only).
- Keep styles inline with light theme OKLCH color palettes and Tailwind conventions.

---

### Task 1: Redesign Navbar Layout & Spacing
**Files:**
- Modify: `app/admin/_components/admin-dashboard-client.tsx`

**Interfaces:**
- Consumes: Header layout structure
- Produces: Redesigned and responsive header layout with isolated "Back to site" and "Logout" buttons

- [ ] **Step 1: Edit admin header component in `admin-dashboard-client.tsx`**
  Modify lines 221-248 to reposition the back button to the left inline with the title and push the logout button to the right. Use distinct styles.

  ```tsx
  // Target: Header component structure replacement
  <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-[100]">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
        >
          ← Back to site
        </Link>
        <span className="h-4 w-px bg-slate-200" />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Admin Console
          </p>
          <h1 className="font-[var(--font-admin-body)] text-xl font-bold text-slate-900 mt-0.5 leading-none">
            Ready2Drive Admin
          </h1>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-3 py-1.5 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50"
        >
          <LogOut size={14} />
          Logout
        </button>
      </div>
    </div>
  </header>
  ```

- [ ] **Step 2: Commit Navbar changes**
  Run git commands to save:
  ```bash
  git add app/admin/_components/admin-dashboard-client.tsx
  git commit -m "style: redesign admin navbar for better layout and safety"
  ```

---

### Task 2: Compact Single-Row Supabase Status Panel
**Files:**
- Modify: `app/admin/_components/admin-dashboard-client.tsx`

**Interfaces:**
- Consumes: Status section layout
- Produces: Single-row compacted diagnostics bar

- [ ] **Step 1: Edit Status Section container to be horizontal flex**
  Tighten the status section container padding and layout. Replace with a responsive single-row diagnostic bar:
  ```tsx
  <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="pointer-events-none absolute -top-20 -right-16 h-32 w-32 rounded-full bg-blue-100/30 blur-2xl" />
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4285F4]">
            Supabase Status
          </p>
          <h2 className="text-base font-bold text-slate-900 mt-0.5">
            Live Connection Data
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:border-l sm:border-slate-100 sm:pl-4">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
            {isRefreshing ? "Syncing..." : "Live connection"}
          </span>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-[#2563eb]">
            {totalActiveAccounts} active accounts
          </span>
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
            Last sync: {formatLastSync(lastSyncedAt)}
          </span>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-[#2563eb] disabled:cursor-not-allowed disabled:opacity-70 transition-colors hover:bg-blue-100/50"
        >
          <RefreshCw size={14} className={isRefreshing ? "animate-spin" : ""} />
          {isRefreshing ? "Syncing..." : "Refresh data"}
        </button>
      </div>
    </div>
  </section>
  ```

- [ ] **Step 2: Commit Status card updates**
  Run:
  ```bash
  git add app/admin/_components/admin-dashboard-client.tsx
  git commit -m "style: compact supabase status card into a single-row diagnostic bar"
  ```

---

### Task 3: Implement Search and Filter Capabilities
**Files:**
- Modify: `app/admin/_components/admin-dashboard-client.tsx`

**Interfaces:**
- Consumes: Users state list
- Produces: Filtered users array based on query, role, and status selects; renders search inputs.

- [ ] **Step 1: Add Search and Filter state variables**
  Add state and import `Search` icon from `lucide-react`:
  ```tsx
  import { Search, Trash2 } from "lucide-react";
  // Inside AdminDashboardClient:
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  ```

- [ ] **Step 2: Implement search/filter logic in `admin-dashboard-client.tsx`**
  ```tsx
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "all" || u.role === selectedRole;
    const matchesStatus = selectedStatus === "all" || u.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });
  ```

- [ ] **Step 3: Insert Search & Filter HTML controls in layout**
  Place the controls above the user table grid:
  ```tsx
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 pb-4 mb-4">
    <div className="flex flex-1 flex-wrap items-center gap-2">
      <div className="relative flex-1 min-w-[200px]">
        <input
          type="text"
          placeholder="Search name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-4 py-2 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
        />
        <span className="absolute left-3 top-2.5 text-slate-400">
          <Search size={16} />
        </span>
      </div>
      <select
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
      >
        <option value="all">All Roles</option>
        <option value="student">student</option>
        <option value="admin">admin</option>
      </select>
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-[#4285F4] focus:outline-none focus:ring-2 focus:ring-[#4285F4]/20"
      >
        <option value="all">All Statuses</option>
        <option value="active">active</option>
        <option value="paused">paused</option>
        <option value="expired">expired</option>
      </select>
      {(searchQuery || selectedRole !== "all" || selectedStatus !== "all") && (
        <button
          type="button"
          onClick={() => {
            setSearchQuery("");
            setSelectedRole("all");
            setSelectedStatus("all");
          }}
          className="text-xs font-semibold text-[#4285F4] hover:underline px-2"
        >
          Clear Filters
        </button>
      )}
    </div>
    <div className="text-xs font-semibold text-slate-500">
      Showing {filteredUsers.length} of {users.length} users
    </div>
  </div>
  ```

- [ ] **Step 4: Commit Search and Filter functionality**
  Run:
  ```bash
  git add app/admin/_components/admin-dashboard-client.tsx
  git commit -m "feat: add user query search and filter dropdown UI controls"
  ```

---

### Task 4: Responsive Sticky User Directory Table Layout
**Files:**
- Modify: `app/admin/_components/admin-dashboard-client.tsx`

**Interfaces:**
- Consumes: User row render logic
- Produces: Horizontally scrollable list view with sticky-left identifier column and active trash action button.

- [ ] **Step 1: Wrap table container in scroll panel**
  Modify table mapping area to utilize a scroll wrapper and a standard width grid layout structure:
  ```tsx
  // Outer border container
  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
    <div className="overflow-x-auto custom-scrollbar">
      <div className="min-w-[850px] divide-y divide-slate-100">
        {/* Header grid */}
        <div className="grid grid-cols-[1.2fr_1.4fr_0.8fr_0.8fr_1.2fr_0.4fr] gap-3 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          <span className="sticky left-0 bg-slate-50 z-10">User</span>
          <span>Email</span>
          <span>Role</span>
          <span>Status</span>
          <span>Access window</span>
          <span className="text-right">Actions</span>
        </div>
        {/* Rows map */}
        ...
      </div>
    </div>
  </div>
  ```

- [ ] **Step 2: Add Sticky column classing and Trash icon trigger**
  Apply `sticky left-0` classes to the avatar + name column, and add the Action column trash button:
  ```tsx
  {filteredUsers.map((user, index) => {
    const accessMeta = getAccessMeta(user.accessEnd);
    return (
      <div
        key={`${user.userId}-${user.email}`}
        className={`grid grid-cols-[1.2fr_1.4fr_0.8fr_0.8fr_1.2fr_0.4fr] gap-3 px-4 py-4 text-sm text-slate-700 transition-colors hover:bg-slate-50/80 group ${
          index % 2 === 0 ? "bg-white" : "bg-slate-50/30"
        }`}
      >
        <div
          className={`sticky left-0 z-10 flex items-center gap-3 transition-colors group-hover:bg-slate-50/95 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] ${
            index % 2 === 0 ? "bg-white" : "bg-slate-50"
          }`}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-[#2563eb]">
            {getInitials(user.displayName)}
          </span>
          <div>
            <p className="font-semibold text-slate-900 leading-tight">{user.displayName}</p>
            <p className="text-[10px] text-slate-500">ID: {user.userId || "n/a"}</p>
          </div>
        </div>
        <p className="truncate font-medium flex items-center">{user.email}</p>
        <div className="flex items-center">
          <span className={`inline-flex h-fit items-center justify-center rounded-full border px-2.5 py-1 text-xs font-semibold ${getRoleBadgeClass(user.role)}`}>
            {user.role}
          </span>
        </div>
        <div className="flex items-center">
          <span className="inline-flex h-fit items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            {user.status}
          </span>
        </div>
        <div className="space-y-1 text-xs text-slate-600 flex flex-col justify-center">
          <p>
            {formatAccessDate(user.accessStart)} - {formatAccessDate(user.accessEnd)}
          </p>
          <span className={`inline-flex w-fit rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] ${accessMeta.toneClass}`}>
            {accessMeta.label}
          </span>
        </div>
        <div className="flex items-center justify-end pr-2">
          <button
            type="button"
            onClick={() => {
              setUserToDelete(user);
              setDeleteConfirmEmail("");
            }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-transparent text-slate-400 hover:border-red-100 hover:bg-red-50 hover:text-red-600 transition-colors"
            aria-label="Delete user"
            title="Delete user"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    );
  })}
  ```

- [ ] **Step 3: Add Empty Filters state**
  Replace standard empty state with filtered check:
  ```tsx
  {filteredUsers.length === 0 ? (
    <div className="px-4 py-10 text-center">
      <p className="text-sm font-semibold text-slate-700">No users match your filters.</p>
      {(searchQuery || selectedRole !== "all" || selectedStatus !== "all") && (
        <button
          type="button"
          onClick={() => {
            setSearchQuery("");
            setSelectedRole("all");
            setSelectedStatus("all");
          }}
          className="mt-2 text-xs font-semibold text-[#4285F4] hover:underline"
        >
          Reset filters
        </button>
      )}
    </div>
  ) : null}
  ```

- [ ] **Step 4: Commit Table responsiveness and trash triggers**
  Run:
  ```bash
  git add app/admin/_components/admin-dashboard-client.tsx
  git commit -m "feat: implement responsive horizontal-scroll table grid with sticky columns and trash triggers"
  ```

---

### Task 5: Implement Delete User Modal Confirmation Dialog
**Files:**
- Modify: `app/admin/_components/admin-dashboard-client.tsx`

**Interfaces:**
- Consumes: `userToDelete`, `deleteConfirmEmail` states
- Produces: Confirmation pop-up Dialog showing validation safety checks and triggering visual state cleanup.

- [ ] **Step 1: Import Dialog elements and add Confirmation Dialog JSX**
  Import standard dialog components and construct the verification template at the bottom of the client file:
  ```tsx
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";

  // Inside return statement, add Dialog overlay layout:
  <Dialog open={!!userToDelete} onOpenChange={(open) => !open && setUserToDelete(null)}>
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle className="text-xl font-bold text-slate-900">Delete User Account</DialogTitle>
        <DialogDescription className="text-sm text-slate-600">
          Confirm user deletion details below. This action is permanent and cannot be undone.
        </DialogDescription>
      </DialogHeader>

      {userToDelete && (
        <div className="space-y-4 my-2">
          {/* Summary Card */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1.5">
            <div className="flex justify-between text-xs text-slate-500">
              <span>Name</span>
              <span className="font-semibold text-slate-900">{userToDelete.displayName}</span>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>Email</span>
              <span className="font-semibold text-slate-900">{userToDelete.email}</span>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <span>Role</span>
              <span className="font-semibold uppercase tracking-wider text-slate-700">{userToDelete.role}</span>
            </div>
          </div>

          {/* Warning Details List */}
          <div className="space-y-2 text-xs text-slate-600">
            <p className="font-semibold text-red-600">Deleting this user will:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Remove their database profile records.</li>
              <li>Delete their authentication credentials.</li>
              <li>Remove all future login and course access.</li>
            </ul>
          </div>

          {/* Email Input Confirmation */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-700" htmlFor="delete-confirm-email">
              Type the user's email to confirm:
            </label>
            <input
              id="delete-confirm-email"
              type="text"
              value={deleteConfirmEmail}
              onChange={(e) => setDeleteConfirmEmail(e.target.value)}
              placeholder={userToDelete.email}
              disabled={isDeleting}
              className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
            />
          </div>
        </div>
      )}

      <DialogFooter className="mt-4 gap-2 flex-col sm:flex-row">
        <button
          type="button"
          onClick={() => setUserToDelete(null)}
          disabled={isDeleting}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={isDeleting || !userToDelete || deleteConfirmEmail !== userToDelete.email}
          onClick={async () => {
            if (!userToDelete) return;
            setIsDeleting(true);
            
            // Simulate deletion API call
            await new Promise((resolve) => setTimeout(resolve, 800));
            
            // Client-side local list filtering (simulates removal)
            setUsers((prev) => prev.filter((u) => u.userId !== userToDelete.userId));
            
            // Set success banner message
            setSuccessMessage(`Account for ${userToDelete.email} successfully deleted (Simulated).`);
            
            // Reset state
            setIsDeleting(false);
            setUserToDelete(null);
          }}
          className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-red-200 hover:bg-red-700 disabled:opacity-50 disabled:shadow-none transition-colors"
        >
          {isDeleting ? "Deleting..." : "Delete Account"}
        </button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  ```

- [ ] **Step 2: Commit Dialog components**
  Run:
  ```bash
  git add app/admin/_components/admin-dashboard-client.tsx
  git commit -m "feat: add delete confirmation warning dialog with validation checks"
  ```
