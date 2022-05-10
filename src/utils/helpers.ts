export function addZero(num: number) {
  if (num) {
    return String(num).padStart(2, "0");
  }
  return "??";
}

export function removeHtmlTags(text: string) {
  return text?.replace(/(<([^>]+)>)/gi, "");
}
