export interface DistrictsModel {
    title: string;
    id: number;
}

export interface RestaurantsModel {
    'Ambergris Caye': layoutModel[];
    'Caye Caulker': layoutModel[];
    'San Ignacio': layoutModel[];
    'Placencia': layoutModel[];
    'Hopkins': layoutModel[];
    'Belize City': layoutModel[];
    'Glovers Reef': layoutModel[];
    'Orange Walk': layoutModel[];
    'Toledo': layoutModel[];
    'Corozal': layoutModel[];
}

export interface layoutModel {
    name: string;
    directions: string;
    open: number;
    closed: number;
    phone: number;
    imgs: string;
}
