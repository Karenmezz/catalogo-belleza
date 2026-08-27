export interface CartItem { id:number; slug:string; nombre:string; precio:number; imagen:string; cantidad:number; stock:number; }
const KEY = "karen-beauty-cart";
export const getCart = ():CartItem[] => { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; } };
export const saveCart = (items:CartItem[]) => { localStorage.setItem(KEY, JSON.stringify(items)); window.dispatchEvent(new CustomEvent("cart:updated")); };
export const addToCart = (item:CartItem) => { const items=getCart(); const found=items.find(({id})=>id===item.id); if(found){found.stock=item.stock;found.cantidad=Math.min(item.stock,found.cantidad+item.cantidad);}else items.push({...item,cantidad:Math.min(item.stock,item.cantidad)}); saveCart(items); };
export const updateQuantity = (id:number,cantidad:number) => { const items=getCart().map(item=>item.id===id?{...item,cantidad:Math.min(item.stock??99,cantidad)}:item).filter(item=>item.cantidad>0); saveCart(items); };
export const removeFromCart = (id:number) => saveCart(getCart().filter(item=>item.id!==id));
export const cartCount = () => getCart().reduce((total,item)=>total+item.cantidad,0);
