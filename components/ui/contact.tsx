'use client';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { User, } from "lucide-react";
import { MdEmail } from "react-icons/md";
import ShinyText from "../ShinyText";

export default function Contact() {
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
				<div className="grid md:grid-cols-2 gap-4 md:gap-8">
					<InputGroup className="">
						<InputGroupInput placeholder="Name"/>
						<InputGroupAddon>
							<User/>
						</InputGroupAddon>
					</InputGroup>
					<InputGroup className="">
							<InputGroupInput placeholder="Email"/>
							<InputGroupAddon>
							<MdEmail/>
							</InputGroupAddon>
					</InputGroup>
				</div>
				
					<InputGroup className="">
							<InputGroupTextarea className="min-h-[150px]"  placeholder="Write a Message"/>
							
					</InputGroup>
							<InputGroupButton variant={'secondary'} className="w-full h-10 border-zinc-700 border text-center text-lg bg-purple-700 hover:bg-purple-600 hover:scale-[1.01] active:scale-[0.99] montserrat duration-100 ease-linear cursor-pointer">
								Submit
							</InputGroupButton>
							
				</div>
			</div>
		</div>
	)
}