export const NoteType_CONSTANTS = [
    'MARKDOWN', 
    'PLAIN_TEXT'
] as const;
export type NoteType = typeof NoteType_CONSTANTS[number];
