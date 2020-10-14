export type SupportedProgrammingLanguageTypes =
  | "html"
  | "js"
  | "cpp"
  | "php"
  | "java"
  | "py"
  | "cs"
  | "rb"
  | "c";

interface ProgrammingLanguage {
  id: string;
  name: string;
  iconUrl: string;
}
export default ProgrammingLanguage;
