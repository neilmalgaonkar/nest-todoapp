import { ObjectID } from 'typeorm';

export class UpdateTodoDto {
    readonly _id: ObjectID;
    readonly task: string;
    readonly is_completed: boolean;
    readonly is_deleted: boolean;
};