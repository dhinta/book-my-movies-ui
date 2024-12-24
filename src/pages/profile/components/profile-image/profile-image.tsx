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
  picture: z.string().refine(value => value.length > 0, {
    message: 'Please select a picture.',
  }),
});

export function ProfileImage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      picture: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="py-8 w-3/4">
      <h2 className="text-xl font-semibold text-theme-red mb-4">
        Profile Picture
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="picture"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel>
                  <span className="sr-only">Upload</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    className="w-full border-0 px-0 h-12 shadow-none text-sm text-slate-500 file:mr-4 file:py-2 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit">Upload Photo</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
