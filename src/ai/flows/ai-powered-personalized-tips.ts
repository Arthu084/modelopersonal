'use server';

/**
 * @fileOverview Provides AI-driven personalized tips on exercise, diet, and motivation.
 *
 * - `getPersonalizedTips` - A function that generates personalized fitness tips based on user data.
 * - `PersonalizedTipsInput` - The input type for the `getPersonalizedTips` function.
 * - `PersonalizedTipsOutput` - The return type for the `getPersonalizedTips` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTipsInputSchema = z.object({
  goals: z
    .string()
    .describe('The user\u0027s fitness goals, e.g., lose weight, build muscle.'),
  currentProgress: z
    .string()
    .describe(
      'Description of the user\u0027s current progress, including workout frequency, diet, and any challenges they are facing.'
    ),
  fitnessLevel: z
    .string()
    .describe(
      'The user\u0027s current fitness level e.g. beginner, intermediate, advanced'
    ),
  exercisePreference: z
    .string()
    .describe(
      'The user\u0027s preferred type of exercise e.g. cardio, strength training, yoga, etc.'
    ),
});

export type PersonalizedTipsInput = z.infer<typeof PersonalizedTipsInputSchema>;

const PersonalizedTipsOutputSchema = z.object({
  exerciseTip: z.string().describe('A personalized tip on exercise form or technique.'),
  dietTip: z.string().describe('A personalized tip on diet or nutrition.'),
  motivationTip: z.string().describe('A personalized tip on motivation or mindset.'),
});

export type PersonalizedTipsOutput = z.infer<typeof PersonalizedTipsOutputSchema>;

export async function getPersonalizedTips(
  input: PersonalizedTipsInput
): Promise<PersonalizedTipsOutput> {
  return personalizedTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTipsPrompt',
  input: {schema: PersonalizedTipsInputSchema},
  output: {schema: PersonalizedTipsOutputSchema},
  prompt: `You are a personal trainer providing personalized tips to users.

  Based on the user's goals, current progress, and fitness level, provide one tip each on exercise, diet and motivation.

  Goals: {{{goals}}}
  Current Progress: {{{currentProgress}}}
  Fitness Level: {{{fitnessLevel}}}
  Exercise Preference: {{{exercisePreference}}}

  Exercise Tip: A personalized tip on exercise form or technique.
  Diet Tip: A personalized tip on diet or nutrition.
  Motivation Tip: A personalized tip on motivation or mindset.`,
});

const personalizedTipsFlow = ai.defineFlow(
  {
    name: 'personalizedTipsFlow',
    inputSchema: PersonalizedTipsInputSchema,
    outputSchema: PersonalizedTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
