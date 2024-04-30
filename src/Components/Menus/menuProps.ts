export type TopNavProps = {
    name: string;
    url?: string;
    id: number;
    submenus?: SubmenuProps[] | undefined;
}

export type SubmenuProps = {
    name: string;
    url?: string;
    id: number;
    subSubmenu?: SubSubmenuProps;
}

export type SubSubmenuProps = {
    img?: {
        src: string;
        alt: string;
    }
    url?: string;
    info?: string;
}