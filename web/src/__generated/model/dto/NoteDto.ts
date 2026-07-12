import type {NoteType} from '../enums/';

export type NoteDto = {
    'NoteController/DEFAULT_NOTE': {
        readonly id: number;
        readonly title: string;
        readonly content: string;
        readonly type: NoteType;
    }
}
