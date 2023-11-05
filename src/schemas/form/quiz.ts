import {z} from 'zod';

export const quizCreationSchema = z.object({
    topic: z.string().min(4, {message: "Topic must be 4 charecters long"})
    .max(50),
    type: z.enum(['mcq', 'open_ended'],),
    amount: z.number().min(5).max(20),
})