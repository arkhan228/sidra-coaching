function FormField({
  type,
  name,
  placeholder,
  required = true,
  autoComplete = 'on',
}) {
  return (
    <div className='flex items-center justify-between my-4 md:my-6'>
      <label htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className='w-2/3 px-2 py-1 text-sm border rounded-lg md:text-base border-accent-400 bg-accent-50 focus:outline-accent-600'
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
          rows='3'
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className='w-2/3 px-2 py-1 text-sm border rounded-lg md:text-base border-accent-400 bg-accent-50 focus:outline-accent-600'
          required={required}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      )}
    </div>
  );
}

export default FormField;
