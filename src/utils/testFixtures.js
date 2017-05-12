/* @flow */
import type { PromiseType, PoliticianType, PartyType } from "../types";

export const promises: Array<PromiseType> = [
  {
    id: 1,
    title: "Longer workdays",
    fulfilled: false,
  },
  {
    id: 2,
    title: "3 day weekends",
    fulfilled: true,
  },
  {
    id: 3,
    title: "Protecting nature",
    fulfilled: true,
  },
];

export const politicians: Array<PoliticianType> = [
  {
    id: 2,
    first_name: "Larus",
    last_name: "Stephensen",
    party_name: "Awesome Party",
    promise_completion: 75,
  },
  {
    id: 23,
    first_name: "Yngvi",
    last_name: "Jonsson",
    party_name: "Awesome Party",
    promise_completion: 23,
  },
  {
    id: 32,
    first_name: "Guðrún",
    last_name: "Jónsdóttir",
    party_name: "Green Party",
    promise_completion: 88,
  },
];
export const Parties: Array<PartyType> = [
  {
    id: 2,
    name: "Vinsti Grænir",
  },
  {
    id: 1,
    name: "Framsókn",
  },
];
