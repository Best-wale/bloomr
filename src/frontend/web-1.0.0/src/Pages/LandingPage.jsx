import Nav,{NavLink,IconLinks} from "../components/NavHeader";
/* ---------------------------------------------------------Sections--------------------------------------------------*/
/* -------------------------------------------------------------------------------*/
/*   _________________________________HeroSection________________________________ */
/* -------------------------------------------------------------------------------*/

function Hero() {
	return (
		<>
			<section class="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="grid lg:grid-cols-2 gap-12 items-center">
						<div class="animate-fade-in-up">
							<div class="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
								<i class="fas fa-globe-africa mr-2"></i>
								African Farm-to-Market Super App powered by
								hedera
							</div>

							<h1 class="text-5xl lg:text-6xl font-bold leading-tight mb-6">
								Invest. Grow.
								<span class="text-transparent bg-clip-text gradient-bg">
									Bloom.
								</span>
							</h1>

							<p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
								Connecting African farmers, buyers, and
								investors through trust, transparency, and
								technology. A super app that revolutionizes
								farm-to-market connections.
							</p>

							<p class="text-lg text-gray-500 dark:text-gray-400 mb-8 italic">
								"Where farmers prosper, buyers access fresh
								produce, and investors grow wealth"
							</p>

							<div class="flex flex-col sm:flex-row gap-4">
								<button class="px-8 py-4 bg-primary text-white rounded-xl text-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg">
									<i class="fas fa-rocket mr-2"></i>
									Get Started
								</button>
								<button class="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl text-lg font-semibold transition-all duration-200">
									<i class="fas fa-play mr-2"></i>
									Learn More
								</button>
							</div>
						</div>

						<div class="lg:pl-8 animate-slide-in-right">
							<div class="farm-illustration h-96 flex items-center justify-center relative">
								<div class="floating-elements"></div>
								<div class="text-center z-10">
									<div class="text-8xl mb-4">🌍</div>
									<div class="flex justify-center space-x-4 text-4xl">
										<span class="animate-bounce-gentle">
											🚜
										</span>
										<span
											class="animate-bounce-gentle"
											style={{ animation_delay: "0.5s" }}
										>
											🛒
										</span>
										<span
											class="animate-bounce-gentle"
											style={{ animation_delay: "1s" }}
										>
											💰
										</span>
									</div>
								</div>

								{/*<!-- Floating Stats -->*/}
								<div class="absolute top-5 left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg animate-bounce-gentle">
									<div class="text-sm text-gray-600 dark:text-gray-400">
										Farmers Connected
									</div>
									<div class="text-xl font-bold text-secondary">
										15,000+
									</div>
								</div>

								<div
									class="absolute bottom-4 right-5 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg animate-bounce-gentle"
									style={{ animation_delay: "1s" }}
								>
									<div class="text-sm text-gray-600 dark:text-gray-400">
										Fresh Produce Sold
									</div>
									<div class="text-xl font-bold text-primary">
										2.4M kg
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

/* -------------------------------------------------------------------------------*/
/*   _________________________________End HeroSection_____________________________*/
/* -------------------------------------------------------------------------------*/

function SectionComp({ id = "", header = "", text = "", children, code = "",cta=false }) {
	if (cta === true){
		return(

<section class="py-20 gradient-bg text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6">Join the Future of Agriculture</h2>
            <p class="text-xl mb-8 opacity-90">
                Whether you're a farmer looking to grow, a buyer seeking fresh produce, or an investor wanting impact - your journey starts here.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button class="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    <i class="fas fa-rocket mr-2"></i>
                    Sign Up Today
                </button>
                <button class="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-200">
                    <i class="fas fa-play mr-2"></i>
                    Watch Demo
                </button>
            </div>
        </div>
    </section>
			)
	}
	return (
		<section id={id} className={`py-20 bg-white dark:bg-gray-${code}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">{header}</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						{text}
					</p>
				</div>
				{children}
			</div>
		</section>
	);
}

function Footer(){
	return(
<footer class="bg-gray-900 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
               {/* <!-- Brand -->*/}
                <div class="md:col-span-2">
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                            <i class="fas fa-seedling text-white text-xl"></i>
                        </div>
                        <span class="text-2xl font-bold">Bloomr</span>
                    </div>
                    <p class="text-gray-400 mb-6 max-w-md">
                        Connecting African farmers, buyers, and investors through technology. Building sustainable food systems one connection at a time.
                    </p>
                    <div class="flex space-x-4">
                        
                        <IconLinks href='x.com' icon={'twitter'}/>
                        <IconLinks href='x.com' icon={'linkedin'}/>
                        <IconLinks href='x.com' icon={'instagram'}/>
                        <IconLinks href='x.com' icon={'github'}/>

                        
                    </div>
                </div>
                
                {/*<!-- Quick Links -->*/}
                <div>
                    <h4 class="font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">About</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">How It Works</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Features</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">GitHub Repo</a></li>
                    </ul>
                </div>
                
                {/*<!-- Legal -->*/}
                <div>
                    <h4 class="font-semibold mb-4">Legal</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Cookie Policy</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">Risk Disclosure</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Bloomr. All rights reserved. Made with 💚 for African agriculture.</p>
            </div>
        </div>
    </footer>

		)
}



function HiWCard({ role = "", explain = "", icon = "", color = "" }) {
	return (
		<div className="text-center group">
			<div
				className={`w-20 h-20 mx-auto mb-6 bg-${color}/10 rounded-full flex items-center justify-center group-hover:bg-${color} group-hover:text-white transition-all duration-300`}
			>
				<i
					className={`fas fa-${icon} text-2xl text-${color} group-hover:text-white`}
				></i>
			</div>
			<div className={`w-8 h-1 bg-${color} mx-auto mb-4`}></div>
			<h3 className="text-xl font-semibold mb-3">{role}</h3>
			<p className="text-gray-600 dark:text-gray-300">{explain}</p>
		</div>
	);
}
function TechCard({ title = "", explain = "", icon = "", color = "" }) {
	return (
		<div class="text-center p-6 hover:bg-white dark:hover:bg-gray-700 rounded-xl transition-colors duration-300">
			<div
				class={`w-16 h-16 mx-auto mb-4 bg-${color}/10 rounded-full flex items-center justify-center`}
			>
				<i class={`fas fa-${icon} text-2xl text-${color}`}></i>
			</div>
			<h3 class="text-xl font-semibold mb-3">{title}</h3>
			<p class="text-gray-600 dark:text-gray-300">{explain}</p>
		</div>
	);
}

function ImpactCard({
	impact = "",
	role = "",
	explain = "",
	icon = "",
	color = "",
}) {
	return (
		<>
			<div class={`text-center p-8 bg-${color}/5 rounded-xl`}>
				<div
					class={`w-16 h-16 mx-auto mb-4 bg-${color}/10 rounded-full flex items-center justify-center`}
				>
					<i class={`fas fa-chart-line text-2xl text-${color}`}></i>
				</div>
				<h3 class={`text-2xl font-bold text-${color} mb-2`}>
					{impact}
				</h3>
				<h4 class="text-lg font-semibold mb-3">{role}</h4>
				<p class="text-gray-600 dark:text-gray-300">{explain} </p>
			</div>
		</>
	);
}

function StoryCard({ name, role, location, story, rate }) {
	return (
		<>
			<div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
				<div class="flex items-center mb-4">
					<div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
						<i class="fas fa-seedling text-secondary"></i>
					</div>
					<div>
						<h4 class="font-semibold">{name}</h4>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							{role}, {location}
						</p>
					</div>
				</div>
				<p class="text-gray-700 dark:text-gray-300 italic">{story} </p>

				<div class="flex text-accent mt-4">
					{new Array(rate).fill(null).map((_, i) => (
						<i key={i} class="fas fa-star"></i>
					))}
				</div>
			</div>
		</>
	);
}
/* ---------------------------------------------------------EndSections--------------------------------------------------*/

export default function LandingPage() {
	const data = [
  {
    "name": "Kwame Asante",
    "role": "Cocoa Farmer",
    "location": "Ghana",
    "testimonial": "Bloomr connected me directly with chocolate manufacturers. I now earn 50% more for my cocoa beans and have access to funding for expanding my farm. My family's future is secure."
  },
  {
    "name": "Sarah Okafor",
    "role": "Restaurant Owner",
    "location": "Lagos, Nigeria",
    "testimonial": "I source all my vegetables directly from farmers through Bloomr. The quality is exceptional, prices are fair, and I know exactly where my food comes from. My customers love the freshness!"
  },
  {
    "name": "Michael Adebayo",
    "role": "Impact Investor",
    "location": "Nairobi, Kenya",
    "testimonial": "Investing in African agriculture through Bloomr has been incredibly rewarding. I'm earning 18% returns while directly supporting farmers and food security. It's profit with purpose."
  },
  {
    "name": "Amina Diallo",
    "role": "Rice Farmer",
    "location": "Mali",
    "testimonial": "With Bloomr, I gained access to buyers across West Africa. My income has grown by 40% and I can now afford better equipment for my farm."
  },
  {
    "name": "John Mensah",
    "role": "Export Trader",
    "location": "Accra, Ghana",
    "testimonial": "Bloomr's transparent system makes it easy to connect with verified farmers. I save time, reduce risk, and deliver fresher produce to my clients."
  }
]

	return (
		<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
			<Nav />
			<Hero />
			<SectionComp
				code="900"
				id="how-it-works"
				header="How It Works"
				text="Three simple pathways connecting the entire agricultural value chain from farm to market"
			>
				<div class="grid md:grid-cols-3 gap-8">
					<HiWCard
						role="For Farmers"
						explain=" List your crops and get fair prices. Connect directly with buyers and access funding from investors to grow your farm operations."
						icon="seedling"
						color="secondary"
					/>
					<HiWCard
						role="For Buyers"
						explain="Buy fresh produce directly from farms. Get transparent pricing, quality assurance, and reliable delivery from verified farmers."
						icon="shopping-cart"
						color="primary"
					/>

					<HiWCard
						role="For Investors"
						explain="Fund farms and earn returns. Access tokenized crop shares and transparent farm-to-market tracking with blockchain security."
						icon="chart-line"
						color="accent"
					/>
				</div>
			</SectionComp>
			<SectionComp
				code="800"
				id="how-it-works"
				header="Powered by Advanced Technology"
				text="Cutting-edge features that ensure transparency, security, and efficiency across the entire agricultural value chain"
			>
				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<TechCard
						title="AI-Powered Predictions"
						explain="Smart crop forecasting, weather predictions, and market price analysis to optimize farming decisions."
						icon="brain"
						color="primary"
					/>
					<TechCard
						title="Tokenized Crop Shares"
						explain="Invest in fractional farm ownership through blockchain tokens with transparent tracking and returns."
						icon="coins"
						color="secondary"
					/>
					<TechCard
						title="Escrow-Secured Payments"
						explain="Smart contract escrow ensures secure transactions between farmers, buyers, and investors.."
						icon="shield-alt"
						color="accent"
					/>
					<TechCard
						title="Transparent Tracking"
						explain="End-to-end visibility from farm to market with real-time updates and quality verification."
						icon="route"
						color="primary"
					/>
				</div>
			</SectionComp>
			<SectionComp
				code="900"
				id="how-it-works"
				header="Creating Real Impact"
				text="Transforming lives across the agricultural value chain with measurable results"
			>
				<div class="grid md:grid-cols-3 gap-8">
					<ImpactCard
						impact="40% Higher Income"
						role="For Farmers"
						explain="Direct market access and fair pricing eliminate middlemen, increasing farmer profits by an average of 40%.
                 "
						icon="chart-line"
						color="secondary"
					/>
					<ImpactCard
						impact="30% Fresher Produce"
						role="For Buyers"
						explain="Direct farm connections reduce time from harvest to market, ensuring fresher, higher-quality produce."
						icon="chart-line"
						color="secondary"
					/>

					<ImpactCard
						impact="15% Annual Returns"
						role="For Investors"
						explain="Access to a new asset class with attractive returns while supporting sustainable agriculture."
						icon="seedling"
						color="accent"
					/>
				</div>
			</SectionComp>

			<SectionComp
				code="800"
				id="how-it-works"
				header="Success Stories"
				text="Real people, real impact across the Bloomr ecosystem"
			>
				<div class="grid md:grid-cols-3 gap-8">
					{data.map(item =>(

<StoryCard
					name={item.name}
					role={item.role}
					location={item.location}
					story={item.testimonial}
					rate={5}
				/>

						))}
				
				
			</div>
			</SectionComp>


			
<SectionComp
				
				cta={true}
			>

				</SectionComp>

	<Footer/>
			
		</div>
	);
}

{
	/*
  <div class="grid md:grid-cols-3 gap-8">
                <!-- Farmer Testimonial -->
                <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                            <i class="fas fa-seedling text-secondary"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold">Kwame Asante</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Cocoa Farmer, Ghana</p>
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 italic">
                        "Bloomr connected me directly with chocolate manufacturers. I now earn 50% more for my cocoa beans and have access to funding for expanding my farm. My family's future is secure."
                    </p>
                    <div class="flex text-accent mt-4">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <!-- Buyer Testimonial -->
                <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                            <i class="fas fa-shopping-cart text-primary"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold">Sarah Okafor</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Restaurant Owner, Lagos</p>
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 italic">
                        "I source all my vegetables directly from farmers through Bloomr. The quality is exceptional, prices are fair, and I know exactly where my food comes from. My customers love the freshness!"
                    </p>
                    <div class="flex text-accent mt-4">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                
                <!-- Investor Testimonial -->
                <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                            <i class="fas fa-chart-line text-accent"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold">Michael Adebayo</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Impact Investor, Nairobi</p>
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 italic">
                        "Investing in African agriculture through Bloomr has been incredibly rewarding. I'm earning 18% returns while directly supporting farmers and food security. It's profit with purpose."
                    </p>
                    <div class="flex text-accent mt-4">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>


            */
}
