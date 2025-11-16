function ProgramFeatures({ features }) {
  return (
    <div className='grid gap-4 px-4 mt-12 md:mt-16 md:px-8 md:gap-8 sm:grid-cols-2 xl:grid-cols-4'>
      {features.map(feature => (
        <div
          className='px-6 py-4 border rounded-lg border-accent-200'
          key={feature.title}
        >
          <div className='flex items-center mb-4'>
            <feature.icon className='w-6 h-6 mr-2 text-accent-400' />
            <h3 className='text-lg font-semibold'>{feature.title}</h3>
          </div>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProgramFeatures;
