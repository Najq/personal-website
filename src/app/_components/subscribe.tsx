'use client';

import React from 'react';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { api } from '@/convex/_generated/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'convex/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email(),
});
export default function Subscribe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });
  const createSubscriber = useMutation(api.subscribers.createSubscriber);
  return (
    <div className="bg-neutral-800/20 rounded-lg pt-6 pb-8  px-6 flex flex-col space-y-4 mt-4 animate-slide-from-down-and-fade-6">
    </div>
  );
}
