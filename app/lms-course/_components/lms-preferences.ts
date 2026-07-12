export type LMSTheme = "dark" | "light";

export const COLLAPSE_STORAGE_KEY = "r2d-sidebar-collapsed";
export const THEME_STORAGE_KEY = "r2d-lms-theme";
export const COLLAPSE_EVENT = "r2d:lms-collapse-change";
export const THEME_EVENT = "r2d:lms-theme-change";

export const subscribeToPreference = (
  customEventName: string,
  onStoreChange: () => void,
) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handler = () => onStoreChange();
  window.addEventListener("storage", handler);
  window.addEventListener(customEventName, handler);

  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(customEventName, handler);
  };
};

export const getCollapseSnapshot = () => {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(COLLAPSE_STORAGE_KEY);
  // Default to false (open) if no preference is saved
  if (stored === null) return false;
  return stored === "true";
};

export const getThemeSnapshot = (): LMSTheme => {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
};
