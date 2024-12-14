export interface FormData {
  // Step 1: Basic Information
  institutionName: string;
  institutionType: 'university' | 'college' | 'school' | 'other';
  yearEstablished: number;
  
  // Step 2: Contact Details
  email: string;
  phone: string;
  website: string;
  
  // Step 3: Address Information
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  
  // Step 4: Legal Information
  registrationNumber: string;
  taxId: string;
  accreditationDetails: string;
}

export interface StepProps {
  data: FormData;
  updateFields: (fields: Partial<FormData>) => void;
}