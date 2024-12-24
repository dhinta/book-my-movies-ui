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

const formSchema = z
  .object({
    currentPassword: z.string().refine(value => value.length > 0, {
      message: 'Please provide current password.',
    }),
    newPassword: z.string().refine(value => value.length > 0, {
      message: 'Please provide your new password.',
    }),
    reNewPassword: z.string().refine(value => value.length > 0, {
      message: 'Please retype your new password.',
    }),
  })
  .superRefine(({ newPassword, reNewPassword }, ctx) => {
    if (newPassword !== reNewPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'New password is not matched.',
        path: ['reNewPassword'],
      });
    }
  });

export function AddMovies() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      reNewPassword: '',
    },
  });

  const onSubmit = ({
    currentPassword,
    newPassword,
  }: z.infer<typeof formSchema>) => {
    console.log(currentPassword, newPassword);
    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-lg">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="py-6"
                    autoComplete="off"
                    {...field}
                  />
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
                <FormLabel className="text-lg">New Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="py-6"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reNewPassword"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-lg">Retype New Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="py-6"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
