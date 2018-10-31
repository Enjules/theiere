import { MenuOption } from './MenuOption';

export class Menu {
    id?: number;
    options: MenuOption[];
    region: string;
    slug: string;

    constructor(
        id = null,
        options = [new MenuOption()],
        region = null,
        slug = null
    ) {
        this.id = id;
        this.options = options;
        this.region = region;
        this.slug = slug;
    }
}
