const About = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        About
      </h2>

      <p className="text-lg text-white text-left mt-4 mb-10">
        This site was created using React.js with TypeScript, Redux, Tailwind, Rapid API (Shazam API), and Vite.
        <br/>
        <br/>
        Developer: Atta Navaid
        <br/>
        <br/>
        &copy; 2023. All rights reserved.
      </p>

      <h2 className="font-bold text-xl text-white text-left mt-4 mb-2">
        Links
      </h2>

      <p className="text-lg text-white text-left mb-10">
        Shazam API link on Rapid API: https://rapidapi.com/apidojo/api/shazam
        <br/>
        Redux with TypeScript: https://redux-toolkit.js.org/usage/usage-with-typescript
      </p>
    </div>
  );
};

export default About;