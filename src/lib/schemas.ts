import { z } from 'zod';

export const quoteSchema = z.object({
  clientName: z.string().min(2, 'Name is required'),
  contactMethod: z.enum(['phone', 'email', 'text']),
  contactInfo: z.string().min(3, 'Contact info is required'),
  aircraftMakeModel: z.string().min(2, 'Aircraft make/model is required'),
  tailNumber: z
    .string()
    .min(2, 'Tail number is required')
    .regex(/^N?\d+[A-Z]*$/i, 'Enter a valid N-number'),
  serviceTier: z.enum(['ramp_turnaround', 'a_check', 'c_check', 'pneumatic_boot']),
  hangarLocation: z.enum(['CRG', 'KVQQ', 'JAX', 'private']),
  notes: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
