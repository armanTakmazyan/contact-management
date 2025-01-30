import { z } from 'zod';

export const contactSchema = z
  .object({
    fullName: z.string().min(3, 'Full Name must be at least 3 characters'),
    username: z.string().min(3, 'Username must be at least 3 characters'),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters'),
    image: z.instanceof(File).optional(), // Make it optional initially
  })
  .refine((data) => !!data.image, {
    message: 'Please select an image',
    path: ['image'],
  });
