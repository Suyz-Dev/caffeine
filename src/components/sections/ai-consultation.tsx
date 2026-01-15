'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aiDrivenConsultation, type AIDrivenConsultationOutput } from '@/ai/flows/ai-driven-consultation';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Wand2, DollarSign, Cpu, Lightbulb } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const consultationFormSchema = z.object({
  projectRequirements: z.string().min(50, {
    message: 'Please provide at least 50 characters to describe your project.',
  }),
});

type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export default function AiConsultationSection() {
  const [result, setResult] = useState<AIDrivenConsultationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      projectRequirements: '',
    },
  });

  async function onSubmit(data: ConsultationFormValues) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await aiDrivenConsultation(data);
      setResult(response);
    } catch (error) {
      console.error('AI consultation failed:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to get a consultation. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="consult" className="w-full py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary flex items-center justify-center gap-3">
            <Wand2 className="w-8 h-8 text-accent" /> AI-Driven Consultation
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-lg text-foreground/70">
            Describe your project, and let our AI provide a preliminary analysis and estimate in seconds.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="p-6 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Your Project Idea</CardTitle>
              <CardDescription>The more detail you provide, the better the analysis will be.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="projectRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., I want to build a social media app for pet owners with features like photo sharing, event creation, and a local services directory..."
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full" style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Get Instant Analysis'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-bold text-primary">Preliminary Analysis</h3>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-24 w-full" />
              </div>
            ) : result ? (
              <div className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <Lightbulb className="w-6 h-6 text-accent" />
                    <CardTitle>Preliminary Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">{result.preliminarySolutions}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <Cpu className="w-6 h-6 text-accent" />
                    <CardTitle>Suggested Technologies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/90">{result.suggestedTechnologies}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                    <DollarSign className="w-6 h-6 text-accent" />
                    <CardTitle>Estimated Cost</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold font-headline">{result.estimatedCost}</p>
                    <p className="text-xs text-muted-foreground">This is a rough estimate. For a detailed quote, please contact us.</p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="flex items-center justify-center min-h-[300px] border-dashed">
                <p className="text-muted-foreground text-center">Your project analysis will appear here.</p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
