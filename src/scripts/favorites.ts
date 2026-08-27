const KEY = "kf-ugc-favorites";

export const getFavorites = (): number[] => {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
};

export const isFavorite = (id:number) => getFavorites().includes(id);

export const toggleFavorite = (id:number) => {
  const favorites=getFavorites();
  const next=favorites.includes(id)?favorites.filter(item=>item!==id):[...favorites,id];
  localStorage.setItem(KEY,JSON.stringify(next));
  window.dispatchEvent(new CustomEvent("favorites:updated"));
  return next.includes(id);
};

export const favoritesCount = () => getFavorites().length;
