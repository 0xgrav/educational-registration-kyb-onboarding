import React from 'react';
import { StepProps } from '../../types';
import { MapPin } from 'lucide-react';
import { InputField } from '../ui/FormField';
import Card from '../ui/Card';

export default function AddressInformation({ data, updateFields }: StepProps) {
  return (
    <Card title="Address Information" icon={MapPin}>
      <div className="space-y-6">
        <InputField
          label="Street Address"
          placeholder="Enter street address"
          required
          value={data.street}
          onChange={e => updateFields({ street: e.target.value })}
        />

        <div className="grid grid-cols-2 gap-6">
          <InputField
            label="City"
            placeholder="Enter city"
            required
            value={data.city}
            onChange={e => updateFields({ city: e.target.value })}
          />

          <InputField
            label="State/Province"
            placeholder="Enter state"
            required
            value={data.state}
            onChange={e => updateFields({ state: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <InputField
            label="Country"
            placeholder="Enter country"
            required
            value={data.country}
            onChange={e => updateFields({ country: e.target.value })}
          />

          <InputField
            label="Postal Code"
            placeholder="Enter postal code"
            required
            value={data.postalCode}
            onChange={e => updateFields({ postalCode: e.target.value })}
          />
        </div>
      </div>
    </Card>
  );
}