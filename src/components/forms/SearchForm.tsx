const SearchForm = ({
    handleForm,
    handleChange,
    formData,
}: {
    handleForm: any;
    handleChange: any;
    formData: any;
}) => {
    return (
        <div className="flex justify-center">
            <form onSubmit={handleForm}>
                <label className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
                    search Pokemon
                </label>
                <input
                    onChange={handleChange}
                    value={formData}
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="search your pokemon"
                ></input>
                <br></br>
                {/* <button
            className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >accept</button> */}
            </form>
        </div>
    );
};

export default SearchForm;
