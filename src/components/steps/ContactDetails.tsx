import React from 'react';
import { StepProps } from '../../types';
import { AtSign } from 'lucide-react';
import { InputField } from '../ui/FormField';
import Card from '../ui/Card';

export default function ContactDetails({ data, updateFields }: StepProps) {
  return (
    <Card title="Contact Details" icon={AtSign}>
      <div className="space-y-6">
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter email address"
          required
          value={data.email}
          onChange={e => updateFields({ email: e.target.value })}
        />

        <InputField
          label="Phone Number"
          type="tel"
          placeholder="Enter phone number"
          required
          value={data.phone}
          onChange={e => updateFields({ phone: e.target.value })}
        />

        <InputField
          label="Website"
          type="url"
          placeholder="Enter website URL"
          required
          value={data.website}
          onChange={e => updateFields({ website: e.target.value })}
        />
      </div>
    </Card>
  );
}