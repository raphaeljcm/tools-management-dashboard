import { z } from 'zod';

export const taskSchema = z.object({
  id: z.string(),
  name: z.string(),
  lastMaintanance: z.string(),
  nextMaintanance: z.string(),
  status: z.string(),
  latitute: z.number(),
  longitude: z.number(),
});

export type Task = z.infer<typeof taskSchema>;
