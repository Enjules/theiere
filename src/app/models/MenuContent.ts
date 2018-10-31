import { Title } from './MenuTitle';

export class Content {
    id?: number;
    title: Title[];

    constructor() {
        this.id = null;
        this.title = [new Title];
    }
}
