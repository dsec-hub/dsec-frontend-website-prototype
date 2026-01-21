import GradientText from "./GradientText";
import PixelBlast from "./PixelBlast";
import SectionLabel from "./SectionLabel";
import TransitionLink from "./TransitionLink";

export default function Hero(): React.ReactElement {
	return (
		<section className="relative min-h-[70vh] overflow-hidden bg-background">
			{/* PixelBlast background */}
			<div className="absolute inset-0 w-full h-full opacity-50">
				<PixelBlast
					variant="square"
					pixelSize={4}
					color="#E91E63"
					patternScale={2}
					patternDensity={1}
					pixelSizeJitter={0}
					liquid={false}
					speed={0.5}
					edgeFade={0.25}
					transparent
				/>
			</div>

			{/* Hero Content */}
			<div className="relative z-10 px-6 md:px-12 pt-20 pb-32 max-w-7xl mx-auto">
				<div className="max-w-7xl">
					<SectionLabel>JOIN US FOR T1 STALL</SectionLabel>
					<h1 className="font-grotesk text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground mb-6">
						Deakin&apos;s Home for{" "}
						<GradientText
							colors={["#e91e63", "#ff6b6b", "#9c27b0", "#00bcd4"]}
							animationSpeed={8}
							showBorder={false}
						>
							{`{`}Software Engineers{`}`}
						</GradientText>
					</h1>
					<p className="max-w-lg opacity-90 text-lg mb-8 leading-relaxed">
						Join the Deakin Software Engineering Club at Burwood to design,
						build, and ship real software with other students.
					</p>
					<div className="flex flex-wrap items-center gap-4">
						<TransitionLink
							href="/auth/join"
							className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold transition-all"
						>
							Join Now
						</TransitionLink>
						<TransitionLink
							href="/about"
							className="px-8 py-3 text-foreground hover:text-foreground/80 font-semibold transition-colors"
						>
							Learn More
						</TransitionLink>
					</div>
				</div>
			</div>
		</section>
	);
}
