function toCapitalizeFirstLetter(value: string): string {
  return value.length ? value[0].toUpperCase() + value.slice(1).toLowerCase() : value;
}

export default toCapitalizeFirstLetter;
