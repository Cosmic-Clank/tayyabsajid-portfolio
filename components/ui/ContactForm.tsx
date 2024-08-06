import React from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/Textarea";
import { MdOutlinePerson4 } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdMessage } from "react-icons/md";

const ContactForm = () => {
	return (
		<div className='max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-black bg-opacity-40 backdrop-blur-sm'>
			<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>Quick Message</h2>
			<p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>You can also just send me a quick message and I&apos;ll get back to you on you mail.</p>

			<form action={"/api/mail"} method='GET' className='my-8'>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='firstname'>
							<span className='flex gap-2 items-center'>
								<MdOutlinePerson4 size={20} />
								Name
							</span>
						</Label>
						<Input required id='firstname' placeholder='Wade Wilson' type='text' name='name' />
					</LabelInputContainer>
				</div>
				<LabelInputContainer className='mb-4'>
					<Label htmlFor='email'>
						<span className='flex gap-2 items-center'>
							<MdOutlineAlternateEmail size={20} />
							Email
						</span>
					</Label>
					<Input required id='email' placeholder='friendlyperson@bestmail.com' type='email' name='email' />
				</LabelInputContainer>

				<LabelInputContainer className='mb-8'>
					<Label htmlFor='message'>
						<span className='flex gap-2 items-center'>
							<MdMessage size={20} />
							Message
						</span>
					</Label>
					<Textarea required id='message' placeholder='Hello, I would like to just sit and have a talk with you :)' name='message' />
				</LabelInputContainer>

				<button className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]' type='submit'>
					Send &rarr;
					<BottomGradient />
				</button>

				<div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
			</form>
		</div>
	);
};

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	);
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};

export default ContactForm;
