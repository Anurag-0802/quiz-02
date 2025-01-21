function Button({type,disable,message}) {
    return (
        <div>
            <button
              type={type}
              className="w-full bg-purple-500 py-1 text-white text-sm rounded-md"
              disabled={disable}
            >
              {message}
            </button>
        </div>
    )
}

export default Button
