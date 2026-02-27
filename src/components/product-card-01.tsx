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

					<ul className="space-y-4 text-zinc-700 mb-10 text-sm">
						<li className="flex items-center gap-3">
							<div className="w-[5%] h-3 rounded-full bg-teal-300" />
							<p className="w-[95%]">{descriptionWork1}</p>
						</li>
						<li className="flex items-center gap-3">
							<div className="w-[5%] h-3 rounded-full bg-teal-300" />
							<p className="w-[95%]">{descriptionWork2}</p>
						</li>
						<li className="flex items-center gap-3">
							<div className="w-[5%] h-3 rounded-full bg-teal-300" />
							<p className="w-[95%]">{descriptionWork3}</p>
						</li>
						<li className="flex items-center gap-3">
							<div className="w-[5%] h-3 rounded-full bg-teal-300" />
							<p className="w-[95%]">{descriptionWork4}</p>
						</li>
					</ul>

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
					) : (
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