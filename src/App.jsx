import React from "react"

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:px-4 sm:py-16 bg-yellow-100 bg-egg-shell">
      <div className="max-w-3xl sm:py-8 bg-rose-white rounded-lg flex flex-col gap-8">
        <img
          src="/images/image-omelette.jpeg"
          className="aspect-video object-cover bg-center  sm:rounded-lg sm:mx-8"
        />

        <div className="flex flex-col gap-4 w-full px-8">
          <h1 className="text-xl sm:text-3xl font-semibold text-dark-charcoal font-serif">
            Simple Omelette Recipe
          </h1>
          <p className=" text-dark-charcoal mb-2">
            An easy and quick dish, perfect for any meal/ This classic omelette
            combines beaten egges cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>

          <div className="rounded-lg text-dark-charcoal bg-dark-raspberry bg-opacity-5 p-4">
            <h2 className="text-xl font-semibold mb-4">Preparation time</h2>
            <ul className="flex flex-col gap-2 list-disc ml-8">
              <li>
                <span className="font-semibold">Total: </span> Approximately 10
                minutes
              </li>
              <li>
                <span className="font-semibold">Preparation: </span> 5 minutes
              </li>
              <li>
                <span className="font-semibold">Cooking: </span> 5 minutes
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h3 className=" text-wenge-brown font-semibold text-xl sm:text-2xl font-serif">
              Ingredients
            </h3>
            <ul className="flex flex-col gap-2 list-disc ml-8 text-dark-charcoal">
              <li className="pl-4">2-3 large eggs</li>
              <li className="pl-4">Salt, to tast</li>
              <li className="pl-4">Pepper, to taste</li>
              <li className="pl-4">1 tablespoon of butter or oil</li>
              <li className="pl-4">
                Optional fillings: scheese, diced vegetables, cooked meats,
                herbs
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 mt-4 border-b border-light-grey pb-6">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-wenge-brown">
              Instructions
            </h3>
            <ul className="flex flex-col gap-2 ml-3">
              <li>
                <span className=" text-wenge-brown font-semibold mr-4">1.</span>
                <span className=" text-wenge-brown font-semibold">
                  Beat the eggs:
                </span>
                <span className=" text-dark-charcoal ml-2">
                  In a bowl, beat the eggs with a pinch of salt and pepper until
                  they are well mixed. You can add a tablespoon of water or milk
                  for a fluffier texture.
                </span>
              </li>
              <li>
                <span className=" text-wenge-brown font-semibold mr-4">2.</span>
                <span className=" text-wenge-brown font-semibold">
                  Heat the pan:
                </span>
                <span className=" text-dark-charcoal ml-2">
                  Place a non-stick frying pan over medium heat and add butter
                  or oil.
                </span>
              </li>
              <li>
                <span className=" text-wenge-brown font-semibold mr-4">3.</span>
                <span className=" text-wenge-brown font-semibold">
                  Cook the omelette:
                </span>
                <span className=" text-dark-charcoal ml-2">
                  Once the butter is melted and bubbling, pour in the eggs. Tilt
                  the pan to ensure the eggs evenly coat the surface.
                </span>
              </li>
              <li>
                <span className=" text-wenge-brown font-semibold mr-4">4.</span>
                <span className=" text-wenge-brown font-semibold">
                  Add fillings (optional):
                </span>
                <span className=" text-dark-charcoal ml-2">
                  When the eggs begin to set at the edges but are still slightly
                  runny in the middle, sprinkle your chosen fillings over one
                  half of the omelette.
                </span>
              </li>
              <li>
                <span className=" text-wenge-brown font-semibold mr-4">5.</span>
                <span className=" text-wenge-brown font-semibold">
                  Fold and serve:
                </span>
                <span className=" text-dark-charcoal ml-2">
                  As the omelette continues to cook, carefully lift one edge and
                  fold it over the fillings. Let it cook for another minute,
                  then slide it onto a plate.
                </span>
              </li>
              <li>
                <span className=" text-wenge-brown font-semibold mr-4">6.</span>
                <span className=" text-wenge-brown font-semibold">Enjoy:</span>
                <span className=" text-dark-charcoal ml-2">
                  Serve hot, with additional salt and pepper if needed.
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h3 className="text-xl sm:text-2xl text-wenge-brown font-bold font-serif">
              Nutrition
            </h3>
            <p className=" text-dark-charcoal">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <div className="w-full flex items-center pb-4 border-b border-light-grey ">
              <span className="w-12 sm:w-16 ml-10 sm:ml-20 mr-24 sm:mr-48">
                Calories
              </span>
              <span className=" text-wenge-brown font-semibold">277kcal</span>
            </div>
            <div className="flex items-center pb-4 border-b border-light-grey ">
              <span className="w-12 sm:w-16 ml-10 sm:ml-20 mr-24 sm:mr-48">
                Carbs
              </span>
              <span className=" text-wenge-brown font-semibold">0g</span>
            </div>
            <div className="flex items-center pb-4 border-b border-light-grey ">
              <span className="w-12 sm:w-16 ml-10 sm:ml-20 mr-24 sm:mr-48">
                Protein
              </span>
              <span className=" text-wenge-brown font-semibold">20g</span>
            </div>
            <div className="flex items-center pb-4">
              <span className="w-12 sm:w-16 ml-10 sm:ml-20 mr-24 sm:mr-48">
                Fat
              </span>
              <span className=" text-wenge-brown font-semibold">22g</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
