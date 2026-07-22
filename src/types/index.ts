export interface Product {
  id: string;
  name: string;
  category: 'supreme' | 'premium';
  description?: string;
  image: string;
}

export interface Outlet {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapLink: string;
  image: string;
}

export interface FranchiseSubmission {
  name: string;
  mobile: string;
  email: string;
  city: string;
  message?: string;
}
