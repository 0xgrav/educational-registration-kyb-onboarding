import React from 'react';
import { StepProps } from '../../types';
import { Building2 } from 'lucide-react';
import { InputField, SelectField } from '../ui/FormField';
import Card from '../ui/Card';

const institutionTypes = [
  { value: 'university', label: 'University' },
  { value: 'college', label: 'College' },
  { value: 'school', label: 'School' },
  { value: 'other', label: 'Other' },
];

export default function BasicInformation({ data, updateFields }: StepProps) {
  return (
    <Card title="Basic Information" icon={Building2}>
      <div className="space-y-6">
        <InputField
          label="Institution Name"
          placeholder="Enter institution name"
          required
          value={data.institutionName}
          onChange={e => updateFields({ institutionName: e.target.value })}
        />

        <SelectField
          label="Institution Type"
          options={institutionTypes}
          value={data.institutionType}
          onChange={e => updateFields({ institutionType: e.target.value as any })}
        />

        <InputField
          label="Year Established"
          type="number"
          placeholder="Enter year"
          required
          min="1800"
          max={new Date().getFullYear()}
          value={data.yearEstablished}
          onChange={e => updateFields({ yearEstablished: parseInt(e.target.value) })}
        />
      </div>
    </Card>
  );
}