const sidebarKey = 'sidebar_collapsed';

const getSidebarCollapsedState = (): boolean => {
  const sideBarLocalStorage = localStorage.getItem(sidebarKey);

  if (sideBarLocalStorage !== null) return JSON.parse(sideBarLocalStorage);

  return false;
};

const saveSidebarCollapsedState = (value: boolean): void => {
  const state = JSON.stringify(value || false);

  localStorage.setItem(sidebarKey, state);
};

export { getSidebarCollapsedState, saveSidebarCollapsedState };
