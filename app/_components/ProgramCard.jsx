function ProgramCard({ program }) {
  return (
    <div
      key={program?.method}
      className='px-6 py-8 border shadow-sm md:px-8 md:py-10 rounded-2xl border-accent-200 bg-accent-50'
    >
      <h2 className='mb-4 text-xl font-bold md:text-2xl text-primary-800'>
        {program?.method}
      </h2>
      <ul className='list-disc list-inside'>
        {program?.features?.map(feature => (
          <li key={feature.charAt(1, 6)} className='mb-1 md:mb-2'>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramCard;
