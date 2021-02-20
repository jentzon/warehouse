import { NavigationItem } from "../types";

// TODO: Types...
export const evaluateSelection = (value: number): NavigationItem => {
  switch(value) {
    case 0: return "products";
    case 1: return "inventory";
    case 2: return "configuration";
    default: return "products";
  }
}