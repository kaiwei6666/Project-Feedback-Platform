import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'

function HomePage() {
  const features = [
    {
      title: 'For Creators',
      description:
        'Publish your side project, explain your goal, and collect feedback about usability, usefulness, clarity, and product direction.',
    },
    {
      title: 'For Users',
      description:
        'Browse interesting side projects, try demos, and provide structured feedback that helps creators improve their products.',
    },
    {
      title: 'For Growth',
      description:
        'Turn scattered comments into useful insights and help early-stage projects move from idea validation to long-term development.',
    },
  ]

  return (
    <div className="app">
      <HeroSection />

      <section className="features">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </div>
  )
}

export default HomePage