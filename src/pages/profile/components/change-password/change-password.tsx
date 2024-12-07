import { Button } from '@/vendors/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/vendors/ui/form';
import { Input } from '@/vendors/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  password: z.string().refine(value => value.length > 0, {
    message: 'Please provide a password.',
  }),
  newPassword: z.string().refine(value => value.length > 0, {
    message: 'Please retype your new password.',
  }),
});

export function ChangePassword() {
  //   const form = useForm();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      newPassword: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="pb-2 pl-8 w-3/4">
      <h2 className="text-xl font-semibold text-theme-red mb-4">
        Profile Picture
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-lg">Password</FormLabel>
                <FormControl>
                  <Input className="py-6" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-lg">Retype Password</FormLabel>
                <FormControl>
                  <Input className="py-6" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit">Change Password</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
