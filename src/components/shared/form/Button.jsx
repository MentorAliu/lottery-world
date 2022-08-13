export const Button = ({ text, ...props }) => {
    return (
      <>
        <button
          className='inline-flex items-center justify-center px-2 py-1 my-2 text-base font-medium leading-6 whitespace-no-wrap border hover:border-blue-700 rounded-md shadow-sm text-white bg-blue-600 hover:text-black hover:bg-white focus:outline-none'
          {...props}
        >
          {text}
        </button>
      </>
    )
  }