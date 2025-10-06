export interface SubService {
  id: number;
  name: string;
  service_id: number;
}

export interface Service {
  id: number;
  title: string;
  image: string | null;
  sub_services: SubService[];
}

export interface HomeResponse {
  services: Service[];
}
