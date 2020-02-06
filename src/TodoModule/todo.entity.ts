import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Todo {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    task: string;

    @Column({
        type: Boolean,
        default: false
    })
    is_completed: Boolean;

    @Column({
        type: Boolean,
        default: false
    })
    is_deleted: Boolean;
};