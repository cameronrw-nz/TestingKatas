const NORMAL_GREETING_PREFIX = "Hello, "
const SHOUTING_GREETING_PREFIX = "HELLO "

export function Greeting(name: string | null | string[]): string {
  const names = getNameAsNames(name); 

  const normalNames: string[] = [];
  const shoutedNames: string[] = [];
  names.forEach(n => {
    if (IsShoutedName(n)) {
      shoutedNames.push(n);
    }
    else {
      normalNames.push(n);
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

function getNameAsNames(name: string | null | string[]): string[] {
  if (name === null) {
    return ["my friend"];
  }
  else if (Array.isArray(name)) {
    return name;
  }
  else {
    return [name];
  }
}

function FormatNormalGreeting(names: string[]): string {
  return NORMAL_GREETING_PREFIX + FormatNamesToGreeting(names) + "." 
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