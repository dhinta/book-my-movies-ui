import googleImg from '@/assets/images/googlelogo.svg';
import { Button } from '@/vendors/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/vendors/ui/dialog';
import { Input } from '@/vendors/ui/input';
import { Mail } from 'lucide-react';

export function Signin() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-600 ml-8 text-white h-10">Signin</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get Started</DialogTitle>
          <DialogDescription className="sr-only">
            Signin to your account to continue
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col mt-4">
          <Button variant="outline" className="w-full p-6 mb-8">
            <img width={16} src={googleImg} />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full p-6">
            <Mail size={28} />
            Continue with Email
          </Button>

          <div className="text-center text-xl text-muted-foreground my-4">
            OR
          </div>

          <Input
            placeholder="Continue with mobile number"
            className="w-full h-10"
          />

          <div className="mt-4 flex justify-end">
            <DialogClose asChild>
              <Button variant="outline" className="mr-4">
                Cancel
              </Button>
            </DialogClose>
            <Button>Continue</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
