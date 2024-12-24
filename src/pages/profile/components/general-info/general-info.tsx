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
import { UserResource } from '@clerk/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { GeneralInfoModel } from '../../models/profile.model';

interface Props {
  user: UserResource;
  onUpdate: (data: GeneralInfoModel) => void;
}

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email('This is not a valid email.'),
});

export function GeneralInfo({ user, onUpdate }: Props): JSX.Element {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      email: user.primaryEmailAddress?.emailAddress ?? '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    onUpdate(data as unknown as GeneralInfoModel);
  };

  return (
    <div className="pb-8 w-3/4">
      <h2 className="text-xl font-semibold text-theme-red mb-4">
        General Info
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-lg">First Name</FormLabel>
                <FormControl>
                  <Input className="py-6" autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-lg">Last Name</FormLabel>
                <FormControl>
                  <Input className="py-6" autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input
                    readOnly
                    className="py-6 read-only:bg-gray-100"
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
