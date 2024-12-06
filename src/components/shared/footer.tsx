export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <div className="mt-20">
      <div className="flex justify-between mb-10">
        <div className=" w-[50%]">
          <div className="flex justify-start text-2xl">
            {/* <span className="bg-blue-500 text-white mr-2 rounded-md p-2">
              Chadie Gil
            </span>{" "} */}
            <span>Porfolio</span>
          </div>
          <div className="flex justify-start text-left mt-2 text-gray-400">
            Your one-stop destination for all things web development, from the
            latest updates to in-depth tutorials and resources
          </div>
        </div>
        <div className=" flex justify-between w-[35%] text-left text-gray-500 ">
          <div className="flex flex-col gap-2">
            <div className="font-bold">Social Media</div>
            <div>Youtube</div>
            <div>X \ Twitter</div>
            <div>LinkedIn</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-bold">Company</div>
            <div>Home</div>
            <div>Projects</div>
            <div>Stack</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center font-light text-sm text-gray-400 mt-2">
        <div>
          &copy; {currentYear} Chadie Gil S. Augis. All rights reserved.
        </div>
      </div>
    </div>
  )
}
