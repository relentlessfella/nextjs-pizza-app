import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function Home() {
  return (
    <h1 className="flex justify-center">
      <Button variant="outline">Button</Button>
    </h1>
  );
}
