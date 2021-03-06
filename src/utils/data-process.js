import {Regular, HOUR_IN_MINUTES} from './common.js';

export const setId = (name) => {
  return name.toLowerCase()
    .replace(Regular.EMPTY_SPACE_IN_EDGES, ``)
    .replace(Regular.EMPTY_SPACE, Regular.DASH);
};

export const setTwoDigit = (date, callback) => {
  const getter = callback.bind(date);
  const amends = callback[`name`] === `getMonth` ? 1 : 0;
  return getter().toString().length === 1 ? `0${getter() + amends}` : getter() + amends;
};

export const getDuration = (minutesAmount, spaceBetween = false) => {
  const hours = Math.floor(minutesAmount / HOUR_IN_MINUTES)
    ? `${Math.floor(minutesAmount / HOUR_IN_MINUTES)}${spaceBetween ? ` ` : ``}h`
    : ``;

  const restOfMinutes = minutesAmount % HOUR_IN_MINUTES
    ? ` ${minutesAmount % HOUR_IN_MINUTES}${spaceBetween ? ` ` : ``}m`
    : ``;

  const minutes = hours
    ? restOfMinutes
    : `${minutesAmount}${spaceBetween ? ` ` : ``}m`;

  return hours + minutes;
};

export const setActiveItems = (itemsList) => itemsList.map((it, i) => it ? i : -1);

export const matchActiveItems = (item, itemsToCheck) => itemsToCheck.map((it, i) => item === it ? i : -1);

export const createMarkup = (items, renderer, ...activeItems) => items
  .map((it, i) => renderer(it, activeItems.some((item) => item === i)))
  .join(`\n`);
