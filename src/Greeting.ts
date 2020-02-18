const NORMAL_GREETING_PREFIX = "Hello, ";
const SHOUTING_GREETING_PREFIX = "HELLO ";

export function Greeting(peopleToGreet: string | null | string[]): string {
  const names = getNamesFromPeople(peopleToGreet); 

  const normalNames: string[] = [];
  const shoutedNames: string[] = [];
  names.forEach(name => {
    if (IsShoutedName(name)) {
      shoutedNames.push(name);
    }
    else {
      normalNames.push(name);
    }
  });

  if (normalNames.length > 0  && shoutedNames.length > 0) {
    return FormatNormalGreeting(normalNames) + " AND " + FormatShoutedGreeting(shoutedNames);
  }
  else if (shoutedNames.length > 0) {
    return FormatShoutedGreeting(shoutedNames);
  }
  else {
    return FormatNormalGreeting(normalNames);
  }
}

function getNamesFromPeople(peopleToGreet: string | null | string[]): string[] {
  let individualNames: string[] = []
  if (peopleToGreet === null) {
    individualNames.push("my friend");
  }
  else if (Array.isArray(peopleToGreet)) {
    peopleToGreet.map(name => {
      individualNames.push(...parseNameString(name));
    });
  }
  else {
    individualNames = parseNameString(peopleToGreet);
  }

  return individualNames;
}

function parseNameString(name: string): string[] {
  const parsedNames: string[] = [];

  const escapedNames = name.split("\"");

  escapedNames.forEach((escapedName, index) => {
    if (escapedName && index % 2 === 0) {
      escapedName.split(",").map(n => {
        const trimmedName = n.trim();
        parsedNames.push(trimmedName);
      });
    }
    else if (escapedName) {
      parsedNames.push(escapedName);
    }
  });

  return parsedNames;
}

function FormatNormalGreeting(names: string[]): string {
  return NORMAL_GREETING_PREFIX + FormatNamesToGreeting(names) + ".";
}

function FormatShoutedGreeting(names: string[]): string {
  return SHOUTING_GREETING_PREFIX + FormatNamesToGreeting(names).toUpperCase() + "!";
}

function FormatNamesToGreeting(names: string[]): string {
  let formattedNames: string;
  if (names.length > 1) {
    const commaSeperatedNames = names.slice(0, names.length-1).join(", ");
    formattedNames = commaSeperatedNames + " and " + names[names.length-1];
  }
  else {
    formattedNames = names[0];
  }

  return formattedNames;
}

function IsShoutedName(name: string) {
  return name.toUpperCase() === name;
}