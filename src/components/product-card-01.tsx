import {
	Card,
	CardContent,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";


type workDataProps = {
	nameWork: string,
	descriptionWork1: string,
	descriptionWork2?: string,
	descriptionWork3?: string,
	descriptionWork4?: string,
	highWork: string,
	imageWork: string,
	finishedWork: boolean
};

export function ProductCardOne({
	nameWork,
	descriptionWork1,
	descriptionWork2,
	descriptionWork3,
	descriptionWork4,
	highWork,
	imageWork,
	finishedWork
}: workDataProps) {
	return (
		<Card className="w-full max-w-[320px] h-full hover:shadow-xl transition">

			<CardContent className="flex flex-col h-full">

				{/* Product Image */}
				<div className="relative mb-6">
					<div className="bg-gray-100 rounded-2xl flex items-center justify-center h-[280px] relative overflow-hidden">
						<img
							src={imageWork}
							alt={nameWork}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Product Info */}
				<div className="mb-4">
					<CardTitle className="text-xl leading-tight text-stone-700 mb-2">
						{nameWork}
					</CardTitle>

					<CardDescription className="text-sm text-stone-700 mb-2">
						{descriptionWork1}
					</CardDescription>

					{descriptionWork2 && (
						<CardDescription className="text-sm text-stone-700 mb-2">
							{descriptionWork2}
						</CardDescription>
					)}

					{descriptionWork3 && (
						<CardDescription className="text-sm text-stone-700 mb-2">
							{descriptionWork3}
						</CardDescription>
					)}

					{descriptionWork4 && (
						<CardDescription className="text-sm text-stone-700">
							{descriptionWork4}
						</CardDescription>
					)}
				</div>

				{/* Bottom Section */}
				<div className="mt-auto flex items-center justify-between">
					<p className="text-xs font-bold border rounded-full py-1 px-6 text-stone-700">
						{highWork}
					</p>


					{finishedWork ? (
						<Button className="bg-zinc-700 hover:cursor-pointer active:scale-[95%]">
							Preview Link
						</Button>
						): (
						<Button
							disabled
							className="bg-zinc-700 hover:cursor-pointer active:scale-[95%] disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-zinc-400">
							In Progress
						</Button>
						) 
					}
				</div>

			</CardContent>
		</Card>
	);
}