import { NavigationItem } from "../types";

export const evaluateSelection = (value: number): NavigationItem => {
  switch(value) {
    case 0: return "products";
    case 1: return "inventory";
    case 2: return "upload";
    default: return "products";
  }
}