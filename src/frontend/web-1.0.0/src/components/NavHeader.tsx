export const NavLink = ({ href, children }) => (
	<a
		href={href}
		className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
	>
		{children}
	</a>
);
export const IconLinks =({href,icon})=>(
 <a href={href} class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                            <i class={`fab fa-${icon}`}></i>
                        </a>
	)
const Logo = () => {
	return (
		<div className="flex items-center space-x-2">
			<div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
				<i className="fas fa-seedling text-white text-xl"></i>
			</div>
			<span className="text-2xl font-bold text-primary">Bloomr</span>
		</div>
	);
};

/*---------------------------------------------------------------------------------------------------*/
/*                                   Navigation 
/*---------------------------------------------------------------------------------------------------*/
export default function Nav() {
	return (
		<nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/*Logo*/}
					<Logo />

					<div className="hidden md:flex items-center space-x-8">
						<NavLink href="#how-it-works">How It Works</NavLink>
						<NavLink href="#how-it-works">How It Works</NavLink>
						<NavLink href="#how-it-works">How It Works</NavLink>
						<NavLink href="#how-it-works">How It Works</NavLink>
						<NavLink href="#how-it-works">How It Works</NavLink>

						<button className="px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
							Sign In
						</button>
						<button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
							Get Started
						</button>
					</div>

					<button className="md:hidden text-gray-600 dark:text-gray-300">
						<i className="fas fa-bars text-xl"></i>
					</button>
				</div>
			</div>
		</nav>
	);
}
