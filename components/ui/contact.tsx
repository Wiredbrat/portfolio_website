'use client';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Loader2, User, } from "lucide-react";
import { MdEmail } from "react-icons/md";
import ShinyText from "../ShinyText";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { throwDeprecation } from "process";
import { useEffect, useState } from "react";


const formSchema = z.object({
	name: z.string().min(2, "Enter a valid name"),
	email: z.email("Enter a valid mail id"),
	message: z.string().min(20, "Enter a Valid Message"),
})

export default function Contact() {
	const form = useForm <z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		}
	})

	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	async function onSubmit(data: z.infer<typeof formSchema>) {

		try {
			setIsSubmitting(true);
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
      	body: JSON.stringify(data),
			})

			if (!res.ok) {
				toast("Failed to send message.", {position: "bottom-right"});
				// throw new Error("Failed to send message: " + res );
			}
			toast("Message sent successfully", {position: "bottom-right"});
			form.reset();

		} catch (error) {

				toast("Failed to send message", {position: "bottom-right"});
				throw new Error("Failed to send message: " + error );
		}finally{
			setIsSubmitting(false);
		}
	}

	return(
		<div className="border-t ">
			<div className="p-8 montserrat max-w-[1100px] mx-auto">
				<ShinyText 
					text="Let's Talk" 
					disabled={false} 
					speed={3} 
					className='montserrat text-base lg:text-xl mb-2 text-purple-500' 
				/>
				<p className="montserrat text-2xl lg:text-4xl font-medium mb-5">
					Contact
				</p>
				<div className="flex flex-col gap-4 md:gap-6">
					<form className="flex flex-col gap-4 md:gap-6" id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid md:grid-cols-2 gap-4 md:gap-8">
							<div>
							<InputGroup className="">
								<InputGroupInput placeholder="Name" {...form.register("name")}/>
								<InputGroupAddon>
									<User/>
								</InputGroupAddon>
							</InputGroup>
							{form.formState.errors.name && (
								<p className="text-red-500 text-sm p-1">{form.formState.errors.name.message}</p>
							)}
							</div>
							<div>
							<InputGroup className="">
									<InputGroupInput placeholder="Email" {...form.register("email")}/>
									<InputGroupAddon>
									<MdEmail/>
									</InputGroupAddon>
							</InputGroup>
							{form.formState.errors.email && (
								<p className="text-red-500 text-sm p-1">{form.formState.errors.email.message}</p>
							)}
							</div>
						</div>
						<div>
						<InputGroup className="">
								<InputGroupTextarea className="min-h-[150px]"  placeholder="Write a Message" {...form.register("message")}/>
						</InputGroup>
						{form.formState.errors.message && (
								<p className="text-red-500 text-sm p-1">{form.formState.errors.message.message}</p>
						)}
						</div>
					</form>
					<InputGroupButton 
						type="submit"
						form="contact-form"
						variant={'secondary'} 
						aria-disabled={isSubmitting}
						className={`w-full h-10 border-zinc-700 border text-center text-lg bg-purple-700 hover:bg-purple-600 hover:scale-[1.01] active:scale-[0.99] montserrat duration-100 ease-linear cursor-pointer`}
					>
						{isSubmitting ? 
							<Loader2 className="mr-3 size-5 animate-spin "/> 
							: 'Submit'
						}
					</InputGroupButton>
							
				</div>
			</div>
		</div>
	)
}