import Navbar from "../components/navbar";
// import moodTracker from "../assets/images/mood-traker.png";
function MoodTracker() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 px-5 gap-4 border w-7xl mx-auto pt-[5rem] text-center">
        <div>
          {/* <img src={moodTracker} alt="" /> */}
          <div class="mx-auto border border-red-400 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label
                for="country"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Country
              </label>
              <div class="mt-2 grid grid-cols-1">
                <select
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="about"
                class="block text-sm/6 font-medium text-gray-900"
              >
                About
              </label>
              <div class="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
              <p class="mt-3 text-sm/6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoodTracker;
