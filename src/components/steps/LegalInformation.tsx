import React from 'react';
import { StepProps } from '../../types';
import { FileText } from 'lucide-react';
import { InputField, TextAreaField } from '../ui/FormField';
import Card from '../ui/Card';

export default function LegalInformation({ data, updateFields }: StepProps) {
  return (
    <Card title="Legal Information" icon={FileText}>
      <div className="space-y-6">
        <InputField
          label="Registration Number"
          placeholder="Enter registration number"
          required
          value={data.registrationNumber}
          onChange={e => updateFields({ registrationNumber: e.target.value })}
        />

        <InputField
          label="Tax ID"
          placeholder="Enter tax ID"
          required
          value={data.taxId}
          onChange={e => updateFields({ taxId: e.target.value })}
        />

        <TextAreaField
          label="Accreditation Details"
          placeholder="Enter accreditation details"
          required
          value={data.accreditationDetails}
          onChange={e => updateFields({ accreditationDetails: e.target.value })}
          rows={4}
        />
      </div>
    </Card>
  );
}