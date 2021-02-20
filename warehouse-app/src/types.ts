import { ArticleEntry } from "./models/Article";

export type Callback = () => void;
export type CallbackWith<T> = (value: T) => void;
export type Inventory = ArticleEntry[];

export type NavigationItem = "products" | "inventory" | "configuration";