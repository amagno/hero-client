import { MongoDocument } from './mongo-document';

export class Hero extends MongoDocument {
    name: string;
    power: string;
}
