import ExplorationContainer from './components/ExplorationContainer'
import Toast from '@explorations/toast/Toast'
import ToastProvider from '@providers/ToastProvider'

const explorations = [
	{
		title: 'Toast',
		id: '#toast',
		description: '',
		stack: ['react', 'tailwind', 'framer motion'],
		component: Toast,
		provider: ToastProvider,
	},
]

export default function Home() {
	return (
		<section className="space-y-12">
			{explorations.map(({ title, id, description, stack, component: Component, provider: Provider }) => (
				<ExplorationContainer
					title={title}
					description={description}
					stack={stack}
					key={id}
					id={id}
				>
					<Provider>
						<Component />
					</Provider>
				</ExplorationContainer>
			))}
		</section>
	)
}
