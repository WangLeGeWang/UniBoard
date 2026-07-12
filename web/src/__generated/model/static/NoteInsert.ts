import type {NoteType} from '../enums/';

export interface NoteInsert {
    readonly title: string;
    readonly content: string;
    readonly type: NoteType;
    readonly password?: string | undefined;
}
